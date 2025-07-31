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
