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
        <svg viewBox="0 0 700 350" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
            <defs>
                <clipPath id="globeClipL"><circle cx="175" cy="145" r="85" /></clipPath>
                <clipPath id="globeClipR"><circle cx="525" cy="145" r="85" /></clipPath>
                <linearGradient id="bgL" x1="0" y1="0" x2="0" y2="350" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#fef9c3" /><stop offset="100%" stop-color="#fee2e2" />
                </linearGradient>
                <linearGradient id="bgR" x1="350" y1="0" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#dbeafe" /><stop offset="100%" stop-color="#ede9fe" />
                </linearGradient>
                <!-- Earth ocean gradient -->
                <radialGradient id="oceanL" cx="40%" cy="35%"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#1d4ed8"/></radialGradient>
                <radialGradient id="oceanR" cx="40%" cy="35%"><stop offset="0%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#0284c7"/></radialGradient>
                <!-- Atmosphere glow -->
                <radialGradient id="atmoL" cx="50%" cy="50%" r="50%"><stop offset="85%" stop-color="transparent"/><stop offset="100%" stop-color="#93c5fd" stop-opacity="0.4"/></radialGradient>
                <radialGradient id="atmoR" cx="50%" cy="50%" r="50%"><stop offset="85%" stop-color="transparent"/><stop offset="100%" stop-color="#22d3ee" stop-opacity="0.5"/></radialGradient>
                <!-- Specular highlight -->
                <radialGradient id="sheen" cx="35%" cy="30%" r="45%"><stop offset="0%" stop-color="white" stop-opacity="0.35"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient>
            </defs>

            <!-- Backgrounds -->
            <rect width="350" height="350" fill="url(#bgL)"/>
            <rect x="350" width="350" height="350" fill="url(#bgR)"/>
            <line x1="350" y1="0" x2="350" y2="350" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6,4" opacity="0.4"/>

            <!-- Labels -->
            <text x="175" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#b45309" font-family="Inter,sans-serif">Traditional NWP</text>
            <text x="525" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#1d4ed8" font-family="Inter,sans-serif">AI-Native NWP</text>

            <!-- ====== LEFT EARTH GLOBE ====== -->
            <circle cx="175" cy="145" r="88" fill="url(#atmoL)" opacity="0.6"><animate attributeName="r" values="88;94;88" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0.25;0.6" dur="6s" repeatCount="indefinite"/></circle>
            <circle cx="175" cy="145" r="85" fill="url(#oceanL)"/>
            <!-- Landmasses -->
            <g clip-path="url(#globeClipL)">
                <ellipse cx="155" cy="115" rx="28" ry="20" fill="#4ade80" opacity="0.7"/>
                <ellipse cx="200" cy="155" rx="18" ry="25" fill="#4ade80" opacity="0.6"/>
                <ellipse cx="140" cy="170" rx="22" ry="12" fill="#86efac" opacity="0.5"/>
                <ellipse cx="190" cy="105" rx="12" ry="10" fill="#86efac" opacity="0.55"/>
                <!-- Coarse grid (4 lat, 2 lon) -->
                <g stroke="rgba(255,255,255,0.5)" stroke-width="1.3">
                    <line x1="90" y1="105" x2="260" y2="105"/>
                    <line x1="90" y1="130" x2="260" y2="130"/>
                    <line x1="90" y1="160" x2="260" y2="160"/>
                    <line x1="90" y1="185" x2="260" y2="185"/>
                </g>
                <ellipse cx="175" cy="145" rx="25" ry="85" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.3"/>
                <ellipse cx="175" cy="145" rx="55" ry="85" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.3"/>
                <ellipse cx="175" cy="145" rx="40" ry="85" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1">
                    <animateTransform attributeName="transform" type="rotate" from="0 175 145" to="360 175 145" dur="25s" repeatCount="indefinite"/>
                </ellipse>
            </g>
            <circle cx="175" cy="145" r="85" fill="url(#sheen)"/>

            <!-- Hourglass -->
            <g transform="translate(68,258)">
                <path d="M0,0 L16,0 L16,3 L11,11 L16,19 L16,22 L0,22 L0,19 L5,11 L0,3 Z" fill="none" stroke="#dc2626" stroke-width="1.5"/>
                <rect x="5" y="14" width="6" height="5" fill="#fca5a5" opacity="0.7"><animate attributeName="height" values="5;0;5" dur="4s" repeatCount="indefinite"/><animate attributeName="y" values="14;19;14" dur="4s" repeatCount="indefinite"/></rect>
            </g>
            <!-- Server rack -->
            <g transform="translate(95,258)">
                <rect width="22" height="6" rx="1" fill="none" stroke="#6b7280" stroke-width="1.2"/>
                <rect y="8" width="22" height="6" rx="1" fill="none" stroke="#6b7280" stroke-width="1.2"/>
                <rect y="16" width="22" height="6" rx="1" fill="none" stroke="#6b7280" stroke-width="1.2"/>
                <circle cx="4" cy="3" r="1.2" fill="#ef4444"><animate attributeName="fill" values="#ef4444;#22c55e;#ef4444" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="4" cy="11" r="1.2" fill="#22c55e"><animate attributeName="fill" values="#22c55e;#f59e0b;#22c55e" dur="1.5s" repeatCount="indefinite"/></circle>
                <circle cx="4" cy="19" r="1.2" fill="#f59e0b"><animate attributeName="fill" values="#f59e0b;#ef4444;#f59e0b" dur="2.5s" repeatCount="indefinite"/></circle>
            </g>
            <!-- Slow drips -->
            <g stroke="#ef4444" stroke-width="1.5" opacity="0.5">
                <line x1="160" y1="230" x2="160" y2="240"><animate attributeName="y1" values="230;255" dur="3s" repeatCount="indefinite"/><animate attributeName="y2" values="240;260" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite"/></line>
                <line x1="190" y1="230" x2="190" y2="240"><animate attributeName="y1" values="230;255" dur="3s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="y2" values="240;260" dur="3s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="3s" begin="1.5s" repeatCount="indefinite"/></line>
            </g>

            <!-- LEFT HUMANS: scientist + waiting person -->
            <!-- Scientist with lab coat and clipboard -->
            <g transform="translate(185,255)">
                <circle cx="0" cy="0" r="6" fill="#fde68a" stroke="#92400e" stroke-width="1.2"/>
                <path d="M-1,1.5 Q0,3.5 1,1.5" stroke="#92400e" stroke-width="0.7" fill="none"/>
                <line x1="0" y1="6" x2="0" y2="22" stroke="#f5f5f4" stroke-width="5" stroke-linecap="round"/>
                <line x1="0" y1="6" x2="0" y2="22" stroke="#92400e" stroke-width="1.2"/>
                <line x1="0" y1="22" x2="-5" y2="36" stroke="#92400e" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="5" y2="36" stroke="#92400e" stroke-width="1.3"/>
                <line x1="0" y1="10" x2="9" y2="18" stroke="#92400e" stroke-width="1.2"/>
                <line x1="0" y1="10" x2="-7" y2="8" stroke="#92400e" stroke-width="1.2"/>
                <rect x="7" y="13" width="10" height="13" rx="1.5" fill="#fffbeb" stroke="#b45309" stroke-width="0.9"/>
                <line x1="9" y1="17" x2="15" y2="17" stroke="#b45309" stroke-width="0.5"/>
                <line x1="9" y1="20" x2="14" y2="20" stroke="#b45309" stroke-width="0.5"/>
                <line x1="9" y1="23" x2="13" y2="23" stroke="#b45309" stroke-width="0.5"/>
            </g>
            <!-- Waiting person (tapping foot, thought bubbles) -->
            <g transform="translate(225,255)">
                <circle cx="0" cy="0" r="6" fill="#fde68a" stroke="#78350f" stroke-width="1.2"/>
                <circle cx="-1.5" cy="-1" r="0.8" fill="#78350f"/><circle cx="1.5" cy="-1" r="0.8" fill="#78350f"/>
                <line x1="0" y1="6" x2="0" y2="22" stroke="#78350f" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="-5" y2="36" stroke="#78350f" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="5" y2="36" stroke="#78350f" stroke-width="1.3"/>
                <line x1="0" y1="11" x2="7" y2="15" stroke="#78350f" stroke-width="1.2"/>
                <line x1="0" y1="11" x2="-7" y2="15" stroke="#78350f" stroke-width="1.2"/>
                <line x1="5" y1="36" x2="8" y2="38"><animate attributeName="x2" values="8;5;8" dur="0.8s" repeatCount="indefinite"/></line>
                <g fill="#b45309"><circle cx="9" cy="-6" r="1.3"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite"/></circle><circle cx="14" cy="-8" r="1.3"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.3s" repeatCount="indefinite"/></circle><circle cx="19" cy="-6" r="1.3"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.6s" repeatCount="indefinite"/></circle></g>
            </g>

            <!-- ====== RIGHT EARTH GLOBE ====== -->
            <circle cx="525" cy="145" r="90" fill="url(#atmoR)" opacity="0.5"><animate attributeName="r" values="90;98;90" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="525" cy="145" r="85" fill="url(#oceanR)"/>
            <!-- Landmasses -->
            <g clip-path="url(#globeClipR)">
                <ellipse cx="505" cy="115" rx="28" ry="20" fill="#34d399" opacity="0.75"/>
                <ellipse cx="550" cy="155" rx="18" ry="25" fill="#34d399" opacity="0.65"/>
                <ellipse cx="490" cy="170" rx="22" ry="12" fill="#6ee7b7" opacity="0.55"/>
                <ellipse cx="540" cy="105" rx="12" ry="10" fill="#6ee7b7" opacity="0.6"/>
                <!-- Fine grid (10 lat, 5 lon) -->
                <g stroke="rgba(255,255,255,0.35)" stroke-width="0.6">
                    <line x1="440" y1="75" x2="610" y2="75"/><line x1="440" y1="89" x2="610" y2="89"/>
                    <line x1="440" y1="103" x2="610" y2="103"/><line x1="440" y1="117" x2="610" y2="117"/>
                    <line x1="440" y1="131" x2="610" y2="131"/><line x1="440" y1="145" x2="610" y2="145"/>
                    <line x1="440" y1="159" x2="610" y2="159"/><line x1="440" y1="173" x2="610" y2="173"/>
                    <line x1="440" y1="187" x2="610" y2="187"/><line x1="440" y1="201" x2="610" y2="201"/>
                </g>
                <g fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.6">
                    <ellipse cx="525" cy="145" rx="12" ry="85"/><ellipse cx="525" cy="145" rx="28" ry="85"/>
                    <ellipse cx="525" cy="145" rx="44" ry="85"/><ellipse cx="525" cy="145" rx="60" ry="85"/>
                    <ellipse cx="525" cy="145" rx="76" ry="85"/>
                </g>
                <ellipse cx="525" cy="145" rx="35" ry="85" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.8">
                    <animateTransform attributeName="transform" type="rotate" from="0 525 145" to="360 525 145" dur="5s" repeatCount="indefinite"/>
                </ellipse>
            </g>
            <circle cx="525" cy="145" r="85" fill="url(#sheen)"/>

            <!-- Lightning -->
            <g transform="translate(445,258)"><path d="M10,0 L4,10 L8,10 L5,22 L15,8 L10,8 Z" fill="#f59e0b"/></g>
            <!-- GPU -->
            <g transform="translate(475,256)">
                <rect x="4" y="4" width="14" height="14" rx="2" fill="none" stroke="#7c3aed" stroke-width="1.3"/>
                <line x1="7" y1="1" x2="7" y2="4" stroke="#7c3aed" stroke-width="1"/><line x1="11" y1="1" x2="11" y2="4" stroke="#7c3aed" stroke-width="1"/><line x1="15" y1="1" x2="15" y2="4" stroke="#7c3aed" stroke-width="1"/>
                <line x1="7" y1="18" x2="7" y2="21" stroke="#7c3aed" stroke-width="1"/><line x1="11" y1="18" x2="11" y2="21" stroke="#7c3aed" stroke-width="1"/><line x1="15" y1="18" x2="15" y2="21" stroke="#7c3aed" stroke-width="1"/>
                <line x1="1" y1="7" x2="4" y2="7" stroke="#7c3aed" stroke-width="1"/><line x1="1" y1="11" x2="4" y2="11" stroke="#7c3aed" stroke-width="1"/><line x1="1" y1="15" x2="4" y2="15" stroke="#7c3aed" stroke-width="1"/>
                <line x1="18" y1="7" x2="21" y2="7" stroke="#7c3aed" stroke-width="1"/><line x1="18" y1="11" x2="21" y2="11" stroke="#7c3aed" stroke-width="1"/><line x1="18" y1="15" x2="21" y2="15" stroke="#7c3aed" stroke-width="1"/>
                <rect x="6.5" y="6.5" width="4" height="4" fill="#7c3aed" opacity="0.4"><animate attributeName="opacity" values="0.3;1;0.3" dur="0.7s" repeatCount="indefinite"/></rect>
                <rect x="11.5" y="6.5" width="4" height="4" fill="#7c3aed" opacity="0.6"><animate attributeName="opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite"/></rect>
                <rect x="6.5" y="11.5" width="4" height="4" fill="#7c3aed" opacity="0.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite"/></rect>
                <rect x="11.5" y="11.5" width="4" height="4" fill="#7c3aed" opacity="0.3"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="0.6s" repeatCount="indefinite"/></rect>
            </g>
            <!-- Fast streams -->
            <g stroke="#0ea5e9" stroke-width="1.5">
                <line x1="510" y1="230" x2="510" y2="240"><animate attributeName="y1" values="230;255" dur="0.7s" repeatCount="indefinite"/><animate attributeName="y2" values="240;260" dur="0.7s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="0.7s" repeatCount="indefinite"/></line>
                <line x1="525" y1="230" x2="525" y2="240"><animate attributeName="y1" values="230;255" dur="0.7s" begin="0.2s" repeatCount="indefinite"/><animate attributeName="y2" values="240;260" dur="0.7s" begin="0.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="0.7s" begin="0.2s" repeatCount="indefinite"/></line>
                <line x1="540" y1="230" x2="540" y2="240"><animate attributeName="y1" values="230;255" dur="0.7s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="y2" values="240;260" dur="0.7s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="0.7s" begin="0.4s" repeatCount="indefinite"/></line>
            </g>
            <!-- Orbiting particles -->
            <circle r="3" fill="#8b5cf6"><animateMotion dur="3s" repeatCount="indefinite" path="M525,60 A85,85 0 1,1 524,60 Z"/><animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/></circle>
            <circle r="2" fill="#6366f1"><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M525,60 A85,85 0 1,1 524,60 Z"/><animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite"/></circle>

            <!-- RIGHT HUMANS: celebrating + thumbs up -->
            <g transform="translate(540,255)">
                <circle cx="0" cy="0" r="6" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="1.2"/>
                <path d="M-2,1.5 Q0,4 2,1.5" stroke="#1e3a8a" stroke-width="0.8" fill="none"/>
                <circle cx="-1.5" cy="-1" r="0.8" fill="#1e3a8a"/><circle cx="1.5" cy="-1" r="0.8" fill="#1e3a8a"/>
                <line x1="0" y1="6" x2="0" y2="22" stroke="#1e3a8a" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="-5" y2="36" stroke="#1e3a8a" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="5" y2="36" stroke="#1e3a8a" stroke-width="1.3"/>
                <line x1="0" y1="10" x2="-8" y2="1" stroke="#1e3a8a" stroke-width="1.2"/>
                <line x1="0" y1="10" x2="8" y2="1" stroke="#1e3a8a" stroke-width="1.2"/>
            </g>
            <g transform="translate(575,255)">
                <circle cx="0" cy="0" r="6" fill="#bfdbfe" stroke="#1e40af" stroke-width="1.2"/>
                <path d="M-2,1 Q0,3.5 2,1" stroke="#1e40af" stroke-width="0.8" fill="none"/>
                <circle cx="-1.5" cy="-1" r="0.8" fill="#1e40af"/><circle cx="1.5" cy="-1" r="0.8" fill="#1e40af"/>
                <line x1="0" y1="6" x2="0" y2="22" stroke="#1e40af" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="-5" y2="36" stroke="#1e40af" stroke-width="1.3"/>
                <line x1="0" y1="22" x2="5" y2="36" stroke="#1e40af" stroke-width="1.3"/>
                <line x1="0" y1="10" x2="8" y2="5" stroke="#1e40af" stroke-width="1.2"/>
                <line x1="8" y1="5" x2="8" y2="-2" stroke="#1e40af" stroke-width="1.2"/>
                <line x1="0" y1="10" x2="-7" y2="15" stroke="#1e40af" stroke-width="1.2"/>
            </g>
            <!-- Sparkles -->
            <g fill="#3b82f6"><circle cx="528" cy="248" r="1.5"><animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite"/></circle><circle cx="590" cy="250" r="1.5"><animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite"/></circle><circle cx="555" cy="246" r="1"><animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1.2s" repeatCount="indefinite"/></circle></g>

            <!-- Bottom labels -->
            <text x="175" y="340" text-anchor="middle" font-size="10" fill="#92400e" font-family="Inter,sans-serif" opacity="0.8">Physics · Supercomputer · Slow</text>
            <text x="525" y="340" text-anchor="middle" font-size="10" fill="#1e40af" font-family="Inter,sans-serif" opacity="0.8">Transformer · GPU · Fast</text>
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
