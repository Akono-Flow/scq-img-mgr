// ===== STATE MANAGEMENT =====
let allImages = [];
let filteredImages = [];
let currentLightboxIndex = 0;

// ===== DOM ELEMENTS =====
const elements = {
    gallery: document.getElementById('gallery'),
    searchInput: document.getElementById('searchInput'),
    sortSelect: document.getElementById('sortSelect'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    totalImages: document.getElementById('totalImages'),
    displayedImages: document.getElementById('displayedImages'),
    totalDays: document.getElementById('totalDays'),
    loading: document.getElementById('loading'),
    noResults: document.getElementById('noResults'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxName: document.getElementById('lightboxName'),
    lightboxDate: document.getElementById('lightboxDate'),
    lightboxSubject: document.getElementById('lightboxSubject'),
    lightboxDescription: document.getElementById('lightboxDescription'),
    lightboxCounter: document.getElementById('lightboxCounter'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    btnDownload: document.getElementById('btnDownload')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    attachEventListeners();
});

// ===== LOAD IMAGES FROM JSON =====
async function loadImages() {
    try {
        const response = await fetch('images.json');
        if (!response.ok) {
            throw new Error('Failed to load images');
        }
        
        const data = await response.json();
        allImages = data.images || [];
        
        // Process dates
        allImages.forEach(img => {
            img.dateObj = new Date(img.date);
        });
        
        filteredImages = [...allImages];
        updateStats();
        displayImages();
        elements.loading.style.display = 'none';
    } catch (error) {
        console.error('Error loading images:', error);
        elements.loading.innerHTML = `
            <p style="color: #ef4444;">Failed to load images. Please make sure images.json exists.</p>
        `;
    }
}

// ===== EVENT LISTENERS =====
function attachEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Sort
    elements.sortSelect.addEventListener('change', handleSort);
    
    // Filter buttons
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Lightbox controls
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    elements.lightboxNext.addEventListener('click', () => navigateLightbox(1));
    elements.btnDownload.addEventListener('click', downloadImage);
    
    // Lightbox keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Close lightbox on background click
    elements.lightbox.addEventListener('click', (e) => {
        if (e.target === elements.lightbox) {
            closeLightbox();
        }
    });
}

// ===== DISPLAY IMAGES =====
function displayImages() {
    elements.gallery.innerHTML = '';
    
    if (filteredImages.length === 0) {
        elements.noResults.style.display = 'block';
        elements.gallery.style.display = 'none';
    } else {
        elements.noResults.style.display = 'none';
        elements.gallery.style.display = 'grid';
        
        filteredImages.forEach((image, index) => {
            const item = createGalleryItem(image, index);
            elements.gallery.appendChild(item);
        });
        
        // Initialize lazy loading
        initLazyLoading();
    }
    
    updateStats();
}

// ===== CREATE GALLERY ITEM =====
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 0.05}s`;
    
    const formattedDate = formatDate(image.dateObj);
    
    item.innerHTML = `
        <img 
            class="gallery-item-image lazy" 
            data-src="${image.imageUrl}" 
            alt="${image.name}"
            loading="lazy"
        >
        <div class="gallery-item-content">
            <h3 class="gallery-item-name">${escapeHtml(image.name)}</h3>
            <div class="gallery-item-meta">
                <span class="gallery-item-date">📅 ${formattedDate}</span>
                <span class="gallery-item-subject">${escapeHtml(image.subject)}</span>
            </div>
            <p class="gallery-item-description">${escapeHtml(image.description)}</p>
        </div>
    `;
    
    item.addEventListener('click', () => openLightbox(index));
    
    return item;
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    const images = document.querySelectorAll('.gallery-item-image.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                    img.classList.remove('lazy');
                });
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    filteredImages = allImages.filter(image => {
        return image.name.toLowerCase().includes(searchTerm) ||
               image.subject.toLowerCase().includes(searchTerm) ||
               image.description.toLowerCase().includes(searchTerm);
    });
    
    displayImages();
}

// ===== FILTER FUNCTIONALITY =====
function handleFilter(e) {
    // Update active button
    elements.filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const filter = e.target.dataset.filter;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    switch(filter) {
        case 'all':
            filteredImages = [...allImages];
            break;
            
        case 'today':
            filteredImages = allImages.filter(img => {
                const imgDate = new Date(img.dateObj);
                imgDate.setHours(0, 0, 0, 0);
                return imgDate.getTime() === now.getTime();
            });
            break;
            
        case 'week':
            const weekAgo = new Date(now);
            weekAgo.setDate(weekAgo.getDate() - 7);
            filteredImages = allImages.filter(img => img.dateObj >= weekAgo);
            break;
            
        case 'month':
            const monthAgo = new Date(now);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            filteredImages = allImages.filter(img => img.dateObj >= monthAgo);
            break;
    }
    
    // Reapply search if active
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredImages = filteredImages.filter(image => {
            return image.name.toLowerCase().includes(searchTerm) ||
                   image.subject.toLowerCase().includes(searchTerm) ||
                   image.description.toLowerCase().includes(searchTerm);
        });
    }
    
    displayImages();
}

// ===== SORT FUNCTIONALITY =====
function handleSort(e) {
    const sortBy = e.target.value;
    
    switch(sortBy) {
        case 'newest':
            filteredImages.sort((a, b) => b.dateObj - a.dateObj);
            break;
            
        case 'oldest':
            filteredImages.sort((a, b) => a.dateObj - b.dateObj);
            break;
            
        case 'subject':
            filteredImages.sort((a, b) => a.subject.localeCompare(b.subject));
            break;
            
        case 'name':
            filteredImages.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayImages();
}

// ===== UPDATE STATS =====
function updateStats() {
    elements.totalImages.textContent = allImages.length;
    elements.displayedImages.textContent = filteredImages.length;
    
    // Calculate unique days
    const uniqueDays = new Set(allImages.map(img => img.date)).size;
    elements.totalDays.textContent = uniqueDays;
}

// ===== LIGHTBOX FUNCTIONALITY =====
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    elements.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = filteredImages.length - 1;
    } else if (currentLightboxIndex >= filteredImages.length) {
        currentLightboxIndex = 0;
    }
    
    updateLightbox();
}

function updateLightbox() {
    const image = filteredImages[currentLightboxIndex];
    
    elements.lightboxImage.src = image.imageUrl;
    elements.lightboxName.textContent = image.name;
    elements.lightboxDate.textContent = formatDate(image.dateObj);
    elements.lightboxSubject.textContent = image.subject;
    elements.lightboxDescription.textContent = image.description;
    elements.lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredImages.length}`;
}

function handleKeyboard(e) {
    if (!elements.lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox(-1);
            break;
        case 'ArrowRight':
            navigateLightbox(1);
            break;
    }
}

function downloadImage() {
    const image = filteredImages[currentLightboxIndex];
    const link = document.createElement('a');
    link.href = image.imageUrl;
    link.download = `${image.name}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===== UTILITY FUNCTIONS =====
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
