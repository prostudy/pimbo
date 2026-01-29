document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const categoryList = document.getElementById('category-list');
    const mobileSelect = document.getElementById('mobile-category-select');
    const resourceGrid = document.getElementById('resource-grid');
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('panel-overlay');
    const closeBtn = document.getElementById('close-panel');

    // Panel Elements
    const pTitle = document.getElementById('panel-title');
    const pImage = document.getElementById('panel-image');
    const pBody = document.getElementById('panel-body');
    const pTag = document.getElementById('panel-tag');
    const pDate = document.getElementById('panel-date');
    const pLink = document.getElementById('panel-link');

    // State
    let resources = [];
    let categories = [];
    let currentCategory = 'all';

    // Init
    fetchData();

    // Fetch Data
    async function fetchData() {
        try {
            const response = await fetch('data/recursos.json');
            if (!response.ok) throw new Error('Error loading data');
            const data = await response.json();

            categories = data.categories;
            resources = data.resources;

            renderCategories();
            renderResources(resources);
            updateStats();
        } catch (error) {
            console.error(error);
            resourceGrid.innerHTML = `<div class="error-msg">Error cargando recursos: ${error.message}</div>`;
        }
    }

    // Render Categories
    function renderCategories() {
        // Desktop Sidebar
        categoryList.innerHTML = categories.map(cat => `
            <div class="category-item ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
                <span class="cat-icon">${cat.icon}</span> ${cat.name}
            </div>
        `).join('');

        // Mobile Dropdown
        mobileSelect.innerHTML = categories.map(cat => `
            <option value="${cat.id}">${cat.icon} ${cat.name}</option>
        `).join('');

        // Add Click Events
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                setCategory(item.dataset.category);
            });
        });

        mobileSelect.addEventListener('change', (e) => {
            setCategory(e.target.value);
        });
    }

    // Set Category Logic
    function setCategory(id) {
        currentCategory = id;

        // Update UI Classes
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.toggle('active', item.dataset.category === id);
        });
        mobileSelect.value = id;

        // Filter Resources
        const filtered = id === 'all'
            ? resources
            : resources.filter(r => r.category === id);

        renderResources(filtered);
    }

    // Render Resources Grid
    function renderResources(items) {
        if (items.length === 0) {
            resourceGrid.innerHTML = '<div class="no-results">No se encontraron recursos en esta categoría.</div>';
            return;
        }

        resourceGrid.innerHTML = items.map(item => {
            const cat = categories.find(c => c.id === item.category);
            return `
            <div class="resource-card" onclick="openResource(${item.id})">
                <div class="card-img-container">
                    <img src="${item.image}" alt="${item.title}" class="card-img">
                    <span class="card-badge">${cat ? cat.name : 'Recurso'}</span>
                    <span class="card-type-icon">${item.type === 'video' ? '▶' : '📄'}</span>
                </div>
                <div class="card-body">
                    <div class="card-date">${item.date}</div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-footer">
                        <button class="btn-card-action">🔖 Guardar</button>
                        <button class="btn-card-action">📂 Abrir</button>
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    // Open Side Panel
    window.openResource = function (id) {
        const item = resources.find(r => r.id === id);
        if (!item) return;

        const cat = categories.find(c => c.id === item.category);

        // Populate Panel
        pTitle.textContent = item.title;
        pImage.src = item.image;
        pTag.textContent = cat ? cat.name : 'Recurso';
        pDate.textContent = item.date;
        pBody.innerHTML = item.content || `<p>${item.description}</p>`;
        pLink.href = item.url;

        // Show Panel
        panel.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Lock Body Scroll
    };

    // Close Panel Logic
    function closePanel() {
        panel.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = ''; // Unlock Scroll
    }

    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    // Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePanel();
    });

    // Update Stats (Dummy logic for now)
    function updateStats() {
        document.getElementById('stat-read').textContent = '3';
        document.getElementById('stat-saved').textContent = '12';
    }
});
