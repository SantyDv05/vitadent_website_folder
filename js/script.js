document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the images enter the screen, remove the hidden/offset classes
                // and add the visible/centered classes
                entry.target.classList.remove('opacity-0', '-translate-x-20', 'translate-x-20');
                entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    const beforeCard = document.getElementById('before-card');
    const afterCard = document.getElementById('after-card');

    if (beforeCard) observer.observe(beforeCard);
    if (afterCard) observer.observe(afterCard);
});