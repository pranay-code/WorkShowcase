document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navCompleted = document.getElementById('nav-completed');
    const navOngoing = document.getElementById('nav-ongoing');
    const navPersonal = document.getElementById('nav-personal');
    const contentCard = document.getElementById('content-card');

    // Zoom Modal Elements
    const zoomModal = document.getElementById('zoom-modal');
    const zoomContent = document.getElementById('zoom-content');
    const zoomClose = document.querySelector('.zoom-close');

    // State
    let currentProjectId = null;

    // Initialize the application
    function init() {
        renderNavigation();
        setupZoomModal();

        // Load first project by default if data exists
        if (projectsData && projectsData.length > 0) {
            loadProject(projectsData[0].id);
        } else {
            contentCard.innerHTML = '<div class="loading-state">No projects found. Please check data source.</div>';
        }
    }

    // Setup Event Listeners for Zoom Modal
    function setupZoomModal() {
        if (!zoomModal) return;

        // Close on X click
        if (zoomClose) {
            zoomClose.addEventListener('click', closeZoomModal);
        }

        // Close on background click
        zoomModal.addEventListener('click', (e) => {
            if (e.target === zoomModal || e.target === zoomContent) {
                closeZoomModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
                closeZoomModal();
            }
        });
    }

    function openZoomModal(contentHtml) {
        if (!zoomModal || !zoomContent) return;
        zoomContent.innerHTML = contentHtml;
        zoomModal.classList.remove('hidden');
        // Small delay to allow display to kick in before opacity transition
        setTimeout(() => {
            zoomModal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeZoomModal() {
        if (!zoomModal) return;
        zoomModal.classList.remove('active');
        setTimeout(() => {
            zoomModal.classList.add('hidden');
            zoomContent.innerHTML = '';
            document.body.style.overflow = ''; // Restore background scrolling
        }, 300); // 300ms matches CSS transition time
    }

    // Render sidebar navigation links
    function renderNavigation() {
        // Clear existing lists
        navCompleted.innerHTML = '';
        navOngoing.innerHTML = '';
        navPersonal.innerHTML = '';

        let counters = { completed: 1, ongoing: 1, personal: 1 };

        projectsData.forEach(project => {
            const li = document.createElement('li');
            li.className = 'nav-item';

            const category = project.category || 'completed';
            const num = counters[category]++;

            li.innerHTML = `
                <a href="#" class="nav-link" data-id="${project.id}">
                    <span class="nav-number">${num}.</span>
                    <span class="nav-text">${project.title}</span>
                </a>
            `;

            // Append to appropriate section
            if (category === 'completed') {
                navCompleted.appendChild(li);
            } else if (category === 'ongoing') {
                navOngoing.appendChild(li);
            } else if (category === 'personal') {
                navPersonal.appendChild(li);
            }

            // Add click listener
            const link = li.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                loadProject(project.id);
            });
        });
    }

    // Load and display a specific project's content
    function loadProject(projectId) {
        if (currentProjectId === projectId) return;

        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        currentProjectId = projectId;
        updateActiveNav(projectId);
        renderContent(project);
    }

    // Update active state in sidebar
    function updateActiveNav(projectId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.id === projectId) {
                link.classList.add('active');
                // Optional: ensure it's visible in scroll
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Render the main content card
    function renderContent(project) {
        // Build the HTML for the sections dynamically
        let sectionsHtml = '';
        let pipelineFlowHtml = '';

        if (project.sections && project.sections.length > 0) {
            project.sections.forEach(sec => {
                let itemsHtml = '';
                if (sec.items && sec.items.length > 0) {
                    itemsHtml = '<ul class="content-list">';
                    sec.items.forEach(item => {
                        itemsHtml += `<li>${item}</li>`;
                    });
                    itemsHtml += '</ul>';
                }

                // Check if section is part of the special pipeline flow (Project 1)
                if (sec.isOldPipeline || sec.isProblem || sec.isNewPipeline) {
                    let flowClass = '';
                    if (sec.isOldPipeline) flowClass = 'flow-old';
                    else if (sec.isProblem) flowClass = 'flow-problem';
                    else if (sec.isNewPipeline) flowClass = 'flow-new';

                    pipelineFlowHtml += `
                        <div class="flow-step ${flowClass}">
                            <h4>${sec.heading}</h4>
                            ${itemsHtml}
                        </div>
                    `;
                } else if (sec.isImpact) {
                    sectionsHtml += `
                        <div class="impact-section">
                            <div class="impact-header">
                                <h3>${sec.heading}</h3>
                            </div>
                            ${itemsHtml.replace('class="content-list"', 'class="content-list impact-list"')}
                        </div>
                    `;
                } else {
                    sectionsHtml += `
                        <div class="content-section">
                            ${sec.heading ? `<p class="content-text"><strong>${sec.heading}:</strong></p>` : ''}
                            ${itemsHtml}
                        </div>
                    `;
                }
            });
        }

        // If we accumulated pipeline flow items, prepend them to the normal sections
        if (pipelineFlowHtml) {
            sectionsHtml = `
                <div class="pipeline-flow-container">
                    ${pipelineFlowHtml}
                </div>
            ` + sectionsHtml;
        }

        let imagesHtml = '';
        if (project.images && project.images.length > 0) {
            imagesHtml = '<div class="project-images">';
            project.images.forEach(imgSrc => {
                imagesHtml += `<img src="${imgSrc}" alt="Project Demonstration" class="project-image" />`;
            });
            imagesHtml += '</div>';
        }

        // Get adjacent projects for navigation (Back/Next)
        const currentIndex = projectsData.findIndex(p => p.id === project.id);
        const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
        const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

        let navButtonsHtml = '<div class="card-nav-buttons">';
        if (prevProject) {
            navButtonsHtml += `<button class="btn btn-outline nav-btn" data-target="${prevProject.id}"><i class="fa-solid fa-arrow-left"></i> Back: ${prevProject.title}</button>`;
        } else {
            navButtonsHtml += `<div></div>`; // Spacer
        }

        if (nextProject) {
            navButtonsHtml += `<button class="btn btn-primary nav-btn" data-target="${nextProject.id}">Go To: ${nextProject.title} <i class="fa-solid fa-arrow-right"></i></button>`;
        } else {
            navButtonsHtml += `<div></div>`; // Spacer
        }
        navButtonsHtml += '</div>';

        // Construct full card HTML
        const cardHtml = `
            <div class="project-header">
                <h1 class="project-title">${project.title}</h1>
                <p class="project-subtitle">${project.subtitle}</p>
            </div>
            
            <div class="project-body">
                <div class="project-text-content">
                    ${sectionsHtml}
                </div>
                
                ${imagesHtml}
                
                ${project.svg ? `
                <div class="svg-container">
                    <div class="svg-wrapper">
                        ${project.svg}
                    </div>
                </div>` : ''}
            </div>
            
            ${navButtonsHtml}
        `;

        // Update DOM
        contentCard.style.animation = 'none';
        contentCard.offsetHeight; /* trigger reflow */
        contentCard.style.animation = null;
        contentCard.innerHTML = cardHtml;

        // Attach event listeners to the new nav buttons inside the card
        const navBtns = contentCard.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = e.currentTarget.dataset.target;
                if (targetId) loadProject(targetId);
            });
        });

        // Attach zoom listeners to images and SVGs
        const interactiveElements = contentCard.querySelectorAll('.project-image, .svg-container');
        interactiveElements.forEach(el => {
            el.addEventListener('click', (e) => {
                // Determine what content to clone into the zoom modal
                if (e.currentTarget.classList.contains('project-image')) {
                    // Clone the image with a new class for styling if needed, but keeping src
                    openZoomModal(`<img src="${e.currentTarget.src}" class="zoomed-image" alt="Zoomed Project Image">`);
                } else if (e.currentTarget.classList.contains('svg-container')) {
                    // Clone the entire SVG wrapper
                    const svgWrapper = e.currentTarget.querySelector('.svg-wrapper');
                    if (svgWrapper) {
                        openZoomModal(svgWrapper.outerHTML);
                    }
                }
            });
        });

        // Refresh SVG animations by explicitly pausing/unpausing if needed, 
        // normally browser handles inline SVG SMIL animations on DOM insert
    }

    // Start
    init();
});
