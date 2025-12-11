// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe section titles
document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Observe skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observe contact card
document.querySelectorAll('.contact-info-card').forEach(card => {
    observer.observe(card);
});

// Staggered animations for skills grid
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Animated background elements
const animatedElements = document.querySelectorAll('.profile-img-container, .social-icon');
animatedElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.animation = 'float 1.5s ease-in-out infinite';
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.animation = '';
    });
});


// ------------------------------------------------------
// ✅ FUNCTION TO OPEN PDF (YOUR REQUIRED FUNCTION)
// ------------------------------------------------------
function openPDF(pdfPath) {
    window.open(pdfPath, "_blank");
}
