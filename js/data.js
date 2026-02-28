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
                    "GHI bias correction, dependent on GHI measurement.",
                    "Power conversion.",
                    "Tuning with time shift."
                ]
            },
            {
                heading: "Problem",
                isProblem: true,
                items: [
                    "Time taking, Inaccurate power modelling at times, complicated, manual, process involves high level of subjective evaluation and NO UI."
                ]
            },
            {
                heading: "New Pipeline",
                isNewPipeline: true,
                items: [
                    "Direct NWP to power mapping, no dependency of GHI measurement data.",
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
                    "Primarily Objective process."
                ]
            }
        ]
    },
    {
        id: "solar-fog",
        category: "completed",
        title: "Solar Fog Model Development",
        subtitle: "An innovative, data-centric project.",
        images: ["images/2.png"],
        sections: [
            {
                heading: "Problem",
                items: [
                    "Predicting fog events is nearly impossible using either NWP or persistence forecasts."
                ]
            },
            {
                heading: "Curious Experiment",
                items: [
                    "We hypothesized that NWP models or measurement data might contain predictive skill—not directly through cloud cover or GHI, but distributed across multiple divergent variables.",
                    "<strong>Approach:</strong> Because manual feature engineering was impossible given the variables and horizon, we initially considered Deep Learning (DL), but the dataset was too small.",
                    "<strong>Execution:</strong> We used UMAP for dimensionality reduction, which successfully yielded a clear signal separating 'fog' from 'no fog'. A simple Logistic Regression (LR) model was then applied to the dataset."
                ]
            },
            {
                heading: "Results",
                isImpact: true,
                items: [
                    "Achieved an average precision of ~0.75 and a recall of ~0.60."
                ]
            }
        ]
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
                    "During early discussions regarding wind performance, we observed that the generally 'best' model does not always provide the most accurate forecast at any given time; other models sometimes outperform it by a huge margin."
                ]
            },
            {
                heading: "Problem",
                items: [
                    "High penalties were occurring regularly, highlighting the need for an objective framework to decide which forecast model to use."
                ]
            },
            {
                heading: "The Tool (Dashboard)",
                items: [
                    "Provides an objective and subjective assessment facility.",
                    "Evaluates real-time penalties for a selected timeframe and compares the distribution of forecast vs. actual generation.",
                    "Equips the forecaster with live evaluation capabilities."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Significant reduction in penalties.",
                    "Established a defined, objective framework for forecast selection, leading to effective decision-making.",
                    "Provided a facility to verify decisions and output revised, more accurate forecasts."
                ]
            }
        ]
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
                    "The need to add more NWP sources to our existing system. Jua is likely the first and most popular AI-native commercial weather forecast model, utilizing a proprietary algorithm (EPT: Earth Physics Transformer).",
                    "It provides early model revisions.",
                    "It offers high spatial resolution."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Integrated the Jua NWP pipeline from scratch.",
                    "Built a wind power modeling pipeline over it.",
                    "Integrated the model into the forecasting dashboard."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Significant performance improvement over existing physics-based models like ECMWF, NCEP, etc.",
                    "Early dispatch of model revisions ensures the latest forecasts are always available."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Inner Grid Area -->
            <rect x="150" y="50" width="200" height="200" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" />
            
            <!-- Fine Subdivision Grid (High Res NWP) -->
            <g stroke="#bfdbfe" stroke-width="1">
                <line x1="150" y1="75" x2="350" y2="75" />
                <line x1="150" y1="125" x2="350" y2="125" />
                <line x1="150" y1="175" x2="350" y2="175" />
                <line x1="150" y1="225" x2="350" y2="225" />
                <line x1="175" y1="50" x2="175" y2="250" />
                <line x1="225" y1="50" x2="225" y2="250" />
                <line x1="275" y1="50" x2="275" y2="250" />
                <line x1="325" y1="50" x2="325" y2="250" />
            </g>

            <!-- Coarse Grid Overlay -->
            <g stroke="#94a3b8" stroke-width="2">
                <animate attributeName="opacity" values="1;0.4;1" dur="8s" repeatCount="indefinite" />
                <line x1="150" y1="100" x2="350" y2="100" />
                <line x1="150" y1="150" x2="350" y2="150" />
                <line x1="150" y1="200" x2="350" y2="200" />
                <line x1="200" y1="50" x2="200" y2="250" />
                <line x1="250" y1="50" x2="250" y2="250" />
                <line x1="300" y1="50" x2="300" y2="250" />
            </g>
            
            <!-- Slow Pulsing Ripple from center -->
            <circle cx="250" cy="150" r="10" fill="none" stroke="#6366f1" stroke-width="2">
                <animate attributeName="r" values="10; 120" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8; 0" dur="4s" repeatCount="indefinite" />
            </circle>

            <!-- AI processing nodes overlay -->
            <circle cx="200" cy="100" r="4" fill="#8b5cf6" />
            <circle cx="300" cy="200" r="5" fill="#3b82f6" />
            <circle cx="250" cy="150" r="6" fill="#10b981" />

            <!-- UI High Resolution Tag -->
            <rect x="25" y="25" width="110" height="30" rx="15" fill="#e0e7ff" stroke="#6366f1" stroke-width="1" />
            <text x="80" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">AI-Native NWP</text>
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
                    "During a site visit to Jaisalmer, it was observed that turbines are located quite far from each other, with each turbine or cluster potentially experiencing different local climatologies."
                ]
            },
            {
                heading: "Problem",
                items: [
                    "The current modeling pipeline extracts NWP forecasts based on a single point location (center) for the entire plant. Intuitively, this seems incorrect for large wind plants, though the NWP resolution of 25km² previously justified the decision."
                ]
            },
            {
                heading: "Solution",
                items: [
                    "Jua offers high spatial resolution, presenting an opportunity to experiment.",
                    "Built around 97 individual turbine models using a simple UI-based tool that effectively handles the task alongside data cleaning."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Significant performance improvement during periods of varying local conditions.",
                    "Developed a wind power modeling tool with effective data cleaning and an intuitive UI."
                ]
            }
        ],
        svg: `
        <svg viewBox="0 0 500 300" width="100%" height="100%">
            <!-- Topography Map Background -->
            <g stroke="#cbd5e1" stroke-width="2" fill="none">
                <path d="M 50 150 Q 150 100 250 150 T 450 150" />
                <path d="M 50 100 Q 150 50 250 100 T 450 100" />
                <path d="M 50 200 Q 150 150 250 200 T 450 200" />
            </g>

            <defs>
                <!-- Blades only, rotating -->
                <g id="blades">
                    <circle cx="0" cy="0" r="1.5" fill="#334155" />
                    <path d="M 0 -1 L 0 -10 L 1 -7 Z" fill="#3b82f6" />
                    <path d="M 0 -1 L 0 -10 L 1 -7 Z" fill="#3b82f6" transform="rotate(120)" />
                    <path d="M 0 -1 L 0 -10 L 1 -7 Z" fill="#3b82f6" transform="rotate(240)" />
                </g>
                <!-- Full Micro-Turbine Symbol -->
                <g id="micro-turbine-fast">
                    <line x1="0" y1="0" x2="0" y2="15" stroke="#475569" stroke-width="2" />
                    <use href="#blades" x="0" y="0">
                         <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="2s" repeatCount="indefinite" />
                    </use>
                </g>
                <g id="micro-turbine-slow">
                    <line x1="0" y1="0" x2="0" y2="15" stroke="#475569" stroke-width="2" />
                    <use href="#blades" x="0" y="0">
                         <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                    </use>
                </g>
            </defs>

            <!-- Scattered Micro Turbines -->
            <use href="#micro-turbine-fast" x="100" y="140" />
            <use href="#micro-turbine-slow" x="150" y="80" />
            <use href="#micro-turbine-slow" x="220" y="160" />
            <use href="#micro-turbine-fast" x="300" y="100" />
            <use href="#micro-turbine-slow" x="380" y="190" />
            <use href="#micro-turbine-fast" x="420" y="130" />
            
            <rect x="200" y="30" width="100" height="30" rx="4" fill="#dcfce7" stroke="#22c55e" />
            <text x="250" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">97 Spatial Models</text>
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
                    "During knowledge transfer sessions regarding wind power modeling with the company Overspeed, an interesting observation was made: the power curve (NWP to Power) pattern changes over time.",
                    "This indicates that a static power curve could fail during these shifts, leading to high penalties—a phenomenon observed in reality."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Developed a dynamic wind power model that automatically updates every day using the previous 32 days of back-tested data."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "During periods of varying behavior (due to wind plant conditions or NWP model intervals), the dynamic model demonstrated clearly superior performance over stable models."
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
            
            <!-- The Writhing Dynamic Power Curve -->
            <path id="dynamicCurve" d="M 50 250 Q 150 250 250 150 T 450 100" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round">
                <animate attributeName="d" 
                         values="M 50 250 Q 150 250 250 150 T 450 100; 
                                 M 50 250 Q 200 200 250 120 T 450 60; 
                                 M 50 250 Q 100 260 250 180 T 450 140; 
                                 M 50 250 Q 150 250 250 150 T 450 100" 
                         dur="6s" repeatCount="indefinite" />
            </path>
            
            <!-- Catching data particles -->
            <g fill="#f59e0b">
                <circle cx="150" cy="240" r="5">
                    <animate attributeName="cy" values="100; 240; 240" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="150" r="5">
                    <animate attributeName="cy" values="50; 150; 150" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="100" r="5">
                    <animate attributeName="cy" values="0; 100; 100" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>

            <rect x="280" y="200" width="150" height="40" rx="20" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
            <text x="355" y="225" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Dynamic Backtesting</text>
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
                    "During the monsoon season, there is a strong need for hindsight analysis and quick, objective decision-making support.",
                    "Although advanced model forecasts (like Solcast) were available, there was no centralized platform for easy fetching, viewing, and analysis.",
                    "Integrating temporary forecast service providers (like Solargis, Calibsun, etc.) was difficult."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Developed a simple yet effective dashboard that provides the following features:",
                    "Real-time revised forecasts from all available models.",
                    "Real-time performance overview.",
                    "Simple and highly effective hindcast analysis.",
                    "Forecast download capabilities.",
                    "<em>Note: All necessary data pipelines for the dashboard were also built from scratch.</em>"
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "Highly effective decision-making during the monsoon season for providing forecast revisions.",
                    "Created an objective framework for decision-making."
                ]
            }
        ]
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
                    "Since 80% of our portfolio is in STOA (Short Term Open Access), with the majority being solar, it is absolutely necessary to monitor the performance of all external weather forecast models. This ensures that if a better-performing model is observed, it can be integrated immediately."
                ]
            },
            {
                heading: "Project",
                items: [
                    "Developed a Streamlit dashboard that tracks the forecast performance of all available open-source weather models (GHI) by comparing them against satellite-derived GHI.",
                    "The dashboard recommends the best forecast model based on current performance.",
                    "Power forecasts are generated using this recommended model (as per the plant's custom configuration) and made available for immediate download."
                ]
            },
            {
                heading: "Impact",
                isImpact: true,
                items: [
                    "An effective yet simple tool to monitor external forecasting models.",
                    "Action-centric features facilitate immediate decision-making."
                ]
            }
        ]
    }
];

projectsData.push(...remainingProjects);

const ongoingProjects = [
    {
        id: "ongoing-projects",
        category: "ongoing",
        title: "Ongoing Projects",
        subtitle: "A consolidated view of projects currently in development or planning.",
        sections: [
            {
                heading: "9) Solar Intraday Forecasting Algorithm",
                items: [
                    "A measurement-based forecast revision algorithm has already been developed (inspired by, and improving upon, the overspeed algorithm).",
                    "A satellite imagery-based correction algorithm is currently planned for development."
                ]
            },
            {
                heading: "10) Wind Intraday Forecasting Algorithm",
                items: [
                    "Data cleaning and time-series construction have been completed.",
                    "Ideation and core development are currently in progress."
                ]
            },
            {
                heading: "11) Agency Forecasting performance comparison dashboard with AI intelligence.",
                items: [
                    "Integration in Adani network in process"
                ]
            },
            {
                heading: "12) Long term budget forecast vs actuals comparison dashboard with AI intelligence.",
                items: [
                    "In planning"
                ]
            }
        ]
    }
];

projectsData.push(...ongoingProjects);
