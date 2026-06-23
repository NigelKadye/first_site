// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.main-section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLinks[index]) {
                navLinks[index].classList.add('active');
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gin cards for animation
document.querySelectorAll('.gin-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe botanical cards
document.querySelectorAll('.botanical-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add scroll to top button functionality
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
        // Can add scroll-to-top button here
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍸 Kadye & Gin website loaded successfully!');
    console.log('🌿 Exploring gin from Southern Africa, United Kingdom, and United States');
});

// Add interactive features
function initializeInteractiveFeatures() {
    const ginCards = document.querySelectorAll('.gin-card');
    
    ginCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
}

initializeInteractiveFeatures();
