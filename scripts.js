// scripts.js

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Explore button animation and scroll
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        // Scroll to gin collection
        document.querySelector('#gins').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Tab functionality for gin collection
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding tab content
            document.getElementById(`${tabId}-gins`).classList.add('active');
        });
    });
}

// Card hover effect enhancement
function setupCardHover() {
    const cards = document.querySelectorAll('.card, .gin-card, .recipe-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Generate animated background elements
function generateBackgroundElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Generate bubbles
    for (let i = 0; i < 8; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        hero.appendChild(bubble);
    }
    
    // Predefined bottle positions
    const bottlePositions = [
        { top: '20%', left: '10%' },
        { top: '40%', left: '85%' },
        { top: '60%', left: '20%' },
        { top: '30%', left: '75%' }
    ];
    
    // Generate gin bottles
    bottlePositions.forEach(pos => {
        const bottle = document.createElement('div');
        bottle.classList.add('gin-bottle');
        bottle.style.top = pos.top;
        bottle.style.left = pos.left;
        hero.appendChild(bottle);
    });
}

// Load content sections
document.addEventListener('DOMContentLoaded', () => {
    fetch('content.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            // Re-attach event listeners after content loads
            attachEventListeners();
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('content').innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
});

function attachEventListeners() {
    // Re-attach event listeners to newly loaded elements
    
    // Explore button
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.querySelector('#gins').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Setup tabs for gin collection
    setupTabs();
    
    // Setup card hover effects
    setupCardHover();
    
    // Generate background elements for hero section
    generateBackgroundElements();
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Generate background elements for hero section (if hero is in index.html)
    generateBackgroundElements();
    
    // Setup mobile menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Setup smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
});
