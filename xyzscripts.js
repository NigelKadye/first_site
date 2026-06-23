// Sample reviews data (stored in localStorage)
let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Life-Changing Experience',
        rating: 5,
        text: 'Absolutely fantastic! This platform exceeded all my expectations. The interface is intuitive and the results are incredible. Highly recommended!',
        likes: 24,
        liked: false
    },
    {
        id: 2,
        name: 'Michael Chen',
        title: 'Professional & Reliable',
        rating: 5,
        text: 'Best investment I\'ve made. The team is responsive, the quality is top-notch, and the value for money is unbeatable.',
        likes: 18,
        liked: false
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        title: 'Exceeded Expectations',
        rating: 4,
        text: 'Great service with excellent support. Minor improvements could be made, but overall very impressed with the results.',
        likes: 12,
        liked: false
    }
];

// Render reviews
function renderReviews() {
    const container = document.getElementById('reviewsList');
    if (!container) return;
    
    container.innerHTML = '';

    reviews.forEach(review => {
        const stars = '<i class="fas fa-star"></i>'.repeat(review.rating);
        const reviewHTML = `
            <div class="review-card" data-id="${review.id}">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-name">${review.name}</div>
                        <div class="reviewer-title">${review.title}</div>
                    </div>
                    <div class="stars">${stars}</div>
                </div>
                <div class="review-text">"${review.text}"</div>
                <div class="review-actions">
                    <button class="like-btn ${review.liked ? 'liked' : ''}" onclick="toggleLike(${review.id})">
                        <i class="fas ${review.liked ? 'fa-heart' : 'fa-heart'}"></i>
                        <span id="likes-${review.id}">${review.likes}</span>
                    </button>
                    <button class="reply-btn" onclick="alert('Reply functionality coming soon!')">
                        <i class="fas fa-reply"></i> Reply
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += reviewHTML;
    });

    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Toggle like on review
function toggleLike(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.liked = !review.liked;
        review.likes += review.liked ? 1 : -1;
        renderReviews();
    }
}

// Handle review form submission
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value || 0);
        const text = document.getElementById('review').value;

        if (!rating) {
            alert('Please select a rating');
            return;
        }

        const newReview = {
            id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
            name,
            title,
            rating,
            text,
            likes: 0,
            liked: false
        };

        reviews.unshift(newReview);
        renderReviews();
        this.reset();
        document.querySelectorAll('.star-rating label').forEach(label => label.classList.remove('active'));

        // Show success message
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Review Posted!';
        btn.style.background = 'linear-gradient(135deg, var(--success), #059669)';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 3000);
    });
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, var(--success), #059669)';
        
        // Reset form
        this.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 3000);
    });
}

// Star rating functionality
function setRating(rating) {
    document.querySelectorAll('.star-rating label').forEach((label, index) => {
        if (index < rating) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
}

// Scroll functions
function scrollToReviews() {
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToForm() {
    const formSection = document.getElementById('form');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderReviews();
});
