//topbar animation

let lastScroll = 0;
const topbar = document.getElementById('topbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll) {
        topbar.style.top = '-90px';
    } else {
        topbar.style.top = '0';
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

// Bouton de menu

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-list');
    const links = Array.from(menu.querySelectorAll('a'));
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    links.forEach((link, idx) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.remove('open');
            // Trouve la section suivante (ou la première si à la fin)
            const sections = Array.from(document.querySelectorAll('section'));
            let nextIdx = (idx + 1) % sections.length;
            sections[nextIdx].scrollIntoView({ behavior: 'smooth' });
        });
    });
});