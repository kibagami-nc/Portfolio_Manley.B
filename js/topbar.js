/* 
 * SCRIPTS JAVASCRIPT POUR LA BARRE DE NAVIGATION
 * Gestion du menu déroulant avec animations et fermeture automatique
 * Auteur: Manley.B
 */

/**
 * INITIALISATION DU MENU RESPONSIVE
 * Configuration des événements pour l'ouverture/fermeture du menu
 */

document.addEventListener('DOMContentLoaded', function() {
    const topbar = document.getElementById('topbar');
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-list');
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop; // Correction ici

    // Topbar transparente au chargement
    topbar.classList.remove('topbar-blur');
    topbar.style.top = '0'; // Toujours visible au chargement

    // Animation de la topbar au scroll
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Cache la topbar si on descend, l'affiche si on monte
        if (currentScroll > lastScroll && currentScroll > 10) { // Ajoute une tolérance de 10px
            topbar.style.top = '-90px';
            menu.classList.remove('open');
        } else {
            topbar.style.top = '0';
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;

        // Blur si on n'est pas en haut
        if (window.scrollY === 0) {
            topbar.classList.remove('topbar-blur');
        } else {
            topbar.classList.add('topbar-blur');
        }
    });

    /**
     * FONCTION DE BASCULEMENT DU MENU
     * Toggle de la classe 'open' pour déclencher les animations CSS
     */
    // Ouvre/ferme le menu au clic
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    /**
     * FERMETURE AUTOMATIQUE DU MENU
     * Détection des clics en dehors du menu pour le fermer automatiquement
     */

    // Gestion du clic sur les liens du menu
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Ferme le menu et cache la topbar
            menu.classList.remove('open');
            topbar.style.top = '-90px';

            /**
             * NAVIGATION FLUIDE VERS LES SECTIONS
             * Gestion des liens d'ancrage avec fermeture automatique du menu
             */
            // Scroll fluide et effet zoom sur la section ciblée
            const targetId = link.getAttribute('href').replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                section.classList.remove('section-zoom');
                void section.offsetWidth;
                section.classList.add('section-zoom');
            }
        });
    });
});
