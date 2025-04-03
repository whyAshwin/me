// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
        item.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Portfolio tile animations
const portfolioTiles = document.querySelectorAll('.portfolio-tile');

// Intersection Observer for scroll-based animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

portfolioTiles.forEach(tile => {
    observer.observe(tile);
});

// Flip animation on click
portfolioTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.toggle('flipped');
    });
});

// Auto-flip on scroll
let lastScrollTop = 0;
const scrollThreshold = 100; // pixels to scroll before triggering flip

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDiff = currentScrollTop - lastScrollTop;
    
    portfolioTiles.forEach((tile, index) => {
        const tileTop = tile.getBoundingClientRect().top + window.pageYOffset;
        const tileBottom = tileTop + tile.offsetHeight;
        
        if (currentScrollTop >= tileTop && currentScrollTop <= tileBottom) {
            if (Math.abs(scrollDiff) > scrollThreshold) {
                if (scrollDiff > 0) {
                    // Scrolling down
                    tile.classList.add('flipped');
                } else {
                    // Scrolling up
                    tile.classList.remove('flipped');
                }
            }
        }
    });
    
    lastScrollTop = currentScrollTop;
}); 