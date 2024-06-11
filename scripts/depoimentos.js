document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.depoimento-box').forEach(box => {
        observer.obseve(box);
    });
});
