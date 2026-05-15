// ==============================
// GameGuideHub - Main Engine
// ==============================

// Merge data from both files
let fullGuides;
try { fullGuides = allGuides; } catch(e) { fullGuides = guides || []; }

// === Render Categories Grid ===
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="cat-card" onclick="location.href='categories.html?cat=${cat.id}'">
            <span class="icon">${cat.icon}</span>
            <h3>${cat.name}</h3>
            <p>${cat.desc}</p>
            <span class="count">${cat.count} 篇攻略</span>
        </div>
    `).join('');
}

// === Render Featured Guides ===
function renderFeatured() {
    const grid = document.getElementById('featuredGuides');
    if (!grid) return;
    const featured = fullGuides.slice(0, 6);
    grid.innerHTML = featured.map(g => `
        <div class="guide-card">
            <span class="tag tag-${g.category}">${getCategoryName(g.category)}</span>
            <h3><a href="guides/detail/${g.id}.html">${g.title}</a></h3>
            <p>${g.brief}</p>
            <div class="meta">
                <span>📅 ${g.date}</span>
                <span>🏷️ ${g.tags.join(', ')}</span>
            </div>
        </div>
    `).join('');

    const countEl = document.getElementById('guideCount');
    if (countEl) countEl.textContent = fullGuides.length;
}

// === Get Category Name ===
function getCategoryName(id) {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.name : id;
}

// === Render All Guides Page ===
function renderAllGuides() {
    renderSearchResults();
}

// === Render Category Detail Page ===
function renderCategoryPage() {
    const grid = document.getElementById('catGuidesGrid');
    const titleEl = document.getElementById('catTitle');
    const descEl = document.getElementById('catDesc');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get('cat');
    const cat = categories.find(c => c.id === catId);
    if (titleEl) titleEl.textContent = cat ? `${cat.icon} ${cat.name}` : '全部分类';
    if (descEl && cat) descEl.textContent = cat.desc;

    const filtered = catId ? fullGuides.filter(g => g.category === catId) : fullGuides;
    grid.innerHTML = filtered.map(g => `
        <div class="guide-card">
            <span class="tag tag-${g.category}">${getCategoryName(g.category)}</span>
            <h3><a href="guides/detail/${g.id}.html">${g.title}</a></h3>
            <p>${g.brief}</p>
            <div class="meta">
                <span>📅 ${g.date}</span>
                <span>🏷️ ${g.tags.join(', ')}</span>
            </div>
        </div>
    `).join('');
}

// === Search ===
function searchGuides(e) {
    const query = e.target.value.toLowerCase().trim();
    if (e.key === 'Enter' && query) {
        window.location.href = 'all-guides.html?search=' + encodeURIComponent(query);
    }
}

// === Render search results on all-guides page ===
function renderSearchResults() {
    const grid = document.getElementById('allGuidesGrid');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('search');
    const filterCat = urlParams.get('cat');

    let filtered = fullGuides;
    if (filterCat) filtered = filtered.filter(g => g.category === filterCat);
    if (query) {
        const q = query.toLowerCase();
        filtered = filtered.filter(g =>
            g.title.toLowerCase().includes(q) ||
            g.tags.some(t => t.toLowerCase().includes(q)) ||
            g.brief.toLowerCase().includes(q)
        );
    }

    const countEl = document.getElementById('totalGuideCount');
    if (countEl) countEl.textContent = filtered.length;

    grid.innerHTML = filtered.length ? filtered.map(g => `
        <div class="guide-card">
            <span class="tag tag-${g.category}">${getCategoryName(g.category)}</span>
            <h3><a href="guides/detail/${g.id}.html">${g.title}</a></h3>
            <p>${g.brief}</p>
            <div class="meta">
                <span>📅 ${g.date}</span>
                <span>🏷️ ${g.tags.join(', ')}</span>
            </div>
        </div>
    `).join('') : '<p style="grid-column:1/-1;text-align:center;color:#6a7282;padding:40px;">没有找到匹配的攻略 😅</p>';
}

// === Mobile Menu ===
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('show');
}

// === Init ===
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderFeatured();
    renderAllGuides();
    renderCategoryPage();
});
