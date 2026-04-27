const MASTER = {
  "packages": [
    {
      "value": "4",
      "label": "Package 04"
    },
    {
      "value": "2",
      "label": "Package 02"
    },
    {
      "value": "3",
      "label": "Package 03"
    }
  ],
  "clusters": [
    "Cluster 2C",
    "Cluster 8A",
    "Cluster 4",
    "Cluster 5",
    "Cluster 6",
    "Cluster 3",
    "Cluster 7A",
    "Cluster 7B",
    "Cluster 8C",
    "Cluster 8D",
    "Cluster 1A",
    "Cluster 1B",
    "Cluster 8B",
    "Cluster 2B",
    "Cluster 2A"
  ],
  "clusterPackageMap": {
    "Cluster 2C": "4",
    "Cluster 8A": "2",
    "Cluster 4": "3",
    "Cluster 5": "3",
    "Cluster 6": "3",
    "Cluster 3": "3",
    "Cluster 7A": "2",
    "Cluster 7B": "2",
    "Cluster 8C": "2",
    "Cluster 8D": "2",
    "Cluster 1A": "4",
    "Cluster 1B": "4",
    "Cluster 8B": "2",
    "Cluster 2B": "4",
    "Cluster 2A": "4"
  },
  "riskCategories": [
    "High",
    "Medium",
    "Low"
  ],
  "responseCategories": [
    {
      "value": "A",
      "label": "A"
    },
    {
      "value": "B",
      "label": "B"
    },
    {
      "value": "C",
      "label": "C"
    },
    {
      "value": "D",
      "label": "D"
    }
  ],
  "actionOwners": [
    "TAJV",
    "Innovo"
  ],
  "rootCauses": [
    "Leadership failure",
    "Other",
    "Poor supervision",
    "Poor subcontractor control",
    "Poor planning",
    "Inadequate competence",
    "PTW failure"
  ],
  "observationCategories": [
    "Edge Protection",
    "Scaffolding",
    "Access and Egress",
    "Barricading Hazards",
    "Excavation Safety",
    "Permit to Work",
    "Housekeeping / Waste Management",
    "Electrical Safety",
    "Work at Height",
    "Falling Object Prevention",
    "PTW Implementation",
    "PTW Field Verification",
    "MSRA Quality",
    "Lifting / Precast Installation",
    "Traffic Interface",
    "Welfare Arrangement",
    "Fire Readiness",
    "Electrical Tool Safety",
    "Temporary Structures",
    "Other"
  ],
  "legalReferences": [
  "ADOSH-SF CoP 1.0 - Hazardous Materials",
  "ADOSH-SF CoP 1.1 - Management of Asbestos Containing Materials",
  "ADOSH-SF CoP 1.2 - Lead Exposure Management",
  "ADOSH-SF CoP 2.0 - Personal Protective Equipment",
  "ADOSH-SF CoP 3.0 - Occupational Noise",
  "ADOSH-SF CoP 3.1 - Vibration",
  "ADOSH-SF CoP 4.0 - First Aid and Medical Emergency Treatment",
  "ADOSH-SF CoP 5.0 - Occupational Health Screening and Medical Surveillance",
  "ADOSH-SF CoP 8.0 - General Workplace Amenities",
  "ADOSH-SF CoP 9.0 - Workplace Wellness",
  "ADOSH-SF CoP 9.1 - New and Expectant Mothers",
  "ADOSH-SF CoP 9.2 - Managing Work-Related Stress",
  "ADOSH-SF CoP 10.0 - Rehabilitation and Return to Work",
  "ADOSH-SF CoP 11.0 - Safety in the Heat",
  "ADOSH-SF CoP 12.0 - Prevention and Control of Legionnaires Disease",
  "ADOSH-SF CoP 13.0 - Violence in the Workplace",
  "ADOSH-SF CoP 14.0 - Manual Handling and Ergonomics",
  "ADOSH-SF CoP 14.1 - Manual Tasks Involving the Handling of People",
  "ADOSH-SF CoP 15.0 - Electrical Safety",
  "ADOSH-SF CoP 16.0 - OSH Requirements for People with Special Needs",
  "ADOSH-SF CoP 17.0 - Safety Signage and Signals",
  "ADOSH-SF CoP 18.0 - Employer Supplied Accommodation-General Requirements",
  "ADOSH-SF CoP 18.1 - Temporary Employer Supplied Accommodation",
  "ADOSH-SF CoP 19.0 - Occupational Food Handling and Food Preparation Areas",
  "ADOSH-SF CoP 20.0 - Safety in Design (Construction)",
  "ADOSH-SF CoP 21.0 - Permit to Work Systems",
  "ADOSH-SF CoP 22.0 - Barricading of Hazards",
  "ADOSH-SF CoP 23.0 - Working at Heights",
  "ADOSH-SF CoP 24.0 - Lock-out / Tag-out (Isolation)",
  "ADOSH-SF CoP 25.0 - Driver Fatigue Prevention",
  "ADOSH-SF CoP 26.0 - Scaffolding",
  "ADOSH-SF CoP 27.0 - Confined Spaces",
  "ADOSH-SF CoP 28.0 - Hot Work Operations",
  "ADOSH-SF CoP 29.0 - Excavation Work",
  "ADOSH-SF CoP 30.0 - Lone Working and/or in Remote Locations",
  "ADOSH-SF CoP 30.1 - Working in International Locations",
  "ADOSH-SF CoP 31.0 - Working on, Over or Adjacent to Water",
  "ADOSH-SF CoP 33.0 - Working On or Adjacent to a Road",
  "ADOSH-SF CoP 33.1 - Traffic Incident Site Management",
  "ADOSH-SF CoP 34.0 - Safe Use of Lifting Equipment and Lifting Accessories",
  "ADOSH-SF CoP 35.0 - Portable Power Tools",
  "ADOSH-SF CoP 36.0 - Plant and Equipment",
  "ADOSH-SF CoP 37.0 - Ladders",
  "ADOSH-SF CoP 38.0 - Concrete Placing Equipment",
  "ADOSH-SF CoP 39.0 - Overhead and Underground Services",
  "ADOSH-SF CoP 40.0 - False Work (Formwork)",
  "ADOSH-SF CoP 41.0 - Steel Erection",
  "ADOSH-SF CoP 42.0 - Pre Cast Construction",
  "ADOSH-SF CoP 43.0 - Temporary Structures",
  "ADOSH-SF CoP 44.0 - Traffic Management and Logistics",
  "ADOSH-SF CoP 45.0 - Underwater Activities",
  "ADOSH-SF CoP 46.0 - Underground Construction",
  "ADOSH-SF CoP 46.1 - Construction of Water Wells",
  "ADOSH-SF CoP 47.0 - Machine Guarding",
  "ADOSH-SF CoP 48.0 - Spray Finishing",
  "ADOSH-SF CoP 49.0 - Compressed Gases and Air",
  "ADOSH-SF CoP 50.0 - Abrasive Blasting and Associated Protective Coating Work",
  "ADOSH-SF CoP 51.0 - Powered Lift Trucks",
  "ADOSH-SF CoP 52.0 - Local Exhaust Ventilation",
  "ADOSH-SF CoP 53.0 - OSH Management During Construction Work",
  "ADOSH-SF CoP 53.1 - OSH Construction Management Plan",
  "ADOSH-SF CoP 54.0 - Waste Management",
  "Aldar OSH MS Rev-08",
  "Project Approved OSH Plan",
  "OSH Construction Management Plan",
  "ADCD 2018 Fire & Life Safety Code of Practice"
],
    "excelGapValues": [
    "Leadership failure",
    "Poor supervision",
    "Poor sub-contractor control",
    "PTW failure",
    "No significant gap observed",
    "Poor coordination",
    "Inadequate comptence",
    "Poor subcontractor control",
    "HSE Management System Implementation",
    "Planning and Control",
    "Inspection, Monitoring, and Compliance",
    "Communication of OHS procedures",
    "lack of OHS awareness in supervision level",
    "Lack of monitoring",
    "Training and awareness",
    "Supervision",
    "Inspection",
    "Lack of inspection",
    "Inadequate supervision",
    "PTW implementation",
    "Inadequate Supervison",
    "Inadequate supervsion",
    "Poor Planning",
    "2 . Training and awareness",
    "Inadequate planning of activities",
    "Lack of inspections",
    "Competancy",
    "Hot work activities were conducted without a fire watcher.",
    "Smoking was observed in an undesignated area.",
    "Materials were stored inside villas without fire sprinklers or fire extinguishers."
  ],
  "excelImmediateValues": [
    "Unsafe work practices were suspended immediately. The CM of the cluster was called but he refused to visit the location.",
    "The team was commended for their visible leadership in driving transformation at Cluster 8A.",
    "stopped the unsafe activities , called the area engineer to the location discuss about the corrective and preventive actions",
    "All activities inside the visited villa have been suspened and corrective and preventive actions required have been communicated with action owners .",
    "1. Maintain the pedestrian access \n2. Reinstate the barricades \n3. Provide access to the villas \n4.Apoint competent scaffolding crew",
    "Cordination Meeting conducted",
    "Coordination Meeting conducted",
    "Unsafe work has been suspended",
    "•\tUnsafe activities were stopped immediately. \n•\tHousekeeping, waste removal, and access rectification started",
    "unsafe blocks observed in walk fixed away from edge",
    "permit to work verification done on site.edge protection team was called to fix the edge protection and excavation barricades",
    "edge protection team was called to fix the edge protection and excavation barricades",
    "Instructed contractor to reverify all scaffolding",
    "Worker removed from the villa in adequate access and edge protection",
    "1. Worker removed from the villa \n2. safe access provided by the contractor \n3. allocated people fro material arrangements",
    "1. Appoint a competent team for barricading arrangements \n2. Provide rebar caps fro protruding steel \n3. Provide our riggers for scaffolding",
    "•\tWork suspended for steel fixing , inside villa with yellow or red flags \n•\tPermit suspended for all the villa with no adequat flagging system",
    "Adivised supervsison team to adress all concerns raised by KEO",
    "Leading edge activities which was carried out unsafely has been suspended .\nInstructed contractor to provide adequate edge proetction.",
    "Boundry wall excavation  has been suspended and corrective actions are communicated with action owners.",
    "Activity has been suspended and instructed contractor to verify the working platform",
    "PTW Cancelled",
    "1. Removed the non - inducted peolple from the site \n2. Instructed to appoint a resource for access arrangements \n3. Advised the engineer to allocate electricians to conduct DB inspection",
    "1 Removed persons from areas where inadequate access \n2 instructed to provide barricades in open slab edges \n3 suspended the scaffolding  activities due to a lack of sequence",
    "1. Suspended the activities in the affected areas \n2 . Instructed the project engineer to arrange safe access to villas",
    "•\tHot work was stopped, unsafe areas were barricaded, and smoking inside the villa was prohibited immediately.\nFire extinguishers were provided, and corrective safety measures were instructed for immediate implementation."
  ],
  "excelPreventiveValues": [
    "1. PTW must be controlled by the main contractor.\n2. Close supervision of sub-contractors by main contractor shall be ensured.\n3. Non-performing subcontractors shall not be paid and shall be removed from project.\n4. Non-performing construction team shall be replaced without delays",
    "The Construction Manager and his team were advised to ensure that sub-contractors do not mess up with their site. The following advise was given:\n1. No payment for work if site condition is below the acceptable standard.\n2. Close supervision of sub-contractors by the construction team of the main contractor.\n3. Housekeeping shall be maintined for all shift.\n4. Provide a temporary storage area for waste for each villa.\n5. PTW shall remain under the control of the main contractor.",
    "conduct coordination meetings , provide adequate facilities for waste collection",
    "Provide competent supervsion to ensure the activities inline with OSH requirements and proeprly managing the subcontractor.",
    "1. Preplan the activities\n2. Conduct a week's look-ahead planning to avoid conflicts \n3. Conduct training for the involved teams \n4. Evaluate the competency of the scaffolding crew",
    "Sub contractor shall be managed based on the project OSH Requirements",
    "Regular Training sessions shall be carried out",
    "Regular scaffolding and Distribution Board inspection",
    "Enforce strict supervision and permit compliance.\nImplement proper planning, housekeeping, and waste management systems.\nConduct regular inspections, training, and safety awareness programs.",
    "Enforce strict supervision and permit compliance.\nImplement proper planning, housekeeping, and waste management systems.\nConduct regular inspections, training, and safety awareness programs",
    "Competent scaffolding inspector shall be inspected all scaffolding units",
    "•\tEnforce strict supervision and permit compliance.\n•\tImplement proper planning, housekeeping, and waste management systems.\n•\tConduct regular inspections, training, and safety awareness programs.\n•\tAccess should always be well-maintained and inspected by a competent person \n•\tPermit to work should only be issued if the villa is safe to work in",
    "1. Conduct training and awareness on the site supervision level \n2. Conduct routine inspections\n3.",
    "1. Competency assessment should be conducted\n2. Period monitoring should be implemented \n3. Preventive maintenance should be conducted",
    "•\t•  Provide safe and proper access platforms (working platforms, access scaffolds, or mobile platforms) before starting rebar activities. \n•\t•  Ensure ladders and stairs are of industrial grade, secured, and positioned at safe angles. \n•\t•  Install temporary working platforms with guardrails where rebar work is done at height. \n•\t•  Conduct Task Risk Assessment (TRA) specifically for rebar activities before work starts. \n•\t•  Assign a competent supervisor to verify access arrangements daily. \n•\t•  Include access requirements in the method statement and toolbox talks. \n•\t•  Stop work immediately if safe access is not available.",
    "Close competent supervision &  \nPTW & MSRA requirements shall be implemented",
    "Close competent supervision & \nPTW & MSRA requirements shall be implemented",
    "1. Pre-plan the activities to avoid SIMOS \n2. Assess the adequacy of the inspection team \n3. Conduct preventive maintenance",
    "1. Ensure the working platforms are in place as per the MSRA \n2 Plan the activities to comply with pedestrian access \n3 ensure competent supervision",
    "Conduct training to for permit ( PTW) \nEnsure adequate supervisors are appointed\nCompetency assesment",
    "•\tEnforce strict compliance with hot work permit procedures, including mandatory fire watcher deployment. \n•\tEstablish and clearly mark designated smoking areas and prohibit smoking outside these zones. \n•\tEnsure all excavations, openings, and edges are permanently barricaded with proper signage. \n•\tProvide complete edge protection systems, including mesh and toe boards, at all elevated areas. \n•\tRestrict material storage inside villas and ensure adequate firefighting equipment is always available. \n•\tConduct regular HSE inspections, toolbox talks, and supervisory monitoring to prevent recurrence."
  ],
  "presets": {
    "Edge Protection": {
      "description": [
        "A. It has been observed that edge protection is not properly installed, as it is not adequately anchored, and the steel mesh is not securely fixed, therefore it is not effectively serving the purpose of fall prevention.",
        "B. Some window leading edges are not protected with complete guard rail system."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance",
        "Poor subcontractor control",
        "Leadership failure"
      ],
      "immediate": [
        "Unsafe work practices were suspended immediately near the leading edge.",
        "The responsible area engineer and supervision team were called to the location and instructed to rectify the unsafe condition.",
        "The affected area was isolated and workers were stopped from accessing the exposed edge."
      ],
      "preventive": [
        "Immediately suspend all activities near the leading edges where adequate edge protection systems are not provided.",
        "All leading edges shall be provided with proper edge protection systems in accordance with legal requirements and project OSH standards.",
        "Edge protection systems shall be properly anchored and secured to ensure stability and prevent displacement during use.",
        "Complete guardrail systems shall be installed, including top rails, mid rails, and toe boards, as per the applicable safety standards.",
        "All gaps and missing sections of edge protection shall be immediately reinstated to ensure continuous protection along the entire length of the leading edge.",
        "A comprehensive inspection of all edge protection systems across the work area shall be carried out by the site supervision and OSH team to ensure compliance.",
        "Regular inspections and monitoring shall be implemented to verify that edge protection systems remain intact and effective throughout the project duration."
      ],
      "legal": [
        "ADOSH-SF CoP 23.0 - Working at Heights",
        "ADOSH-SF CoP 22.0 - Barricading of Hazards",
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Scaffolding": {
      "description": [
        "A. It has been observed that spigot connections are not secured with an approved bolting system and parts of the scaffolding do not comply with the approved design.",
        "B. Any required scaffolding modifications shall be incorporated into the approved design prior to implementation."
      ],
      "gaps": [
        "Inspection, Monitoring, and Compliance",
        "Poor supervision",
        "Inadequate competence",
        "Poor planning"
      ],
      "immediate": [
        "Unsafe scaffold use was stopped immediately and access to the affected scaffold was restricted.",
        "The scaffold team and supervision were informed and instructed to inspect the full scaffold arrangement."
      ],
      "preventive": [
        "All spigot connections shall be secured using approved pins or bolting systems in accordance with the manufacturer’s specifications and scaffolding standards.",
        "Any unauthorized modifications made to the scaffolding shall be removed immediately and the structure shall be restored to its original approved configuration.",
        "If modifications are required, a revised scaffolding design shall be prepared and approved by a competent scaffolding engineer prior to execution.",
        "A competent scaffolding inspector shall carry out a full inspection after rectification and the scaffold tag shall be updated accordingly before use."
      ],
      "legal": [
        "ADOSH-SF CoP 26.0 - Scaffolding",
        "ADOSH-SF CoP 23.0 - Working at Heights",
        "ADOSH-SF CoP 22.0 - Barricading of Hazards",
        "Aldar OSH MS Rev-08"
      ]
    },
    "Access and Egress": {
      "description": [
        "A. Observed that access and egress arrangements are in poor condition and do not provide safe entry and exit for the workforce."
      ],
      "gaps": [
        "Planning and Control",
        "Inspection, Monitoring, and Compliance",
        "Poor supervision"
      ],
      "immediate": [
        "Unsafe access route was isolated and the supervision team was instructed to remove the hazard immediately."
      ],
      "preventive": [
        "All unsafe demarcation arrangements shall be removed immediately.",
        "Access routes shall be clearly defined using proper barricading systems.",
        "Adequate access and directional signboards shall be installed to clearly communicate safe entry and exit.",
        "All demarcation systems shall be maintained in good condition and regularly inspected to ensure effectiveness."
      ],
      "legal": [
        "ADOSH-SF CoP 22.0 - Barricading of Hazards",
        "Aldar OSH MS Rev-08",
        "OSH Construction Management Plan"
      ]
    },
    "Barricading Hazards": {
      "description": [
        "A. Unsafe conditions related to barricading hazards were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to barricading hazards was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for barricading hazards shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Excavation Safety": {
      "description": [
        "A. Unsafe conditions related to excavation safety were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to excavation safety was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for excavation safety shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Permit to Work": {
      "description": [
        "A. Unsafe conditions related to permit to work were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to permit to work was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for permit to work shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Housekeeping / Waste Management": {
      "description": [
        "A. Unsafe conditions related to housekeeping / waste management were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to housekeeping / waste management was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for housekeeping / waste management shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Electrical Safety": {
      "description": [
        "A. Unsafe conditions related to electrical safety were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to electrical safety was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for electrical safety shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Work at Height": {
      "description": [
        "A. Unsafe conditions related to work at height were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to work at height was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for work at height shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Falling Object Prevention": {
      "description": [
        "A. Unsafe conditions related to falling object prevention were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to falling object prevention was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for falling object prevention shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "PTW Implementation": {
      "description": [
        "A. Unsafe conditions related to ptw implementation were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to ptw implementation was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for ptw implementation shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "PTW Field Verification": {
      "description": [
        "A. Unsafe conditions related to ptw field verification were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to ptw field verification was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for ptw field verification shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "MSRA Quality": {
      "description": [
        "A. Unsafe conditions related to msra quality were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to msra quality was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for msra quality shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Lifting / Precast Installation": {
      "description": [
        "A. Unsafe conditions related to lifting / precast installation were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to lifting / precast installation was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for lifting / precast installation shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Traffic Interface": {
      "description": [
        "A. Unsafe conditions related to traffic interface were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to traffic interface was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for traffic interface shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Welfare Arrangement": {
      "description": [
        "A. Unsafe conditions related to welfare arrangement were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to welfare arrangement was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for welfare arrangement shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Fire Readiness": {
      "description": [
        "A. Unsafe conditions related to fire readiness were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to fire readiness was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for fire readiness shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Electrical Tool Safety": {
      "description": [
        "A. Unsafe conditions related to electrical tool safety were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to electrical tool safety was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for electrical tool safety shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Temporary Structures": {
      "description": [
        "A. Unsafe conditions related to temporary structures were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to temporary structures was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for temporary structures shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    },
    "Other": {
      "description": [
        "A. Unsafe conditions related to other were observed during the inspection and require corrective and preventive action."
      ],
      "gaps": [
        "Poor supervision",
        "Planning and Control",
        "Inspection, Monitoring, and Compliance"
      ],
      "immediate": [
        "Unsafe work related to other was stopped and the responsible supervision team was informed immediately."
      ],
      "preventive": [
        "Suitable control measures for other shall be implemented and maintained in accordance with legal and project requirements."
      ],
      "legal": [
        "Aldar OSH MS Rev-08",
        "Project Approved OSH Plan"
      ]
    }
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const attendeeRows = $("#attendeeRows");
const observationsContainer = $("#observationsContainer");
const attendeeTpl = $("#attendeeRowTemplate");
const observationTpl = $("#observationTemplate");
const statusBox = $("#statusBox");

function setStatus(message, tone = "normal") {
  statusBox.textContent = message;
  statusBox.style.borderColor = tone === "error" ? "#fda29b" : tone === "success" ? "#84cc16" : "#c9d3e0";
  statusBox.style.background = tone === "error" ? "#fff1f2" : tone === "success" ? "#f7fee7" : "#ffffff";
}
function fillSelect(select, items, placeholder = "Select") {
  select.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  select.appendChild(first);
  items.forEach(item => {
    const opt = document.createElement("option");
    if (typeof item === "string") { opt.value = item; opt.textContent = item; }
    else { opt.value = item.value; opt.textContent = item.label; }
    select.appendChild(opt);
  });
}
function fillSimpleSelect(select, items, placeholder = "Select suggestion") {
  select.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  select.appendChild(first);
  const seen = new Set();
  items.forEach(item => {
    const value = String(item || "").trim();
    const normalized = value.replace(/\s+/g, " ").toLowerCase();
    if (!value || seen.has(normalized)) return;
    seen.add(normalized);
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value.length > 120 ? value.slice(0, 120) + "..." : value;
    select.appendChild(opt);
  });
}
function appendToTextarea(textarea, text) {
  if (!text) return;
  const current = textarea.value.trim();
  textarea.value = current ? current + "\n" + text : text;
}
function setTextarea(textarea, content) {
  textarea.value = Array.isArray(content) ? content.join("\n") : (content || "");
}
function fillChips(container, items, textarea, replace=false) {
  container.innerHTML = "";
  const seen = new Set();
  const cleanItems = [];
  items.forEach(item => {
    const value = String(item || "").trim();
    const normalized = value.replace(/\s+/g, " ").toLowerCase();
    if (!value || seen.has(normalized)) return;
    seen.add(normalized);
    cleanItems.push(value);
  });
  cleanItems.forEach((item, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    const label = `${index + 1}. ${item}`;
    chip.textContent = label.length > 95 ? label.slice(0, 95) + "..." : label;
    chip.title = label;
    chip.addEventListener("click", () => {
      if (replace && !textarea.value.trim()) setTextarea(textarea, item);
      else appendToTextarea(textarea, item);
    });
    container.appendChild(chip);
  });
}
function updateAreaPreview(card) {
  const pkg = $(".package", card).value;
  const cluster = $(".cluster", card).value;
  const villa = $(".villaNo", card).value.trim();
  $(".areaPreview", card).textContent = `Area: Package ${pkg || "-"} - ${cluster || "-"} - Villa ${villa || "-"}`;
}
function getPresetKey(card) {
  const category = $(".observationCategory", card).value;
  if (MASTER.presets[category]) return category;
  return "Other";
}
function applyPresetToCard(card, replaceText = true) {
  const key = getPresetKey(card);
  const preset = MASTER.presets[key] || MASTER.presets["Other"];
  const gapOptions = [...new Set([...(preset.gaps || []), ...MASTER.excelGapValues])];
  const immediateOptions = [...new Set([...(preset.immediate || []), ...MASTER.excelImmediateValues])];
  const preventiveOptions = [...new Set([...(preset.preventive || []), ...MASTER.excelPreventiveValues])];

  fillSimpleSelect($(".descriptionPresetSelect", card), preset.description || [], "Select description");
  fillSimpleSelect($(".gapPresetSelect", card), gapOptions, "Select gap");
  fillSimpleSelect($(".immediatePresetSelect", card), immediateOptions, "Select immediate action");
  fillSimpleSelect($(".preventivePresetSelect", card), preventiveOptions, "Select preventive action");

  fillChips($(".descriptionChips", card), preset.description || [], $(".observationDescription", card), true);
  fillChips($(".gapChips", card), gapOptions, $(".topGaps", card));
  fillChips($(".immediateChips", card), immediateOptions, $(".immediateAction", card));
  fillChips($(".preventiveChips", card), preventiveOptions, $(".preventiveAction", card));
  $$(".preventiveChips .chip", card).forEach((chip, idx) => {
    chip.onclick = () => appendPreventiveTextarea($(".preventiveAction", card), preventiveOptions[idx]);
  });

  if (replaceText) {
    setTextarea($(".observationDescription", card), preset.description || []);
    const firstThree = gapOptions.slice(0, 3).map((g, i) => `${i+1}. ${g}`);
    setTextarea($(".topGaps", card), firstThree);
    setTextarea($(".immediateAction", card), preset.immediate || []);
    setTextarea($(".preventiveAction", card), humanizePreventiveAction((preset.preventive || []).map((p, i) => `${i+1}. ${p}`).join("\n")));
  }

  const legalValues = new Set(preset.legal || []);
  $$('.legal-grid input[type="checkbox"]', card).forEach(x => x.checked = legalValues.has(x.value));
}
function addAttendee(seed = null) {
  const fragment = attendeeTpl.content.cloneNode(true);
  const row = fragment.querySelector("tr");
  attendeeRows.appendChild(row);
  const live = attendeeRows.lastElementChild;
  $(".remove-row", live).addEventListener("click", () => {
    if ($$("#attendeeRows tr").length === 1) return setStatus("At least one attendee row should remain.", "error");
    live.remove();
  });
  if (seed) {
    $(".attendeeName", live).value = seed.name || "";
    $(".attendeeDesignation", live).value = seed.designation || "";
    $(".attendeeEntity", live).value = seed.entity || "KEO";
  }
}
function addLegalGrid(container) {
  container.innerHTML = "";
  MASTER.legalReferences.forEach(ref => {
    const label = document.createElement("label");
    label.className = "legal-pill";
    label.innerHTML = `<input type="checkbox" value="${ref}"><span>${ref}</span>`;
    container.appendChild(label);
  });
}
function renderPhotoPreview(input, preview) {
  preview.innerHTML = "";
  [...(input.files || [])].forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = e => {
      const item = document.createElement("div");
      item.className = "photo-thumb";
      item.innerHTML = `<img src="${e.target.result}" alt="${file.name}"><small>Photo ${String(index + 1).padStart(2, "0")}</small>`;
      preview.appendChild(item);
    };
    reader.readAsDataURL(file);
  });
}
function renumberObs() { $$(".obs-card").forEach((card, index) => $(".obs-number", card).textContent = index + 1); }
function addObservation(seed = null) {
  const fragment = observationTpl.content.cloneNode(true);
  const card = fragment.querySelector(".obs-card");
  fillSelect($(".package", card), MASTER.packages, "Select package");
  fillSelect($(".cluster", card), MASTER.clusters, "Select cluster");
  fillSelect($(".observationCategory", card), MASTER.observationCategories, "Select category");
  fillSelect($(".riskCategory", card), MASTER.riskCategories, "Select risk");
  fillSelect($(".responseCategory", card), MASTER.responseCategories, "Select category");
  fillSelect($(".actionOwner", card), MASTER.actionOwners, "Select owner");
  fillSelect($(".rootCause", card), MASTER.rootCauses, "Select root cause");
  addLegalGrid($(".legal-grid", card));
  observationsContainer.appendChild(card);
  const live = observationsContainer.lastElementChild;

  $(".cluster", live).addEventListener("change", () => {
    const mapped = MASTER.clusterPackageMap[$(".cluster", live).value];
    if (mapped) $(".package", live).value = mapped;
    updateAreaPreview(live);
  });
  $(".package", live).addEventListener("change", () => updateAreaPreview(live));
  $(".villaNo", live).addEventListener("input", () => updateAreaPreview(live));
  $(".observationCategory", live).addEventListener("change", () => applyPresetToCard(live, true));
  $(".autofill-btn", live).addEventListener("click", () => applyPresetToCard(live, true));
  $(".descriptionPresetSelect", live).addEventListener("change", e => setTextarea($(".observationDescription", live), e.target.value));
  $(".gapPresetSelect", live).addEventListener("change", e => appendToTextarea($(".topGaps", live), e.target.value));
  $(".immediatePresetSelect", live).addEventListener("change", e => appendToTextarea($(".immediateAction", live), e.target.value));
  $(".preventivePresetSelect", live).addEventListener("change", e => appendPreventiveTextarea($(".preventiveAction", live), e.target.value));
  $(".evidencePhotos", live).addEventListener("change", () => renderPhotoPreview($(".evidencePhotos", live), $(".photo-preview", live)));
  $(".remove-obs", live).addEventListener("click", () => {
    if ($$(".obs-card").length === 1) return setStatus("At least one observation is required.", "error");
    live.remove(); renumberObs();
  });
  $(".select-all-legal", live).addEventListener("click", () => $$('.legal-grid input[type="checkbox"]', live).forEach(x => x.checked = true));
  $(".clear-all-legal", live).addEventListener("click", () => $$('.legal-grid input[type="checkbox"]', live).forEach(x => x.checked = false));

  if (seed) Object.entries(seed).forEach(([key, value]) => { const target = live.querySelector("." + key); if (target) target.value = value; });
  applyPresetToCard(live, false);
  updateAreaPreview(live);
  renumberObs();
}
function getAttendees() {
  return $$("#attendeeRows tr").map(row => ({
    name: $(".attendeeName", row).value.trim(),
    designation: $(".attendeeDesignation", row).value.trim(),
    entity: $(".attendeeEntity", row).value
  })).filter(x => x.name || x.designation || x.entity);
}
function getLegalRefs(card) {
  const refs = $$('.legal-grid input[type="checkbox"]', card).filter(x => x.checked).map(x => x.value);
  const custom = $(".legalCustom", card).value.trim();
  if (custom) refs.push(custom);
  return refs;
}
function getObservations() {
  return $$(".obs-card").map((card, index) => ({
    no: index + 1,
    package: $(".package", card).value,
    cluster: $(".cluster", card).value,
    villaNo: $(".villaNo", card).value.trim(),
    areaText: $(".areaPreview", card).textContent.trim(),
    observationCategory: $(".observationCategory", card).value,
    riskCategory: $(".riskCategory", card).value,
    responseCategory: $(".responseCategory", card).value,
    actionOwner: $(".actionOwner", card).value,
    topGaps: $(".topGaps", card).value.trim(),
    observationDescription: $(".observationDescription", card).value.trim(),
    preventiveAction: humanizePreventiveAction($(".preventiveAction", card).value.trim()),
    rootCause: $(".rootCause", card).value,
    dateClosed: $(".dateClosed", card).value,
    immediateAction: $(".immediateAction", card).value.trim(),
    evidenceLabel: $(".evidenceLabel", card).value.trim(),
    legalRefs: getLegalRefs(card),
    photos: [...($(".evidencePhotos", card).files || [])]
  }));
}
function validateData(data) {
  if (!data.projectTitle) return "Project title is required.";
  if (!data.inspectionDate) return "Date is required.";
  if (!data.referenceNo) return "Reference number is required.";
  if (!data.attendees.length) return "Add at least one attendee.";
  if (!data.observations.length) return "Add at least one observation.";
  for (const obs of data.observations) {
    if (!obs.package) return `Observation ${obs.no}: package is required.`;
    if (!obs.cluster) return `Observation ${obs.no}: cluster is required.`;
    if (!obs.villaNo) return `Observation ${obs.no}: villa number is required.`;
    if (!obs.observationCategory) return `Observation ${obs.no}: observation category is required.`;
    if (!obs.riskCategory) return `Observation ${obs.no}: risk category is required.`;
    if (!obs.actionOwner) return `Observation ${obs.no}: By Whom is required.`;
    if (!obs.responseCategory) return `Observation ${obs.no}: category is required.`;
    if (!obs.observationDescription) return `Observation ${obs.no}: observation description is required.`;
    if (!obs.preventiveAction) return `Observation ${obs.no}: preventive action is required.`;
  }
  return "";
}
function fmtDate(d) { if (!d) return ""; const dt = new Date(d + "T00:00:00"); return `${String(dt.getDate()).padStart(2,"0")}.${String(dt.getMonth()+1).padStart(2,"0")}.${dt.getFullYear()}`; }
function fmtTime(t) { if (!t) return ""; const [hh, mm] = t.split(":"); const h = Number(hh); return `${String(h % 12 || 12).padStart(2,"0")}:${mm} ${h >= 12 ? "PM" : "AM"}`; }
function splitLines(text) { return (text || "").split(/\n+/).map(v => v.trim()).filter(Boolean); }

function normalizeActionText(value) {
  return String(value || "")
    .replace(/[•]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const PREVENTIVE_ACTION_PATTERNS = [
  {
    match: /ptw must be controlled by the main contractor|ptw shall remain under the control|permit compliance/i,
    detail: "Permit-to-work control shall remain fully under the authority of the main contractor. No activity shall proceed unless the permit is valid, the work front has been physically verified, and all required precautions are fully in place. The responsible supervision team shall closely monitor the activity during execution to ensure compliance with the approved permit conditions and project OSH requirements."
  },
  {
    match: /close supervision of sub-?contractors|provide competent superv|strict supervision|close competent supervision/i,
    detail: "Close and competent supervision shall be maintained by the responsible construction and HSE team to monitor all subcontractor activities, verify compliance with the approved method statement and risk assessment, and intervene immediately whenever any unsafe act, unsafe condition, or procedural deviation is identified on site."
  },
  {
    match: /conduct coordination meetings|pre-?plan|look-?ahead planning|simos|simops/i,
    detail: "The activities shall be properly pre-planned through regular coordination meetings and short-term look-ahead planning so that work interfaces, simultaneous operations, access arrangements, and resource requirements are identified in advance. This shall help eliminate conflicts between trades and ensure that the work is executed in a safe and controlled manner."
  },
  {
    match: /waste collection|housekeeping|temporary storage area for waste|waste management/i,
    detail: "Adequate housekeeping arrangements and waste collection facilities shall be provided and maintained at all times. Waste shall be removed on a routine basis, temporary storage locations shall be clearly designated, and all work areas shall be kept clean and unobstructed to prevent slip, trip, fire, and access-related hazards."
  },
  {
    match: /training and awareness|regular training sessions|toolbox talks/i,
    detail: "Regular training and awareness sessions shall be conducted for supervisors, operatives, and subcontractor teams to reinforce project OSH requirements, hazard identification, permit controls, and the safe execution of high-risk activities. The effectiveness of these sessions shall be checked through follow-up inspections and supervisory monitoring."
  },
  {
    match: /scaffold|scaffolding inspector/i,
    detail: "All scaffolding and temporary access arrangements shall be inspected by a competent scaffolding inspector at the required frequency, and no scaffold shall be used unless it fully complies with the approved design, inspection requirements, and tagging system applicable to the project."
  },
  {
    match: /distribution board inspection|db inspection|electrical/i,
    detail: "Distribution boards, temporary electrical systems, and associated tools and cables shall be routinely inspected by competent persons to confirm that the equipment remains safe, compliant, and suitable for continued use within the work area."
  },
  {
    match: /safe and proper access platforms|working platforms|access scaffolds|mobile platforms|safe access/i,
    detail: "Safe and proper access arrangements, including working platforms, access scaffolds, ladders, and mobile platforms where applicable, shall be provided and maintained in accordance with the approved method statement and risk assessment. These arrangements shall be inspected regularly to ensure stability, suitability, and safe access for the workforce."
  },
  {
    match: /competency assessment|competenc/i,
    detail: "A formal competency assessment shall be carried out for the personnel involved in the activity to verify that only trained, experienced, and authorized workers and supervisors are assigned to the task. Any identified competency gap shall be addressed through retraining, reassessment, and closer supervision."
  },
  {
    match: /preventive maintenance|period monitoring|monitoring/i,
    detail: "Periodic monitoring and preventive maintenance shall be implemented to ensure that plant, tools, temporary systems, and safety arrangements remain effective and do not deteriorate during the execution of the work."
  },
  {
    match: /non-performing subcontractors shall not be paid|non-performing construction team shall be replaced/i,
    detail: "The performance of subcontractors and construction teams shall be closely reviewed by project management, and any repeated failure to comply with project OSH requirements shall be addressed through formal corrective measures, including suspension of work, replacement of non-performing personnel, and enforcement through the contractor’s management system."
  },
  {
    match: /hot work permit|fire watcher|fire watch|smoking/i,
    detail: "Hot work activities shall be carried out only under a valid hot work permit, with continuous supervision, appropriate firefighting equipment, and a dedicated fire watch where required. Smoking shall be restricted to designated areas only, and combustible materials shall be controlled or removed from the work area to prevent fire incidents."
  }
];

function expandPreventiveActionLine(line) {
  const clean = normalizeActionText(line).replace(/^\d+[\.)]\s*/, "").trim();
  if (!clean) return "";
  for (const rule of PREVENTIVE_ACTION_PATTERNS) {
    if (rule.match.test(clean)) return rule.detail;
  }
  if (clean.length < 120) {
    return `${clean.charAt(0).toUpperCase()}${clean.slice(1)} This requirement shall be implemented by the responsible construction and supervision team, verified through routine inspections, and sustained through continuous monitoring to ensure full compliance with project OSH requirements.`;
  }
  return clean;
}

function humanizePreventiveAction(value) {
  const lines = splitLines(value);
  if (!lines.length) return value || "";
  const expanded = [];
  const seen = new Set();
  for (const line of lines) {
    const detailed = expandPreventiveActionLine(line);
    const key = normalizeActionText(detailed).toLowerCase();
    if (key && !seen.has(key)) {
      seen.add(key);
      expanded.push(detailed);
    }
  }
  return expanded.join("\n\n");
}

function appendPreventiveTextarea(textarea, text) {
  const detailed = humanizePreventiveAction(text);
  if (!detailed) return;
  const current = textarea.value.trim();
  textarea.value = current ? current + "\n\n" + detailed : detailed;
}

function buildPhotoReferenceText(start, end) {
  if (!start || !end) return "";
  const s = String(start).padStart(2, "0");
  const e = String(end).padStart(2, "0");
  return start === end ? `Reference Photo ${s}` : `Reference Photos ${s} to ${e}`;
}
async function fileToArrayBuffer(file) { return await file.arrayBuffer(); }
function docParagraph(text, opts = {}) {
  return new window.docx.Paragraph({ spacing: opts.spacing || { after: 0, before: 0, line: 240 }, alignment: opts.alignment, children: [new window.docx.TextRun({ text, bold: !!opts.bold, font: "Poppins", size: opts.size || 22, color: opts.color })] });
}
function base64ToUint8Array(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
const EMBEDDED_LOGO_BASE64 = "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";
async function generateWord() {
  const data = { projectTitle: $("#projectTitle").value.trim(), inspectionDate: $("#inspectionDate").value, inspectionTime: $("#inspectionTime").value, referenceNo: $("#referenceNo").value.trim(), attendees: getAttendees(), observations: getObservations() };
  const error = validateData(data);
  if (error) return setStatus(error, "error");
  setStatus("Generating final updated ALDAR Projects Word file...");
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, Footer, ImageRun } = window.docx;
  const border = { top:{style:BorderStyle.SINGLE,size:4,color:"000000"}, bottom:{style:BorderStyle.SINGLE,size:4,color:"000000"}, left:{style:BorderStyle.SINGLE,size:4,color:"000000"}, right:{style:BorderStyle.SINGLE,size:4,color:"000000"} };
  const noneBorder = { top:{style:BorderStyle.NONE}, bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE}, right:{style:BorderStyle.NONE} };
  const logoBuffer = base64ToUint8Array(EMBEDDED_LOGO_BASE64);

  const headerLogo = new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [new ImageRun({ data: logoBuffer, transformation: { width: 74, height: 109 } })]
  });
  const headerSubtitle = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 140 },
    children: [new TextRun({ text: "OSH Inspection Report", bold: true, font: "Poppins", size: 28, color: "7f7f7f" })]
  });

  const attendeeRowsDoc = [new TableRow({children:[
    new TableCell({borders:border,children:[docParagraph("Name",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,children:[docParagraph("Designation",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,children:[docParagraph("Entity",{bold:true,alignment:AlignmentType.CENTER})]})
  ]})];
  data.attendees.forEach(a => attendeeRowsDoc.push(new TableRow({children:[
    new TableCell({borders:border,children:[docParagraph(a.name || " ",{alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,children:[docParagraph(a.designation || " ",{alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,children:[docParagraph(a.entity || " ",{alignment:AlignmentType.CENTER})]})
  ]})));
  const attendeesTable = new Table({width:{size:100,type:WidthType.PERCENTAGE}, rows: attendeeRowsDoc});

  const responseTable = new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[
    new TableRow({children:[
      new TableCell({borders:border,width:{size:20,type:WidthType.PERCENTAGE},children:[docParagraph("Response Category",{bold:true})]}),
      new TableCell({borders:border,width:{size:80,type:WidthType.PERCENTAGE},children:[docParagraph("Definition",{bold:true})]})
    ]}),
    new TableRow({children:[new TableCell({borders:border,children:[docParagraph("A",{bold:true,alignment:AlignmentType.CENTER})]}),new TableCell({borders:border,children:[docParagraph("An issue requiring immediate action to eliminate or reduce high risk")]})]}),
    new TableRow({children:[new TableCell({borders:border,children:[docParagraph("B",{bold:true,alignment:AlignmentType.CENTER})]}),new TableCell({borders:border,children:[docParagraph("An issue requiring action within 24 hours to eliminate or reduce risk")]})]}),
    new TableRow({children:[new TableCell({borders:border,children:[docParagraph("C",{bold:true,alignment:AlignmentType.CENTER})]}),new TableCell({borders:border,children:[docParagraph("An issue requiring action within 3 days to eliminate or reduce risk")]})]}),
    new TableRow({children:[new TableCell({borders:border,children:[docParagraph("D",{bold:true,alignment:AlignmentType.CENTER})]}),new TableCell({borders:border,children:[docParagraph("An issue requiring action to meet best practice and continually improve standards at the site, with agreed timelines.")]})]})
  ]});

  const obsRows = [new TableRow({children:[
    new TableCell({borders:border,width:{size:4,type:WidthType.PERCENTAGE},children:[docParagraph("No.",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,width:{size:64,type:WidthType.PERCENTAGE},children:[docParagraph("Observation",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,width:{size:8,type:WidthType.PERCENTAGE},children:[docParagraph("By\nWhom",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,width:{size:8,type:WidthType.PERCENTAGE},children:[docParagraph("Category",{bold:true,alignment:AlignmentType.CENTER})]}),
    new TableCell({borders:border,width:{size:8,type:WidthType.PERCENTAGE},children:[docParagraph("Date\nClosed",{bold:true,alignment:AlignmentType.CENTER})]})
  ]})];

  let nextPhotoNumber = 1;
  data.observations.forEach(obs => {
    const observationParagraphs = [];
    const addLine = (text, bold=false) => observationParagraphs.push(docParagraph(text, {bold, size:22}));
    const areaSegments = [];
    if (obs.package) areaSegments.push({ text: `Package ${obs.package}`, highlight: true });
    if (obs.cluster) areaSegments.push({ text: obs.cluster, highlight: true });
    if (obs.villaNo) areaSegments.push({ text: `Villa ${obs.villaNo}`, highlight: true });
    addLine(`Observation Category:  ${obs.observationCategory}`, true);
    addLine(`Risk Category: ${obs.riskCategory}`, true);
    observationParagraphs.push(new Paragraph({
      spacing: { after: 0, before: 0, line: 240 },
      children: [
        new TextRun({ text: "Area: ", bold: true, font: "Poppins", size: 22 }),
        ...areaSegments.flatMap((segment, idx) => [
          new TextRun({ text: segment.text, bold: true, font: "Poppins", size: 22 }),
          ...(idx < areaSegments.length - 1 ? [new TextRun({ text: " - ", bold: true, font: "Poppins", size: 22 })] : [])
        ])
      ]
    }));
    if (obs.rootCause) addLine(`Likely Root Cause:${obs.rootCause}`, true);
    if (obs.topGaps) { addLine("Top 3 Gaps Observed:", true); splitLines(obs.topGaps).forEach(line => addLine(line, false)); }
    addLine("Observation Description:", true);
    splitLines(obs.observationDescription).forEach(line => addLine(line, false));
    if (obs.immediateAction) { addLine("Immediate Action Taken:", true); splitLines(obs.immediateAction).forEach(line => addLine(line, false)); }
    addLine("Action to be taken as agreed, but not limited to:", true);
    splitLines(humanizePreventiveAction(obs.preventiveAction)).forEach(line => addLine(line, false));
    const photoCount = obs.photos.length;
    if (photoCount > 0) {
      const photoRefText = buildPhotoReferenceText(nextPhotoNumber, nextPhotoNumber + photoCount - 1);
      if (photoRefText) addLine(photoRefText, true);
      nextPhotoNumber += photoCount;
    }
    if (obs.legalRefs.length) { addLine("Legal/other Requirements:", true); obs.legalRefs.forEach(line => addLine(line, false)); }

    obsRows.push(new TableRow({children:[
      new TableCell({borders:border,children:[docParagraph(String(obs.no), {alignment:AlignmentType.CENTER})]}),
      new TableCell({borders:border,children:observationParagraphs}),
      new TableCell({borders:border,children:[docParagraph(obs.actionOwner || " ", {alignment:AlignmentType.CENTER})]}),
      new TableCell({borders:border,children:[docParagraph(obs.responseCategory || " ", {alignment:AlignmentType.CENTER})]}),
      new TableCell({borders:border,children:[docParagraph(fmtDate(obs.dateClosed), {alignment:AlignmentType.CENTER})]})
    ]}));
  });
  const obsTable = new Table({width:{size:100,type:WidthType.PERCENTAGE}, rows: obsRows});

  const allPhotos = [];
  data.observations.forEach(obs => obs.photos.forEach(file => allPhotos.push({label:obs.evidenceLabel, file})));
  const photoRows = [];
  const slotCount = Math.max(allPhotos.length, 10);
  for (let i=0;i<slotCount;i+=3) {
    const captionCells = [], imageCells = [];
    for (let j=0;j<3;j++) {
      const item = allPhotos[i+j];
      const caption = item ? `${item.label ? item.label + " - " : ""}Photo ${String(i+j+1).padStart(2,"0")}` : `Photo ${String(i+j+1).padStart(2,"0")}`;
      captionCells.push(new TableCell({borders:border,children:[docParagraph(caption,{bold:true,alignment:AlignmentType.CENTER})]}));
      if (item) {
        const buf = await fileToArrayBuffer(item.file);
        imageCells.push(new TableCell({borders:border,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:buf,transformation:{width:240,height:240}})]})]}));
      } else {
        imageCells.push(new TableCell({borders:border,children:[docParagraph(" "),docParagraph(" "),docParagraph(" ")]}));
      }
    }
    photoRows.push(new TableRow({children:captionCells}));
    photoRows.push(new TableRow({children:imageCells}));
  }
  const photosTable = new Table({width:{size:100,type:WidthType.PERCENTAGE}, rows: photoRows});

  const introAreaText = (() => {
    const uniqueAreas = [];
    data.observations.forEach(obs => {
      const areaParts = [];
      if (obs.package) areaParts.push(`Package ${obs.package}`);
      if (obs.cluster) areaParts.push(obs.cluster);
      if (obs.villaNo) areaParts.push(`Villa ${obs.villaNo}`);
      const area = areaParts.join(" - ").trim();
      if (area && !uniqueAreas.includes(area)) uniqueAreas.push(area);
    });
    return uniqueAreas.join("; ") || data.projectTitle || "the inspected area";
  })();

  const doc = new Document({ sections:[{ properties:{page:{margin:{top:700,right:700,bottom:700,left:700}}}, footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:"2 | Page",font:"Poppins",size:20})]})]})}, children:[
    headerLogo,
    headerSubtitle,
    docParagraph(`Project Title:  ${data.projectTitle}`, {bold:true}),
    new Paragraph({children:[
      new TextRun({text:`Date:${fmtDate(data.inspectionDate)}`,bold:true,font:"Poppins",size:22}),
      new TextRun({text:"                                                    ",font:"Poppins",size:22}),
      new TextRun({text:`Time:${fmtTime(data.inspectionTime)}`,bold:true,font:"Poppins",size:22})
    ]}),
    docParagraph(`Reference No:${data.referenceNo}`, {bold:true}),
    docParagraph("Attendees:", {bold:true}),
    attendeesTable, docParagraph(" "),
    responseTable, docParagraph(" "),
    new Paragraph({
      spacing: { after: 0, before: 0, line: 240 },
      children: [
        new TextRun({ text: "An OSH Inspection was carried out at ", font: "Poppins", size: 22 }),
        new TextRun({ text: introAreaText, font: "Poppins", size: 22, bold: true }),
        new TextRun({ text: ` on ${fmtDate(data.inspectionDate)}. KEO International Consultants and contractor representatives were present during the OSH Site Inspection, and the following observations have been highlighted by KEO and appropriate actions should be taken by all the parties involved according to the response category and across the whole project.`, font: "Poppins", size: 22 })
      ]
    }),
    docParagraph("Observations:", {bold:true}),
    obsTable, docParagraph(" "),
    docParagraph("Evidence photos", {bold:true}),
    photosTable
  ]}]});
  const blob = await Packer.toBlob(doc);
  const ref = String(data.referenceNo || "000").trim() || "000";
  let formattedDate = "00-00-0000";
  if (data.inspectionDate) {
    const parts = String(data.inspectionDate).split("-");
    if (parts.length === 3) formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  const fileName = `ALDAR Projects OSH Inspection Report- ${ref}- ${formattedDate}_.docx`;
  saveAs(blob, fileName);
  setStatus("Final updated Word file generated successfully.", "success");
}
function duplicateLast() {
  const cards = $$(".obs-card");
  if (!cards.length) return addObservation();
  const last = cards[cards.length - 1];
  addObservation({
    package: $(".package", last).value,
    cluster: $(".cluster", last).value,
    villaNo: $(".villaNo", last).value,
    observationCategory: $(".observationCategory", last).value,
    riskCategory: $(".riskCategory", last).value,
    responseCategory: $(".responseCategory", last).value,
    actionOwner: $(".actionOwner", last).value,
    topGaps: $(".topGaps", last).value,
    observationDescription: $(".observationDescription", last).value,
    preventiveAction: $(".preventiveAction", last).value,
    immediateAction: $(".immediateAction", last).value,
    rootCause: $(".rootCause", last).value,
    dateClosed: $(".dateClosed", last).value,
    evidenceLabel: $(".evidenceLabel", last).value,
    legalCustom: $(".legalCustom", last).value
  });
  setStatus("Last observation duplicated.");
}
function resetAll() {
  if (!confirm("Reset the full form?")) return;
  $("#projectTitle").value = "Saadiyat Lagoons Packages 02 & 04 villas and infrastructure work.";
  $("#inspectionDate").value = "";
  $("#inspectionTime").value = "10:00";
  $("#referenceNo").value = "";
  attendeeRows.innerHTML = "";
  observationsContainer.innerHTML = "";
  addDefaultAttendees();
  addObservation();
  setStatus("Form reset.");
}
function addDefaultAttendees() {
  [
    {name:"Javed Iqbal", designation:"OSH Engineer", entity:"KEO"},
    {name:"Jackson Rodriguez", designation:"OSH Advisor", entity:"KEO"},
    {name:"Timur", designation:"OSH Manager", entity:"TAJV"},
    {name:"Suhail", designation:"Site Engineer", entity:"TAJV"},
    {name:"Awais", designation:"OSH Inspector", entity:"TAJV"},
    {name:"Rami Issa", designation:"Section Engineer", entity:"TAJV"},
    {name:"Bilal", designation:"OSH Inspector", entity:"TAJV"}
  ].forEach(addAttendee);
}
function init() {
  addDefaultAttendees();
  addObservation();
  $("#addAttendeeBtn").addEventListener("click", () => addAttendee());
  $("#addObservationBtn").addEventListener("click", () => addObservation());
  $("#duplicateBtn").addEventListener("click", duplicateLast);
  $("#generateDocBtn").addEventListener("click", generateWord);
  $("#resetBtn").addEventListener("click", resetAll);
}
document.addEventListener("DOMContentLoaded", init);


window.humanizePreventiveAction = humanizePreventiveAction;
