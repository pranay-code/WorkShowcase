const personalDevelopment = [
    {
        id: "managerial",
        category: "personal",
        title: "Managerial",
        subtitle: "Core Human Skills",
        sections: [
            {
                heading: "Training Needs",
                isTraining: true,
                items: [
                    "People communication.",
                    "Engagement and Management.",
                    "Trust-building.",
                    "Project management."
                ]
            },
            {
                heading: "Practice Grounds",
                isPractice: true,
                items: [
                    "Active involvement in digital projects.",
                    "Taking on business-facing roles to refine people skills."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Central Dashed Line Divider -->
            <line x1="250" y1="20" x2="250" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8,8" />
            
            <!-- Left Side: Training (Nodes connecting / abstract communication) -->
            <g transform="translate(125, 150)">
                 <circle cx="0" cy="0" r="30" fill="#fef08a" stroke="#eab308" stroke-width="2" opacity="0.5">
                     <animate attributeName="r" values="30; 50; 30" dur="4s" repeatCount="indefinite" />
                 </circle>
                 <circle cx="0" cy="0" r="15" fill="#eab308" />
                 <!-- Connection lines -->
                 <path d="M 0 0 L -40 -40; M 0 0 L -60 10; M 0 0 L -30 60" stroke="#fbbf24" stroke-width="3" stroke-linecap="round">
                     <animate attributeName="stroke-dasharray" values="0,100; 100,0" dur="2s" repeatCount="indefinite" />
                 </path>
                 <circle cx="-40" cy="-40" r="8" fill="#f59e0b" />
                 <circle cx="-60" cy="10" r="6" fill="#f59e0b" />
                 <circle cx="-30" cy="60" r="10" fill="#f59e0b" />
                 <text x="0" y="-40" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Training</text>
            </g>

            <!-- Right Side: Practice (Structured execution / Project Mgmt) -->
            <g transform="translate(375, 150)">
                 <rect x="-40" y="-40" width="80" height="80" rx="4" fill="#dcfce7" stroke="#22c55e" stroke-width="2" />
                 <line x1="-20" y1="-20" x2="20" y2="-20" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
                 <line x1="-20" y1="0" x2="10" y2="0" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
                 <line x1="-20" y1="20" x2="20" y2="20" stroke="#10b981" stroke-width="4" stroke-linecap="round">
                      <animate attributeName="x2" values="-20; 20; -20" dur="3s" repeatCount="indefinite" />
                 </line>
                 
                 <!-- Cogwheel turning -->
                 <g transform="translate(30, -30) scale(0.6)">
                     <animateTransform attributeName="transform" type="translate(30, -30) scale(0.6) rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                     <circle cx="0" cy="0" r="10" fill="none" stroke="#22c55e" stroke-width="4" />
                     <path d="M -2 -14 L 2 -14 L 2 14 L -2 14 Z M -14 -2 L 14 -2 L 14 2 L -14 2 Z" fill="#22c55e" />
                     <path d="M -2 -14 L 2 -14 L 2 14 L -2 14 Z M -14 -2 L 14 -2 L 14 2 L -14 2 Z" fill="#22c55e" transform="rotate(45)" />
                 </g>
                 <text x="0" y="-55" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">Practice</text>
            </g>
        </svg>`
    },
    {
        id: "technical",
        category: "personal",
        title: "Technical",
        subtitle: "Technical Skills & Execution",
        sections: [
            {
                heading: "Training Needs",
                isTraining: true,
                items: [
                    "Traditional AI: Deep Learning.",
                    "Generative AI: Building GenAI applications (RAG, code execution, tool connection).",
                    "Working with Agentic AI development frameworks."
                ]
            },
            {
                heading: "Practice Grounds",
                isPractice: true,
                items: [
                    "Opportunities to develop MVPs for technical AI projects.",
                    "Engaging technically with core vendor teams."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Central Dashed Line Divider -->
            <line x1="250" y1="20" x2="250" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8,8" />
            
            <!-- Left Side: Training (Deep Learning / Neural Net layout) -->
            <g transform="translate(125, 150)">
                 <!-- Input Layer -->
                 <circle cx="-50" cy="-40" r="5" fill="#60a5fa" />
                 <circle cx="-50" cy="0" r="5" fill="#60a5fa" />
                 <circle cx="-50" cy="40" r="5" fill="#60a5fa" />
                 
                 <!-- Hidden Layer -->
                 <circle cx="0" cy="-20" r="6" fill="#8b5cf6" />
                 <circle cx="0" cy="20" r="6" fill="#8b5cf6" />
                 
                 <!-- Output Layer -->
                 <circle cx="50" cy="0" r="8" fill="#c084fc">
                     <animate attributeName="r" values="8; 12; 8" dur="1.5s" repeatCount="indefinite" />
                 </circle>
                 
                 <!-- Connections -->
                 <g stroke="#e2e8f0" stroke-width="1.5">
                     <path d="M -50 -40 L 0 -20; M -50 -40 L 0 20; M -50 0 L 0 -20; M -50 0 L 0 20; M -50 40 L 0 -20; M -50 40 L 0 20" />
                     <path d="M 0 -20 L 50 0; M 0 20 L 50 0" stroke="#d8b4fe" stroke-width="2">
                          <animate attributeName="stroke-dasharray" values="0,50; 50,0" dur="1s" repeatCount="indefinite" />
                     </path>
                 </g>
                 <text x="0" y="-60" text-anchor="middle" font-size="12" font-weight="bold" fill="#6d28d9">Training</text>
            </g>

            <!-- Right Side: Practice (Building GenAI App / Blocks) -->
            <g transform="translate(375, 150)">
                 <!-- Central processing block -->
                 <rect x="-30" y="-30" width="60" height="60" rx="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="3" />
                 <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">AI</text>
                 
                 <!-- Surrounding agent tools (RAG, etc) orbiting -->
                 <g>
                     <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="8s" repeatCount="indefinite" />
                     <circle cx="0" cy="-55" r="12" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                     <circle cx="48" cy="28" r="12" fill="#fbcfe8" stroke="#db2777" stroke-width="2" />
                     <circle cx="-48" cy="28" r="12" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
                 </g>

                 <!-- connecting lines -->
                 <path d="M 0 -30 L 0 -43; M 26 15 L 36 21; M -26 15 L -36 21" stroke="#94a3b8" stroke-width="2" stroke-dasharray="2,2" />
                 
                 <text x="0" y="-80" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Practice</text>
            </g>
        </svg>`
    }
];

projectsData.push(...personalDevelopment);
