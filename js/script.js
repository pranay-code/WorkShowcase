document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navProjects = document.getElementById('nav-projects');
    const navProfessional = document.getElementById('nav-professional');
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
        navProjects.innerHTML = '';
        navProfessional.innerHTML = '';

        let counters = { completed: 1, ongoing: 1, personal: 1, projects: 1, professional: 1 };

        projectsData.forEach(project => {
            const li = document.createElement('li');
            li.className = 'nav-item';

            const category = project.category || 'completed';

            // Determine actual display bucket and numbering
            let displayBucket, currentNum;
            if (category === 'completed' || category === 'ongoing') {
                displayBucket = 'projects';
                currentNum = counters.projects++;
            } else {
                displayBucket = 'professional';
                currentNum = counters.professional++;
            }

            li.innerHTML = `
                <a href="#" class="nav-link" data-id="${project.id}">
                    <span class="nav-number">${currentNum}.</span>
                    <span class="nav-text">${project.title}</span>
                </a>
            `;

            // Append to appropriate section
            if (displayBucket === 'projects') {
                navProjects.appendChild(li);
            } else if (displayBucket === 'professional') {
                navProfessional.appendChild(li);
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

                let flowClass = '';
                if (sec.isOldPipeline) flowClass = 'flow-old';
                else if (sec.isProblem) flowClass = 'flow-problem';
                else if (sec.isNewPipeline) flowClass = 'flow-new';
                else if (sec.isImpact) flowClass = 'impact-section';
                else if (sec.isTraining) flowClass = 'flow-training';
                else if (sec.isPractice) flowClass = 'flow-practice';
                else flowClass = 'flow-standard';

                let listHtml = itemsHtml;
                if (sec.isImpact) {
                    listHtml = itemsHtml.replace('class="content-list"', 'class="content-list impact-list"');
                }

                pipelineFlowHtml += `
                    <div class="flow-step ${flowClass}">
                        <h4>${sec.heading}</h4>
                        ${listHtml}
                    </div>
                `;
            });
        }

        // We accumulate all items into pipelineFlowHtml and wrap it
        if (pipelineFlowHtml) {
            if (project.category === 'personal') {
                sectionsHtml = `
                    <div class="professional-split-container">
                        ${pipelineFlowHtml}
                    </div>
                `;
            } else {
                sectionsHtml = `
                    <div class="pipeline-flow-container">
                        ${pipelineFlowHtml}
                    </div>
                `;
            }
        }

        let imagesHtml = '';
        if (project.images && project.images.length > 0) {
            imagesHtml = '<div class="project-images">';
            project.images.forEach(imgSrc => {
                const extraClass = project.category === 'personal' ? ' split-theme-img' : '';
                imagesHtml += `<img src="${imgSrc}" alt="Project Demonstration" class="project-image${extraClass}" />`;
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
        let bodyHtml;
        bodyHtml = `
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
        `;

        const cardHtml = `
            <div class="project-header">
                <h1 class="project-title">${project.title}</h1>
                <p class="project-subtitle">${project.subtitle}</p>
            </div>
            
            ${bodyHtml}
            
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
