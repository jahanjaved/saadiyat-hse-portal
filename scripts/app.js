
const DATA_PATH = 'data/site-data.json';

async function loadData() {
  const res = await fetch(DATA_PATH, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${DATA_PATH}: ${res.status}`);
  return await res.json();
}

function pct(v) {
  if (v === null || v === undefined || v === '' || Number.isNaN(Number(v))) return '—';
  return `${(Number(v) * 100).toFixed(1)}%`;
}

function num(v, d = 1) {
  if (v === null || v === undefined || v === '' || Number.isNaN(Number(v))) return '—';
  return Number(v).toFixed(d);
}

function esc(v) {
  if (v === null || v === undefined) return '';
  return String(v).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function nl(v) {
  return esc(v).replace(/\n/g, '<br>');
}

function badge(text, type = 'info') {
  return `<span class="badge ${type}">${esc(text ?? '—')}</span>`;
}

function scoreClass(v) {
  if (v === null || v === undefined || v === '') return 'mid';
  const n = Number(v);
  if (n >= 3.5) return 'high';
  if (n >= 2.5) return 'mid';
  return 'low';
}

function ratingBadge(r) {
  const map = { Good: 'good', 'Needs Improvement': 'warn', Poor: 'bad', Critical: 'critical' };
  return badge(r || '—', map[r] || 'info');
}

function redFlagBadge(v) {
  return String(v).toUpperCase() === 'YES' ? badge('Red Flag', 'critical') : badge('No', 'good');
}

function nav(active) {
  const items = [
    ['index.html', 'Dashboard'],
    ['inspections.html', 'Weekly Inspections'],
    ['capa.html', 'CAPA'],
    ['gap-analysis.html', 'Gap Analysis'],
    ['schedules.html', 'Schedules'],
    ['cluster-performance.html', 'Cluster Performance'],
    ['raw-data.html', 'All Sheets']
  ];

  return `
    <div class="topbar">
      <div class="container">
        <div class="nav">
          <div class="brand">Saadiyat Lagoons HSE<small>Executive performance dashboard</small></div>
          ${items.map(([href, label]) => `<a href="${href}" class="${active === href ? 'active' : ''}">${label}</a>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function shell(active, title, periodText = '') {
  const existingTopbar = document.querySelector('.topbar');
  if (existingTopbar) existingTopbar.remove();

  document.body.insertAdjacentHTML('afterbegin', nav(active));

  const root = document.getElementById('app');
  root.innerHTML = `
    <div class="container">
      <div class="hero">
        <div class="page-title">
          <div>
            <h1>${title}</h1>
            ${periodText ? `<p>${periodText}</p>` : ``}
          </div>
        </div>
      </div>
      <div id="content"></div>
      <div class="footer"></div>
    </div>
  `;
  return document.getElementById('content');
}

function renderTable(container, headers, rows) {
  container.innerHTML += `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows.map(r => `<tr>${r.map(c => `<td>${c ?? ''}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function getKpiRows(data) {
  return data.gapAnalysis?.kpis || [];
}

function getClusterSummaryMaps(data) {
  return {
    weeklyMap: new Map((data.weeklyDashboard?.clusters || []).map(r => [r.cluster, r])),
    monthlyMap: new Map((data.monthlyDashboard?.clusters || []).map(r => [r.cluster, r]))
  };
}

function renderCombinedRedFlagHeatmap(data) {
  const kpis = getKpiRows(data);
  const heatmapRows = data.heatmap || [];
  const container = document.getElementById('redFlagMatrix');
  const { weeklyMap, monthlyMap } = getClusterSummaryMaps(data);

  container.innerHTML = `
    <div class="table-wrap">
      <table class="heat">
        <thead>
          <tr>
            <th rowspan="2">Cluster</th>
            <th colspan="4">Red Flag Summary</th>
            <th colspan="${kpis.length}">Heatmap</th>
          </tr>
          <tr>
            <th>Week Red Flags</th>
            <th>Month Red Flags</th>
            <th>Week Inspections</th>
            <th>Month Inspections</th>
            ${kpis.map(k => `<th>${esc(k.label)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${heatmapRows.map(r => {
            const w = weeklyMap.get(r.cluster) || {};
            const m = monthlyMap.get(r.cluster) || {};
            return `
              <tr>
                <td><b>${esc(r.cluster)}</b></td>
                <td>${badge(Number(w.redFlagsWeek || 0), Number(w.redFlagsWeek || 0) > 0 ? 'critical' : 'good')}</td>
                <td>${badge(Number(m.redFlagsMonth || 0), Number(m.redFlagsMonth || 0) > 0 ? 'critical' : 'good')}</td>
                <td>${badge(Number(w.inspectionCountWeek || 0), 'info')}</td>
                <td>${badge(Number(m.inspectionCountMonth || 0), 'info')}</td>
                ${kpis.map(k => {
                  const v = r[k.field];
                  return `<td><span class="score ${scoreClass(v)}">${v === null || v === undefined ? '—' : Number(v).toFixed(1)}</span></td>`;
                }).join('')}
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function baseChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { labels: { color: '#dce9f7' } }
    }
  };
}

function buildOpenVsOverdueDataset(data) {
  const clustersFromMeta = Array.isArray(data.meta?.clusters) ? data.meta.clusters : [];
  const capaRows = Array.isArray(data.capa) ? data.capa : [];
  const map = new Map();

  clustersFromMeta.forEach(cluster => map.set(cluster, { cluster, open: 0, overdue: 0 }));

  capaRows.forEach(row => {
    const cluster = row.Cluster || 'Unknown';
    if (!map.has(cluster)) map.set(cluster, { cluster, open: 0, overdue: 0 });
    if (String(row.Status || '').toLowerCase() !== 'closed') map.get(cluster).open += 1;
    if (String(row.Overdue_Flag || '').toUpperCase() === 'YES') map.get(cluster).overdue += 1;
  });

  return Array.from(map.values()).sort((a, b) => (b.open + b.overdue) - (a.open + a.overdue) || a.cluster.localeCompare(b.cluster));
}

function buildCombinedRedFlagDataset(data) {
  const week = data.weeklyDashboard?.clusters || [];
  const month = data.monthlyDashboard?.clusters || [];
  const clusters = [...new Set([...week.map(x => x.cluster), ...month.map(x => x.cluster)])].sort((a, b) => a.localeCompare(b));

  return {
    labels: clusters,
    weekValues: clusters.map(c => {
      const item = week.find(x => x.cluster === c);
      return item ? Number(item.redFlagsWeek || 0) : 0;
    }),
    monthValues: clusters.map(c => {
      const item = month.find(x => x.cluster === c);
      return item ? Number(item.redFlagsMonth || 0) : 0;
    })
  };
}

function renderCombinedRedFlagsChart(canvasId, data) {
  const ds = buildCombinedRedFlagDataset(data);
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: ds.labels,
      datasets: [
        { label: 'Weekly Red Flags', data: ds.weekValues, borderRadius: 6 },
        { label: 'Monthly Red Flags', data: ds.monthValues, borderRadius: 6 }
      ]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9' } },
        y: { beginAtZero: true, ticks: { color: '#bfd2e9', precision: 0 } }
      }
    }
  });
}

function renderKpiComparisonChart(canvasId, data) {
  const kpis = getKpiRows(data);
  new Chart(document.getElementById(canvasId), {
    type: 'line',
    data: {
      labels: kpis.map(k => k.label),
      datasets: [
        { label: 'Week', data: kpis.map(k => k.weekAvg), tension: 0.35 },
        { label: 'Month', data: kpis.map(k => k.monthAvg), tension: 0.35 }
      ]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9', maxRotation: 0, minRotation: 0 } },
        y: { beginAtZero: true, suggestedMax: 5, ticks: { color: '#bfd2e9' } }
      }
    }
  });
}

function renderKpiGapChart(canvasId, data) {
  const kpis = getKpiRows(data);
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: kpis.map(k => k.label),
      datasets: [
        { label: 'Weekly Gap to 5', data: kpis.map(k => k.weekGapTo5), borderRadius: 6 },
        { label: 'Monthly Gap to 5', data: kpis.map(k => k.monthGapTo5), borderRadius: 6 }
      ]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9', maxRotation: 0, minRotation: 0 } },
        y: { beginAtZero: true, suggestedMax: 5, ticks: { color: '#bfd2e9' } }
      }
    }
  });
}

function buildDashboard(data) {
  const c = shell(
    'index.html',
    'HSE Dashboard',
    `Week ${data.meta.selectedWeek} · ${data.meta.selectedMonth} · ${data.meta.inspectionCount} Inspections`
  );

  const inspections = Array.isArray(data.weeklyInspections) ? data.weeklyInspections : [];
  const capaRows = Array.isArray(data.capa) ? data.capa : [];
  const avgRaw = inspections.reduce((a, r) => a + (Number(r.Raw_Score_Pct) || 0), 0) / Math.max(inspections.length, 1);
  const monthRows = inspections.filter(r => r.Month === data.meta.selectedMonth);
  const monthAvg = monthRows.reduce((a, r) => a + (Number(r.Raw_Score_Pct) || 0), 0) / Math.max(monthRows.length, 1);
  const redFlags = inspections.filter(r => String(r.Critical_Red_Flag).toUpperCase() === 'YES').length;
  const openVsOverdue = buildOpenVsOverdueDataset(data);

  c.innerHTML += `
    <div class="section grid cards">
      <div class="card"><h3>Total Inspections</h3><div class="metric">${data.meta.inspectionCount}</div></div>
      <div class="card"><h3>Month Average</h3><div class="metric">${pct(monthAvg)}</div></div>
      <div class="card"><h3>Overall Average</h3><div class="metric">${pct(avgRaw)}</div></div>
      <div class="card"><h3>Critical Red Flags</h3><div class="metric">${redFlags}</div></div>
      <div class="card"><h3>Open Actions</h3><div class="metric">${capaRows.filter(x => String(x.Status || '').toLowerCase() !== 'closed').length}</div></div>
      <div class="card"><h3>Overdue Actions</h3><div class="metric">${capaRows.filter(x => String(x.Overdue_Flag).toUpperCase() === 'YES').length}</div></div>
    </div>

    <div class="section grid two-col">
      <div class="card chart-card"><h2>Cluster Performance</h2><canvas id="clusterChart"></canvas></div>
      <div class="card chart-card"><h2>KPI Comparison</h2><canvas id="kpiChart"></canvas></div>
    </div>

    <div class="section">
      <div class="card chart-card"><h2>KPI Gap</h2><canvas id="kpiGapChart"></canvas></div>
    </div>

    <div class="section">
      <div class="card chart-card"><h2>Red Flags</h2><canvas id="combinedRedFlagChart"></canvas></div>
    </div>

    <div class="section">
      <div class="card chart-card"><h2>Open vs Overdue Actions</h2><canvas id="openVsOverdueChart"></canvas></div>
    </div>

    <div class="section">
      <div class="card"><h2>Red Flag Summary and Heatmap</h2><div id="redFlagMatrix"></div></div>
    </div>

    <div class="section">
      <div class="card"><h2>Latest Inspections</h2><div id="latestTable"></div></div>
    </div>
  `;

  renderCombinedRedFlagHeatmap(data);

  renderTable(
    document.getElementById('latestTable'),
    ['Date', 'Cluster', 'Area / Villa', 'Main Activity', 'Raw Score', 'Red Flag', 'Rating'],
    inspections
      .slice()
      .sort((a, b) => String(b.Inspection_Date).localeCompare(String(a.Inspection_Date)))
      .slice(0, 20)
      .map(r => [
        esc(r.Inspection_Date),
        esc(r.Cluster),
        esc(r.Area_or_Villa),
        esc(r.Main_High_Risk_Activity),
        pct(r.Raw_Score_Pct),
        redFlagBadge(r.Critical_Red_Flag),
        ratingBadge(r.Rating_Band)
      ])
  );

  new Chart(document.getElementById('clusterChart'), {
    type: 'bar',
    data: {
      labels: (data.weeklyDashboard?.clusters || []).map(cu => cu.cluster),
      datasets: [
        { label: 'Week Avg %', data: (data.weeklyDashboard?.clusters || []).map(cu => cu.weekAvgRawPct ? cu.weekAvgRawPct * 100 : null), borderRadius: 6 },
        { label: 'Month Avg %', data: (data.weeklyDashboard?.clusters || []).map(cu => cu.monthAvgRawPct ? cu.monthAvgRawPct * 100 : null), borderRadius: 6 }
      ]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9' } },
        y: { beginAtZero: true, ticks: { color: '#bfd2e9' } }
      }
    }
  });

  renderKpiComparisonChart('kpiChart', data);
  renderKpiGapChart('kpiGapChart', data);
  renderCombinedRedFlagsChart('combinedRedFlagChart', data);

  new Chart(document.getElementById('openVsOverdueChart'), {
    type: 'bar',
    data: {
      labels: openVsOverdue.map(r => r.cluster),
      datasets: [
        { label: 'Open Actions', data: openVsOverdue.map(r => r.open), borderRadius: 6 },
        { label: 'Overdue Actions', data: openVsOverdue.map(r => r.overdue), borderRadius: 6 }
      ]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9' } },
        y: { beginAtZero: true, ticks: { color: '#bfd2e9', precision: 0 } }
      }
    }
  });
}

function buildInspections(data) {
  const c = shell('inspections.html', 'Weekly Inspections');
  c.innerHTML += `
    <div class="filters">
      <input id="q" placeholder="Search cluster, area, activity" />
      <select id="clusterFilter"><option value="">All clusters</option>${(data.meta?.clusters || []).map(cl => `<option>${esc(cl)}</option>`).join('')}</select>
      <select id="redFlagFilter"><option value="">All red flag status</option><option>YES</option><option>NO</option></select>
    </div>
    <div class="card"><div id="inspectionTable"></div></div>
  `;

  const headers = ['Date', 'Week', 'Package', 'Cluster', 'Area / Villa', 'Activity', 'Stop Work', 'WAH', 'Edge', 'Falling', 'Excavation', 'Scaffold', 'PTW Impl', 'PTW Verify', 'MSRA', 'Lifting', 'Traffic', 'Housekeeping', 'Welfare', 'Fire', 'Supervision', 'Electrical', 'Raw %', 'Red Flag', 'Rating', 'Root Cause', 'Top Gaps', 'Immediate Action', 'Preventive Action'];
  const holder = document.getElementById('inspectionTable');

  function draw() {
    const q = document.getElementById('q').value.toLowerCase();
    const cluster = document.getElementById('clusterFilter').value;
    const red = document.getElementById('redFlagFilter').value;

    const rows = (data.weeklyInspections || []).filter(r => {
      const t = JSON.stringify(r).toLowerCase();
      return (!q || t.includes(q)) && (!cluster || r.Cluster === cluster) && (!red || String(r.Critical_Red_Flag).toUpperCase() === red);
    }).map(r => [
      esc(r.Inspection_Date), esc(r.Week_No), esc(r.Package), esc(r.Cluster), esc(r.Area_or_Villa), esc(r.Main_High_Risk_Activity), esc(r.Stop_Work || '—'),
      num(r.Work_at_Height), num(r.Edge_Protection), num(r.Falling_Object_Prevention), num(r.Excavation_Safety), num(r.Scaffolding_Compliance),
      num(r.PTW_Implementation), num(r.PTW_Field_Verification), num(r.MSRA_Quality), num(r.Lifting_Precast_Installation), num(r.Traffic_Interface),
      num(r.Housekeeping_Waste_Management), num(r.Welfare_Arrangement), num(r.Fire_Readiness), num(r.Supervision_Subcontractor), num(r.Electrical_Tool_Safety),
      pct(r.Raw_Score_Pct), redFlagBadge(r.Critical_Red_Flag), ratingBadge(r.Rating_Band), esc(r.Likely_Root_Cause),
      `<div class="pre">${nl(r.Top_3_Gaps_Observed)}</div>`,
      `<div class="pre">${nl(r.Immediate_Action_Taken)}</div>`,
      `<div class="pre">${nl(r.Preventive_Action_Required)}</div>`
    ]);

    holder.innerHTML = '';
    renderTable(holder, headers, rows);
  }

  draw();
  ['q', 'clusterFilter', 'redFlagFilter'].forEach(id => document.getElementById(id).addEventListener('input', draw));
}

function buildCapa(data) {
  const c = shell('capa.html', 'CAPA Tracking');
  c.innerHTML += `<div class="card"><div id="capaTable"></div></div>`;
  renderTable(
    document.getElementById('capaTable'),
    ['Action ID', 'Date Raised', 'Cluster', 'Package', 'KPI Area', 'Root Cause', 'Finding', 'Immediate Action', 'Preventive Action', 'Owner', 'Target', 'Status', 'Overdue'],
    (data.capa || []).map(r => [
      esc(r.Action_ID), esc(r.Date_Raised), esc(r.Cluster), esc(r.Package), esc(r.KPI_Area), esc(r.Root_Cause),
      `<div class="pre">${nl(r.Finding)}</div>`,
      `<div class="pre">${nl(r.Immediate_Action)}</div>`,
      `<div class="pre">${nl(r.Preventive_Action)}</div>`,
      esc(r.Action_Owner), esc(r.Target_Date), esc(r.Status),
      String(r.Overdue_Flag).toUpperCase() === 'YES' ? badge('Overdue', 'critical') : badge('On time', 'good')
    ])
  );
}

function buildGap(data) {
  const c = shell('gap-analysis.html', 'Gap Analysis');
  c.innerHTML += `
    <div class="section grid two-col">
      <div class="card chart-card"><h2>KPI Gap</h2><canvas id="gapChart"></canvas></div>
      <div class="card chart-card"><h2>Root Cause Frequency</h2><canvas id="rootChart"></canvas></div>
    </div>
    <div class="section"><div class="card"><div id="gapTable"></div></div></div>
    <div class="section"><div class="card"><div id="rootTable"></div></div></div>
  `;

  renderTable(
    document.getElementById('gapTable'),
    ['KPI', 'Week Avg', 'Month Avg', 'Week Gap to 5', 'Month Gap to 5', 'Focus'],
    (data.gapAnalysis?.kpis || []).map(k => [
      esc(k.label), num(k.weekAvg), num(k.monthAvg), num(k.weekGapTo5), num(k.monthGapTo5),
      (k.monthGapTo5 >= 2 ? badge('Immediate attention', 'critical') : badge('Monitor', 'warn'))
    ])
  );

  renderTable(
    document.getElementById('rootTable'),
    ['Root Cause', 'Count'],
    (data.gapAnalysis?.rootCauses || []).map(r => [esc(r.rootCause), esc(r.count)])
  );

  renderKpiGapChart('gapChart', data);

  new Chart(document.getElementById('rootChart'), {
    type: 'doughnut',
    data: {
      labels: (data.gapAnalysis?.rootCauses || []).map(r => r.rootCause),
      datasets: [{ data: (data.gapAnalysis?.rootCauses || []).map(r => r.count) }]
    },
    options: baseChartOptions()
  });
}

function buildSchedules(data) {
  const c = shell('schedules.html', 'Schedules');
  const months = Object.keys(data.schedules || {});
  c.innerHTML += `<div class="tabs">${months.map((m, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-month="${m}">${m}</button>`).join('')}</div><div id="scheduleContent"></div>`;

  const holder = document.getElementById('scheduleContent');

  function draw(month) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.month === month));
    const matrix = data.schedules[month] || [];
    holder.innerHTML = `<div class="card"><div class="table-wrap"><table>${matrix.map((r, ri) => `<tr>${r.map(c => ri === 0 ? `<th>${esc(c ?? '')}</th>` : `<td>${esc(c ?? '')}</td>`).join('')}</tr>`).join('')}</table></div></div>`;
  }

  if (months.length) {
    draw(months[0]);
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => draw(t.dataset.month)));
  }
}

function buildRaw(data) {
  const c = shell('raw-data.html', 'All Sheets');
  const sheets = Object.keys(data.rawSheets || {});
  c.innerHTML += `<div class="tabs">${sheets.map((s, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-sheet="${s}">${s}</button>`).join('')}</div><div id="sheetContent"></div>`;

  const holder = document.getElementById('sheetContent');

  function draw(name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.sheet === name));
    const matrix = data.rawSheets[name] || [];
    holder.innerHTML = `<div class="card"><div class="table-wrap"><table>${matrix.map((r, ri) => `<tr>${r.map(c => ri === 0 ? `<th>${esc(c ?? '')}</th>` : `<td>${esc(c ?? '')}</td>`).join('')}</tr>`).join('')}</table></div></div>`;
  }

  if (sheets.length) {
    draw(sheets[0]);
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => draw(t.dataset.sheet)));
  }
}


function normalizeBandLabel(label) {
  const text = String(label || '').trim().toLowerCase();
  if (text === 'good') return 'Best';
  if (text === 'needs improvement' || text === 'need improvments' || text === 'need improvements') return 'Better';
  if (text === 'poor') return 'Poor';
  if (text === 'critical') return 'Unacceptable';
  return 'Better';
}

function performanceBandFromScore(scorePct) {
  const score = Number(scorePct || 0);
  if (score >= 0.75) return { label: 'Best', className: 'good' };
  if (score >= 0.65) return { label: 'Better', className: 'info' };
  if (score >= 0.50) return { label: 'Poor', className: 'warn' };
  return { label: 'Unacceptable', className: 'critical' };
}

function getWeeklyClusterPerformance(data) {
  const rows = Array.isArray(data.weeklyInspections) ? data.weeklyInspections : [];
  const selectedWeek = Number(data.meta?.selectedWeek);
  const weekRows = rows.filter(r => Number(r.Week_No) === selectedWeek);
  const groups = new Map();

  weekRows.forEach(r => {
    const cluster = r.Cluster;
    if (!cluster) return;
    if (!groups.has(cluster)) {
      groups.set(cluster, {
        cluster,
        inspections: 0,
        scoreSum: 0,
        scoreCount: 0,
        rawSum: 0,
        rawCount: 0,
        redFlags: 0,
        stopWorks: 0,
        bandCounts: { Best: 0, Better: 0, Poor: 0, Unacceptable: 0 }
      });
    }
    const item = groups.get(cluster);
    item.inspections += 1;
    const weighted = r.Weighted_Score_Pct;
    const raw = r.Raw_Score_Pct;
    if (weighted !== null && weighted !== undefined && weighted !== '') {
      item.scoreSum += Number(weighted);
      item.scoreCount += 1;
    } else if (raw !== null && raw !== undefined && raw !== '') {
      item.scoreSum += Number(raw);
      item.scoreCount += 1;
    }
    if (raw !== null && raw !== undefined && raw !== '') {
      item.rawSum += Number(raw);
      item.rawCount += 1;
    }
    if (String(r.Critical_Red_Flag).toUpperCase() === 'YES') item.redFlags += 1;
    if (String(r.Stop_Work).toUpperCase() === 'YES') item.stopWorks += 1;
    const band = normalizeBandLabel(r.Rating_Band);
    item.bandCounts[band] = (item.bandCounts[band] || 0) + 1;
  });

  const result = Array.from(groups.values()).map(item => {
    const avgScore = item.scoreCount ? item.scoreSum / item.scoreCount : 0;
    const avgRaw = item.rawCount ? item.rawSum / item.rawCount : avgScore;
    const band = performanceBandFromScore(avgScore);
    return {
      ...item,
      avgScore,
      avgRaw,
      performance: band.label,
      performanceClass: band.className
    };
  }).sort((a, b) => b.avgScore - a.avgScore || a.cluster.localeCompare(b.cluster));

  result.forEach((item, idx) => item.rank = idx + 1);
  return result;
}

function buildClusterPerformance(data) {
  const clusters = getWeeklyClusterPerformance(data);
  const c = shell(
    'cluster-performance.html',
    'Cluster Performance Card',
    `Week ${data.meta.selectedWeek} cluster performance based on weekly inspection records`
  );

  const counts = { Best: 0, Better: 0, Poor: 0, Unacceptable: 0 };
  clusters.forEach(r => counts[r.performance] += 1);
  const best = clusters[0];
  const worst = clusters[clusters.length - 1];

  c.innerHTML += `
    <div class="section grid cards">
      <div class="card"><h3>Clusters Reviewed</h3><div class="metric">${clusters.length}</div></div>
      <div class="card"><h3>Best</h3><div class="metric">${counts.Best}</div></div>
      <div class="card"><h3>Better</h3><div class="metric">${counts.Better}</div></div>
      <div class="card"><h3>Poor</h3><div class="metric">${counts.Poor}</div></div>
      <div class="card"><h3>Unacceptable</h3><div class="metric">${counts.Unacceptable}</div></div>
      <div class="card"><h3>Top Cluster</h3><div class="metric metric-sm">${best ? esc(best.cluster) : '—'}</div></div>
    </div>

    <div class="section grid two-col">
      <div class="card chart-card"><h2>Cluster Ranking</h2><canvas id="clusterPerformanceChart"></canvas></div>
      <div class="card chart-card"><h2>Performance Mix</h2><canvas id="clusterBandChart"></canvas></div>
    </div>

    <div class="section">
      <div class="card">
        <h2>Weekly Cluster Cards</h2>
        <div class="cluster-grid">
          ${clusters.map(r => `
            <div class="cluster-card ${r.performanceClass}">
              <div class="cluster-card-top">
                <span class="rank-pill">#${r.rank}</span>
                ${badge(r.performance, r.performanceClass)}
              </div>
              <h3>${esc(r.cluster)}</h3>
              <div class="cluster-score">${pct(r.avgScore)}</div>
              <div class="cluster-meta">
                <span>${badge(`${r.inspections} inspections`, 'info')}</span>
                <span>${badge(`${r.redFlags} red flags`, r.redFlags > 0 ? 'critical' : 'good')}</span>
                <span>${badge(`${r.stopWorks} stop work`, r.stopWorks > 0 ? 'warn' : 'good')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="card"><h2>Cluster Comparison Table</h2><div id="clusterPerformanceTable"></div></div>
    </div>
  `;

  renderTable(
    document.getElementById('clusterPerformanceTable'),
    ['Rank', 'Cluster', 'Average Score', 'Performance', 'Inspections', 'Red Flags', 'Stop Work', 'Best', 'Better', 'Poor', 'Unacceptable'],
    clusters.map(r => [
      badge(r.rank, 'info'),
      `<b>${esc(r.cluster)}</b>`,
      pct(r.avgScore),
      badge(r.performance, r.performanceClass),
      badge(r.inspections, 'info'),
      r.redFlags > 0 ? badge(r.redFlags, 'critical') : badge(0, 'good'),
      r.stopWorks > 0 ? badge(r.stopWorks, 'warn') : badge(0, 'good'),
      badge(r.bandCounts.Best || 0, 'good'),
      badge(r.bandCounts.Better || 0, 'info'),
      badge(r.bandCounts.Poor || 0, 'warn'),
      badge(r.bandCounts.Unacceptable || 0, 'critical')
    ])
  );

  new Chart(document.getElementById('clusterPerformanceChart'), {
    type: 'bar',
    data: {
      labels: clusters.map(r => r.cluster),
      datasets: [{ label: 'Weekly Average %', data: clusters.map(r => Number((r.avgScore * 100).toFixed(1))), borderRadius: 6 }]
    },
    options: {
      ...baseChartOptions(),
      scales: {
        x: { ticks: { color: '#bfd2e9' } },
        y: { beginAtZero: true, suggestedMax: 100, ticks: { color: '#bfd2e9', callback: value => value + '%' } }
      }
    }
  });

  new Chart(document.getElementById('clusterBandChart'), {
    type: 'doughnut',
    data: {
      labels: ['Best', 'Better', 'Poor', 'Unacceptable'],
      datasets: [{ data: [counts.Best, counts.Better, counts.Poor, counts.Unacceptable] }]
    },
    options: baseChartOptions()
  });
}

function buildErrorPage(err) {
  const root = document.getElementById('app');
  root.innerHTML = `
    <div class="container">
      <div class="hero">
        <div class="page-title">
          <div>
            <h1>Website Load Error</h1>
            <p>${esc(err.message || String(err))}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

(async function () {
  try {
    const data = await loadData();
    const page = location.pathname.split('/').pop() || 'index.html';

    if (page === 'index.html') buildDashboard(data);
    else if (page === 'inspections.html') buildInspections(data);
    else if (page === 'capa.html') buildCapa(data);
    else if (page === 'gap-analysis.html') buildGap(data);
    else if (page === 'schedules.html') buildSchedules(data);
    else if (page === 'raw-data.html') buildRaw(data);
    else if (page === 'cluster-performance.html') buildClusterPerformance(data);
    else buildDashboard(data);
  } catch (err) {
    console.error(err);
    buildErrorPage(err);
  }
})();
