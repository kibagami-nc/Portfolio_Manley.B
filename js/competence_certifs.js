document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.lang-icons-bar-moving .lang-icon');
    const infoBox = document.getElementById('lang-info-box');

    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const lang = icon.getAttribute('data-lang');
            const desc = icon.getAttribute('data-desc');
            infoBox.innerHTML = `<strong>${lang}</strong><br><span>${desc}</span>`;
            infoBox.classList.add('active');
        });
        icon.addEventListener('mouseleave', () => {
            infoBox.classList.remove('active');
        });
    });
});