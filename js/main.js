// ===================================
// Mobile Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ===================================
// Active Page Highlighting
// ===================================
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActivePage);

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Scroll Animations
// ===================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.card, .timeline-item, .skill-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card, .timeline-item, .skill-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});

// ===================================
// Certificate Viewer Functions
// ===================================
function viewCertificate(path) {
    const fileExtension = path.split('.').pop().toLowerCase();
    
    if (fileExtension === 'pdf') {
        // Open PDF in new tab
        window.open(path, '_blank');
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        // Create image viewer modal
        createImageViewer(path);
    } else {
        alert('Unsupported file format');
    }
}

function createImageViewer(imagePath) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    // Create image element
    const img = document.createElement('img');
    img.src = imagePath;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border: 2px solid #00ff9f;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(0, 255, 159, 0.5);
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: #00ff9f;
        color: #0a0a0a;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseover', function() {
        this.style.background = '#00d9ff';
        this.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseout', function() {
        this.style.background = '#00ff9f';
        this.style.transform = 'scale(1)';
    });
    
    // Close modal on click
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Prevent closing when clicking on image
    img.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
}

function downloadCertificate(path, filename) {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===================================
// Contact Form Validation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Success message (since this is static, no actual sending)
            alert('Thank you for your message! This is a static demo. In production, this would send an email.');
            contactForm.reset();
        });
    }
});

// ===================================
// Typing Effect for Hero Section
// ===================================
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to tagline if on home page
document.addEventListener('DOMContentLoaded', function() {
    const tagline = document.querySelector('.hero .tagline');
    if (tagline && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = tagline.textContent;
        typeEffect(tagline, originalText, 50);
    }
});

// ===================================
// Dynamic Year in Footer
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c🔒 Cybersecurity Portfolio', 'color: #00ff9f; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Mahavir Harijan', 'color: #00d9ff; font-size: 14px;');
console.log('%cInterested in cybersecurity? Let\'s connect!', 'color: #b026ff; font-size: 12px;');