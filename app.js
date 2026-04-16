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

  if (replaceText) {
    setTextarea($(".observationDescription", card), preset.description || []);
    const firstThree = gapOptions.slice(0, 3).map((g, i) => `${i+1}. ${g}`);
    setTextarea($(".topGaps", card), firstThree);
    setTextarea($(".immediateAction", card), preset.immediate || []);
    setTextarea($(".preventiveAction", card), (preset.preventive || []).map((p, i) => `${i+1}. ${p}`));
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
  $(".preventivePresetSelect", live).addEventListener("change", e => appendToTextarea($(".preventiveAction", live), e.target.value));
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
    preventiveAction: $(".preventiveAction", card).value.trim(),
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
async function fileToArrayBuffer(file) { return await file.arrayBuffer(); }
function docParagraph(text, opts = {}) {
  return new window.docx.Paragraph({ spacing: opts.spacing || { after: 0, before: 0, line: 240 }, alignment: opts.alignment, children: [new window.docx.TextRun({ text, bold: !!opts.bold, font: "Calibri", size: opts.size || 22, color: opts.color })] });
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
    children: [new TextRun({ text: "OSH Inspection Report", bold: true, font: "Calibri", size: 28, color: "7f7f7f" })]
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
        new TextRun({ text: "Area: ", bold: true, font: "Calibri", size: 22 }),
        ...areaSegments.flatMap((segment, idx) => [
          new TextRun({ text: segment.text, bold: true, font: "Calibri", size: 22 }),
          ...(idx < areaSegments.length - 1 ? [new TextRun({ text: " - ", bold: true, font: "Calibri", size: 22 })] : [])
        ])
      ]
    }));
    if (obs.rootCause) addLine(`Likely Root Cause:${obs.rootCause}`, true);
    if (obs.topGaps) { addLine("Top 3 Gaps Observed:", true); splitLines(obs.topGaps).forEach(line => addLine(line, false)); }
    addLine("Observation Description:", true);
    splitLines(obs.observationDescription).forEach(line => addLine(line, false));
    if (obs.immediateAction) { addLine("Immediate Action Taken:", true); splitLines(obs.immediateAction).forEach(line => addLine(line, false)); }
    addLine("Action to be taken as agreed, but not limited to:", true);
    splitLines(obs.preventiveAction).forEach(line => addLine(line, false));
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
        imageCells.push(new TableCell({borders:border,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:buf,transformation:{width:160,height:120}})]})]}));
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

  const doc = new Document({ sections:[{ properties:{page:{margin:{top:700,right:700,bottom:700,left:700}}}, footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:"2 | Page",font:"Calibri",size:20})]})]})}, children:[
    headerLogo,
    headerSubtitle,
    docParagraph(`Project Title:  ${data.projectTitle}`, {bold:true}),
    new Paragraph({children:[
      new TextRun({text:`Date:${fmtDate(data.inspectionDate)}`,bold:true,font:"Calibri",size:22}),
      new TextRun({text:"                                                    ",font:"Calibri",size:22}),
      new TextRun({text:`Time:${fmtTime(data.inspectionTime)}`,bold:true,font:"Calibri",size:22})
    ]}),
    docParagraph(`Reference No:${data.referenceNo}`, {bold:true}),
    docParagraph("Attendees:", {bold:true}),
    attendeesTable, docParagraph(" "),
    responseTable, docParagraph(" "),
    new Paragraph({
      spacing: { after: 0, before: 0, line: 240 },
      children: [
        new TextRun({ text: "An OSH Inspection was carried out at ", font: "Calibri", size: 22 }),
        new TextRun({ text: introAreaText, font: "Calibri", size: 22, bold: true }),
        new TextRun({ text: ` on ${fmtDate(data.inspectionDate)}. KEO International Consultants and contractor representatives were present during the OSH Site Inspection, and the following observations have been highlighted by KEO and appropriate actions should be taken by all the parties involved according to the response category and across the whole project.`, font: "Calibri", size: 22 })
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
