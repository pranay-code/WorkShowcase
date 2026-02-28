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
        images: ["images/managerial_development.png"]
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
        images: ["images/technical_development.png"]
    }
];

projectsData.push(...personalDevelopment);
