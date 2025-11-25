// ===========================
// BILINGUAL FUNCTIONALITY
// ===========================

let currentLanguage = 'fr'; // Default to French

const langToggleBtn = document.getElementById('langToggle');

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        updateLanguage();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-fr]');
    
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const frText = element.getAttribute('data-fr');
        
        if (currentLanguage === 'en') {
            element.textContent = enText;
        } else {
            element.textContent = frText;
        }
    });
    
    // Update language toggle button
    if (langToggleBtn) {
        if (currentLanguage === 'en') {
            langToggleBtn.innerHTML = '<span class="flag">🇬🇧</span> EN';
        } else {
            langToggleBtn.innerHTML = '<span class="flag">🇫🇷</span> FR';
        }
    }
}

// ===========================
// NAVIGATION
// ===========================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// SMOOTH SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe all sections and animated elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
    
    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
        }, index * 50);
    });

    // Observe slide-in elements
    const slideInElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in-section, .zoom-in');
    slideInElements.forEach(element => {
        observer.observe(element);
    });
});

// ===========================
// CONTACT FORM - MAILTO
// ===========================
// FORM SUBMISSION - REMOVED LANGUAGE DETECTION
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const parentName = document.getElementById('parentName').value;
        const childAge = document.getElementById('childAge').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const serviceType = document.getElementById('serviceType').value;
        const message = document.getElementById('message').value;
        
        // Construct email subject and body
        const subject = `Nouvelle demande de ${parentName}`;
        
        const body = `Nom du parent: ${parentName}
Âge de l'enfant: ${childAge}
Courriel: ${email}
Téléphone: ${phone}
Type de service: ${serviceType}

Message:
${message}

---
Cette demande a été soumise via le site web Le Jardin Eunice.`;
        
        // Create mailto link
        const mailtoLink = `mailto:info@lejardineunice.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Optional: Show confirmation message
        const confirmMsg = 'Ouverture de votre client de messagerie... S\'il ne s\'ouvre pas automatiquement, veuillez nous envoyer un courriel à info@lejardineunice.ca';
        
        alert(confirmMsg);
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// BACKGROUND MUSIC PLAYLIST
// ===========================

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;
let musicAttempted = false;

// Music playlist - add all your music files here
const musicPlaylist = [
    'assets/music/background-music.mp3',
    'assets/music/uplifted-vibes.mp3'
];

let currentTrackIndex = 0;

// Function to load and play a track
function loadTrack(index) {
    if (index >= 0 && index < musicPlaylist.length) {
        bgMusic.src = musicPlaylist[index];
        currentTrackIndex = index;
    }
}

// Function to play next track
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicPlaylist.length;
    loadTrack(currentTrackIndex);
    bgMusic.play().catch(error => console.log('Error playing next track:', error));
}

// Load first track on page load
if (bgMusic && musicPlaylist.length > 0) {
    loadTrack(0);
}

// Auto-play next track when current ends
if (bgMusic) {
    bgMusic.addEventListener('ended', playNextTrack);
}

// Function to start music
function startMusic() {
    bgMusic.play().then(() => {
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        isMusicPlaying = true;
    }).catch((error) => {
        console.log('Music autoplay prevented by browser. User must click to play.');
        // Music file might not exist or autoplay blocked
    });
}

// Toggle music on button click
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        isMusicPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            isMusicPlaying = true;
        }).catch((error) => {
            const msg = currentLanguage === 'en'
                ? 'Background music file not found. Please add "background-music.mp3" to assets/music/ folder.'
                : 'Fichier de musique de fond introuvable. Veuillez ajouter "background-music.mp3" au dossier assets/music/.';
            alert(msg);
        });
    }
});

// Auto-play music on first user interaction
document.addEventListener('click', () => {
    if (!musicAttempted) {
        musicAttempted = true;
        startMusic();
    }
}, { once: true });

// Also try on page load with a slight delay
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!musicAttempted) {
            startMusic();
            musicAttempted = true;
        }
    }, 1000);
});

// ===========================
// FLOATING BUTTONS ANIMATION
// ===========================

const floatingButtons = document.querySelector('.floating-buttons');

if (floatingButtons) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingButtons.style.opacity = '1';
            floatingButtons.style.transform = 'translateY(0)';
        } else {
            floatingButtons.style.opacity = '0';
            floatingButtons.style.transform = 'translateY(100px)';
        }
    });

    // Initialize floating buttons style
    floatingButtons.style.transition = 'all 0.3s ease';
}

// ===========================
// FORM VALIDATION ENHANCEMENT
// ===========================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#E0E0E0';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    });
});

// ===========================
// SCROLL TO TOP ON PAGE LOAD
// ===========================

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===========================
// INITIALIZE
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Site is now French only - no language toggle needed
    
    // Set initial floating buttons state
    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.opacity = '0';
        floatingButtons.style.transform = 'translateY(100px)';
    }
});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// YEAR UPDATE IN FOOTER
// ===========================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
}

// ===========================
// GALLERY CAROUSEL & MODAL
// ===========================

const galleryCarousel = document.querySelector('.gallery-carousel');
const carouselPrevBtn = document.querySelector('.carousel-prev');
const carouselNextBtn = document.querySelector('.carousel-next');
const viewLibraryBtn = document.querySelector('.view-library-btn');
const galleryModal = document.getElementById('galleryModal');
const modalGrid = document.querySelector('.gallery-modal-grid');
const closeModal = document.querySelector('.gallery-modal-close');

// Define image library - ADD YOUR IMAGES FROM assets/images/library/ FOLDER HERE
// Format: { src: 'path/to/image.jpg', caption: 'French / English' }
const imageLibrary = [
    { src: 'assets/images/library/home works.jpeg', caption: 'Home Works / Home Works' },
    { src: 'assets/images/library/lego lego.jpeg', caption: 'Lego Lego / Lego Lego' },
    { src: 'assets/images/library/painting time.jpeg', caption: 'Painting Time / Painting Time' },
    { src: 'assets/images/library/play time with instructor.jpeg', caption: 'Play Time With Instructor / Play Time With Instructor' }
];

// Shuffle array to get random images
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load carousel with random 10 images from library
function loadCarousel() {
    if (!galleryCarousel) return;
    
    if (imageLibrary.length === 0) {
        // Show message if no images
        galleryCarousel.innerHTML = `
            <div style="width: 100%; padding: 60px 20px; text-align: center; color: #666;">
                <i class="fas fa-images" style="font-size: 4rem; margin-bottom: 20px; color: #A8C5A0;"></i>
                <h3 style="margin: 20px 0 10px; color: #333;">Aucune image disponible / No images available</h3>
                <p style="margin: 0;">Ajoutez des images au dossier <code>assets/images/library/</code> et exécutez <code>node generate-media-arrays.js</code></p>
                <p style="margin: 10px 0 0;">Add images to the <code>assets/images/library/</code> folder and run <code>node generate-media-arrays.js</code></p>
            </div>
        `;
        if (viewLibraryBtn) viewLibraryBtn.style.display = 'none';
        return;
    }
    
    const randomImages = shuffleArray(imageLibrary).slice(0, Math.min(10, imageLibrary.length));
    
    galleryCarousel.innerHTML = randomImages.map(image => `
        <div class="gallery-item" data-src="${image.src}" data-caption="${image.caption}">
            <img src="${image.src}" alt="${image.caption}" loading="lazy">
        </div>
    `).join('');
    
    // Add click handlers to carousel items
    const carouselItems = galleryCarousel.querySelectorAll('.gallery-item');
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Find the index in the full library
            const src = item.getAttribute('data-src');
            const libraryIndex = imageLibrary.findIndex(img => img.src === src);
            if (libraryIndex !== -1) {
                currentImageIndex = libraryIndex;
                openImageModal();
            }
        });
    });
}

// Carousel scroll functions
if (carouselPrevBtn) {
    carouselPrevBtn.addEventListener('click', () => {
        galleryCarousel.scrollBy({ left: -320, behavior: 'smooth' });
    });
}

if (carouselNextBtn) {
    carouselNextBtn.addEventListener('click', () => {
        galleryCarousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
}

// Modal image slider
const modalImage = document.getElementById('modalImage');
const modalCaption = document.querySelector('.gallery-modal-caption');
const modalCounter = document.querySelector('.gallery-modal-counter');
const modalPrevBtn = document.querySelector('.gallery-modal-prev');
const modalNextBtn = document.querySelector('.gallery-modal-next');
let currentImageIndex = 0;

// Open modal with single image
function openImageModal() {
    if (!galleryModal || imageLibrary.length === 0) return;
    
    updateModalImage();
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Update modal image display
function updateModalImage() {
    if (!modalImage || !imageLibrary[currentImageIndex]) return;
    
    modalImage.src = imageLibrary[currentImageIndex].src;
    if (modalCaption) {
        modalCaption.textContent = imageLibrary[currentImageIndex].caption;
    }
    if (modalCounter) {
        modalCounter.textContent = `${currentImageIndex + 1} / ${imageLibrary.length}`;
    }
}

// Navigate to previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageLibrary.length) % imageLibrary.length;
    updateModalImage();
}

// Navigate to next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageLibrary.length;
    updateModalImage();
}

// Modal navigation button handlers
if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', showPrevImage);
}

if (modalNextBtn) {
    modalNextBtn.addEventListener('click', showNextImage);
}

// Open modal when clicking "View Library" button
if (viewLibraryBtn) {
    viewLibraryBtn.addEventListener('click', () => {
        if (imageLibrary.length > 0) {
            currentImageIndex = 0;
            openImageModal();
        }
    });
}

// Close modal
function closeModalFunc() {
    if (galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

// Close modal when clicking outside
if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeModalFunc();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (galleryModal && galleryModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModalFunc();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Initialize carousel on page load
loadCarousel();

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================

console.log('%c👶 Welcome to Le Jardin Eunice! 🌸', 'color: #FFB6C1; font-size: 20px; font-weight: bold;');
console.log('%cA bilingual daycare where children bloom 🌼', 'color: #87CEEB; font-size: 14px;');
