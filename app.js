const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LEGAL=[
'ADOSH-SF CoP 2.0 - Personal Protective Equipment','ADOSH-SF CoP 3.0 - Occupational Noise','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 17.0 - Safety Signage and Signals','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 33.0 - Working On or Adjacent to a Road','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 43.0 - Temporary Structures','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan','ADOSH-SF CoP 54.0 - Waste Management','ADCD 2018 Fire & Life Safety Code of Practice','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'];
const PRESETS={
'Access and Egress':{root:'Poor planning / Poor supervision',desc:['It was observed that villa access and egress routes were obstructed by construction materials, debris, cables and temporary works, affecting safe movement and emergency access.','It was evident that unsafe access arrangements such as single planks, poorly maintained access bridges or damaged temporary steps were being used to reach villas, excavations or workstations.','Lack of dedicated, demarcated and inspected pedestrian access was observed, creating slip, trip and fall hazards.'],imm:['Unsafe access routes were restricted immediately and workers were redirected to safer access points until rectification was completed.','The responsible engineer and supervision team were instructed to remove obstructions and restore safe access without delay.','Work was held at the affected location where safe access and egress could not be ensured.'],act:['All unsafe and substandard access arrangements shall be removed immediately and replaced with safe access bridges, ramps, stairs or platforms in line with approved design and project requirements.','All access and egress routes shall be kept clear of materials, cables, debris and protruding steel at all times.','A dedicated team shall be appointed for access bridge installation, inspection and routine maintenance.','Access routes shall be clearly demarcated, provided with suitable signage and inspected by competent supervision on a daily basis.','The permit-to-work approval shall include physical verification of safe access and housekeeping conditions prior to allowing work to proceed.','The workforce and supervisors shall be briefed on the importance of maintaining safe access and emergency egress arrangements.'],legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Permit to Work':{root:'PTW system failure / Lack of field verification',desc:['It was observed that critical activities were being carried out without a valid permit to work or without adequate physical verification of the work location.','Permits were issued, signed or approved without confirming actual site conditions, supervision, access, isolation and required control measures.','The PTW document did not adequately identify the hazards and controls present at the work front.'],imm:['The affected activity was stopped immediately and the permit was placed on hold pending full site verification.','The permit issuer, area engineer, HSE team and responsible supervisor were called to the location to review the PTW status and actual work conditions.','Work was not allowed to resume until the permit conditions, supervision and control measures were physically verified.'],act:['All activities found outside PTW control shall be immediately suspended until a valid permit is issued and approved by authorised personnel after physical site verification.','The PTW system shall remain under the control of the main contractor, and permits shall not be signed or authorised without field verification.','All incomplete, incorrectly drafted or non-compliant PTWs shall be cancelled and revalidated only after required controls are implemented.','The roles and responsibilities of permit issuer, receiver, approver and verifier shall be clearly communicated to engineers, supervisors and HSE personnel.','PTW audits shall be conducted routinely to verify permit quality, site control implementation and closeout evidence.','Repeated PTW non-compliance shall be escalated to project management and enforcement action shall be taken against responsible personnel.'],legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA']},
'Work at Height':{root:'Poor supervision / PTW failure / Planning failure',desc:['Operatives were observed working at height near leading edges, rooftops or elevated platforms without adequate fall prevention arrangements.','Ladders were being used as working platforms for activities where proper scaffold, mobile tower or working platform was required.','Work at height activities were being carried out without adequate PTW control, safe access, competent supervision or full body harness anchorage where required.'],imm:['All unsafe work at height activities were stopped immediately and workers were removed from the elevated work area.','The affected area was isolated and access below the work at height activity was restricted to control falling object exposure.','The responsible supervision team was instructed to verify working platform, edge protection, PTW and PPE requirements before restart.'],act:['All work at height activities shall be suspended where adequate safe access, working platform, fall prevention or PTW controls are not in place.','Suitable working platforms such as compliant scaffolds, mobile towers or MEWPs shall be provided; ladders shall not be used as working platforms.','Full body harnesses with suitable anchorage shall be used where fall prevention is not fully achieved by collective protection.','The work area shall be inspected by competent supervision prior to work and continuously monitored during the activity.','Workers and supervisors shall receive task-specific WAH training, toolbox talks and awareness on stop-work requirements.','No rooftop or leading edge activity shall proceed without formal authorisation, PTW approval and physical verification by competent supervision.'],legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Scaffolding':{root:'Inspection failure / Inadequate competence',desc:['Scaffolding was observed in unsafe condition, including missing components, unsecured planks, improper access ladders, missing toe boards, lack of outriggers, unstable alignment or unauthorised modification.','Mobile or aluminium scaffolds were used without compliance with manufacturer requirements, approved design or valid inspection/tagging controls.','Red-tagged or partially erected scaffolds were observed being used for work activities.'],imm:['Unsafe scaffold use was stopped immediately and the scaffold was restricted from use until rectified and inspected by a competent person.','The green tag was instructed to be removed where scaffolding was not compliant, and the scaffold was placed under red-tag control.','Workers were removed from the unsafe scaffold arrangement and the area was controlled to prevent unauthorised access.'],act:['All non-compliant scaffolds shall be taken out of service immediately and shall not be used until fully rectified and inspected.','Scaffolds shall be erected, modified and dismantled only by competent scaffolders in accordance with the approved design and manufacturer instructions.','All required components including guardrails, mid rails, toe boards, bracing, base plates, outriggers, access ladders and locking pins shall be installed before use.','Unauthorised scaffold modifications and loose plank arrangements shall be removed immediately.','A competent scaffolding inspector shall inspect and tag scaffolds after erection, modification, adverse weather or any condition affecting stability.','Routine scaffold inspections shall be tracked, and repeated non-compliances shall be escalated to management.'],legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Excavation':{root:'Poor planning / Inadequate barricading',desc:['Boundary wall, MEP or service excavations were found without hard barricades, warning signs, safe access or adequate edge protection.','Materials, blocks or debris were stored close to excavation edges, creating risk of collapse, falling materials and instability.','Excavation work was observed without adequate PTW control, competent supervision or daily inspection records.'],imm:['Unsafe excavation activity was stopped immediately and access to the excavation edge was restricted.','The responsible engineer and HSE team were instructed to provide hard barricades, warning signage and safe access arrangements without delay.','Materials near the excavation edge were instructed to be removed to maintain safe setback distance.'],act:['All excavation areas shall be protected with rigid barricades or approved hard barriers, warning signs and safe access/egress arrangements.','Materials, blocks, equipment and spoil shall be kept away from excavation edges to maintain safe setback distance and prevent collapse.','Excavation PTW shall be implemented and verified before starting work, including competent person inspection and required protective measures.','Open excavations near villa access, pedestrian routes and live roads shall be clearly demarcated and inspected daily.','Where required, benching, sloping, shoring or other engineered controls shall be implemented in line with approved MSRA.','Supervision teams shall conduct continuous monitoring and brief the workforce on excavation hazards.'],legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Barricading Hazards / Floor Openings':{root:'Poor maintenance / Inspection failure',desc:['Floor openings, manholes, stair landings, roof edges, temporary structures or excavation edges were not adequately protected, barricaded or covered.','Barricades were found slanted, incomplete, removed or not maintained, and protruding rebars were not protected.','Unsuitable materials such as thin plywood or temporary covers were used to cover openings, creating fall, trip and falling object hazards.'],imm:['Access to the affected hazard area was restricted immediately and temporary control measures were implemented.','The responsible team was instructed to reinstate suitable barricading, covers, toe boards and signage without delay.','Workers were prevented from entering the unsafe area until the barricading and opening protection were verified.'],act:['All floor openings, manholes, leading edges, stair openings and excavation edges shall be protected using rigid barricades, suitable covers or guardrail systems as applicable.','Covers shall be secured, load-bearing and clearly identified; unsuitable materials shall be removed immediately.','Protruding rebars shall be removed where possible or protected with mushroom-type rebar caps.','Toe boards and handrails shall be reinstated where missing, and barricades shall be installed as per design and legal requirements.','A dedicated maintenance team shall inspect and maintain barricades continuously, especially near live roads, pedestrian routes and workstations.','Routine inspections shall be recorded, and repeated removal of barricades shall be escalated for enforcement action.'],legal:['ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Edge Protection':{root:'Poor supervision / Poor maintenance',desc:['Edge protection was missing, incomplete, improperly anchored or not securely fixed at leading edges, windows, roofs, lift shafts or access areas.','Toe boards were missing above access areas, creating risk of falling materials from height.','Makeshift edge protection arrangements were observed and did not meet legal or project requirements.'],imm:['Unsafe work near exposed leading edges was stopped immediately and access to the affected area was restricted.','The responsible area engineer and supervision team were called to the location and instructed to rectify the unsafe condition.','The affected area was isolated and workers were stopped from accessing exposed edges until protection was verified.'],act:['All activities near unprotected leading edges shall be suspended until adequate edge protection is installed and verified.','Edge protection shall include complete guardrail systems with top rails, mid rails and toe boards in accordance with legal and project requirements.','All edge protection systems shall be properly anchored, aligned and secured to prevent displacement during use.','All missing, loose or damaged sections shall be reinstated immediately to maintain continuous protection.','A comprehensive inspection of all edge protection across the work area shall be carried out by site supervision and OSH team.','Edge protection shall not be removed until all roof, MEP and related activities are fully completed and safe conditions are confirmed.'],legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Electrical Safety / Portable Tools':{root:'Inspection failure / Inadequate maintenance',desc:['Temporary electrical arrangements, DBs, generators, cables or portable tools were observed with poor earthing, damaged cables, poor cable management, missing inspections or unsafe power tapping.','Live or flexible cables were routed across roads, access routes, wet areas or metal surfaces without adequate protection.','PAT requirements, colour coding, DB inspection stickers or earth pit inspection details were missing or not maintained.'],imm:['Unsafe electrical equipment and defective tools were removed from use immediately and the affected system was isolated where required.','A competent electrical team was instructed to inspect DBs, generators, cables, earthing and tools before further use.','Workers were kept away from unsafe electrical arrangements until rectification and verification were completed.'],act:['A dedicated competent electrical team shall be appointed for inspection, installation and maintenance of temporary electrical arrangements.','All DBs, generators, cables and portable tools shall be inspected, tagged, colour coded and maintained with records.','Earthing arrangements shall be provided and verified for generators, DBs and tower lights, including earth pit identification and next inspection details.','Damaged cables, defective sockets, poor cable routing and unauthorised power tapping shall be removed or rectified immediately.','Cables shall be routed using insulated hooks, poles, encasement or other suitable protection to prevent mechanical damage and trip hazards.','The workforce shall be trained on safe cable management and portable tool safety requirements.'],legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Plant and Equipment':{root:'Poor inspection / Inadequate maintenance',desc:['Plant or equipment was observed in unsafe condition, including damaged wheels, defective fittings, missing fire extinguishers, poor cabin housekeeping, inadequate first aid boxes or unsafe modifications.','MEWPs or manlifts were observed being operated on uneven or unstable surfaces, creating risk of overturning and serious injury.','Equipment inspection stickers, emergency arrangements or safety controls were missing or not properly maintained.'],imm:['Unsafe plant or equipment was stopped immediately and removed from operation pending inspection by a competent person.','The responsible plant team and supervision were instructed to rectify defects and verify certification before further use.','Operators were instructed not to operate defective or unstable equipment until all safety controls were restored.'],act:['All plant and equipment shall be inspected by competent personnel before use and shall not operate with defects affecting safety.','Defective equipment, damaged accessories or unsafe modifications shall be removed from service immediately.','MEWPs and mobile plant shall operate only on firm, level and suitable ground with required emergency arrangements active.','Fire extinguishers, first aid boxes, cabin housekeeping, operator visibility and emergency controls shall be maintained.','Inspection records, third-party certificates and pre-use checklists shall be available and verified routinely.','Operators, supervisors and maintenance teams shall receive training on equipment safety and defect reporting requirements.'],legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Material Storage / Fire Protection':{root:'Poor housekeeping / Fire risk controls not implemented',desc:['Materials, joinery, glass panels, chemicals or combustible items were stored in villas or storage areas without adequate segregation, access control, firefighting arrangements or protection.','Materials were over-stacked, stored near excavations, stored above sprinkler height or placed in undesignated areas affecting access and fire safety.','Fire extinguishers, hose reels, smoke detectors, labels, Civil Defence approvals or fire warden arrangements were missing or inadequate.'],imm:['Unsafe storage conditions were controlled immediately and responsible teams were instructed to relocate, segregate or secure materials.','Fire protection deficiencies were communicated to the contractor for immediate rectification, including provision or replacement of firefighting equipment.','Access to unsafe storage areas was restricted until adequate control measures were implemented.'],act:['All materials shall be stored only in designated, approved and demarcated storage areas with safe access and emergency access maintained.','Combustible materials, chemicals and glass panels shall be properly segregated, labelled, protected and secured to prevent fire, collapse or injury.','Fire risk assessment shall be conducted for storage areas and adequate firefighting arrangements shall be provided and maintained.','Materials shall not be stored above sprinkler height or in a manner that blocks access, emergency routes or firefighting systems.','Dedicated fire wardens shall be appointed to conduct routine inspections of storage areas.','Civil Defence approvals, store layouts, emergency contacts, spill kits and required fire safety documentation shall be maintained where applicable.'],legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Traffic / Logistics / Precast':{root:'Poor logistics planning / Lack of control',desc:['Traffic and logistics arrangements were inadequate, including poor pedestrian segregation, missing flagman/banksman control, unsafe reversing or A-frame trailer load securing deficiencies.','Precast elements or materials were transported, loaded, unloaded or stored without adequate securing, exclusion zones or safe traffic interface controls.','Vehicles and plant movements were not adequately controlled near live roads, pedestrian routes or active work fronts.'],imm:['Unsafe vehicle or logistics movement was stopped immediately and the affected route was controlled.','Banksman/flagman control, exclusion zones and pedestrian segregation were instructed to be provided before further movement.','The responsible logistics team was called to review and correct the traffic interface arrangement.'],act:['A traffic and logistics plan shall be implemented and maintained, including pedestrian segregation, signage, speed control, illumination and banksman arrangements.','A-frame trailers and precast elements shall be secured as per approved MSRA and manufacturer/project requirements before movement.','Vehicle reversing and unloading activities shall be controlled by competent banksmen with exclusion zones maintained.','Materials and precast elements shall not be stored in undesignated areas or live traffic routes.','Routine logistics inspections shall verify that man-machine interface controls remain effective.','Drivers, banksmen and supervisors shall be briefed on project traffic management and load securing requirements.'],legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan']},
'Housekeeping / Waste Management':{root:'Poor supervision / Housekeeping failure',desc:['Poor housekeeping was observed, including construction debris, waste bags, loose materials and blocked access routes inside villas, around workstations and near excavation areas.','Waste accumulation created slip, trip, fire and access-related risks and affected safe movement during normal and emergency conditions.'],imm:['The affected area was instructed to be cleaned immediately and access routes were cleared from waste and loose materials.','Work was held where housekeeping conditions created unsafe access or trip hazards.','The responsible supervision team was instructed to establish waste collection arrangements without delay.'],act:['Post-shift housekeeping shall be implemented and made part of work completion and PTW closeout requirements.','Waste collection points shall be provided for each villa or work area, and waste shall be removed routinely.','Access routes, emergency routes and work fronts shall remain clear and free from debris, waste and loose materials.','Subcontractors shall be trained to remove waste from workstations at the end of each shift.','No waste bag, no PTW principle shall be applied where housekeeping arrangements are repeatedly poor.','Routine housekeeping inspections shall be conducted and repeated failures escalated to contractor management.'],legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'PPE':{root:'Poor supervision / Lack of enforcement',desc:['Workers were observed carrying out activities without mandatory PPE or task-specific PPE required by the approved MSRA.','Portable power tools and work activities were observed without appropriate eye, face, hand or hearing protection.'],imm:['Workers without mandatory or task-specific PPE were stopped from continuing the activity until correct PPE was provided.','The responsible supervisor was instructed to verify PPE compliance before allowing work to continue.'],act:['All workers shall be provided with mandatory and task-specific PPE in accordance with the approved MSRA and task requirements.','Supervisors shall verify PPE compliance before and during work activities.','Workers shall be trained on correct use, maintenance and storage of PPE.','Routine inspections shall be conducted to identify and correct PPE non-compliance.','Enforcement or disciplinary action shall be implemented for repeated PPE violations.'],legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA']},
'Leadership / Supervision':{root:'Leadership failure / Poor subcontractor control',desc:['It was evident that engagement of construction managers, project engineers and non-OHS staff during the planned site walk was minimal or absent.','Main contractor and subcontractor supervision failed to identify, stop or escalate unsafe activities occurring at site.','The condition reflects poor planning, weak subcontractor control, lack of leadership presence and ineffective supervision.'],imm:['The unsafe activity was escalated immediately to contractor management for corrective action and accountability.','Responsible supervisors, engineers and HSE personnel were instructed to attend the location and confirm immediate controls.'],act:['Construction managers, project engineers, supervisors and HSE personnel shall ensure active leadership presence during site activities and planned inspections.','All subcontractor activities shall remain under the control and awareness of main contractor management.','Immediate retraining shall be conducted on stop-work authority, PTW field verification, escalation responsibilities and subcontractor control.','A corrective action plan shall be submitted within the required timeframe demonstrating how supervision gaps will be closed.','Enforcement or disciplinary action shall be initiated for repeated absence, failure to stop unsafe work or failure to escalate high-risk conditions.'],legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','OSH Construction Management Plan','Project Approved OSH Plan']},
'Other':{root:'Poor supervision',desc:['Unsafe conditions were observed during the inspection and require immediate corrective and preventive action by the responsible contractor.'],imm:['The unsafe condition was communicated immediately to the responsible site team and temporary control measures were implemented.'],act:['The contractor shall review the unsafe condition, identify the root cause and implement corrective and preventive actions to prevent recurrence.','Closeout evidence shall be submitted and verified by the responsible supervision and OSH team.','Lessons learned shall be communicated to relevant supervisors and workforce.'],legal:['Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan']}
};

// Requested category aliases and package/cluster automation
const CATEGORY_ALIASES={
  'Falling Object Protection':'Barricading Hazards / Floor Openings',
  'PTW Field Verification':'Permit to Work',
  'MSRA Quality':'Permit to Work',
  'Lifting/Precast Installation':'Traffic / Logistics / Precast',
  'Traffic &man-Machine Interface':'Traffic / Logistics / Precast',
  'Traffic & Man-Machine Interface':'Traffic / Logistics / Precast',
  'Welfare Arrangement':'Access and Egress',
  'Fire Readiness':'Material Storage / Fire Protection',
  'supervision& Subcontractor Control':'Leadership / Supervision',
  'Supervision & Subcontractor Control':'Leadership / Supervision',
  'Temporary & Tool Safety':'Electrical Safety / Portable Tools',
  'Temporary Works & Tool Safety':'Electrical Safety / Portable Tools'
};
Object.entries(CATEGORY_ALIASES).forEach(([alias,base])=>{ if(!PRESETS[alias] && PRESETS[base]) PRESETS[alias]=JSON.parse(JSON.stringify(PRESETS[base])); });
if(PRESETS['Falling Object Protection']){PRESETS['Falling Object Protection'].root='Poor supervision / Inadequate falling object control';PRESETS['Falling Object Protection'].legal=['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
if(PRESETS['PTW Field Verification']) PRESETS['PTW Field Verification'].root='PTW field verification failure';
if(PRESETS['MSRA Quality']) PRESETS['MSRA Quality'].root='Poor MSRA implementation / Inadequate risk assessment';
if(PRESETS['Lifting/Precast Installation']){PRESETS['Lifting/Precast Installation'].root='Poor lifting control / Inadequate precast planning';PRESETS['Lifting/Precast Installation'].legal=['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];}
['Traffic &man-Machine Interface','Traffic & Man-Machine Interface'].forEach(k=>{if(PRESETS[k]){PRESETS[k].root='Poor traffic management / Man-machine interface control failure';PRESETS[k].legal=['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}});
if(PRESETS['Welfare Arrangement']){PRESETS['Welfare Arrangement'].root='Poor welfare management / Inadequate amenities';PRESETS['Welfare Arrangement'].legal=['ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
if(PRESETS['Fire Readiness']){PRESETS['Fire Readiness'].root='Poor fire readiness / Inadequate emergency arrangements';PRESETS['Fire Readiness'].legal=['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 28.0 - Hot Work Operations','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}
['supervision& Subcontractor Control','Supervision & Subcontractor Control'].forEach(k=>{if(PRESETS[k]) PRESETS[k].root='Poor supervision / Poor subcontractor control / Leadership failure';});
['Temporary & Tool Safety','Temporary Works & Tool Safety'].forEach(k=>{if(PRESETS[k]){PRESETS[k].root='Poor temporary works and tool safety control';PRESETS[k].legal=['ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 43.0 - Temporary Structures','Aldar OSH MS Rev-08','Project Approved OSH Plan'];}});
const PACKAGE_CLUSTER_MAP={
  '2':['7A','7B','8A','8B','8C','8D'],
  '3':['3','4','5','6'],
  '4':['1A','1B','2A','2B','2C']
};
function updateClusterAndOwner(card, keep=false){
  const pkg=$('.package',card).value;
  const cluster=$('.cluster',card);
  const old=cluster.value;
  opt(cluster, PACKAGE_CLUSTER_MAP[pkg]||[], 'Select cluster / area');
  if(keep && old && (PACKAGE_CLUSTER_MAP[pkg]||[]).includes(old)) cluster.value=old;
  const owner=$('.actionOwner',card);
  if(pkg==='3') owner.value='Innovo';
  if(pkg==='2'||pkg==='4') owner.value='TAJV';
  updateArea(card);
}

const CATEGORIES=Object.keys(PRESETS);const packages=[{value:'2',label:'Package 02'},{value:'3',label:'Package 03'},{value:'4',label:'Package 04'}];const roots=['Poor supervision','Poor planning','PTW system failure','Inspection failure','Leadership failure','Poor subcontractor control','Poor housekeeping','Inadequate competence','Inadequate maintenance','Poor logistics planning'];
const statusBox=$('#statusBox'), attendeeRows=$('#attendeeRows'), obsContainer=$('#observationsContainer');
function setStatus(t,err=false){statusBox.textContent=t;statusBox.style.borderColor=err?'#f87171':'#84cc16'}
function opt(sel,arr,ph){sel.innerHTML=ph?`<option value="">${ph}</option>`:'';arr.forEach(x=>{let o=document.createElement('option');o.value=x.value||x;o.textContent=x.label||x;sel.appendChild(o)})}
function unique(a){return [...new Set((a||[]).filter(Boolean))]}
function lines(t){return String(t||'').split(/\n+/).map(x=>x.replace(/^[-•\d.\s]+/,'').trim()).filter(Boolean)}
function numbered(arr){return unique(arr).map((x,i)=>`${i+1}. ${x}`).join('\n')}
function bulleted(arr){return unique(arr).map(x=>`• ${x}`).join('\n')}



// ================= FINAL DEEP MANUAL OBSERVATION ENGINE =================
// Main rule:
// 1) If "Your Manual Observation Comments" has text, the system reads that text deeply
//    and creates Observation Description, Immediate Action Taken, Action Required,
//    Root Cause and Legal Requirements based on THAT text.
// 2) If manual comments are blank, the system uses only what the user selected/wrote
//    in the normal fields. It will not invent unrelated text.
// 3) Auto-fill ALDAR wording is still available using the Auto-fill button.

function cleanText(t){return String(t||'').trim().replace(/\s+/g,' ');}
function hasWord(t,arr){t=String(t||'').toLowerCase();return arr.some(w=>t.includes(w));}
function splitIssuesDeep(text){
  const raw=cleanText(text);
  if(!raw) return [];
  let parts=raw
    .replace(/\bwith\b/gi,' and ')
    .replace(/\bplus\b/gi,' and ')
    .split(/\s*(?:,|;|\band\b|\&|\+|\n|\/)\s*/i)
    .map(x=>x.trim())
    .filter(Boolean);
  if(parts.length===1 && raw.length<220) parts=[raw];
  return [...new Set(parts)].slice(0,10);
}
function detectManualRule(text, selectedCategory=''){
  const t=cleanText(text).toLowerCase();
  const c=String(selectedCategory||'').toLowerCase();
  if(hasWord(t,['cold drinking water','drinking water','cold water','water facility','water facilities','welfare','rest area','rest room','air condition','air conditioning','ac not working','a/c','toilet','washroom','amenities'])) return 'welfare';
  if(hasWord(t,['db','dbd','distribution board','cable','earthing','earth pit','electrical','generator','power tapping','temporary electrical','open panel','live wire'])) return 'electrical';
  if(hasWord(t,['ladder','unsafe ladder','step ladder','a-frame ladder','a frame ladder','straight ladder','extension ladder'])) return 'ladder';
  if(hasWord(t,['scaffold','scaffolding','mobile tower','outrigger','green tag','red tag','plank','platform'])) return 'scaffold';
  if(hasWord(t,['excavation','trench','open trench','boundary wall','soil collapse','deep excavation'])) return 'excavation';
  if(hasWord(t,['permit','ptw','work permit','red flag','red-flag','red flagged','without permit','no permit'])) return 'ptw';
  if(hasWord(t,['edge protection','leading edge','guardrail','toe board','toeboard','roof edge','window edge','fall protection','lift shaft'])) return 'edge';
  if(hasWord(t,['floor opening','opening','manhole','protruding rebar','protruding steel','rebar','barricade','barricading','handrail'])) return 'barricade';
  if(hasWord(t,['access','egress','walkway','pedestrian','blocked','obstructed','route','access bridge','ramp','stairs','staircase'])) return 'access';
  if(hasWord(t,['housekeeping','waste','debris','garbage','loose material','material storage','poor material'])) return 'housekeeping';
  if(hasWord(t,['fire','extinguisher','hose reel','smoke detector','hot work','combustible','chemical','coshh','sprinkler','storage area','civil defense','civil defence'])) return 'fire';
  if(hasWord(t,['lifting','precast','a-frame trailer','a frame trailer','crane','rigging','sling','trailer','panel','load securing'])) return 'lifting';
  if(hasWord(t,['traffic','vehicle','banksman','flagman','man-machine','man machine','road','reversing','pedestrian segregation'])) return 'traffic';
  if(hasWord(t,['mewp','plant','equipment','loader','machine','compressor','jackhammer','power tool','grinder','tool','damaged tool'])) return 'plant';
  if(hasWord(t,['ppe','helmet','gloves','goggles','face shield','harness','safety shoes','mask'])) return 'ppe';
  if(hasWord(t,['msra','risk assessment','method statement','ramS'.toLowerCase()])) return 'msra';
  if(c.includes('electrical')||c.includes('tool')) return 'electrical';
  if(c.includes('scaffold')||c.includes('ladder')) return 'scaffold';
  if(c.includes('excavation')) return 'excavation';
  if(c.includes('permit')||c.includes('ptw')) return 'ptw';
  if(c.includes('edge')||c.includes('falling object')) return 'edge';
  if(c.includes('barricad')||c.includes('floor')) return 'barricade';
  if(c.includes('welfare')) return 'welfare';
  if(c.includes('access')) return 'access';
  if(c.includes('housekeeping')||c.includes('waste')) return 'housekeeping';
  if(c.includes('fire')||c.includes('storage')) return 'fire';
  if(c.includes('traffic')||c.includes('logistics')||c.includes('man-machine')) return 'traffic';
  if(c.includes('lifting')||c.includes('precast')) return 'lifting';
  if(c.includes('plant')||c.includes('tool')) return 'plant';
  if(c.includes('ppe')) return 'ppe';
  if(c.includes('msra')) return 'msra';
  return 'general';
}
function categoryFromRule(rule){
  return {
    electrical:'Electrical Safety / Portable Tools',
    ladder:'Work at Height',
    scaffold:'Scaffolding',
    excavation:'Excavation',
    ptw:'Permit to Work',
    edge:'Edge Protection',
    barricade:'Barricading Hazards / Floor Openings',
    access:'Access and Egress',
    housekeeping:'Housekeeping / Waste Management',
    fire:'Material Storage / Fire Protection',
    lifting:'Lifting/Precast Installation',
    traffic:'Traffic & Man-Machine Interface',
    plant:'Plant and Equipment',
    ppe:'PPE',
    msra:'MSRA Quality',
    welfare:'Welfare Arrangement',
    general:'Other'
  }[rule] || 'Other';
}
function rootFromRule(rule){
  return {
    electrical:'Electrical safety inspection failure / Poor temporary electrical control',
    ladder:'Unsafe ladder use / Poor work at height supervision',
    scaffold:'Scaffolding inspection failure / Inadequate competent supervision',
    excavation:'Poor excavation planning / Inadequate barricading control',
    ptw:'PTW system failure / Lack of field verification',
    edge:'Poor supervision / Inadequate fall prevention control',
    barricade:'Poor barricading maintenance / Inspection failure',
    access:'Poor access planning / Poor housekeeping / Poor supervision',
    housekeeping:'Poor housekeeping / Poor subcontractor control',
    fire:'Poor fire readiness / Inadequate storage control',
    lifting:'Poor lifting / precast control and planning',
    traffic:'Poor traffic management / Man-machine interface control failure',
    plant:'Poor plant and equipment inspection / Inadequate maintenance',
    ppe:'Poor PPE compliance / Weak enforcement',
    msra:'Poor MSRA quality / Inadequate risk assessment implementation',
    welfare:'Poor welfare management / Inadequate amenities / Poor supervision',
    general:'Poor supervision / Planning and control failure'
  }[rule] || 'Poor supervision';
}
function legalFromRule(rule, selectedCategory=''){
  if(rule==='ladder') return ['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
  const preset=PRESETS[categoryFromRule(rule)] || PRESETS[selectedCategory] || PRESETS.Other;
  return preset && preset.legal ? preset.legal : ['Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'];
}
function issueToObservation(issue){
  const i=cleanText(issue).toLowerCase();
  if(/open\s*db|db\s*open|open\s*dbd|dbd|distribution board/.test(i)) return 'Electrical distribution board was found open / not properly secured, creating risk of unauthorized access to live electrical components and potential electric shock.';
  if(/poor.*cable|cable.*management|loose cable|cables? on|cable routing|cable/.test(i)) return 'Poor cable management was observed, with temporary cables not properly routed, elevated or protected, creating trip hazards and risk of mechanical damage to electrical cables.';
  if(/damaged.*cable|exposed cable|joint cable|live wire/.test(i)) return 'Damaged / exposed electrical cables were observed, creating risk of electric shock, short circuit and electrical fire.';
  if(/earthing|earth pit|grounding/.test(i)) return 'Earthing arrangement was not adequately provided / verified, creating risk of electrical fault and unsafe equipment operation.';
  if(/ladder|single ladder|a-frame ladder|a frame ladder|step ladder|straight ladder|extension ladder/.test(i)) return 'Ladder was being used in an unsafe manner / as a working platform, creating risk of fall from height.';
  if(/unsafe scaffold|scaffold|mobile tower|outrigger|green tag|red tag/.test(i)) return 'Scaffolding arrangement was observed in unsafe condition and not fully compliant with approved design / manufacturer requirements, creating fall and instability hazards.';
  if(/excavation|trench|open trench|boundary wall/.test(i)) return 'Excavation / trench was not adequately protected with rigid barricades, warning signs and safe access arrangements.';
  if(/no permit|without permit|ptw|work permit|permit|red flag/.test(i)) return 'The activity was observed without adequate Permit to Work control and physical field verification prior to work execution.';
  if(/edge protection|leading edge|guardrail|toe board|toeboard|roof edge|window edge|lift shaft/.test(i)) return 'Edge protection was missing, incomplete or not properly maintained, exposing workers to fall from height and falling object hazards.';
  if(/floor opening|manhole|opening/.test(i)) return 'Floor opening / manhole was not adequately protected, covered or barricaded, creating fall and trip hazards.';
  if(/rebar|protruding steel/.test(i)) return 'Protruding reinforcement steel was not adequately protected, creating impalement and trip hazards.';
  if(/access|egress|walkway|blocked|obstruct|route|ramp|stairs/.test(i)) return 'Access / egress route was obstructed or not maintained in safe condition, affecting safe movement and emergency escape.';
  if(/housekeeping|waste|debris|garbage|loose material/.test(i)) return 'Poor housekeeping was observed, with waste / debris / loose materials creating slip, trip, access obstruction and fire load concerns.';
  if(/material storage|stored|storage/.test(i)) return 'Material storage arrangement was not adequately controlled, with materials stored in a manner that may obstruct access, increase fire load or create collapse / falling object hazards.';
  if(/cold drinking water|drinking water|cold water|water facilit/.test(i)) return 'Cold drinking water facilities were not provided / maintained for the workforce, affecting worker welfare and hydration arrangements.';
  if(/air condition|air conditioning|a\/c|ac not working|poor ventilation/.test(i)) return 'Air-conditioning / ventilation arrangements in the rest area were not functioning properly, resulting in unsuitable welfare conditions for workers.';
  if(/smoke detector/.test(i)) return 'Smoke detector / fire detection arrangement was not provided or not maintained in the rest area, creating a fire and life safety concern.';
  if(/fire|extinguisher|hose reel|smoke|hot work|combustible|chemical|coshh|sprinkler/.test(i)) return 'Fire readiness / fire protection arrangements were not adequately maintained for the activity or storage area.';
  if(/ppe|helmet|glove|goggle|face shield|harness/.test(i)) return 'Required mandatory / task-specific PPE was not fully complied with for the observed activity.';
  if(/traffic|vehicle|banksman|flagman|man.?machine|road|reversing/.test(i)) return 'Traffic / man-machine interface controls were not adequately implemented, creating risk of vehicle-person interaction.';
  if(/lifting|precast|a-frame|panel|trailer|load securing/.test(i)) return 'Lifting / precast handling arrangement was not adequately controlled in line with approved method statement, load securing and exclusion zone requirements.';
  if(/mewp|plant|equipment|compressor|jackhammer|tool|grinder|machine/.test(i)) return 'Plant / equipment / tool arrangement was not adequately inspected or maintained, creating operational, mechanical or electrical safety risks.';
  if(/msra|risk assessment|method statement|ramS/.test(i)) return 'The MSRA / method statement did not adequately reflect or control the actual site condition and task-specific hazards.';
  return 'Unsafe condition was observed regarding ' + cleanText(issue) + ', requiring corrective and preventive action in accordance with project OSH requirements.';
}
function buildImmediateFromRule(rule, text){
  const base={
    electrical:['The affected electrical arrangement was immediately brought to the attention of the responsible supervisor and electrical team.','Access to the unsafe DB / cable arrangement was restricted until it was inspected and made safe by competent electrical personnel.','Workers were instructed not to use or interfere with the affected electrical arrangement until rectification was completed.'],
    ladder:['Unsafe ladder use was stopped immediately and the ladder was removed / restricted from further use.','The responsible supervisor was instructed to provide a safe access method or suitable working platform for the task.','Workers were briefed not to use ladders as working platforms or where the ladder cannot be secured and used safely.'],
    scaffold:['Unsafe scaffold use was stopped immediately and access to the affected arrangement was restricted.','Workers were removed from the unsafe platform and the scaffolding / supervision team was instructed to rectify the condition.','The scaffold was instructed to be inspected and released only by a competent scaffolding inspector before reuse.'],
    excavation:['Access to the unsafe excavation / trench area was restricted immediately.','Personnel were kept away from the excavation edge until suitable barricading, signage and safe access were provided.','The responsible engineer and HSE team were instructed to implement immediate excavation protection controls.'],
    ptw:['The affected activity was stopped immediately and the permit status was reviewed.','The permit issuer, area engineer, HSE team and supervisor were instructed to physically verify the work location.','Work was not allowed to continue until PTW controls and site conditions were confirmed.'],
    edge:['Unsafe work near the exposed leading edge was stopped immediately.','Access to the exposed edge area was restricted and the responsible supervision team was instructed to reinstate protection.','Workers were removed from the affected area until edge protection was verified.'],
    barricade:['Access to the unprotected opening / hazard area was restricted immediately.','The responsible team was instructed to provide suitable barricading, covers and warning signs without delay.','Workers were prevented from entering the unsafe area until protection was verified.'],
    access:['Unsafe access routes were restricted and workers were redirected to safer access points.','The responsible supervision team was instructed to remove obstructions and restore safe access without delay.','Work was held where safe access and egress could not be ensured.'],
    housekeeping:['The affected area was instructed to be cleaned immediately.','Access routes and work fronts were required to be cleared from waste, debris and loose materials.','Supervision was instructed to verify housekeeping closeout before allowing continuation of work.'],
    fire:['The unsafe fire readiness / storage condition was communicated to the responsible team for immediate correction.','The area was reviewed for immediate fire risk and temporary controls were instructed.','The contractor was instructed to restore suitable firefighting / emergency arrangements without delay.'],
    lifting:['Unsafe lifting / precast activity was stopped immediately and the lifting area was controlled.','Personnel were removed from the lifting zone and the lifting supervisor / engineer was instructed to verify the arrangement.','The activity was not allowed to continue until lifting controls and exclusion zones were confirmed.'],
    traffic:['Unsafe traffic / man-machine interface condition was controlled immediately.','Plant or vehicle movement was held until segregation, signage and banksman control were confirmed.','The logistics and supervision team was instructed to rectify traffic control arrangements.'],
    plant:['Unsafe plant / equipment / tool was removed from use pending inspection and rectification.','The responsible supervisor / competent person was instructed to verify equipment condition and certification before reuse.','Workers were instructed not to operate defective or uninspected equipment.'],
    ppe:['Workers not complying with PPE requirements were stopped from continuing the activity.','The responsible supervisor was instructed to provide and verify mandatory / task-specific PPE before work continued.','Workers were reminded not to continue the activity without required PPE.'],
    msra:['The activity was paused until the MSRA and actual site controls were reviewed.','The supervisor was instructed to brief the workforce on task-specific hazards and control measures.','Work was not allowed to continue until the MSRA controls were implemented at the work front.'],
    welfare:['The welfare deficiency was immediately communicated to the responsible site team and contractor supervision.','The contractor was instructed to provide cold drinking water and restore suitable rest area conditions without delay.','The contractor was instructed to inspect the rest area fire detection / smoke detector arrangement and implement immediate control measures.'],
    general:['The unsafe condition was communicated immediately to the responsible site team.','The affected activity / area was placed under control until suitable corrective measures were implemented.','The responsible supervision team was instructed to rectify the issue without delay.']
  };
  return base[rule] || base.general;
}
function buildActionsFromRule(rule, text){
  const t=cleanText(text).toLowerCase();
  let a=[];
  if(/db|distribution|electrical|cable|earthing|generator|power/.test(t)){
    if(/db|distribution/.test(t)) a.push('All distribution boards shall be properly closed, secured and locked at all times to prevent unauthorized access.');
    if(/cable/.test(t)) a.push('All cables shall be properly routed, elevated or protected using suitable cable management arrangements to prevent trip hazards and mechanical damage.');
    if(/earthing|earth/.test(t)) a.push('Earthing arrangements shall be inspected, tested, identified and maintained by competent electrical personnel.');
    a.push('A competent electrical team shall inspect the affected electrical arrangement and confirm it is safe before further use.');
  }
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)){
    a.push('Unsafe ladders shall be removed from use immediately and replaced with a safe access method or suitable working platform for the task.');
    a.push('Ladders shall only be used for short-duration low-risk access activities where they are suitable, inspected, secured and used by trained workers.');
    a.push('Ladders shall not be used as working platforms for sustained work, side loading, overreaching or activities requiring both hands.');
  }
  if(/scaffold|platform|outrigger/.test(t)){
    a.push('All scaffolding / working platforms shall be inspected by a competent person and used only when fully compliant with approved design and tagging requirements.');
    if(/outrigger/.test(t)) a.push('Required outriggers / stabilizers shall be installed as per manufacturer requirements before use.');
  }
  if(/excavation|trench/.test(t)) a.push('Excavations shall be protected with rigid barricades, warning signs and safe access / egress arrangements.');
  if(/permit|ptw|red flag/.test(t)) a.push('Permit to Work shall be issued only after physical verification of the work front and confirmation of all required controls.');
  if(/edge|guardrail|toe|fall/.test(t)) a.push('Complete edge protection including top rail, mid rail and toe board shall be installed and maintained at all leading edges.');
  if(/floor opening|manhole|opening/.test(t)) a.push('Floor openings / manholes shall be covered with secured load-bearing covers or protected with rigid barricades and warning signs.');
  if(/rebar|protruding/.test(t)) a.push('Protruding rebars shall be removed where possible or protected with suitable rebar caps.');
  if(/access|egress|walkway|blocked|obstruct|route/.test(t)) a.push('Access and egress routes shall be kept clear, safe, demarcated and free from obstruction at all times.');
  if(/housekeeping|waste|debris/.test(t)) a.push('Housekeeping shall be maintained continuously and waste / debris shall be removed from work fronts and access routes.');
  if(/fire|extinguisher|hot work|storage|chemical|combustible/.test(t)) a.push('Adequate fire protection arrangements, fire extinguishers, segregation and emergency controls shall be provided and maintained.');
  if(/ppe|helmet|glove|goggle|harness/.test(t)) a.push('Mandatory and task-specific PPE shall be provided, used and verified by supervision before and during the activity.');
  if(/traffic|vehicle|banksman|flagman|man.?machine|road/.test(t)) a.push('Traffic management controls including segregation, signage, banksman control and safe pedestrian routes shall be implemented and maintained.');
  if(/lifting|precast|a-frame|panel|trailer/.test(t)) a.push('Lifting / precast handling shall be carried out under approved MSRA / lifting plan with competent supervision, exclusion zones and verified load securing.');
  if(/mewp|plant|equipment|compressor|jackhammer|tool|grinder|machine/.test(t)) a.push('Plant, equipment and tools shall be inspected, maintained, tagged and removed from service where defective or unsafe.');
  if(/cold drinking water|drinking water|cold water|welfare|rest area|air condition|air conditioning|a\/c|smoke detector|amenities/.test(t)){
    a.push('Adequate cold drinking water facilities shall be provided and maintained at all times for the workforce.');
    a.push('Air-conditioning and ventilation arrangements in the rest area shall be inspected, repaired and maintained in good working condition.');
    a.push('Approved smoke detectors / fire detection arrangements shall be provided and maintained in welfare and rest areas as required.');
    a.push('A routine welfare inspection and maintenance schedule shall be implemented by the responsible supervision team.');
  }
  if(/msra|risk assessment|method statement/.test(t)) a.push('The MSRA shall be reviewed and updated to reflect actual site conditions, task sequence, hazards and required controls.');
  if(!a.length) a.push('The contractor shall rectify the observed unsafe condition, identify the root cause and implement corrective and preventive actions to avoid recurrence.');
  a.push('Routine inspection and monitoring shall be carried out by the responsible supervision and OSH team to confirm sustained compliance.');
  a.push('Workers and supervisors shall be briefed on the relevant project OSH requirements and lessons learned from the observation.');
  return [...new Set(a)];
}


// ================= FINAL SPECIFIC MANUAL POINT ENGINE - ADDED =================
// This layer keeps every point written by the user and shows the exact generated
// report wording inside the empty report boxes before Word generation.
function addOptionIfMissing(sel,value){
  if(!sel||!value) return;
  if(![...sel.options].some(o=>o.value===value)){
    const o=document.createElement('option'); o.value=value; o.textContent=value; sel.appendChild(o);
  }
}
function normalizeManualSentence(t){
  return String(t||'').replace(/\s+/g,' ').trim().replace(/[.،;]+$/,'');
}
function splitManualPointsSpecific(text){
  let raw=String(text||'').trim();
  if(!raw) return [];
  raw=raw
    .replace(/\bno\s+/gi,' | no ')
    .replace(/\bnot\s+/gi,' | not ')
    .replace(/\bwithout\s+/gi,' | without ')
    .replace(/\bmissing\s+/gi,' | missing ')
    .replace(/\band\s+also\b/gi,' | ')
    .replace(/\balso\b/gi,' | ')
    .replace(/\bplus\b/gi,' | ')
    .replace(/\bwith\b/gi,' | with ')
    .replace(/\n+/g,' | ')
    .replace(/[;,]+/g,' | ');
  let pts=raw.split('|').map(normalizeManualSentence).filter(Boolean);
  // Reconnect very short fragments with the previous item where useful.
  const out=[];
  for(const pt of pts){
    if(out.length && pt.length<10 && !/^(no|not|without|missing)\b/i.test(pt)) out[out.length-1]+=' '+pt;
    else out.push(pt);
  }
  return [...new Set(out)].slice(0,14);
}
function actionVerbForPoint(point){
  const t=point.toLowerCase();
  if(/cold.*water|drinking water|water/.test(t)) return 'provide and maintain adequate cold drinking water facilities for all workers';
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return 'inspect, repair and maintain the air-conditioning / ventilation arrangements in good working condition';
  if(/smoke detector|fire detection|detector/.test(t)) return 'provide and maintain approved smoke detectors / fire detection arrangements';
  if(/db|distribution board/.test(t)) return 'close, secure and lock all electrical distribution boards';
  if(/cable/.test(t)) return 'properly route, elevate and protect temporary electrical cables';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return 'remove the unsafe ladder from use and provide a safe access method / proper working platform suitable for the task';
  if(/scaffold|platform|outrigger/.test(t)) return 'rectify and inspect the scaffold / access platform by a competent person before use';
  if(/excavation|trench/.test(t)) return 'provide rigid barricading, warning signage and safe access / egress for the excavation';
  if(/permit|ptw/.test(t)) return 'revalidate the Permit to Work after physical verification of the work front';
  if(/edge|guardrail|toe.?board|opening|manhole|rebar|barricad/.test(t)) return 'install and maintain suitable hard barricading / edge protection / covers as applicable';
  if(/housekeeping|waste|debris/.test(t)) return 'remove waste and maintain housekeeping at the work front and access routes';
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return 'restore required fire prevention, storage control and emergency arrangements';
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return 'implement traffic segregation, banksman control and safe pedestrian access';
  if(/lifting|precast|crane|sling|trailer/.test(t)) return 'stop and revalidate the lifting / precast arrangement with competent supervision and exclusion zones';
  return 'rectify the identified unsafe condition and implement preventive controls';
}
function specificObservationSentence(point,areaText=''){
  const t=point.toLowerCase();
  const prefix='It was observed that ';
  if(/cold.*water|drinking water|water/.test(t)) return prefix+'adequate cold drinking water facilities were not provided for the workforce'+areaText+', which may affect worker welfare, heat stress prevention and compliance with welfare requirements.';
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return prefix+'the air-conditioning / ventilation arrangement was not functioning properly in the rest area'+areaText+', resulting in unsuitable and uncomfortable welfare conditions for workers.';
  if(/smoke detector|fire detection|detector/.test(t)) return prefix+'approved smoke detector / fire detection arrangement was not provided or maintained in the rest area'+areaText+', creating a fire and life safety concern.';
  if(/db|distribution board/.test(t)) return prefix+'electrical distribution board was left open / not properly secured'+areaText+', exposing personnel to unauthorized access and potential contact with live electrical components.';
  if(/cable/.test(t)) return prefix+'temporary cables were not properly managed, routed or protected'+areaText+', creating trip hazards and risk of mechanical damage to electrical cables.';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return prefix+'an unsafe ladder was being used'+areaText+', creating risk of fall from height, loss of balance and serious injury. The ladder arrangement was not suitable / safe for the observed activity and required immediate removal or replacement with a compliant access method.';
  if(/scaffold|platform|outrigger/.test(t)) return prefix+'scaffold / access platform arrangement was not maintained in safe and compliant condition'+areaText+', creating fall from height and instability hazards.';
  if(/excavation|trench/.test(t)) return prefix+'excavation / trench area was not adequately protected'+areaText+', creating risk of fall into excavation, edge collapse and uncontrolled access.';
  if(/permit|ptw/.test(t)) return prefix+'the activity was not adequately controlled through a valid Permit to Work and physical field verification'+areaText+'.';
  if(/edge|guardrail|toe.?board/.test(t)) return prefix+'edge protection was missing, incomplete or not properly maintained'+areaText+', exposing personnel to fall from height and falling object hazards.';
  if(/opening|manhole/.test(t)) return prefix+'floor opening / manhole was not adequately covered or barricaded'+areaText+', creating fall and trip hazards.';
  if(/rebar|protruding/.test(t)) return prefix+'protruding reinforcement steel was not adequately protected'+areaText+', creating impalement and trip hazards.';
  if(/housekeeping|waste|debris/.test(t)) return prefix+'poor housekeeping was observed'+areaText+', with waste / debris / loose materials affecting safe access and increasing slip, trip and fire load concerns.';
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return prefix+'fire prevention / storage control arrangements were not adequately maintained'+areaText+', creating fire readiness and emergency response concerns.';
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return prefix+'traffic / man-machine interface controls were not adequately implemented'+areaText+', creating risk of vehicle-person interaction.';
  if(/lifting|precast|crane|sling|trailer/.test(t)) return prefix+'lifting / precast handling arrangement was not adequately controlled'+areaText+', creating risk of dropped load, struck-by incident and uncontrolled lifting activity.';
  return prefix+normalizeManualSentence(point)+areaText+', requiring immediate corrective and preventive action by the responsible contractor.';
}

function immediateSentenceForPoint(point,areaText=''){
  const t=point.toLowerCase();
  const loc=areaText||'';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return [
    'Use of the unsafe ladder was stopped immediately'+loc+' and the ladder was removed / restricted from service.',
    'Workers were instructed not to continue the task from the ladder and to use only a safe access method or proper working platform suitable for the activity.',
    'The responsible supervisor was instructed to inspect the ladder condition, placement, securing and suitability before any further use.'
  ];
  if(/scaffold|platform|outrigger/.test(t)) return [
    'Use of the unsafe scaffold / access platform was stopped immediately'+loc+' and access was restricted.',
    'Workers were removed from the platform and the scaffold was placed under competent inspection before further use.',
    'The responsible scaffold team was instructed to rectify missing / unsafe components before the activity continued.'
  ];
  if(/db|distribution board/.test(t)) return [
    'The open / unsecured distribution board was immediately brought under control'+loc+'.',
    'Access to the DB was restricted and the electrical team was instructed to close, secure and verify it before further use.',
    'Workers were instructed not to touch or use the DB until competent electrical verification was completed.'
  ];
  if(/cable/.test(t)) return [
    'The unsafe cable arrangement was immediately highlighted to the responsible supervisor and electrical team'+loc+'.',
    'Cables affecting access or exposed to damage were required to be rerouted, elevated or protected before work continued.',
    'Workers were instructed not to use damaged / poorly routed cables until rectified by competent electrical personnel.'
  ];
  if(/excavation|trench/.test(t)) return [
    'Access to the unsafe excavation / trench was restricted immediately'+loc+'.',
    'Personnel were moved away from the excavation edge until hard barricading, signage and safe access were provided.',
    'The responsible engineer was instructed to verify excavation controls before work continued.'
  ];
  if(/cold.*water|drinking water|water/.test(t)) return [
    'The absence of cold drinking water was immediately communicated to the responsible site team'+loc+'.',
    'Contractor was instructed to provide adequate cold drinking water without delay.',
    'Workforce welfare arrangements were required to be checked by supervision before continuation of extended work.'
  ];
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return [
    'The defective air-conditioning / ventilation condition was immediately reported to contractor supervision'+loc+'.',
    'Contractor was instructed to repair or provide an alternative suitable rest area without delay.',
    'The rest area was required to be checked before being considered acceptable for worker welfare use.'
  ];
  if(/smoke detector|fire detection|detector/.test(t)) return [
    'The missing / defective smoke detection arrangement was immediately communicated to the contractor'+loc+'.',
    'Contractor was instructed to provide approved smoke detection / fire detection controls without delay.',
    'The rest area / affected facility was required to be verified for fire and life safety compliance.'
  ];
  if(/permit|ptw/.test(t)) return [
    'The affected activity was stopped immediately pending PTW verification'+loc+'.',
    'The permit issuer, receiver, area engineer and HSE team were instructed to physically verify the work front.',
    'Work was not allowed to resume until the PTW conditions matched the actual site condition.'
  ];
  if(/edge|guardrail|toe.?board|opening|manhole|rebar|barricad/.test(t)) return [
    'Access to the exposed edge / opening / hazard area was restricted immediately'+loc+'.',
    'The responsible team was instructed to install suitable protection, barricading or covers before work continued.',
    'Workers were prevented from entering the unsafe area until the protection was verified.'
  ];
  if(/housekeeping|waste|debris/.test(t)) return [
    'The affected area was instructed to be cleaned immediately'+loc+'.',
    'Access routes and work fronts were required to be cleared before work continued.',
    'The supervisor was instructed to verify housekeeping closeout at the same location.'
  ];
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return [
    'The unsafe fire readiness / storage condition was immediately communicated to the responsible team'+loc+'.',
    'Temporary controls were instructed until required fire protection and segregation were restored.',
    'The area was required to be checked for fire load, access and emergency readiness before continued use.'
  ];
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return [
    'Unsafe traffic / man-machine interface activity was controlled immediately'+loc+'.',
    'Plant / vehicle movement was held until segregation and banksman control were provided.',
    'Pedestrian access and vehicle movement were required to be verified before restarting the activity.'
  ];
  if(/lifting|precast|crane|sling|trailer/.test(t)) return [
    'The unsafe lifting / precast activity was stopped immediately'+loc+'.',
    'The lifting zone was controlled and unauthorized personnel were removed from the area.',
    'The lifting supervisor / appointed person was instructed to revalidate the lifting arrangement before continuation.'
  ];
  return ['The specific unsafe condition was immediately communicated to the responsible supervision team'+loc+'.','The affected activity / area was controlled until the same issue was rectified and verified.'];
}

function preventiveSentencesForPoint(point,areaText=''){
  const t=point.toLowerCase();
  const loc=areaText||'';
  if(/ladder|step ladder|a-frame ladder|a frame ladder|straight ladder|extension ladder/.test(t)) return [
    'Remove the unsafe ladder from service and do not allow its use until inspected and confirmed fit for purpose by competent supervision.',
    'Provide a suitable safe working platform such as compliant scaffold, mobile tower or MEWP where the task requires working from height; ladders shall not be used as a working platform.',
    'Where a ladder is permitted only for short-duration access, it shall be industrial grade, in good condition, placed on firm level ground, secured against movement and maintained at the correct angle.',
    'Inspect all ladders in the affected work area and remove damaged, unstable, unsecured or unsuitable ladders from site.',
    'Brief supervisors and workers on ladder safety requirements, including three-point contact, no overreaching, no standing on top steps and stop-work requirements for unsafe ladders.'
  ];
  if(/scaffold|platform|outrigger/.test(t)) return [
    'Rectify the scaffold / access platform in accordance with approved design and manufacturer requirements before use.',
    'Ensure all required components including guardrails, mid rails, toe boards, bracing, locking pins, access ladder and outriggers / stabilizers are installed where applicable.',
    'A competent scaffolding inspector shall inspect and tag the scaffold after rectification and before re-use.',
    'Inspect similar scaffold / access platform arrangements across the area and remove any unsafe arrangements from service.'
  ];
  if(/db|distribution board/.test(t)) return [
    'Close, secure and lock the electrical distribution board and maintain it under authorized electrical control only.',
    'Provide proper DB identification, inspection sticker, warning signage and access control as per project electrical requirements.',
    'A competent electrician shall inspect the DB for live parts, cable terminations, earthing and RCD protection before re-energizing / use.'
  ];
  if(/cable/.test(t)) return [
    'Reroute, elevate or mechanically protect all temporary cables to prevent trip hazards, crushing, water contact and mechanical damage.',
    'Remove damaged, exposed, jointed or substandard cables from service and replace them with compliant cables and connectors.',
    'Implement routine temporary electrical inspection for cable routing at access routes, wet areas, roads and work fronts.'
  ];
  if(/excavation|trench/.test(t)) return [
    'Install rigid barricades, warning signs and safe access / egress arrangements for the excavation before allowing work nearby.',
    'Maintain safe setback distance for materials, blocks, plant and spoil from excavation edges.',
    'Conduct daily competent person excavation inspections and record trench condition, access, barricading and edge stability.'
  ];
  if(/cold.*water|drinking water|water/.test(t)) return [
    'Provide adequate cold drinking water stations close to the work area and maintain refill arrangements throughout the shift.',
    'Assign responsible supervision to check water availability during routine welfare inspections.',
    'Communicate heat stress and hydration requirements to the workforce during toolbox talks.'
  ];
  if(/air.?condition|a\/c|ac\b|ventilation/.test(t)) return [
    'Repair the rest area air-conditioning / ventilation system or provide an alternative compliant rest area until repairs are completed.',
    'Implement a routine inspection and maintenance schedule for welfare facilities, including AC performance and ventilation.',
    'Do not occupy rest areas that do not provide suitable welfare conditions for workers.'
  ];
  if(/smoke detector|fire detection|detector/.test(t)) return [
    'Install approved smoke detectors / fire detection arrangements in the affected rest area or welfare facility.',
    'Test and maintain the smoke detector / fire detection system and keep inspection records available.',
    'Verify that fire extinguishers, emergency access and fire warden arrangements are also maintained for the same facility.'
  ];
  if(/permit|ptw/.test(t)) return [
    'Revalidate the Permit to Work only after physical inspection confirms that all required controls are implemented at the work front.',
    'Permit issuer, receiver and area supervision shall verify the actual site condition before signing or allowing work to proceed.',
    'Conduct PTW quality checks to ensure permits identify the task-specific hazards and controls actually present on site.'
  ];
  if(/edge|guardrail|toe.?board/.test(t)) return [
    'Install complete edge protection including top rail, mid rail and toe board at all exposed leading edges.',
    'Inspect the full work area for similar missing or damaged edge protection and rectify before work continues.',
    'Do not allow work near exposed edges until collective fall protection is verified by supervision.'
  ];
  if(/opening|manhole/.test(t)) return [
    'Protect all openings / manholes with secured load-bearing covers or rigid barricades with warning signage.',
    'Mark and identify opening covers clearly and prevent unauthorized removal.',
    'Inspect similar openings in the surrounding area and close out any repeated conditions.'
  ];
  if(/rebar|protruding/.test(t)) return [
    'Remove protruding rebar where possible or protect it with suitable mushroom-type rebar caps.',
    'Inspect access routes and work fronts for similar impalement hazards and rectify immediately.',
    'Maintain rebar protection as part of daily housekeeping and hazard inspection.'
  ];
  if(/housekeeping|waste|debris/.test(t)) return [
    'Remove waste, debris and loose materials from the affected work front and access route.',
    'Provide waste bags / bins and implement end-of-shift housekeeping before PTW closeout.',
    'Supervisors shall verify housekeeping status before allowing the next activity to start.'
  ];
  if(/fire|extinguisher|hose reel|combustible|chemical|storage/.test(t)) return [
    'Provide and maintain suitable fire extinguishers, fire detection and emergency access for the affected area.',
    'Segregate combustible / chemical materials and remove unnecessary fire load from villas and work fronts.',
    'Conduct fire readiness inspection and maintain closeout evidence for the affected storage / work area.'
  ];
  if(/traffic|vehicle|banksman|flagman|man.?machine/.test(t)) return [
    'Provide physical segregation between pedestrians and moving plant / vehicles.',
    'Assign competent banksman / flagman for reversing, unloading and interface activities.',
    'Maintain traffic signage, speed control and safe pedestrian routes at the affected location.'
  ];
  if(/lifting|precast|crane|sling|trailer/.test(t)) return [
    'Revalidate the lifting plan / MSRA and confirm crane setup, lifting accessories, load weight and ground conditions before lifting.',
    'Maintain exclusion zones and assign competent lifting supervision including appointed person / lifting supervisor as required.',
    'Verify load securing and storage arrangement for precast elements before transport, unloading or installation.'
  ];
  return ['Rectify the exact unsafe condition identified in the observation and submit photo evidence for verification.','Inspect similar locations for the same issue and close out repeated deficiencies.'];
}
function buildSpecificManualReport(text, selectedCategory='', area=''){
  const rule=detectManualRule(text, selectedCategory);
  const pts=splitManualPointsSpecific(text);
  const areaText=area && !area.includes('- -') ? ' at '+area.replace(/^Area:\s*/,'') : '';
  const desc=[];
  pts.forEach(pt=>desc.push(specificObservationSentence(pt,areaText)));
  desc.push('The above deficiencies indicate '+rootFromRule(rule).toLowerCase()+' and require corrective action across the affected work area, not only at the specific observed location.');

  // Immediate Action and Action Required are now built from the same specific points
  // that generated the observation description. This prevents generic/unmatched text.
  const immediate=[];
  pts.forEach(pt=> immediate.push(...immediateSentenceForPoint(pt,areaText)) );
  if(!immediate.length){
    immediate.push('The unsafe condition was immediately communicated to the responsible site supervision and contractor HSE team for action.');
    immediate.push('The affected activity / area was controlled until suitable corrective measures were implemented.');
  }
  immediate.push('The responsible supervisor / engineer shall keep the affected area under control until closeout is verified by the OSH team.');

  const actions=[];
  pts.forEach(pt=> actions.push(...preventiveSentencesForPoint(pt,areaText)) );
  if(!actions.length){
    actions.push('The contractor shall rectify the observed unsafe condition and submit closeout evidence for verification.');
  }
  actions.push('The contractor shall inspect similar locations and activities across the project for the same type of deficiency and rectify any repeated findings.');
  actions.push('Responsible engineers, supervisors and HSE personnel shall conduct follow-up inspection to ensure the corrective actions are effective and maintained.');
  actions.push('Relevant workers and supervisors shall be briefed on the lessons learned and the required control measures before continuing similar activities.');

  return {category:categoryFromRule(rule),root:rootFromRule(rule),desc:bulleted(desc),immediate:bulleted(immediate),actions:numbered(actions),legal:legalFromRule(rule,selectedCategory)};
}
function previewManualInBoxes(card,force=false){
  const manual=$('.manualComments',card)?.value.trim()||'';
  if(!manual) return;
  const area=$('.areaPreview',card)?.textContent.replace(/^Area:\s*/,'')||'';
  const built=buildSpecificManualReport(manual,$('.observationCategory',card).value,area);
  if(!$('.observationCategory',card).value || $('.observationCategory',card).value==='Other') $('.observationCategory',card).value=built.category;
  addOptionIfMissing($('.rootCause',card),built.root); $('.rootCause',card).value=built.root;
  const fields=[['.observationDescription','desc'],['.immediateAction','immediate'],['.preventiveAction','actions']];
  fields.forEach(([sel,key])=>{
    const el=$(sel,card); if(!el) return;
    const wasAuto=el.dataset.smartGenerated==='1';
    if(force || wasAuto || !el.value.trim()){
      el.value=built[key]; el.dataset.smartGenerated='1';
    }
  });
  $$('.legalGrid input',card).forEach(x=>x.checked=(built.legal||[]).includes(x.value));
  setStatus('Smart preview updated from your manual observation comments.');
}

function buildFromManualComments(text, selectedCategory=''){
  return buildSpecificManualReport(text, selectedCategory, '');
}
function shouldUseManualComment(text){
  return !!cleanText(text);
}
function createStandardFromManual(card){
  const manual=$('.manualComments',card)?.value.trim() || $('.observationDescription',card).value.trim();
  if(!manual){setStatus('Write your manual observation comment first, then click Create Standard Observation From My Comments.',true);return;}
  previewManualInBoxes(card,true);
  setStatus('Specific ALDAR observation created from every point in your manual comments.');
}
function applyManualToObservationObject(o){
  const manual=cleanText(o.manualComments);
  if(!manual) return o; // no manual comments: keep only selected/written fields
  const built=buildSpecificManualReport(manual, o.category, [o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - '));
  return {
    ...o,
    category:(!o.category||o.category==='Other')?built.category:o.category,
    root:o.root || built.root,
    desc:built.desc,
    immediate:built.immediate,
    actions:built.actions,
    legal:(o.legal&&o.legal.length)?o.legal:built.legal
  };
}


// ================= FINAL HYBRID MERGE ENGINE =================
// This engine allows three modes:
// 1) Manual Comments Only - converts only the user's site notes into professional wording.
// 2) Selected Auto Comments Only - uses only the selected/typed ALDAR auto comments in the text boxes.
// 3) Hybrid - combines user's manual notes + selected/typed auto comments and removes duplicate lines.
function stripLeadNumber(t){return String(t||'').replace(/^\s*[•\-–—]*\s*/,'').replace(/^\s*\d+[.)-]\s*/,'').trim();}
function smartLineList(text){
  return String(text||'').split(/\n+/).map(stripLeadNumber).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
}
function lineKey(t){
  return String(t||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\b(the|and|shall|will|was|were|with|that|this|from|into|for|all|any|not|only|also)\b/g,' ').replace(/\s+/g,' ').trim().slice(0,130);
}
function mergeUniqueLines(){
  const seen=new Set(), out=[];
  [...arguments].flat().forEach(line=>{
    line=stripLeadNumber(line);
    if(!line) return;
    const k=lineKey(line);
    if(!k || seen.has(k)) return;
    // Avoid very similar duplicates by checking core overlap
    let duplicate=false;
    for(const old of seen){
      if(k.length>35 && old.length>35 && (k.includes(old.slice(0,45)) || old.includes(k.slice(0,45)))) { duplicate=true; break; }
    }
    if(duplicate) return;
    seen.add(k); out.push(line);
  });
  return out;
}
function selectedAutoFromObservation(o){
  const rule=SMART_RULES[smartRuleFor([o.desc,o.immediate,o.actions,o.category].join(' '),o.category)] || SMART_RULES.general;
  return {
    desc: smartLineList(o.desc).length ? smartLineList(o.desc) : (rule.desc||[]),
    immediate: smartLineList(o.immediate).length ? smartLineList(o.immediate) : (rule.imm||[]),
    actions: smartLineList(o.actions).length ? smartLineList(o.actions) : (rule.act||[]),
    legal: (o.legal&&o.legal.length)?o.legal:(rule.legal||[]),
    root: o.root || rule.root,
    category: o.category || rule.category
  };
}
function mergeManualAndAutoObservation(o){
  const area=[o.package?`Package ${o.package}`:'', clusterText(o.cluster), o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');
  const manual=buildSpecificManualReport(o.manualComments, o.category, area);
  const auto=selectedAutoFromObservation(o);
  const descLines=mergeUniqueLines(
    smartLineList(manual.desc),
    auto.desc,
    [`The observation shall be treated as applicable across the affected work area and similar locations, not only at the photographed location.`]
  );
  const immLines=mergeUniqueLines(smartLineList(manual.immediate), auto.immediate);
  const actLines=mergeUniqueLines(smartLineList(manual.actions), auto.actions,
    ['Closeout evidence shall include clear photographs, responsible person confirmation and verification by the supervision / OSH team.']
  );
  return {
    ...o,
    category:(!o.category||o.category==='Other')?(manual.category||auto.category):o.category,
    root:o.root || manual.root || auto.root,
    desc:bulleted(descLines),
    immediate:bulleted(immLines),
    actions:numbered(actLines),
    legal:unique([...(o.legal||[]),...(manual.legal||[]),...(auto.legal||[])])
  };
}
function finaliseObservationByMode(o){
  const mode=o.generationMode||'hybrid';
  if(mode==='auto'){
    const auto=selectedAutoFromObservation(o);
    return {...o,root:o.root||auto.root,desc:bulleted(auto.desc),immediate:bulleted(auto.immediate),actions:numbered(auto.actions),legal:unique([...(o.legal||[]),...(auto.legal||[])])};
  }
  if(mode==='manual') return o.manualComments ? applyManualToObservationObject(o) : o;
  if(o.manualComments && o.manualComments.trim()) return mergeManualAndAutoObservation(o);
  return o;
}
function combineFinalOnCard(card){
  const o={
    no:1,package:$('.package',card).value,cluster:$('.cluster',card).value.trim(),villa:$('.villaNo',card).value.trim(),
    category:$('.observationCategory',card).value,risk:$('.riskCategory',card).value,response:$('.responseCategory',card).value,owner:$('.actionOwner',card).value,
    root:$('.rootCause',card).value,closed:$('.dateClosed',card).value,manualComments:$('.manualComments',card).value.trim(),generationMode:$('.generationMode',card).value,
    desc:$('.observationDescription',card).value.trim(),immediate:$('.immediateAction',card).value.trim(),actions:$('.preventiveAction',card).value.trim(),legal:$$('.legalGrid input',card).filter(x=>x.checked).map(x=>x.value),photos:[]
  };
  if(!o.manualComments && o.generationMode!=='auto') { setStatus('Please enter manual comments first, or select Auto mode.',true); return; }
  const m=finaliseObservationByMode(o);
  if(m.category){ addOptionIfMissing($('.observationCategory',card),m.category); $('.observationCategory',card).value=m.category; }
  if(m.root){ addOptionIfMissing($('.rootCause',card),m.root); $('.rootCause',card).value=m.root; }
  $('.observationDescription',card).value=m.desc||'';
  $('.immediateAction',card).value=m.immediate||'';
  $('.preventiveAction',card).value=m.actions||'';
  $$('.legalGrid input',card).forEach(x=>x.checked=(m.legal||[]).includes(x.value));
  setStatus('Final combined observation preview is ready. You can still edit it before generating Word.');
}

// SMART BRIEF TEXT ENGINE
// If the user deletes the auto-filled wording and writes only a few words
// (example: "open DB and poor cable management"), this engine converts it
// into ALDAR/KEO style observation description, immediate action, action required,
// root cause and legal references for the Word report.
function isBriefManualText(text){
  const t=String(text||'').trim();
  if(!t) return false;
  const hasBullets=/[•\n]/.test(t);
  const hasReportStyle=/(it was observed|it has been observed|it was evident|action to be taken|reference photos|legal\/other)/i.test(t);
  return !hasBullets && !hasReportStyle && t.length<=180;
}
function hasAny(t,words){return words.some(w=>t.includes(w));}
function smartRuleFor(text,selectedCategory=''){
  const t=String(text||'').toLowerCase().replace(/\s+/g,' ');
  const cat=String(selectedCategory||'').toLowerCase();
  if(hasAny(t,['cold drinking water','drinking water','cold water','welfare','rest area','air condition','air conditioning','ac not working','a/c','toilet','washroom','amenities'])) return 'welfare';
  if(hasAny(t,['db','dbs','distribution board','open db','open dbd','cable','cables','earthing','generator','electrical','power cable','temporary electrical'])) return 'electrical';
  if(hasAny(t,['ladder','unsafe ladder','step ladder','a-frame ladder','a frame ladder','straight ladder','extension ladder'])) return 'ladder';
  if(hasAny(t,['scaffold','scaffolding','mobile scaffold','outrigger','green tag','red tag','plank','platform'])) return 'scaffold';
  if(hasAny(t,['excavation','trench','open trench','boundary wall','excavated','manhole','soil collapse'])) return 'excavation';
  if(hasAny(t,['permit','ptw','work permit','no permit','without permit','red flagged','red flag'])) return 'ptw';
  if(hasAny(t,['edge protection','leading edge','toe board','toeboard','guardrail','roof edge','window edge','fall protection'])) return 'edge';
  if(hasAny(t,['access','egress','walkway','pedestrian','blocked access','obstructed','route','access bridge','ramp'])) return 'access';
  if(hasAny(t,['housekeeping','waste','debris','poor housekeeping','material everywhere','garbage'])) return 'housekeeping';
  if(hasAny(t,['fire','extinguisher','smoke','hot work','combustible','chemical','coshh','storage','store','sprinkler'])) return 'fire';
  if(hasAny(t,['lifting','precast','a-frame','a frame','crane','rigging','sling','trailer','panel'])) return 'lifting';
  if(hasAny(t,['traffic','vehicle','man-machine','man machine','banksman','flagman','reversing','road'])) return 'traffic';
  if(hasAny(t,['mewp','plant','equipment','loader','machine','compressor','jackhammer','tool','power tool','grinder'])) return 'plant';
  if(hasAny(t,['ppe','helmet','gloves','goggles','face shield','harness'])) return 'ppe';
  if(hasAny(t,['msra','risk assessment','method statement','ramS'.toLowerCase()])) return 'msra';
  if(cat.includes('electrical')) return 'electrical';
  if(cat.includes('ladder')) return 'ladder';
  if(cat.includes('scaffold')) return 'scaffold';
  if(cat.includes('excavation')) return 'excavation';
  if(cat.includes('permit')||cat.includes('ptw')) return 'ptw';
  if(cat.includes('edge')) return 'edge';
  if(cat.includes('welfare')) return 'welfare';
  if(cat.includes('access')) return 'access';
  if(cat.includes('housekeeping')||cat.includes('waste')) return 'housekeeping';
  if(cat.includes('fire')||cat.includes('storage')) return 'fire';
  if(cat.includes('traffic')||cat.includes('logistics')||cat.includes('precast')) return 'traffic';
  if(cat.includes('plant')||cat.includes('tool')) return 'plant';
  if(cat.includes('ppe')) return 'ppe';
  if(cat.includes('msra')) return 'msra';
  return 'general';
}
const SMART_RULES={
  welfare:{category:'Welfare Arrangement',root:'Poor welfare management / Inadequate amenities / Poor supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADCD 2018 Fire & Life Safety Code of Practice','Aldar OSH MS Rev-08','Project Approved OSH Plan'],desc:['It has been observed that adequate welfare arrangements were not maintained at the workers’ rest area, including non-availability of cold drinking water facilities for the workforce.','Air-conditioning / ventilation arrangements were not functioning properly, resulting in uncomfortable and unsuitable rest area conditions for workers.','Smoke detector / fire detection arrangement was not provided or not maintained in the rest area, creating a fire and life safety concern.','The condition indicates poor supervision, inadequate welfare maintenance and weak routine inspection of worker amenity facilities.'],imm:['The welfare deficiency was immediately communicated to the responsible site team and contractor supervision.','The contractor was instructed to provide cold drinking water facilities for all workers without delay.','The contractor was instructed to inspect and repair the defective air-conditioning units and provide temporary alternative arrangements until full rectification.','The contractor was instructed to provide / restore approved smoke detectors or fire detection arrangements in the rest area and verify all welfare facilities.'],act:['Adequate cold drinking water facilities shall be provided and maintained continuously for all workers.','Air-conditioning and ventilation arrangements in the rest area shall be repaired, inspected and maintained in good working condition.','Approved smoke detectors / fire detection arrangements shall be provided and maintained in all rest areas and welfare facilities.','The contractor shall conduct a full welfare facility inspection and rectify similar deficiencies across the project, not only at the observed location.','A preventive maintenance and routine inspection schedule shall be implemented for welfare facilities, including drinking water, cooling, ventilation, cleanliness and fire readiness.','Responsible supervision shall monitor welfare arrangements daily and submit closeout evidence for verification by KEO / Hill.','Workers and supervisors shall be briefed to report welfare deficiencies immediately for timely corrective action.']},
  electrical:{category:'Electrical Safety / Portable Tools',root:'Electrical safety control failure / Poor supervision',legal:['ADOSH-SF CoP 15.0 - Electrical Safety','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that electrical distribution boards / temporary electrical arrangements were not properly secured, exposing personnel to electrical hazards and unauthorized access to live electrical components.','Poor cable management was observed, with temporary cables routed or placed in a manner that may create trip hazards, mechanical damage, unsafe power tapping and potential electrical incidents.','The condition indicates inadequate inspection, poor temporary electrical control and insufficient supervision of electrical safety requirements at the work front.'],imm:['Access to the affected electrical area was restricted immediately and the unsafe condition was communicated to the responsible supervisor and electrical team.','The electrical team was instructed to close and secure the DBs, verify cable routing and remove any unsafe electrical arrangement before allowing further use.','Workers were instructed not to use or approach the affected electrical arrangement until it was inspected and made safe by competent electrical personnel.'],act:['All distribution boards shall be kept closed, secured and locked at all times to prevent unauthorized access to electrical components.','A competent electrician shall inspect all DBs, cables, plugs, sockets, earthing arrangements and temporary electrical connections before further use.','All cables shall be properly routed through insulated supports, cable trays, cable ramps or overhead arrangements to prevent trip hazards and mechanical damage.','Damaged, exposed, poorly routed or unprotected cables shall be removed or replaced immediately.','Electrical warning signage and access control shall be provided where temporary electrical systems are installed.','Routine inspection and colour coding / tagging shall be implemented for electrical tools, DBs and temporary cable arrangements.','Supervisors and workers shall be briefed on electrical safety, cable management and reporting of unsafe electrical conditions.']},

  ladder:{category:'Work at Height',root:'Unsafe ladder use / Poor work at height supervision',legal:['ADOSH-SF CoP 37.0 - Ladders','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that an unsafe ladder was being used at the work location, creating risk of fall from height, loss of balance and serious injury.','The ladder arrangement was not suitable for the observed activity and was not controlled as a safe access method / working platform in line with project requirements.','This indicates poor work at height supervision, inadequate selection of access equipment and ineffective inspection before use.'],imm:['Unsafe ladder use was stopped immediately and the ladder was removed / restricted from further use.','The responsible supervisor was instructed to provide a safe access method or suitable working platform for the task.','Workers were instructed not to use ladders as working platforms or where the ladder cannot be secured and used safely.'],act:['Unsafe ladders shall be removed from use immediately and replaced with a safe access method or suitable working platform suitable for the task.','Ladders shall only be used for short-duration low-risk access activities where they are suitable, inspected, secured and used by trained workers.','Ladders shall not be used as working platforms for sustained work, side loading, overreaching or activities requiring both hands.','The responsible supervisor shall inspect ladder/access arrangements before work starts and stop work where safe access is not available.','Workers shall be briefed on safe ladder use, three-point contact, securing requirements, angle/positioning and prohibition of unsafe ladder practices.','Similar work locations shall be inspected to identify and remove unsafe ladders or improper temporary access arrangements.']},
  scaffold:{category:'Scaffolding',root:'Scaffolding inspection failure / Inadequate competent supervision',legal:['ADOSH-SF CoP 26.0 - Scaffolding','ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 37.0 - Ladders','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that scaffolding / ladder arrangements were not maintained in a safe condition and did not fully comply with the approved design, manufacturer requirements or project safety standards.','Unsafe conditions such as missing components, unsafe access, loose planks, inadequate guardrails, unstable arrangements or poor tagging may expose workers to fall hazards and scaffold instability.','This indicates ineffective scaffolding inspection, inadequate supervision and poor control of temporary access arrangements.'],imm:['Unsafe scaffold or ladder use was stopped immediately and access to the affected arrangement was restricted.','Workers were removed from the unsafe platform and the responsible scaffolding team / supervision team was instructed to rectify the condition.','The scaffold was instructed to be inspected by a competent scaffolding inspector before being released for use.'],act:['All unsafe scaffolds, ladders or temporary platforms shall be taken out of service immediately until rectified and inspected.','Scaffolds shall be erected, modified and dismantled only by competent scaffolders in line with approved design and manufacturer requirements.','All required components including guardrails, mid rails, toe boards, bracing, base plates, outriggers, access ladders and locking pins shall be installed before use.','A competent scaffolding inspector shall inspect and tag the scaffold after rectification, modification, adverse weather or any condition affecting stability.','Unauthorized modifications and loose plank arrangements shall be removed immediately.','Routine scaffold inspection records shall be maintained, and repeated non-compliances shall be escalated to project management.']},
  excavation:{category:'Excavation',root:'Poor excavation planning / Inadequate barricading control',legal:['ADOSH-SF CoP 29.0 - Excavation Work','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 17.0 - Safety Signage and Signals','ADOSH-SF CoP 21.0 - Permit to Work Systems','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that excavation / trench areas were not adequately protected with rigid barricades, warning signage and safe access arrangements.','The condition may expose workers and visitors to fall into excavation, edge collapse, falling materials, restricted emergency access and uncontrolled interaction with plant or vehicles.','The observation indicates inadequate excavation planning, poor barricading maintenance and insufficient field verification prior to work.'],imm:['Access to the unsafe excavation area was restricted immediately and personnel were kept away from the excavation edge.','The responsible engineer and HSE team were instructed to provide suitable barricades, warning signage and safe access arrangements without delay.','Any activity near the excavation was stopped until the required controls were verified by competent supervision.'],act:['All excavation areas shall be protected with rigid barricades / hard barriers and clear warning signs.','Safe access and egress shall be provided for all excavation activities before work starts.','Excavation permits shall be issued only after physical verification of barricading, access, edge stability, services and emergency arrangements.','Materials, blocks, equipment and spoil shall be kept away from excavation edges to maintain safe setback distance.','A competent person shall inspect excavations daily and after any change in condition, and inspection records shall be maintained.','Supervision shall ensure continuous monitoring of excavation protection until the excavation is backfilled or permanently protected.']},
  ptw:{category:'Permit to Work',root:'PTW system failure / Lack of field verification',legal:['ADOSH-SF CoP 21.0 - Permit to Work Systems','ADOSH-SF CoP 53.0 - OSH Management During Construction Work','Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'],desc:['It has been observed that the activity was being carried out without adequate Permit to Work control or without proper physical verification of the work location.','The permit arrangements did not sufficiently confirm the actual site condition, required supervision, safe access, isolations and task-specific control measures.','This reflects a breakdown in PTW implementation, supervision, work planning and field verification by the responsible team.'],imm:['The activity was stopped immediately and the permit was placed on hold pending full site verification.','The permit issuer, area engineer, HSE team and responsible supervisor were instructed to review the permit status and actual work conditions.','Work was not allowed to resume until the permit conditions, supervision and required controls were physically verified.'],act:['All activities found outside PTW control shall be suspended immediately until a valid permit is issued and approved by authorized personnel after physical site verification.','The PTW system shall remain under the control of the main contractor and permits shall not be signed without field verification.','Incomplete, incorrect or poorly drafted permits shall be cancelled and revalidated only after required controls are implemented.','Roles and responsibilities of permit issuer, receiver, approver and verifier shall be clearly communicated to engineers, supervisors and HSE personnel.','Routine PTW audits shall be conducted to verify permit quality, site controls and closeout evidence.','Repeated PTW non-compliance shall be escalated to project management for enforcement action.']},
  edge:{category:'Edge Protection',root:'Poor supervision / Inadequate fall prevention control',legal:['ADOSH-SF CoP 23.0 - Working at Heights','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that edge protection / leading edge controls were missing, incomplete, poorly secured or not maintained in accordance with project and legal requirements.','The condition may expose workers to fall from height and may also allow materials to fall from elevated areas where toe boards or secure mesh are not provided.','This indicates poor inspection, inadequate maintenance and insufficient supervision of fall prevention arrangements.'],imm:['Unsafe work near the leading edge was stopped immediately and access to the exposed area was restricted.','The responsible engineer and supervision team were instructed to reinstate complete and secure edge protection before allowing work to continue.','Workers were removed from the affected area until the edge protection system was verified.'],act:['All activities near unprotected leading edges shall be suspended until complete edge protection is installed and verified.','Edge protection shall include compliant top rails, mid rails, toe boards and secure mesh where required.','Edge protection systems shall be properly anchored and maintained to prevent displacement during work activities.','Missing, loose or damaged sections shall be reinstated immediately and checked across the wider work area.','A competent supervisor shall inspect edge protection daily and maintain evidence of closeout.','Workers and supervisors shall be briefed on maintaining fall prevention and falling object controls.']},
  access:{category:'Access and Egress',root:'Poor planning / Poor housekeeping / Poor supervision',legal:['ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 22.0 - Barricading of Hazards','ADOSH-SF CoP 17.0 - Safety Signage and Signals','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that access and egress arrangements were obstructed, poorly maintained or not suitable for safe movement to the work location.','Unsafe access arrangements such as single planks, uneven ramps, blocked routes, debris, cables or material storage may create slip, trip and fall hazards and affect emergency escape.','The condition indicates inadequate planning, housekeeping and supervision of access arrangements.'],imm:['Unsafe access routes were restricted immediately and workers were redirected to safer access points.','The responsible supervision team was instructed to remove obstructions and restore safe access without delay.','Work was held at the affected location where safe access and egress could not be ensured.'],act:['All unsafe and substandard access arrangements shall be removed immediately and replaced with safe access bridges, ramps, stairs or platforms.','Access and egress routes shall be kept clear of materials, cables, debris and protruding steel at all times.','A dedicated team shall be appointed for access installation, inspection and routine maintenance.','Access routes shall be clearly demarcated, provided with suitable signage and inspected daily.','PTW approval shall include physical verification of safe access and housekeeping conditions.','The workforce shall be briefed on maintaining safe access and emergency egress arrangements.']},
  housekeeping:{category:'Housekeeping / Waste Management',root:'Poor housekeeping / Poor supervision',legal:['ADOSH-SF CoP 54.0 - Waste Management','ADOSH-SF CoP 8.0 - General Workplace Amenities','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that housekeeping conditions were not maintained, with waste, debris or materials accumulated in work areas, access routes or near active work fronts.','The condition may create slip, trip and fall hazards, obstruct emergency access and contribute to fire or falling object risks.','This indicates inadequate housekeeping planning, poor supervision and weak control of subcontractor work areas.'],imm:['The responsible team was instructed to remove waste, debris and obstructions immediately from the affected area.','Access routes and work fronts were required to be cleaned and made safe before continuation of work.','Supervision was instructed to verify housekeeping closeout and prevent re-accumulation.'],act:['Waste and debris shall be removed from work fronts and access routes on a routine basis and at the end of each shift.','Dedicated waste collection points shall be provided and maintained for each work area where required.','Materials shall be stored only in designated areas and shall not obstruct access, emergency routes or workstations.','Housekeeping shall be included as part of PTW verification and job completion requirements.','Supervisors shall conduct routine housekeeping inspections and maintain closeout evidence.','Subcontractors shall be briefed and held accountable for maintaining clean and safe work areas.']},
  fire:{category:'Material Storage / Fire Protection',root:'Poor fire readiness / Poor material storage control',legal:['ADCD 2018 Fire & Life Safety Code of Practice','ADOSH-SF CoP 8.0 - General Workplace Amenities','ADOSH-SF CoP 28.0 - Hot Work Operations','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that materials / combustible items / chemicals were stored without adequate fire safety, segregation, access control or emergency readiness arrangements.','Fire protection arrangements such as extinguishers, hose reels, smoke detection, emergency access or fire wardens were not adequately maintained or verified.','The condition may increase fire load, delay emergency response and expose workers and assets to serious fire risk.'],imm:['The unsafe storage or fire readiness deficiency was communicated immediately to the responsible team for correction.','Ignition sources and unsafe storage arrangements were controlled, and the area was reviewed for immediate fire risk.','The contractor was instructed to provide suitable firefighting equipment and access control without delay.'],act:['A fire risk assessment shall be conducted for the affected storage / work area and suitable fire prevention controls shall be implemented.','Combustible materials and chemicals shall be stored only in designated, segregated and controlled storage areas.','Adequate firefighting equipment, inspection records, emergency contacts and access routes shall be maintained at all times.','Fire wardens shall be appointed for routine inspection and emergency readiness verification.','Materials shall be stacked safely below sprinkler height and clear of emergency routes.','Workers and supervisors shall be briefed on fire prevention, storage control and emergency response requirements.']},
  lifting:{category:'Lifting/Precast Installation',root:'Poor lifting/precast control / Inadequate planning',legal:['ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories','ADOSH-SF CoP 42.0 - Pre Cast Construction','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 44.0 - Traffic Management and Logistics','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that lifting / precast handling or installation arrangements were not adequately controlled in line with the approved lifting plan and project requirements.','The condition may expose workers to falling loads, unstable precast elements, unsafe trailer movement, inadequate exclusion zones or poor load securing arrangements.','This indicates inadequate planning, supervision and verification of lifting / precast installation controls.'],imm:['Unsafe lifting / precast activity was stopped immediately and the lifting area was controlled.','Personnel were removed from the lifting zone and the lifting supervisor / responsible engineer was instructed to verify the lifting arrangement.','The activity was not allowed to continue until the lifting plan, equipment certification, rigging and exclusion zone were confirmed.'],act:['All lifting and precast installation activities shall be carried out under an approved lifting plan and competent supervision.','Lifting equipment, accessories, A-frame arrangements, trailers and load securing methods shall be inspected and verified before use.','Exclusion zones shall be established and maintained during lifting and precast installation.','Each precast element shall be secured as per approved method statement and manufacturer requirements.','Banksman / flagman arrangements and traffic controls shall be provided where plant or trailers are moving.','Workers and supervisors shall be briefed on lifting, load control and exclusion zone requirements.']},
  traffic:{category:'Traffic &man-Machine Interface',root:'Poor traffic management / Man-machine interface failure',legal:['ADOSH-SF CoP 44.0 - Traffic Management and Logistics','ADOSH-SF CoP 33.0 - Working On or Adjacent to a Road','ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 22.0 - Barricading of Hazards','Aldar OSH MS Rev-08','Project Approved OSH Plan'],desc:['It has been observed that traffic / logistics or man-machine interface arrangements were not adequately controlled within the work area.','Unsafe interaction between pedestrians, vehicles, plant, trailers or live roads may expose personnel to struck-by, reversing, blind spot and uncontrolled movement hazards.','The condition indicates inadequate traffic planning, segregation, signage and supervision of plant / vehicle movement.'],imm:['The unsafe traffic movement or man-machine interface condition was controlled immediately and the affected route was restricted.','Plant / vehicle movement was held until suitable segregation, signage, banksman control and safe pedestrian routes were confirmed.','The logistics and supervision team were instructed to rectify the traffic control arrangement without delay.'],act:['Traffic management arrangements shall be planned and maintained, including pedestrian segregation, signage, speed control, lighting and banksman arrangements.','Plant and vehicle operators shall follow approved routes and shall not operate in uncontrolled pedestrian or work zones.','Safe pedestrian access shall be provided and maintained in all active work areas.','Reversing activities shall be controlled by competent banksman / flagman where required.','Routine logistics inspections shall verify that man-machine interface controls remain effective.','The workforce and drivers shall be briefed on traffic routes, blind spots and site movement rules.']},
  plant:{category:'Plant and Equipment',root:'Poor equipment inspection / Inadequate maintenance',legal:['ADOSH-SF CoP 36.0 - Plant and Equipment','ADOSH-SF CoP 35.0 - Portable Power Tools','ADOSH-SF CoP 15.0 - Electrical Safety','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that plant, equipment or portable tools were not adequately inspected, maintained or controlled before use.','Defective equipment, damaged tools, missing inspection evidence, unsafe attachments or poor emergency arrangements may expose workers to mechanical, electrical, fire or operational hazards.','The condition indicates inadequate pre-use inspection, poor maintenance control and insufficient supervision of plant and equipment safety.'],imm:['Unsafe plant, equipment or tools were removed from use immediately pending inspection and rectification.','The responsible supervisor / competent person was instructed to verify the equipment condition, certification and emergency arrangements before further use.','Workers were instructed not to operate defective or uninspected equipment.'],act:['All plant, equipment and portable tools shall be inspected by competent personnel before use and maintained in safe condition.','Defective, damaged, modified or uninspected equipment shall be removed from service immediately.','Pre-use inspection checklists, third-party certificates, inspection stickers and colour coding shall be maintained where applicable.','Emergency arrangements such as extinguishers, stop buttons, guards and access control shall be provided and checked.','Operators and workers shall be trained on safe operation, inspection and defect reporting requirements.','Routine monitoring shall be implemented by the supervision and HSE team to prevent recurrence.']},
  ppe:{category:'PPE',root:'Poor PPE compliance / Poor supervision',legal:['ADOSH-SF CoP 2.0 - Personal Protective Equipment','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that personnel were carrying out work without mandatory PPE or task-specific PPE required by the approved MSRA.','The absence of suitable PPE may expose workers to injury from impact, cuts, dust, flying particles, electrical hazards or fall-related risks depending on the activity.','This indicates inadequate supervision, weak enforcement and insufficient awareness of PPE requirements.'],imm:['Personnel not complying with PPE requirements were stopped and instructed to correct the unsafe condition immediately.','The responsible supervisor was instructed to ensure mandatory and task-specific PPE is provided before work continues.','Workers were reminded not to continue the activity without the required PPE.'],act:['Mandatory and task-specific PPE shall be provided and used as per the approved MSRA and site requirements.','Supervisors shall verify PPE compliance before and during the activity.','Workers shall be trained on correct PPE use, storage, maintenance and limitations.','Routine inspections shall be conducted to monitor compliance.','Repeated PPE violations shall be subject to enforcement action in line with project procedures.']},
  msra:{category:'MSRA Quality',root:'Poor MSRA implementation / Inadequate risk assessment',legal:['ADOSH-SF CoP 53.0 - OSH Management During Construction Work','ADOSH-SF CoP 53.1 - OSH Construction Management Plan','Aldar OSH MS Rev-08','Project Approved OSH Plan','MSRA'],desc:['It has been observed that the approved MSRA / task risk assessment did not adequately reflect the actual site condition or required controls at the work front.','The workforce and supervision did not demonstrate adequate understanding or implementation of the method statement and risk assessment requirements.','This indicates poor MSRA quality, weak communication and inadequate field verification of control measures.'],imm:['The activity was paused until the MSRA and actual site controls were reviewed by the responsible engineer and HSE team.','The supervisor was instructed to brief the workforce on task-specific hazards and required control measures.','Work was not allowed to continue until the required MSRA controls were implemented at the work front.'],act:['The MSRA shall be reviewed and updated to reflect actual site conditions, task sequence, hazards and control measures.','Supervisors shall conduct toolbox talks and communicate MSRA requirements to all involved workers before work starts.','Field verification shall be conducted to ensure that approved control measures are implemented at the work front.','Any change in site condition, work method or sequence shall trigger MSRA review before work continues.','The Construction Manager and HSE team shall monitor MSRA implementation and maintain evidence of briefing and compliance.']},
  general:{category:'Other',root:'Poor supervision / Planning and control failure',legal:['Aldar OSH MS Rev-08','Project Approved OSH Plan','OSH Construction Management Plan','MSRA'],desc:['It has been observed that an unsafe condition was present at the work location and required immediate corrective and preventive action.','The condition may expose workers, visitors or site assets to unacceptable risk if not controlled in a timely manner.','This indicates inadequate planning, supervision and monitoring of site safety requirements.'],imm:['The unsafe condition was communicated immediately to the responsible site team and temporary controls were implemented.','The affected activity or area was placed under control until suitable corrective measures were agreed and verified.','The responsible supervision team was instructed to rectify the issue without delay.'],act:['The contractor shall review the unsafe condition, identify the root cause and implement corrective and preventive actions to avoid recurrence.','The responsible management team shall verify closeout evidence and communicate lessons learned to relevant supervisors and workforce.','Routine inspection and monitoring shall be strengthened to ensure similar issues are identified and corrected early.','Supervision shall ensure project OSH requirements are implemented across the work area, not only at the specific observation location.']}
};
function smartExpandFromBrief(text,selectedCategory=''){
  const rule=SMART_RULES[smartRuleFor(text,selectedCategory)]||SMART_RULES.general;
  return JSON.parse(JSON.stringify(rule));
}
function applySmartBriefToCard(card){
  createStandardFromManual(card);
}
function enrichObservation(o){
  return finaliseObservationByMode(o);
}

function fillPick(sel,arr,ph){opt(sel,arr,ph)}
function chips(el,arr,ta,replace=false){el.innerHTML='';unique(arr).forEach((x,i)=>{let b=document.createElement('button');b.type='button';b.className='chip';b.textContent=(i+1)+'. '+(x.length>80?x.slice(0,80)+'...':x);b.title=x;b.onclick=()=>{ta.value=replace?x:(ta.value.trim()?ta.value.trim()+'\n'+x:x)};el.appendChild(b)})}
function addAttendee(seed={}){let f=$('#attendeeTpl').content.cloneNode(true);attendeeRows.appendChild(f);let r=attendeeRows.lastElementChild;$('.attendeeName',r).value=seed.name||'';$('.attendeeDesignation',r).value=seed.designation||'';$('.attendeeEntity',r).value=seed.entity||'KEO';$('.remove',r).onclick=()=>{if($$('#attendeeRows tr').length>1)r.remove();else setStatus('At least one attendee is required.',true)}}
function legalGrid(card){let g=$('.legalGrid',card);g.innerHTML='';LEGAL.forEach(ref=>{let l=document.createElement('label');l.className='legalPill';l.innerHTML=`<input type="checkbox" value="${ref}"><span>${ref}</span>`;g.appendChild(l)})}
function clusterText(v){v=String(v||'').trim();return v?(v.toLowerCase().startsWith('cluster')?v:'Cluster '+v):''}
function updateArea(card){let t=['Package '+($('.package',card).value||'-'),clusterText($('.cluster',card).value)||'-',$('.villaNo',card).value?`Villa ${$('.villaNo',card).value}`:'-'].join(' - ');$('.areaPreview',card).textContent='Area: '+t}
function apply(card,replace=true){
  let key=$('.observationCategory',card).value||'Other',p=PRESETS[key]||PRESETS.Other;
  fillPick($('.descriptionPick',card),p.desc,'Select description');
  fillPick($('.immediatePick',card),p.imm,'Select immediate action');
  fillPick($('.actionPick',card),p.act,'Select action');
  chips($('.descriptionChips',card),p.desc,$('.observationDescription',card),true);
  chips($('.immediateChips',card),p.imm,$('.immediateAction',card));
  chips($('.actionChips',card),p.act,$('.preventiveAction',card));
  // Manual-control behavior:
  // Category selection only prepares smart suggestions, root cause and legal references.
  // It will NOT overwrite Observation Description, Immediate Action, or Action Required.
  if($('.rootCause',card) && !$('.rootCause',card).value) $('.rootCause',card).value=p.root||'';
  if(replace){
    $('.rootCause',card).value=p.root||'';
    $('.observationDescription',card).value=bulleted(p.desc);
    $('.immediateAction',card).value=bulleted(p.imm);
    $('.preventiveAction',card).value=numbered(p.act);
  }
  let set=new Set(p.legal||[]);
  $$('.legalGrid input',card).forEach(c=>c.checked=set.has(c.value));
  updateArea(card);
}
function addObservation(seed={}){let f=$('#observationTpl').content.cloneNode(true);obsContainer.appendChild(f);let card=obsContainer.lastElementChild;opt($('.package',card),packages,'Select package');opt($('.observationCategory',card),CATEGORIES,'Select category');opt($('.rootCause',card),roots,'Select root cause');legalGrid(card);$('.package',card).onchange=()=>updateClusterAndOwner(card);$('.cluster',card).onchange=()=>updateArea(card);$('.villaNo',card).oninput=()=>updateArea(card);$('.observationCategory',card).onchange=()=>apply(card,false);$('.autofill',card).onclick=()=>apply(card,true);$('.smartImprove',card).onclick=()=>applySmartBriefToCard(card);if($('.buildFromManual',card)) $('.buildFromManual',card).onclick=()=>createStandardFromManual(card);if($('.combineFinal',card)) $('.combineFinal',card).onclick=()=>combineFinalOnCard(card);if($('.generationMode',card)) $('.generationMode',card).onchange=()=>setStatus('Final wording mode updated.');if($('.manualComments',card)) $('.manualComments',card).addEventListener('input',()=>previewManualInBoxes(card,false));$('.descriptionPick',card).onchange=e=>{$('.observationDescription',card).value=e.target.value};$('.immediatePick',card).onchange=e=>{$('.immediateAction',card).value=$('.immediateAction',card).value.trim()?$('.immediateAction',card).value.trim()+'\n'+e.target.value:e.target.value};$('.actionPick',card).onchange=e=>{$('.preventiveAction',card).value=$('.preventiveAction',card).value.trim()?$('.preventiveAction',card).value.trim()+'\n'+e.target.value:e.target.value};$('.removeObs',card).onclick=()=>{if($$('.obsCard').length>1){card.remove();renum()}else setStatus('At least one observation is required.',true)};$('.selectAllLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=true);$('.clearLegal',card).onclick=()=>$$('.legalGrid input',card).forEach(x=>x.checked=false);$('.evidencePhotos',card).onchange=e=>{let p=$('.photoPreview',card);p.innerHTML='';[...e.target.files].forEach(file=>{let r=new FileReader();r.onload=ev=>{let img=document.createElement('img');img.src=ev.target.result;p.appendChild(img)};r.readAsDataURL(file)})};Object.entries(seed).forEach(([k,v])=>{let n=$('.'+k,card);if(n)n.value=v});updateClusterAndOwner(card,true);if(!seed.observationCategory)$('.observationCategory',card).value='';apply(card,false);renum()}
function renum(){$$('.obsCard').forEach((c,i)=>$('.obsNo',c).textContent=i+1)}
function getData(){return{projectTitle:$('#projectTitle').value.trim(),date:$('#inspectionDate').value,time:$('#inspectionTime').value,ref:$('#referenceNo').value.trim(),attendees:$$('#attendeeRows tr').map(r=>({name:$('.attendeeName',r).value.trim(),designation:$('.attendeeDesignation',r).value.trim(),entity:$('.attendeeEntity',r).value})).filter(x=>x.name||x.designation),observations:$$('.obsCard').map((c,i)=>({no:i+1,package:$('.package',c).value,cluster:$('.cluster',c).value.trim(),villa:$('.villaNo',c).value.trim(),category:$('.observationCategory',c).value,risk:$('.riskCategory',c).value,response:$('.responseCategory',c).value,owner:$('.actionOwner',c).value,root:$('.rootCause',c).value,closed:$('.dateClosed',c).value,manualComments:$('.manualComments',c)?$('.manualComments',c).value.trim():'',generationMode:$('.generationMode',c)?$('.generationMode',c).value:'hybrid',desc:$('.observationDescription',c).value.trim(),immediate:$('.immediateAction',c).value.trim(),actions:$('.preventiveAction',c).value.trim(),legal:$$('.legalGrid input',c).filter(x=>x.checked).map(x=>x.value).concat($('.legalCustom',c).value.trim()?[$('.legalCustom',c).value.trim()]:[]),photos:[...$('.evidencePhotos',c).files]}))}}
function fmtDate(d){if(!d)return'';let [y,m,day]=d.split('-');return `${day}.${m}.${y}`}function fmtTime(t){if(!t)return'';let [h,m]=t.split(':').map(Number);let ap=h>=12?'PM':'AM';h=h%12||12;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')} ${ap}`}
function validate(d){if(!d.projectTitle)return'Project title is required.';if(!d.date)return'Date is required.';if(!d.ref)return'Reference number is required.';if(!d.attendees.length)return'At least one attendee is required.';for(let o of d.observations){if(!o.package)return`Observation ${o.no}: package is required.`;if(!o.category)return`Observation ${o.no}: category is required.`;if(!o.desc && !o.manualComments)return`Observation ${o.no}: description or manual comments are required.`;if(!o.actions && !o.manualComments)return`Observation ${o.no}: action required is required, or write manual comments and the system will generate it.`}return''}
async function arrBuf(file){return await file.arrayBuffer()}async function urlBuf(url){let r=await fetch(url);return await r.arrayBuffer()}
function para(text,opt={}){const {Paragraph,TextRun,AlignmentType}=docx;return new Paragraph({alignment:opt.center?AlignmentType.CENTER:undefined,spacing:{after:0,before:0,line:240},children:[new TextRun({text:String(text||' '),bold:!!opt.bold,font:'Poppins',size:opt.size||21,color:opt.color||'000000'})]})}
function cell(children,opt={}){const {TableCell,WidthType}=docx;return new TableCell({width:opt.width?{size:opt.width,type:WidthType.PERCENTAGE}:undefined,shading:opt.shade?{fill:'D9D9D9'}:undefined,borders:border,children:Array.isArray(children)?children:[children]})}
function textLines(text){return lines(text).map(x=>para(x))}
let border={top:{style:'single',size:6,color:'000000'},bottom:{style:'single',size:6,color:'000000'},left:{style:'single',size:6,color:'000000'},right:{style:'single',size:6,color:'000000'}};
async function generateWord(){try{const d=getData();d.observations=d.observations.map(enrichObservation);const err=validate(d);if(err){setStatus(err,true);return}const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,AlignmentType,Footer,ImageRun}=docx;let logo=await urlBuf('aldar.png');let attendeeRowsDoc=[new TableRow({children:[cell(para('Name',{bold:true,center:true}),{shade:true}),cell(para('Designation',{bold:true,center:true}),{shade:true}),cell(para('Entity',{bold:true,center:true}),{shade:true})]})];d.attendees.forEach(a=>attendeeRowsDoc.push(new TableRow({children:[cell(para(a.name,{center:true})),cell(para(a.designation,{center:true})),cell(para(a.entity,{center:true}))]})));let attendeesTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:attendeeRowsDoc});let responseTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:[new TableRow({children:[cell(para('Response Category',{bold:true,center:true}),{shade:true,width:22}),cell(para('Definition',{bold:true,center:true}),{shade:true,width:78})]}),...['A|An issue requiring immediate action to eliminate or reduce high risk','B|An issue requiring action within 24 hours to eliminate or reduce risk','C|An issue requiring action within 3 days to eliminate or reduce risk','D|An issue requiring action to meet best practice and continually improve standards at the site, with agreed timelines.'].map(x=>{let [a,b]=x.split('|');return new TableRow({children:[cell(para(a,{bold:true,center:true})),cell(para(b))]})})]});
let obsRows=[new TableRow({children:[cell(para('No.',{bold:true,center:true}),{shade:true,width:6}),cell(para('Observation',{bold:true,center:true}),{shade:true,width:64}),cell(para('By\nWhom',{bold:true,center:true}),{shade:true,width:10}),cell(para('Category',{bold:true,center:true}),{shade:true,width:8}),cell(para('Date\nClosed',{bold:true,center:true}),{shade:true,width:10})]})];let photoNo=1,allPhotos=[];for(let o of d.observations){let pars=[];pars.push(para(`Observation Category: ${o.category}`,{bold:true}));pars.push(para(`Risk Category: ${o.risk}`,{bold:true}));let area=[o.package?`Package ${o.package}`:'',clusterText(o.cluster),o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ');pars.push(para(`Area: ${area}`,{bold:true}));if(o.root)pars.push(para(`Likely Root Cause: ${o.root}`,{bold:true}));pars.push(para('Observation Description:',{bold:true}));pars.push(...textLines(o.desc));if(o.immediate){pars.push(para('Immediate Action Taken:',{bold:true}));pars.push(...textLines(o.immediate))}pars.push(para('Action to be taken as agreed, but not limited to:',{bold:true}));pars.push(...textLines(o.actions));if(o.photos.length){let start=photoNo,end=photoNo+o.photos.length-1;pars.push(para(start===end?`Reference photo ${String(start).padStart(2,'0')}`:`Reference photos ${String(start).padStart(2,'0')} to ${String(end).padStart(2,'0')}`,{bold:true}));photoNo=end+1;o.photos.forEach(p=>allPhotos.push(p))}if(o.legal.length){pars.push(para('Legal/other Requirements:',{bold:true}));o.legal.forEach(l=>pars.push(para(l)))}obsRows.push(new TableRow({children:[cell(para(o.no,{center:true})),cell(pars),cell(para(o.owner,{center:true})),cell(para(o.response,{bold:true,center:true})),cell(para(fmtDate(o.closed),{center:true}))]}))}
let obsTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:obsRows});let photoRows=[];let slots=Math.max(allPhotos.length,6);for(let i=0;i<slots;i+=3){let caps=[],imgs=[];for(let j=0;j<3;j++){let idx=i+j;caps.push(cell(para(`Photo ${String(idx+1).padStart(2,'0')}`,{bold:true,center:true})));if(allPhotos[idx]){let buf=await arrBuf(allPhotos[idx]);imgs.push(cell(new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:buf,transformation:{width:205,height:205}})]}))) }else imgs.push(cell([para(' '),para(' '),para(' ')]))}photoRows.push(new TableRow({children:caps}),new TableRow({children:imgs}))}let photosTable=new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:photoRows});let introArea=d.observations.map(o=>[o.package?`Package ${o.package}`:'',clusterText(o.cluster),o.villa?`Villa ${o.villa}`:''].filter(Boolean).join(' - ')).filter(Boolean)[0]||d.projectTitle;let doc=new Document({sections:[{properties:{page:{margin:{top:650,right:650,bottom:650,left:650}}},footers:{default:new Footer({children:[para('ALDAR OSH-MS Rev 08/ May-2025                              Appendix 13',{size:18})]})},children:[new Paragraph({alignment:AlignmentType.LEFT,children:[new ImageRun({data:logo,transformation:{width:74,height:74}})]}),para('OSH Inspection Report',{bold:true,center:true,size:30}),para(`Project Title: ${d.projectTitle}`,{bold:true}),new Paragraph({children:[new TextRun({text:`Date: ${fmtDate(d.date)}`,bold:true,font:'Poppins',size:21}),new TextRun({text:'                                             ',font:'Poppins',size:21}),new TextRun({text:`Time: ${fmtTime(d.time)}`,bold:true,font:'Poppins',size:21})]}),para(`Reference No: ${d.ref}`,{bold:true}),para('Attendees:',{bold:true}),attendeesTable,para(' '),responseTable,para(' '),para(`An OSH Inspection was carried out at ${introArea} on ${fmtDate(d.date)}. KEO International Consultants and contractor representatives were present during the OSH Site Inspection, and the following observations have been highlighted by KEO and appropriate actions should be taken by all the parties involved according to the response category and across the whole project.`),para('Observations:',{bold:true}),obsTable,para('Evidence photographs',{bold:true}),photosTable]}]});let blob=await Packer.toBlob(doc);let [y,m,day]=d.date.split('-');saveAs(blob,`ALDAR Projects OSH Inspection Report- ${d.ref}- ${day}-${m}-${y}_.docx`);setStatus('Final ALDAR Word file generated successfully.')}catch(e){console.error(e);setStatus('Error: '+e.message,true)}}
$('#addAttendeeBtn').onclick=()=>addAttendee();$('#addObservationBtn').onclick=()=>addObservation();$('#generateDocBtn').onclick=generateWord;
[
  {name:'Ugochukwu Godwin',designation:'OHS Manager',entity:'KEO'},
  {name:'Javed Iqbal',designation:'OSH Engineer',entity:'KEO'},
  {name:'Subbian Samraj',designation:'OHS Engineer',entity:'KEO'},
  {name:'Shakir Khan',designation:'OHS Engineer',entity:'KEO'},
  {name:'Shinoj M Chandran',designation:'OHS Officer',entity:'KEO'},
  {name:'Jackson Rodriguez',designation:'Safety Officer',entity:'KEO'},
  {name:'Abdelmonem Hussein',designation:'OSH Officer',entity:'KEO'}
].forEach(addAttendee);
addObservation();
