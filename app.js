const DATA_PATH = 'data/site-data.json';
const KPI_FIELDS = [
  ['Work_at_Height', 'Work at Height'],
  ['Edge_Protection', 'Edge Protection'],
  ['Falling_Object_Prevention', 'Falling Object Prevention'],
  ['Excavation_Safety', 'Excavation Safety'],
  ['Scaffolding_Compliance', 'Scaffolding Compliance'],
  ['PTW_Implementation', 'PTW Implementation'],
  ['PTW_Field_Verification', 'PTW Field Verification'],
  ['MSRA_Quality', 'MSRA Quality'],
  ['Lifting/Precast Installation', 'Lifting / Precast'],
  ['Traffic_Interface', 'Traffic Interface'],
  ['Housekeeping/Waste Management', 'Housekeeping / Waste'],
  ['Welfare Arrangement', 'Welfare Arrangement'],
  ['Fire_Readiness', 'Fire Readiness'],
  ['Supervision_Subcontractor', 'Supervision Subcontractor'],
  ['Electrical_Tool_Safety', 'Electrical Tool Safety']
];

async function loadData() {
  const res = await fetch(DATA_PATH, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${DATA_PATH}`);
  return await res.json();
}

const esc = (v) => v == null ? '' : String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const pct = (v) => v == null || Number.isNaN(Number(v)) ? '—' : `${(Number(v)*100).toFixed(1)}%`;
const num = (v,d=2) => v == null || Number.isNaN(Number(v)) ? '—' : Number(v).toFixed(d);
const toDate = (v) => { if (!v) return null; const d = new Date(v); return Number.isNaN(d.getTime()) ? null : d; };
const badge = (text, type='info') => `<span class="badge ${type}">${esc(text ?? '—')}</span>`;
function ratingBadge(r){ const map={Good:'good','Needs Improvement':'warn',Poor:'bad',Critical:'critical','Need improvments':'warn'}; return badge(r||'—', map[r]||'info'); }
function redFlagBadge(v){ return String(v||'').toUpperCase()==='YES' ? badge('Red Flag','critical') : badge('No','good'); }
function avg(arr){ const vals=arr.map(Number).filter(v=>!Number.isNaN(v)); return vals.length? vals.reduce((a,b)=>a+b,0)/vals.length : null; }
function parseScore(v){ const n=Number(v); return Number.isNaN(n)? null : n; }

function nav(active) {
  const items = [
    ['index.html', 'Dashboard'],
    ['inspections.html', 'Weekly Inspections'],
    ['cluster-kpi.html', 'Cluster KPI'],
    ['capa.html', 'CAPA'],
    ['gap-analysis.html', 'Gap Analysis'],
    ['schedules.html', 'Schedules'],
    ['raw-data.html', 'All Sheets']
  ];
  return `<div class="topbar"><div class="container"><div class="nav"><div class="brand">Saadiyat Lagoons HSE<small>Dashboard and inspection system</small></div>${items.map(([href, label]) => `<a href="${href}" class="${active===href?'active':''}">${label}</a>`).join('')}</div></div></div>`;
}

function shell(active, title, sub) {
  document.body.innerHTML = `${nav(active)}<div class="container"><div class="hero"><div class="page-title"><div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div></div><div id="content"></div><div class="footer">Built to work with the same data/site-data.json structure already used in your GitHub website.</div></div>`;
  return document.getElementById('content');
}
function renderTable(container, headers, rows) {
  container.innerHTML += `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c ?? ''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function chart(id, config){ const el=document.getElementById(id); if(!el) return null; return new Chart(el,{...config,options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{labels:{color:'#dce9f7'}}},...(config.options||{})}}); }

function safeRows(data){ return Array.isArray(data.weeklyInspections)?data.weeklyInspections:[]; }
function safeCapa(data){ return Array.isArray(data.capa)?data.capa:[]; }

function rowsForSelectedWeek(data){
  const rows = safeRows(data);
  const selected = Number(data.meta?.selectedWeek);
  if (!Number.isNaN(selected)) return rows.filter(r => Number(r.Week_No) === selected);
  return rows;
}
function rowsForSelectedMonth(data){
  const rows = safeRows(data);
  const m = data.meta?.selectedMonth;
  return m ? rows.filter(r => String(r.Month) === String(m)) : rows;
}
function getAllClusters(data){
  const meta = Array.isArray(data.meta?.clusters) ? data.meta.clusters : [];
  const rowClusters = safeRows(data).map(r => r.Cluster).filter(Boolean);
  return [...new Set([...meta, ...rowClusters])];
}

function summarizeByCluster(data){
  const all = getAllClusters(data);
  const weekRows = rowsForSelectedWeek(data);
  const monthRows = rowsForSelectedMonth(data);
  const capa = safeCapa(data);
  return all.map(cluster => {
    const wr = weekRows.filter(r => r.Cluster===cluster);
    const mr = monthRows.filter(r => r.Cluster===cluster);
    const cr = capa.filter(r => r.Cluster===cluster);
    return {
      cluster,
      weekAvg: avg(wr.map(r => parseScore(r['Raw_Score_%']))),
      monthAvg: avg(mr.map(r => parseScore(r['Raw_Score_%']))),
      weekRedFlags: wr.filter(r => String(r.Critical_Red_Flag||'').toUpperCase()==='YES').length,
      monthRedFlags: mr.filter(r => String(r.Critical_Red_Flag||'').toUpperCase()==='YES').length,
      weekCount: wr.length,
      monthCount: mr.length,
      openActions: cr.length,
      overdueActions: cr.filter(r => String(r.Overdue_Flag||'').toUpperCase()==='YES').length,
      bestRating: wr.map(r => r.Rating_Band).find(Boolean) || mr.map(r => r.Rating_Band).find(Boolean) || null,
      score: (avg(wr.map(r=>parseScore(r['Raw_Score_%']))) ?? -1)
    };
  }).sort((a,b)=> (b.score-a.score) || a.cluster.localeCompare(b.cluster)).map((x,i)=>({...x, rank: x.score>=0 ? i+1 : null}));
}

function clusterKpiValues(rows){
  return KPI_FIELDS.map(([field,label]) => ({ label, field, value: avg(rows.map(r => parseScore(r[field]))) }));
}

function buildDashboard(data){
  const c = shell('index.html','HSE Dashboard',`Week ${data.meta?.selectedWeek ?? '—'} · Month ${data.meta?.selectedMonth ?? '—'} · ${data.meta?.inspectionCount ?? safeRows(data).length} inspections`);
  const rows = safeRows(data), monthRows = rowsForSelectedMonth(data), weekRows = rowsForSelectedWeek(data), capa = safeCapa(data), clusters = summarizeByCluster(data);
  c.innerHTML = `
    <div class="section grid cards">
      <div class="card"><h3>Total Inspections</h3><div class="metric">${esc(data.meta?.inspectionCount ?? rows.length)}</div></div>
      <div class="card"><h3>Selected Week Avg</h3><div class="metric">${pct(avg(weekRows.map(r=>parseScore(r['Raw_Score_%']))))}</div></div>
      <div class="card"><h3>Selected Month Avg</h3><div class="metric">${pct(avg(monthRows.map(r=>parseScore(r['Raw_Score_%']))))}</div></div>
      <div class="card"><h3>Open Actions</h3><div class="metric">${capa.length}</div></div>
      <div class="card"><h3>Overdue Actions</h3><div class="metric">${capa.filter(r=>String(r.Overdue_Flag||'').toUpperCase()==='YES').length}</div></div>
      <div class="card"><h3>Week Red Flags</h3><div class="metric">${weekRows.filter(r=>String(r.Critical_Red_Flag||'').toUpperCase()==='YES').length}</div></div>
    </div>
    <div class="section grid two-col">
      <div class="card chart-card"><h2>Weekly Cluster Ranking</h2><div class="chart-wrap tall"><canvas id="dashClusterRank"></canvas></div></div>
      <div class="card chart-card"><h2>Weekly vs Monthly Cluster Average</h2><div class="chart-wrap tall"><canvas id="dashWeekMonth"></canvas></div></div>
    </div>
    <div class="section"><div class="card"><h2>Top Cluster Performance</h2><div id="topClusterTable"></div></div></div>
  `;
  renderTable(document.getElementById('topClusterTable'), ['Rank','Cluster','Week Avg','Month Avg','Week Inspections','Month Inspections','Open','Overdue'], clusters.map(r=>[
    r.rank ?? '—', esc(r.cluster), pct(r.weekAvg), pct(r.monthAvg), r.weekCount, r.monthCount, r.openActions, r.overdueActions
  ]));
  chart('dashClusterRank',{type:'bar',data:{labels:clusters.map(x=>x.cluster),datasets:[{label:'Week Avg',data:clusters.map(x=>x.weekAvg==null?0:(x.weekAvg*100))}]},options:{indexAxis:'y'}});
  chart('dashWeekMonth',{type:'bar',data:{labels:clusters.map(x=>x.cluster),datasets:[{label:'Week Avg %',data:clusters.map(x=>x.weekAvg==null?0:(x.weekAvg*100))},{label:'Month Avg %',data:clusters.map(x=>x.monthAvg==null?0:(x.monthAvg*100))}]},options:{indexAxis:'y'}});
}

function buildInspections(data){
  const c = shell('inspections.html','Weekly Inspections','All inspection entries');
  const rows = safeRows(data).slice().sort((a,b)=> (toDate(b.Inspection_Date)?.getTime()||0) - (toDate(a.Inspection_Date)?.getTime()||0));
  c.innerHTML = `<div class="section"><div class="card"><h2>Inspection Records</h2><div id="inspectionsTable"></div></div></div>`;
  renderTable(document.getElementById('inspectionsTable'), ['Date','Week','Month','Cluster','Area/Villa','Activity','Raw Score','Red Flag','Rating'], rows.map(r=>[
    esc(String(r.Inspection_Date||'').slice(0,10)), r.Week_No ?? '—', esc(r.Month), esc(r.Cluster), esc(r.Area_or_Villa), esc(r.Main_High_Risk_Activity), pct(r['Raw_Score_%']), redFlagBadge(r.Critical_Red_Flag), ratingBadge(r.Rating_Band)
  ]));
}

function buildClusterKpi(data){
  const c = shell('cluster-kpi.html','Cluster KPI Performance',`Individual cluster KPI view using weekly inspection data for week ${data.meta?.selectedWeek ?? '—'} and month ${data.meta?.selectedMonth ?? '—'}`);
  const clusters = summarizeByCluster(data);
  const options = clusters.map(x=>`<option value="${esc(x.cluster)}">${esc(x.cluster)}</option>`).join('');
  c.innerHTML = `
    <div class="section"><div class="note">This page shows one cluster at a time, weekly and monthly KPI averages, weekly and monthly graphs, and overall cluster ranking from top to bottom.</div></div>
    <div class="section card">
      <div class="filters">
        <label class="muted">Select cluster</label>
        <select id="clusterSelect">${options}</select>
      </div>
      <div class="grid cards" id="clusterMetrics"></div>
    </div>
    <div class="section grid two-col">
      <div class="card chart-card"><h2>Weekly vs Monthly KPI Graph</h2><div class="chart-wrap tall"><canvas id="clusterKpiChart"></canvas></div></div>
      <div class="card chart-card"><h2>Cluster Weekly vs Monthly Average</h2><div class="chart-wrap"><canvas id="clusterAvgChart"></canvas></div></div>
    </div>
    <div class="section grid two-col">
      <div class="card"><h2>Cluster KPI Details</h2><div id="clusterKpiTable"></div></div>
      <div class="card"><h2>All Cluster Ranking</h2><div id="clusterRankTable"></div></div>
    </div>
    <div class="section"><div class="card chart-card"><h2>All Cluster Performance Comparison</h2><div class="chart-wrap tall"><canvas id="allClusterCompare"></canvas></div></div></div>
  `;
  let chart1=null, chart2=null, chart3=null;
  const select = document.getElementById('clusterSelect');
  renderTable(document.getElementById('clusterRankTable'), ['Rank','Cluster','Week Avg','Month Avg','Week Red Flags','Month Red Flags','Open','Overdue'], clusters.map(r=>[
    r.rank ?? '—', esc(r.cluster), pct(r.weekAvg), pct(r.monthAvg), r.weekRedFlags, r.monthRedFlags, r.openActions, r.overdueActions
  ]));
  chart3 = chart('allClusterCompare',{type:'bar',data:{labels:clusters.map(r=>r.cluster),datasets:[{label:'Week Avg %',data:clusters.map(r=>r.weekAvg==null?0:r.weekAvg*100)},{label:'Month Avg %',data:clusters.map(r=>r.monthAvg==null?0:r.monthAvg*100)}]},options:{indexAxis:'y'}});

  function drawCluster(name){
    const weekRows = rowsForSelectedWeek(data).filter(r=>r.Cluster===name);
    const monthRows = rowsForSelectedMonth(data).filter(r=>r.Cluster===name);
    const summary = clusters.find(x=>x.cluster===name) || {};
    const weekKpis = clusterKpiValues(weekRows);
    const monthKpis = clusterKpiValues(monthRows);
    document.getElementById('clusterMetrics').innerHTML = `
      <div class="card"><h3>Rank</h3><div class="metric">${summary.rank ?? '—'}</div></div>
      <div class="card"><h3>Week Average</h3><div class="metric">${pct(summary.weekAvg)}</div></div>
      <div class="card"><h3>Month Average</h3><div class="metric">${pct(summary.monthAvg)}</div></div>
      <div class="card"><h3>Week Inspections</h3><div class="metric">${summary.weekCount ?? 0}</div></div>
      <div class="card"><h3>Month Inspections</h3><div class="metric">${summary.monthCount ?? 0}</div></div>
      <div class="card"><h3>Open / Overdue</h3><div class="metric">${summary.openActions ?? 0} / ${summary.overdueActions ?? 0}</div></div>
    `;
    document.getElementById('clusterKpiTable').innerHTML='';
    renderTable(document.getElementById('clusterKpiTable'), ['KPI','Week Avg','Month Avg'], weekKpis.map((w,i)=>[esc(w.label), num(w.value,2), num(monthKpis[i].value,2)]));
    if(chart1) chart1.destroy();
    if(chart2) chart2.destroy();
    chart1 = chart('clusterKpiChart',{type:'bar',data:{labels:weekKpis.map(k=>k.label),datasets:[{label:'Week',data:weekKpis.map(k=>k.value??0)},{label:'Month',data:monthKpis.map(k=>k.value??0)}]},options:{scales:{x:{ticks:{color:'#dce9f7',maxRotation:90,minRotation:90}},y:{suggestedMax:5,ticks:{color:'#dce9f7'}}}}});
    chart2 = chart('clusterAvgChart',{type:'bar',data:{labels:['Selected Cluster'],datasets:[{label:'Week Avg %',data:[summary.weekAvg==null?0:summary.weekAvg*100]},{label:'Month Avg %',data:[summary.monthAvg==null?0:summary.monthAvg*100]}]}});
  }
  drawCluster(clusters[0]?.cluster || '');
  select.addEventListener('change', e=>drawCluster(e.target.value));
}

function buildCapa(data){
  const c = shell('capa.html','CAPA','Corrective and preventive actions');
  const rows = safeCapa(data);
  c.innerHTML = `<div class="section"><div class="card"><h2>CAPA Tracker</h2><div id="capaTable"></div></div></div>`;
  renderTable(document.getElementById('capaTable'), ['Date','Cluster','KPI Area','Status','Overdue','Owner','Target'], rows.map(r=>[
    esc(String(r.Date_Raised||'').slice(0,10)), esc(r.Cluster), esc(r.KPI_Area), badge(r.Status||'Open','info'), redFlagBadge(r.Overdue_Flag), esc(r.Action_Owner), esc(String(r.Target_Date||'').slice(0,10))
  ]));
}

function buildGap(data){
  const c = shell('gap-analysis.html','Gap Analysis','Weekly and monthly KPI gap view');
  const kpis = Array.isArray(data.gapAnalysis?.kpis) ? data.gapAnalysis.kpis : [];
  c.innerHTML = `
    <div class="section grid two-col">
      <div class="card chart-card"><h2>Week vs Month KPI Average</h2><div class="chart-wrap tall"><canvas id="gapChart"></canvas></div></div>
      <div class="card"><h2>KPI Gap Table</h2><div id="gapTable"></div></div>
    </div>`;
  renderTable(document.getElementById('gapTable'), ['KPI','Week Avg','Month Avg','Week Gap to 5','Month Gap to 5','Focus'], kpis.map(k=>[
    esc(k.label), num(k.weekAvg,2), num(k.monthAvg,2), num(k.weekGapTo5,2), num(k.monthGapTo5,2), badge(k.focus||'Monitor','info')
  ]));
  chart('gapChart',{type:'bar',data:{labels:kpis.map(k=>k.label),datasets:[{label:'Week Avg',data:kpis.map(k=>Number(k.weekAvg)||0)},{label:'Month Avg',data:kpis.map(k=>Number(k.monthAvg)||0)}]},options:{scales:{x:{ticks:{color:'#dce9f7',maxRotation:90,minRotation:90}},y:{suggestedMax:5,ticks:{color:'#dce9f7'}}}}});
}

function buildSchedules(data){
  const c = shell('schedules.html','Schedules','Schedule matrix from source JSON');
  const months = Object.keys(data.schedules || {});
  c.innerHTML = `<div class="section card">${months.length ? '<div id="sched"></div>' : '<div class="muted">No schedules found in current JSON.</div>'}</div>`;
  if(months.length){ const holder=document.getElementById('sched'); renderTable(holder, data.schedules[months[0]][0]||[], (data.schedules[months[0]]||[]).slice(1)); }
}

function buildRaw(data){
  const c = shell('raw-data.html','All Sheets','Raw JSON sheet explorer');
  const sheets = Object.keys(data.rawSheets || {});
  c.innerHTML = `<div class="section card">${sheets.length ? '<div id="raw"></div>' : '<div class="muted">No rawSheets found in current JSON.</div>'}</div>`;
  if(sheets.length){ const matrix=data.rawSheets[sheets[0]]||[]; renderTable(document.getElementById('raw'), matrix[0]||[], matrix.slice(1)); }
}

(async function(){
  try {
    const data = await loadData();
    const page = location.pathname.split('/').pop() || 'index.html';
    if(page === 'index.html') buildDashboard(data);
    else if(page === 'inspections.html') buildInspections(data);
    else if(page === 'cluster-kpi.html') buildClusterKpi(data);
    else if(page === 'capa.html') buildCapa(data);
    else if(page === 'gap-analysis.html') buildGap(data);
    else if(page === 'schedules.html') buildSchedules(data);
    else if(page === 'raw-data.html') buildRaw(data);
    else buildDashboard(data);
  } catch (err) {
    document.body.innerHTML = `<div class="container"><div class="hero"><div class="page-title"><h1>Data Load Error</h1><p class="muted">${esc(err.message)}</p></div></div><div class="card">Please keep your existing <code>data/site-data.json</code> in the GitHub project, or replace it with the latest exported JSON.</div></div>`;
  }
})();
