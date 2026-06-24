// Preloader Logic
document.body.classList.add('loading'); // Stop scrolling during load

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Wait for the loading animation to finish (approx 2.5 seconds)
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transform = 'translateY(-100%)'; // Slide up effect
        
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.remove('loading'); // Enable scrolling
            
            // Initialize AOS Animation ONLY AFTER preloader is done
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: false,
                mirror: true
            });
        }, 1000); // Wait for fade out to complete before hiding completely
    }, 2800); // 2.8 seconds total loading time
});

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.innerWidth >= 768) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Instant follow for the dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for the outline using Web Animations API
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect for links, buttons, and form inputs
    const hoverElements = document.querySelectorAll('a, button, input, textarea, .social-icon, .skill-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-darkbg/90');
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        navbar.style.paddingTop = '0.5rem';
    } else {
        navbar.classList.remove('bg-darkbg/90');
        navbar.style.boxShadow = 'none';
        navbar.style.paddingTop = '1rem';
    }
});