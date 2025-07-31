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
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('open'));
    });
});