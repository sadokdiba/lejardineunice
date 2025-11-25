// ===========================
// BILINGUAL FUNCTIONALITY
// ===========================

let currentLanguage = 'fr'; // Default to French

const translations = {
    en: {
        flag: '🇬🇧'
    },
    fr: {
        flag: '🇫🇷'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-fr]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        
        // Update text content for most elements
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // For form inputs, update placeholder if needed
            if (element.placeholder) {
                element.placeholder = text;
            }
        } else if (element.tagName === 'OPTION') {
            // For dropdown options
            element.textContent = text;
        } else if (element.tagName === 'BUTTON' && element.classList.contains('submit-button')) {
            // For submit button
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });

    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (currentLanguage === 'en') {
        langToggle.innerHTML = '<span class="flag">🇬🇧</span> EN / <span class="flag">🇫🇷</span> FR';
    } else {
        langToggle.innerHTML = '<span class="flag">🇫🇷</span> FR / <span class="flag">🇬🇧</span> EN';
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
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
});

// ===========================
// CONTACT FORM - MAILTO
// ===========================

const contactForm = document.getElementById('contactForm');

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
    const subject = currentLanguage === 'en' 
        ? `New Inquiry from ${parentName}` 
        : `Nouvelle demande de ${parentName}`;
    
    const body = currentLanguage === 'en'
        ? `Parent Name: ${parentName}
Child Age: ${childAge}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}

Message:
${message}

---
This inquiry was submitted through the Le Jardin Eunice website.`
        : `Nom du parent: ${parentName}
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
    const confirmMsg = currentLanguage === 'en'
        ? 'Opening your email client... If it doesn\'t open automatically, please email us at info@lejardineunice.ca'
        : 'Ouverture de votre client de messagerie... S\'il ne s\'ouvre pas automatiquement, veuillez nous envoyer un courriel à info@lejardineunice.ca';
    
    alert(confirmMsg);
    
    // Reset form
    contactForm.reset();
});

// ===========================
// BACKGROUND MUSIC
// ===========================

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;
let musicAttempted = false;

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
// GALLERY LIGHTBOX (Optional Enhancement)
// ===========================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        // Simple image preview - can be enhanced with a modal
        window.open(img.src, '_blank');
    });
});

// ===========================
// LANGUAGE TOGGLE EVENT
// ===========================

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// ===========================
// FLOATING BUTTONS ANIMATION
// ===========================

const floatingButtons = document.querySelector('.floating-buttons');

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
    updateLanguage();
    
    // Set initial floating buttons state
    floatingButtons.style.opacity = '0';
    floatingButtons.style.transform = 'translateY(100px)';
});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTopButton = document.getElementById('backToTop');

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

// ===========================
// YEAR UPDATE IN FOOTER
// ===========================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
}

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================

console.log('%c👶 Welcome to Le Jardin Eunice! 🌸', 'color: #FFB6C1; font-size: 20px; font-weight: bold;');
console.log('%cA bilingual daycare where children bloom 🌼', 'color: #87CEEB; font-size: 14px;');
