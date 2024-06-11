const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.depoimento-box').forEach(box => {
    box.classList.add('hidden');
    observer.observe(box);
});
