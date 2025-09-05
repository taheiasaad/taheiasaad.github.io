// Initialize AOS library for animations
AOS.init({
    duration: 1000,
    once: true,
});

// Animate progress bars on scroll
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar span');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.setProperty('--width', width);
                    bar.style.width = width;
                });
                observer.disconnect(); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});