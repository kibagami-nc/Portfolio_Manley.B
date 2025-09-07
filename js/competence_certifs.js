document.addEventListener("DOMContentLoaded", function() {
    const bar = document.querySelector('.lang-icons-bar-moving');
    const icons = document.querySelectorAll('.lang-icons-bar-moving .lang-icon');

    icons.forEach(icon => {
        const infoBox = icon.querySelector('.lang-info-box');
        icon.addEventListener('mouseenter', () => {
            bar.classList.add('paused');
            const lang = icon.getAttribute('data-lang');
            const desc = icon.getAttribute('data-desc');
            infoBox.innerHTML = `<strong>${lang}</strong><br><span>${desc}</span>`;
            infoBox.classList.add('active');
        });
        icon.addEventListener('mouseleave', () => {
            bar.classList.remove('paused');
            infoBox.classList.remove('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bar1 = document.querySelector('.lang-icons-bar-moving1');
    const icons1 = document.querySelectorAll('.lang-icons-bar-moving1 .lang-icon');

    icons1.forEach(icon => {
        const infoBox = icon.querySelector('.lang-info-box');
        icon.addEventListener('mouseenter', () => {
            bar1.classList.add('paused1');
            const lang = icon.getAttribute('data-lang');
            const desc = icon.getAttribute('data-desc');
            infoBox.innerHTML = `<strong>${lang}</strong><br><span>${desc}</span>`;
            infoBox.classList.add('active');
        });
        icon.addEventListener('mouseleave', () => {
            bar1.classList.remove('paused1');
            infoBox.classList.remove('active');
        });
    });
});