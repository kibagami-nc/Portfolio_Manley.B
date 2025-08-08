// topbar animation
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

    // Ouvre / ferme le menu
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    // Quand on clique sur un lien de sous-menu
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le saut direct de l'ancre

            // Ferme le menu
            menu.classList.remove('open');

            // Cache la topbar
            topbar.style.top = '-90px';

            // Effet zoom sur la section ciblée + scroll centré
            const targetId = link.getAttribute('href').replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth', // défilement fluide
                    block: 'center'     // centre la section
                });

                section.classList.remove('section-zoom');
                void section.offsetWidth; // Force reflow
                section.classList.add('section-zoom');
            }
        });
    });
});
