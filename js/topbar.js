//topbar animation

let lastScroll = 0;
const topbar = document.getElementById('topbar');

// Applique la transparence au chargement
topbar.classList.remove('topbar-blur');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll) {
        topbar.style.top = '-90px';
    } else {
        topbar.style.top = '0';
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;

    // Ajoute/enlève le blur selon la position
    if (window.scrollY === 0) {
        topbar.classList.remove('topbar-blur');
    } else {
        topbar.classList.add('topbar-blur');
    }
});

// Bouton de menu

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-list');
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            menu.classList.remove('open');
            // Effet zoom sur la section ciblée
            const targetId = link.getAttribute('href').replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.classList.remove('section-zoom');
                void section.offsetWidth;
                section.classList.add('section-zoom');
            }
        });
    });
});