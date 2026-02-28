const personalDevelopment = [
    {
        id: "personal-dev",
        category: "personal",
        title: "Personal Development Requirements",
        subtitle: "(To lead and grow beyond a typical career trajectory)",
        sections: [
            {
                heading: "1. Core Human Skills:",
                items: [
                    "<strong>Training Needs:</strong> People communication, engagement, management, trust-building, and project management.",
                    "<strong>Practice Grounds:</strong> Active involvement in digital projects and taking on business-facing roles to refine people skills."
                ]
            },
            {
                heading: "2. Technical Skills:",
                items: [
                    "<strong>Training Needs:</strong> Traditional AI: Deep Learning. Generative AI: Building GenAI applications (RAG, code execution, tool connection) and working with Agentic AI development frameworks.",
                    "<strong>Practice Grounds:</strong> Opportunities to develop MVPs for technical AI projects and engaging technically with core vendor teams."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Growth Steps -->
            <path d="M 50 250 L 150 250 L 150 200 L 250 200 L 250 150 L 350 150 L 350 100 L 450 100" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" />
            <path d="M 50 250 L 150 250 L 150 200 L 250 200 L 250 150 L 350 150 L 350 100 L 450 100" fill="none" stroke="#60a5fa" stroke-width="4" stroke-linecap="round" stroke-dasharray="10,10">
                 <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" linear />
            </path>
            
            <!-- Core Human Skills (Left side ascending) -->
            <g transform="translate(150, 200)">
                <circle cx="0" cy="-20" r="15" fill="#f43f5e" opacity="0.8">
                     <animate attributeName="r" values="15; 18; 15" dur="2s" repeatCount="indefinite" />
                </circle>
                <!-- person icon simple -->
                <circle cx="0" cy="-24" r="5" fill="#fff" />
                <path d="M -8 -13 Q 0 -20 8 -13 L 8 -5 L -8 -5 Z" fill="#fff" />
                <text x="20" y="-15" fill="#be123c" font-size="10" font-weight="bold">Core Human Skills</text>
            </g>

            <!-- Technical Skills (Mid ascension) -->
            <g transform="translate(250, 150)">
                <circle cx="0" cy="-25" r="20" fill="#8b5cf6" opacity="0.8">
                     <animate attributeName="r" values="20; 24; 20" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="0" y="-20" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle" font-family="monospace">AI</text>
                <text x="25" y="-20" fill="#6d28d9" font-size="10" font-weight="bold">Tech Skills (GenAI / Agentic)</text>
            </g>
            
            <!-- Pinnacle -->
            <g transform="translate(400, 70)">
                <!-- Star / Target -->
                <polygon points="0,-15 5,-5 15,-5 7,2 10,12 0,6 -10,12 -7,2 -15,-5 -5,-5" fill="#facc15">
                    <animate attributeName="transform" type="rotate" values="0; 360" dur="5s" repeatCount="indefinite" />
                </polygon>
                <text x="0" y="25" fill="#ca8a04" font-size="12" font-weight="bold" text-anchor="middle">Leadership</text>
            </g>
        </svg>`
    }
];

projectsData.push(...personalDevelopment);
