// scripts.js

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Page navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        // Add active class to clicked nav item
        this.classList.add('active');
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Flavor wheel interaction
function setupFlavorWheel() {
    const flavorWheel = document.querySelector('.flavor-wheel');
    if (flavorWheel) {
        flavorWheel.addEventListener('click', () => {
            flavorWheel.classList.toggle('flipped');
        });
    }
}

// Generate more animated elements
function generateAnimatedElements() {
    const container = document.querySelector('.page');
    if (!container) return;
    
    // Create bubbles
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random properties
        const size = Math.floor(Math.random() * 30) + 10;
        const top = Math.floor(Math.random() * 90) + 5;
        const left = Math.floor(Math.random() * 90) + 5;
        const delay = Math.random() * 5;
        
        bubble.style.setProperty('--size', `${size}px`);
        bubble.style.setProperty('--top', `${top}%`);
        bubble.style.setProperty('--left', `${left}%`);
        bubble.style.setProperty('--delay', `${delay}s`);
        
        container.appendChild(bubble);
    }
    
    // Create gin bottles
    for (let i = 0; i < 3; i++) {
        const bottle = document.createElement('div');
        bottle.classList.add('gin-bottle');
        
        // Random properties
        const top = Math.floor(Math.random() * 90) + 5;
        const left = Math.floor(Math.random() * 90) + 5;
        const delay = Math.random() * 5;
        
        bottle.style.setProperty('--top', `${top}%`);
        bottle.style.setProperty('--left', `${left}%`);
        bottle.style.setProperty('--delay', `${delay}s`);
        
        container.appendChild(bottle);
    }
}

// FAB interaction
const fab = document.getElementById('fab');
if (fab) {
    fab.addEventListener('click', () => {
        fab.classList.add('animate');
        setTimeout(() => {
            fab.classList.remove('animate');
        }, 1000);
        
        // Create a bubble effect
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.position = 'fixed';
            bubble.style.bottom = '2rem';
            bubble.style.right = '2rem';
            bubble.style.setProperty('--size', '20px');
            bubble.style.zIndex = '999';
            
            // Random animation properties
            const animX = (Math.random() - 0.5) * 100;
            const animY = -(Math.random() * 100 + 50);
            bubble.style.animation = `floatUp ${Math.random() * 2 + 1}s ease-out forwards`;
            bubble.style.setProperty('--anim-x', `${animX}vw`);
            bubble.style.setProperty('--anim-y', `${animY}px`);
            
            document.body.appendChild(bubble);
            
            // Remove after animation
            setTimeout(() => {
                bubble.remove();
            }, 1000);
        }
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
    
    // Setup flavor wheel
    setupFlavorWheel();
    
    // Generate animated elements
    generateAnimatedElements();
    
    // Setup FAB
    if (fab) {
        fab.addEventListener('click', () => {
            fab.classList.add('animate');
            setTimeout(() => {
                fab.classList.remove('animate');
            }, 1000);
            
            // Create a bubble effect
            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.position = 'fixed';
                bubble.style.bottom = '2rem';
                bubble.style.right = '2rem';
                bubble.style.setProperty('--size', '20px');
                bubble.style.zIndex = '999';
                
                // Random animation properties
                const animX = (Math.random() - 0.5) * 100;
                const animY = -(Math.random() * 100 + 50);
                bubble.style.animation = `floatUp ${Math.random() * 2 + 1}s ease-out forwards`;
                bubble.style.setProperty('--anim-x', `${animX}vw`);
                bubble.style.setProperty('--anim-y', `${animY}px`);
                
                document.body.appendChild(bubble);
                
                // Remove after animation
                setTimeout(() => {
                    bubble.remove();
                }, 1000);
            }
        });
    }
    
    // Add CSS for floatUp animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatUp {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--anim-x), var(--anim-y));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
