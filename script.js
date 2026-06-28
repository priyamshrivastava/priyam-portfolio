// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Typewriter Effect
const text = ["Software Developer", "Java Developer", "Backend Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typewriter').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}());

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preloader Particles Generation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const angle = Math.random() * Math.PI * 2;
        const distance = 800 + Math.random() * 800;
        const tx = Math.cos(angle) * distance + 'px';
        const ty = Math.sin(angle) * distance + 'px';
        const delay = Math.random() * 1.5 + 's';

        particle.style.setProperty('--tx', tx);
        particle.style.setProperty('--ty', ty);
        particle.style.animationDelay = delay;

        container.appendChild(particle);
    }

    // Scroll Reveal Animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    // Delay reveal to allow preloader to finish
    setTimeout(() => {
        window.addEventListener('scroll', reveal);
        reveal();
    }, 3800);
});
