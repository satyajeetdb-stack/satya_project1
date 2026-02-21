// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Contact Form using EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});