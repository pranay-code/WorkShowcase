const projectsData = [
    {
        id: "solar-pipeline",
        category: "completed",
        title: "Solar Power Modelling Pipeline",
        subtitle: "Redefining the existing solar pipeline to make it accurate, scalable and efficient.",
        images: ["images/1.png"],
        sections: [
            {
                heading: "Old Pipeline",
                isOldPipeline: true,
                items: [
                    "GHI bias correction ↔ Subjective Assessment (non-linear & complicated).",
                    "Power mode conversion ↔ (redundant).",
                    "Tuning with time shift ↔ Subjective Assessment."
                ]
            },
            {
                heading: "Problem",
                isProblem: true,
                items: [
                    "Inaccurate & problematic power conversion.",
                    "Complicated, time taking, not automatable.",
                    "Scalable to subjective >> objectivity. NO UI."
                ]
            },
            {
                heading: "New Pipeline",
                isNewPipeline: true,
                items: [
                    "Direct NWP to power mapping.",
                    "Easy tuning with UI.",
                    "Simple code base."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Accurate power modelling.",
                    "Scalable to even 100 sites with minimal supervision.",
                    "Objective process fully."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Background Grid to signify data/analytics -->
            <g stroke="#f1f5f9" stroke-width="1">
                <line x1="100" y1="50" x2="100" y2="250" />
                <line x1="150" y1="50" x2="150" y2="250" />
                <line x1="200" y1="50" x2="200" y2="250" />
                <line x1="250" y1="50" x2="250" y2="250" />
                <line x1="300" y1="50" x2="300" y2="250" />
                <line x1="350" y1="50" x2="350" y2="250" />
                <line x1="400" y1="50" x2="400" y2="250" />
            </g>

            <!-- 1. Left Side: Raw, Cumbersome Data (Scatter) -->
            <g fill="#94a3b8">
                <!-- Random dots representing raw, unscaled inputs -->
                <circle cx="80" cy="180" r="4" />
                <circle cx="100" cy="120" r="3" />
                <circle cx="120" cy="210" r="5" />
                <circle cx="130" cy="90" r="4" />
                <circle cx="150" cy="160" r="3" />
                <circle cx="170" cy="100" r="5" />
                <circle cx="180" cy="200" r="4" />
                
                <!-- Lines showing messy, subjective manual connections -->
                <path d="M 80 180 L 100 120 L 150 160 L 130 90" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
                <path d="M 120 210 L 150 160 L 180 200" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
            </g>

            <!-- 2. Middle: The Model / Analytics Engine -->
            <rect x="220" y="90" width="60" height="120" rx="4" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" />
            <!-- Inner gears/processing symbol -->
            <circle cx="250" cy="150" r="20" fill="none" stroke="#60a5fa" stroke-width="3" stroke-dasharray="6,4">
                <animateTransform attributeName="transform" type="rotate" from="0 250 150" to="360 250 150" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="150" r="8" fill="#3b82f6" />
            
            <!-- Data Flowing In -->
            <path d="M 190 150 L 220 150" stroke="#94a3b8" stroke-width="4" stroke-linecap="round">
                 <animate attributeName="stroke-dasharray" values="0,30; 30,0" dur="1.5s" repeatCount="indefinite" />
            </path>

            <!-- Data Flowing Out -->
            <path d="M 280 150 L 310 150" stroke="#10b981" stroke-width="4" stroke-linecap="round">
                 <animate attributeName="stroke-dasharray" values="0,30; 30,0" dur="1.5s" repeatCount="indefinite" />
            </path>

            <!-- 3. Right Side: Clean, Scalable Output (Smooth Power Curve) -->
            <!-- Axis for the output curve -->
            <line x1="310" y1="220" x2="440" y2="220" stroke="#94a3b8" stroke-width="2" />
            <line x1="310" y1="220" x2="310" y2="80" stroke="#94a3b8" stroke-width="2" />
            
            <!-- Smooth Solar Bell Curve representing accurate modelling -->
            <path d="M 310 220 Q 340 220 375 90 T 440 220" fill="rgba(34, 197, 94, 0.15)" stroke="#10b981" stroke-width="4" stroke-linecap="round">
                <animate attributeName="stroke-dasharray" values="0,300; 300,0" dur="3s" repeatCount="indefinite" />
            </path>
            
            <!-- Objective automated data points lining up perfectly on the curve -->
            <g fill="#059669">
                <circle cx="330" cy="188" r="4">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="360" cy="110" r="4">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="390" cy="110" r="4">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="420" cy="188" r="4">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>`
    },
    {
        id: "solar-fog",
        category: "completed",
        title: "Solar Fog Model Development",
        subtitle: "Innovative data centric project focusing on fog event prediction.",
        images: ["images/2.png"],
        sections: [
            {
                heading: "Problem",
                items: [
                    "Impossible prediction of fog events with either NWP or persistence forecast.",
                    "Same thing is accepted by the energymeteo."
                ]
            },
            {
                heading: "Curious Experiment",
                items: [
                    "Maybe NWP model/measurement data is showing the skill not through cloud cover/GHI, but distributed across multiple variables.",
                    "<strong>Flowchart:</strong>",
                    "Impossible task of manual feature engg -> Deep learning -> DL is one area but too little data.",
                    "Interest to try dimensionality reduction using UMAP -> worked -> Clear signal in separating fog & no fog.",
                    "Simple LR applied on the dataset."
                ]
            },
            {
                heading: "Results",
                isImpact: true,
                items: [
                    "On Average ~0.75 precision, ~0.6 Recall."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Background Cloud / Fog -->
            <path d="M100 200 Q150 150 200 200 Q250 170 300 200 Q350 160 400 210 Q450 190 480 250 L20 250 Q50 190 100 200 Z" fill="#e2e8f0">
                <animate attributeName="d" values="M100 200 Q150 150 200 200 Q250 170 300 200 Q350 160 400 210 Q450 190 480 250 L20 250 Q50 190 100 200 Z; M100 210 Q140 160 210 190 Q260 160 310 210 Q340 170 390 200 Q460 180 470 250 L30 250 Q60 200 100 210 Z; M100 200 Q150 150 200 200 Q250 170 300 200 Q350 160 400 210 Q450 190 480 250 L20 250 Q50 190 100 200 Z" dur="5s" repeatCount="indefinite" />
            </path>
            
            <!-- Dimensionality Reduction Graph (UMAP) -->
            <rect x="150" y="50" width="200" height="150" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
            
            <!-- Nodes (No Fog) -->
            <circle cx="180" cy="160" r="4" fill="#0ea5e9" />
            <circle cx="190" cy="140" r="4" fill="#0ea5e9" />
            <circle cx="210" cy="170" r="4" fill="#0ea5e9" />
            <circle cx="220" cy="130" r="4" fill="#0ea5e9" />
            <circle cx="240" cy="150" r="4" fill="#0ea5e9" />
            
            <!-- Nodes (Fog) -->
            <circle cx="270" cy="80" r="4" fill="#ef4444" />
            <circle cx="290" cy="100" r="4" fill="#ef4444" />
            <circle cx="310" cy="70" r="4" fill="#ef4444" />
            <circle cx="320" cy="110" r="4" fill="#ef4444" />
            <circle cx="330" cy="90" r="4" fill="#ef4444" />
            
            <!-- Separation Line (Logistic Regression) -->
            <line x1="160" y1="80" x2="340" y2="180" stroke="#10b981" stroke-width="3" stroke-dasharray="6,4">
                <animate attributeName="x2" values="160; 340" dur="2s" fill="freeze" />
                <animate attributeName="y2" values="80; 180" dur="2s" fill="freeze" />
            </line>
            
            <!-- Scanning Line -->
            <line x1="150" y1="50" x2="150" y2="200" stroke="#3b82f6" stroke-width="2" opacity="0.5">
                <animate attributeName="x1" values="150; 350; 150" dur="3s" repeatCount="indefinite" />
                <animate attributeName="x2" values="150; 350; 150" dur="3s" repeatCount="indefinite" />
            </line>
        </svg>`
    },
    {
        id: "wind-forecasting",
        category: "completed",
        title: "Wind Power Forecasting Dashboards",
        subtitle: "Objective framework for deciding the forecast model and live evaluation.",
        images: ["images/3.1.png", "images/3.2.png"],
        sections: [
            {
                heading: "The Interesting Insight",
                items: [
                    "We observed that not always the best model gives the correct forecast. At times, other forecast models perform well with huge differences."
                ]
            },
            {
                heading: "Problem",
                items: [
                    "Big penalties coming regularly, creating a need to build an objective framework for deciding the forecast model."
                ]
            },
            {
                heading: "The Tool (Dashboard)",
                items: [
                    "Provides objective and subjective assessment facility.",
                    "Evaluates real-time penalties of selected time frames.",
                    "Shows distribution of forecast and actual for the same time frame.",
                    "Provides the forecaster with live evaluation."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Big impact in terms of reduced penalties.",
                    "Defined objective framework for forecast selection leading to effective decision making.",
                    "Facility to verify the decision and provide the revision with better forecast."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Dashboard UI Base -->
            <rect x="50" y="40" width="400" height="220" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
            <!-- Header bar -->
            <rect x="50" y="40" width="400" height="30" rx="10" fill="#f8fafc" />
            <circle cx="70" cy="55" r="4" fill="#ef4444" />
            <circle cx="85" cy="55" r="4" fill="#eab308" />
            <circle cx="100" cy="55" r="4" fill="#22c55e" />
            
            <!-- Comparison Chart Background Lines -->
            <line x1="80" y1="100" x2="300" y2="100" stroke="#f1f5f9" stroke-width="1" />
            <line x1="80" y1="140" x2="300" y2="140" stroke="#f1f5f9" stroke-width="1" />
            <line x1="80" y1="180" x2="300" y2="180" stroke="#f1f5f9" stroke-width="1" />
            <line x1="80" y1="220" x2="300" y2="220" stroke="#cbd5e1" stroke-width="2" />
            
            <!-- Actual Energy Line -->
            <path d="M80 160 Q 120 180 150 120 T 220 170 T 300 130" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
            <!-- Model 1 Forecast -->
            <path d="M80 150 Q 120 160 150 140 T 220 190 T 300 110" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="5,5" />
            <!-- Model 2 Forecast -->
            <path d="M80 170 Q 120 150 150 100 T 220 150 T 300 150" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5" />

            <!-- Highlight Focus Area (Objective Selection) -->
            <rect x="180" y="80" width="60" height="140" fill="#fef08a" opacity="0.3" rx="4" />
            
            <!-- Wind Turbine Graphic on side -->
            <g transform="translate(380, 180)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#64748b" stroke-width="6" stroke-linecap="round" />
                <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite" />
                    <circle cx="0" cy="0" r="4" fill="#334155" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(120)" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(240)" />
                </g>
            </g>
            
            <!-- Penalty Reduction Box -->
            <rect x="330" y="90" width="100" height="50" rx="5" fill="#dcfce7" stroke="#86efac" stroke-width="1" />
            <text x="380" y="110" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Penalty</text>
            <text x="380" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">↓ 42%</text>
        </svg>`
    }
];

// Additional data entries will be appended or exported.

const remainingProjects = [
    {
        id: "jua-model",
        category: "completed",
        title: "Jua Model Development",
        subtitle: "Integrating the first AI-native commercial weather forecast model (Earth physics Transformer).",
        sections: [
            {
                heading: "Problem",
                items: [
                    "Need to add more NWP sources in our existing system.",
                    "Jua provides highly accurate, high resolution, and early model revisions."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Integrated the Jua NWP pipeline from scratch.",
                    "Built wind power modelling pipeline over it.",
                    "Integrated into the forecasting dashboard."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Significant performance improvement over existing models like ECMWF, NCEP etc.",
                    "Early dispatch of model revision so latest forecast availability."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Globe Grid -->
            <circle cx="250" cy="150" r="100" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" />
            <path d="M 150 150 Q 250 50 350 150 Q 250 250 150 150" fill="none" stroke="#93c5fd" stroke-width="1" />
            <path d="M 150 150 Q 250 100 350 150 Q 250 200 150 150" fill="none" stroke="#93c5fd" stroke-width="1" />
            <path d="M 250 50 Q 150 150 250 250" fill="none" stroke="#93c5fd" stroke-width="1" />
            <path d="M 250 50 Q 200 150 250 250" fill="none" stroke="#93c5fd" stroke-width="1" />
            <path d="M 250 50 Q 350 150 250 250" fill="none" stroke="#93c5fd" stroke-width="1" />
            <path d="M 250 50 Q 300 150 250 250" fill="none" stroke="#93c5fd" stroke-width="1" />
            
            <!-- AI processing nodes overlay -->
            <circle cx="200" cy="120" r="6" fill="#8b5cf6">
                <animate attributeName="r" values="6;9;6" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="140" r="5" fill="#8b5cf6" />
            <circle cx="260" cy="180" r="7" fill="#8b5cf6">
                <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="220" cy="190" r="5" fill="#8b5cf6" />
            
            <path d="M200 120 L300 140 L260 180 L220 190 Z" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4,4" />
            
            <!-- Data Stream coming out -->
            <path d="M 330 110 Q 400 60 450 100" fill="none" stroke="#22c55e" stroke-width="4" stroke-linecap="round">
                <animate attributeName="stroke-dasharray" values="0,200; 200,0" dur="2s" repeatCount="indefinite" />
            </path>
            <!-- UI High Resolution Tag -->
            <rect x="50" y="50" width="110" height="30" rx="15" fill="#e0e7ff" stroke="#6366f1" stroke-width="1" />
            <text x="105" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">AI-Native NWP</text>
        </svg>`
    },
    {
        id: "jua-turbine",
        category: "completed",
        title: "Jua Turbine Model Development",
        subtitle: "Leveraging high spatial resolution to map local climatology for distinct turbine clusters.",
        sections: [
            {
                heading: "Interesting Insight",
                items: [
                    "Turbines located far from each other in Jaisalmer show capability of having different local climatology."
                ]
            },
            {
                heading: "Problem",
                items: [
                    "Current modelling uses a central point location generating power forecast.",
                    "Intuitively wrong for large wind plants, but older NWP 25km² resolution justified it."
                ]
            },
            {
                heading: "Solution",
                items: [
                    "Jua offers high spatial resolution creating opportunity to experiment.",
                    "Around 97 turbine models built using a simple UI based tool with data cleaning."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Significant performance improvement during varying local conditions.",
                    "Development of an effective wind power modelling tool with data cleaning & UI."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Topography Map Background -->
            <path d="M 50 200 Q 150 180 200 220 T 350 200 T 450 230" fill="none" stroke="#cbd5e1" stroke-width="2" />
            <path d="M 50 160 Q 150 140 200 180 T 350 160 T 450 190" fill="none" stroke="#cbd5e1" stroke-width="2" />
            
            <!-- High Spatial Resolution GridOverlay -->
            <g stroke="#e2e8f0" stroke-width="1" opacity="0.5">
                <line x1="100" y1="50" x2="100" y2="250" />
                <line x1="200" y1="50" x2="200" y2="250" />
                <line x1="300" y1="50" x2="300" y2="250" />
                <line x1="400" y1="50" x2="400" y2="250" />
                <line x1="50" y1="100" x2="450" y2="100" />
                <line x1="50" y1="150" x2="450" y2="150" />
                <line x1="50" y1="200" x2="450" y2="200" />
            </g>

            <rect x="200" y="100" width="100" height="50" fill="#bfdbfe" opacity="0.4" />
            <rect x="300" y="150" width="100" height="50" fill="#bbf7d0" opacity="0.4" />
            
            <!-- Turbine Clusters -->
            <!-- Cluster 1 -->
            <g transform="translate(150, 180) scale(0.6)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#475569" stroke-width="6" />
                <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="2s" repeatCount="indefinite" />
                    <circle cx="0" cy="0" r="4" fill="#334155" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(120)" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(240)" />
                </g>
            </g>
            
            <!-- Cluster 2 (Faster Wind) -->
            <g transform="translate(250, 130) scale(0.6)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#475569" stroke-width="6" />
                <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="1s" repeatCount="indefinite" />
                    <circle cx="0" cy="0" r="4" fill="#334155" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#60a5fa" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#60a5fa" transform="rotate(120)" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#60a5fa" transform="rotate(240)" />
                </g>
            </g>
            
            <!-- Cluster 3 -->
            <g transform="translate(350, 180) scale(0.6)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#475569" stroke-width="6" />
                <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite" />
                    <circle cx="0" cy="0" r="4" fill="#334155" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(120)" />
                    <path d="M 0 -4 L 0 -40 L 4 -30 Z" fill="#94a3b8" transform="rotate(240)" />
                </g>
            </g>

            <path d="M 250 110 L 250 80" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3" />
            <text x="250" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Cluster Model B</text>
        </svg>`
    },
    {
        id: "jua-dynamic",
        category: "completed",
        title: "Jua Dynamic Model Development",
        subtitle: "Adapting to changing power curve patterns to avoid high penalties.",
        sections: [
            {
                heading: "Interesting Observations",
                items: [
                    "Power curve (NWP -> Power) pattern seems changing at times.",
                    "A static power curve could fail during such times leading to high penalties, which was seen in reality."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Dynamic wind power model developed which gets updated every day with the last 32 days data going into it."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "During times of varying behaviors, the dynamic model clearly showed superior performance over stable models."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Axes -->
            <line x1="50" y1="250" x2="450" y2="250" stroke="#cbd5e1" stroke-width="3" />
            <line x1="50" y1="250" x2="50" y2="50" stroke="#cbd5e1" stroke-width="3" />
            <text x="250" y="280" text-anchor="middle" fill="#64748b" font-weight="bold">Wind Speed (NWP)</text>
            <text x="20" y="150" text-anchor="middle" fill="#64748b" font-weight="bold" transform="rotate(-90 20,150)">Power Output</text>
            
            <!-- Static Power Curve (Faded) -->
            <path d="M 50 250 Q 200 250 300 100 T 450 70" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="5,5" opacity="0.6" />
            
            <!-- Dynamic Power Curve (Animated) -->
            <path id="dynamicCurve" d="M 50 250 Q 180 250 250 150 T 450 90" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round">
                <animate attributeName="d" 
                         values="M 50 250 Q 180 250 250 150 T 450 90; 
                                 M 50 250 Q 220 240 320 120 T 450 50; 
                                 M 50 250 Q 180 250 250 150 T 450 90" 
                         dur="4s" repeatCount="indefinite" />
            </path>
            
            <!-- Data Points updating -->
            <g fill="#f59e0b">
                <circle cx="150" cy="240" r="4" />
                <circle cx="200" cy="210" r="4" />
                <circle cx="250" cy="150" r="5">
                    <animate attributeName="cy" values="150; 180; 150" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="110" r="4">
                    <animate attributeName="cy" values="110; 140; 110" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="95" r="4" />
            </g>
            
            <rect x="300" y="180" width="130" height="40" rx="20" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
            <text x="365" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Last 32 Days Shift</text>
            <circle cx="305" cy="200" r="20" fill="none" stroke="#4f46e5" />
            <path d="M 295 200 L 305 190 L 315 200" fill="none" stroke="#4f46e5" stroke-width="2" />
        </svg>`
    },
    {
        id: "solar-intraday",
        category: "completed",
        title: "Solar Intraday Forecasting Dashboard",
        subtitle: "Decision making support and hindsight analysis during monsoon time.",
        images: ["images/7.png"],
        sections: [
            {
                heading: "Problem",
                items: [
                    "Need for hindsight analysis and quick, objective decision making support during monsoon.",
                    "Advanced models (Solcast) available but no place for easy viewing/fetching.",
                    "Difficulty integrating temporary forecast service providers like solargis, calibsun etc."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Developed a simple yet effective dashboard providing:",
                    "Real time revised forecasts from all models.",
                    "Real time performance overview.",
                    "Effective & simple hindcast analysis.",
                    "Forecast download.",
                    "<em>Note: Entire pipelines built from scratch.</em>"
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Highly effective decision making during monsoon time for revisions.",
                    "Objective framework for decision making."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Laptop / Screen container -->
            <rect x="70" y="40" width="360" height="200" rx="8" fill="#1e293b" />
            <rect x="75" y="45" width="350" height="180" rx="4" fill="#f8fafc" />
            <path d="M 40 240 L 460 240 L 480 250 L 20 250 Z" fill="#cbd5e1" />
            
            <!-- Dashboard UI Elements -->
            <!-- Model 1 (Solcast) Box -->
            <rect x="90" y="60" width="100" height="60" rx="4" fill="#bae6fd" stroke="#38bdf8" />
            <text x="140" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Solcast</text>
            <circle cx="140" cy="100" r="10" fill="#fff" />
            <path d="M 135 100 L 140 105 L 148 95" fill="none" stroke="#10b981" stroke-width="2" />

            <!-- Model 2 (Solargis) Box -->
            <rect x="200" y="60" width="100" height="60" rx="4" fill="#fef08a" stroke="#eab308" />
            <text x="250" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#a16207">Solargis</text>
            
            <!-- Chart Area -->
            <rect x="90" y="130" width="320" height="80" rx="4" fill="#ffffff" stroke="#e2e8f0" />
            <!-- Bar charts -->
            <rect x="110" y="180" width="20" height="30" fill="#60a5fa">
                <animate attributeName="height" values="30;50;30" dur="2s" repeatCount="indefinite" />
                <animate attributeName="y" values="180;160;180" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="150" y="150" width="20" height="60" fill="#34d399">
                <animate attributeName="height" values="60;40;60" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="y" values="150;170;150" dur="2.5s" repeatCount="indefinite" />
            </rect>
            <rect x="190" y="140" width="20" height="70" fill="#f87171" />
            <rect x="230" y="170" width="20" height="40" fill="#fbbf24" />
            
            <circle cx="340" cy="80" r="20" fill="#22c55e" opacity="0.2">
                <animate attributeName="r" values="20;25;20" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="340" cy="80" r="10" fill="#16a34a" />
            <text x="340" y="110" text-anchor="middle" font-size="9" fill="#15803d" font-weight="bold">Live Rev</text>
        </svg>`
    },
    {
        id: "solar-dayahead",
        category: "completed",
        title: "Solar Day Ahead Forecasting Dashboard",
        subtitle: "Monitoring and recommending the best open-source weather models.",
        images: ["images/8.1.png", "images/8.2.png", "images/8.3.png", "images/8.4.png"],
        sections: [
            {
                heading: "Need",
                items: [
                    "80% of portfolio is in STOA (majority solar).",
                    "Absolute necessity to monitor external weather forecast models' performance.",
                    "If a better performing model is observed, it must be integrated."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Developed streamlit dashboard showing forecast performances of all open source weather models (GHI) vs satellite derived GHI.",
                    "Recommends the best forecast model.",
                    "Generates power forecast as per plant configuration, available for download."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Effective yet simple tool to keep an eye on external forecasting models.",
                    "Action centric features facilitating immediate action taking."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Dashboard Concept -->
            <rect x="60" y="30" width="380" height="240" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
            
            <!-- Best Model Ribbon -->
            <path d="M 60 50 L 150 50 L 140 70 L 150 90 L 60 90 Z" fill="#10b981" />
            <text x="70" y="75" fill="#ffffff" font-weight="bold" font-size="12">Best: Model C</text>

            <!-- GHI Comparison Graph -->
            <line x1="100" y1="180" x2="400" y2="180" stroke="#94a3b8" />
            <line x1="100" y1="180" x2="100" y2="100" stroke="#94a3b8" />
            
            <!-- Satellite Curve (Ground Truth) -->
            <path d="M 100 180 Q 250 80 400 180" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" />
            
            <!-- Open Source Model Curves -->
            <path d="M 100 180 Q 230 70 400 180" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" />
            <path d="M 100 180 Q 280 90 400 180" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4" />
            <!-- Model C (The Best) -->
            <path d="M 100 180 Q 255 75 400 180" fill="none" stroke="#10b981" stroke-width="3">
                <animate attributeName="stroke-dasharray" values="200,200" />
                <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
            </path>
            
            <!-- Download Action Button -->
            <rect x="300" y="210" width="120" height="40" rx="6" fill="#2563eb" />
            <text x="360" y="235" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="12">↓ Extract Power</text>
            <circle cx="380" cy="230" r="15" fill="#60a5fa" opacity="0.3">
                <animate attributeName="r" values="15; 25; 15" dur="1.5s" repeatCount="indefinite" />
            </circle>
        </svg>`
    }
];

projectsData.push(...remainingProjects);

const ongoingProjects = [
    {
        id: "solar-intraday-algo",
        category: "ongoing",
        title: "Solar Intraday Forecasting Algorithm",
        subtitle: "Improvement over existing overspeed algorithms with satellite imagery.",
        sections: [
            {
                heading: "Current Status",
                items: [
                    "Measurement based forecast revising algorithm already developed, inspired from overspeed algorithm and an improvement over it.",
                    "Satellite imagery based correction algorithm is in plan to be developed."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Satellite Concept -->
            <path d="M 50 50 A 200 200 0 0 1 450 50" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="10,10" />
            
            <g transform="translate(250, 40)">
                <animateTransform attributeName="transform" type="translate" values="50,50; 250,40; 450,50" dur="10s" repeatCount="indefinite" />
                <rect x="-20" y="-10" width="40" height="20" fill="#94a3b8" />
                <rect x="-40" y="-8" width="20" height="16" fill="#38bdf8" />
                <rect x="20" y="-8" width="20" height="16" fill="#38bdf8" />
                <!-- Beam -->
                <polygon points="0,10 -30,100 30,100" fill="#fef08a" opacity="0.3">
                    <animate attributeName="opacity" values="0; 0.5; 0" dur="2s" repeatCount="indefinite" />
                </polygon>
            </g>

            <rect x="150" y="160" width="200" height="80" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
            <!-- Code braces / Algo symbol -->
            <text x="250" y="210" text-anchor="middle" font-size="40" font-weight="bold" fill="#3b82f6" font-family="monospace">&lt;/&gt;</text>
            
            <path d="M 230 160 L 230 130" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 270 160 L 270 130" stroke="#10b981" stroke-width="3" stroke-dasharray="4,4">
                 <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
            </path>
        </svg>`
    },
    {
        id: "wind-intraday-algo",
        category: "ongoing",
        title: "Wind Intraday Forecasting Algorithm",
        subtitle: "Developing next-generation wind intraday corrections.",
        sections: [
            {
                heading: "Current Status",
                items: [
                    "Data cleaning, time series construction is done.",
                    "Ideation and development is in process."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Time Series Data -->
            <path d="M 50 200 L 100 150 L 150 180 L 200 120 L 250 160 L 300 80 L 350 140 L 400 60 L 450 100" fill="none" stroke="#cbd5e1" stroke-width="3" opacity="0.5" />
            
            <!-- Cleaned curve overlay -->
            <path d="M 50 200 Q 125 100 200 120 T 300 80 T 450 100" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round">
                <animate attributeName="stroke-dasharray" values="0,600; 600,0" dur="3s" repeatCount="indefinite" />
            </path>
            
            <!-- Construction / Ideation visuals -->
            <g transform="translate(380, 180)">
                <circle cx="0" cy="0" r="25" fill="#f1f5f9" stroke="#64748b" stroke-width="3" />
                <circle cx="0" cy="0" r="15" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                </circle>
                <path d="M -5 -10 L 5 -10 L 10 0 L 5 10 L -5 10 L -10 0 Z" fill="#475569" />
                <animateTransform attributeName="transform" type="rotate" from="0 380 180" to="360 380 180" dur="10s" repeatCount="indefinite" />
            </g>
            <text x="380" y="225" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">Processing</text>
            
            <!-- Wind representation -->
            <path d="M 80 100 Q 150 80 220 100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 120 120 Q 180 100 240 120" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" repeatCount="indefinite" />
            </path>
        </svg>`
    }
];

projectsData.push(...ongoingProjects);
