/* 
 * SCRIPTS JAVASCRIPT POUR LES ANIMATIONS FADE-IN
 * Système d'apparition progressive des éléments lors du défilement
 * Auteur: Manley.B
 */

/**
 * OBSERVATION DES ÉLÉMENTS POUR ANIMATIONS
 * Utilise l'API Intersection Observer pour détecter l'entrée en vue des éléments
 */

// Fonction de callback pour l'observateur
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajouter la classe visible avec un léger délai pour un effet plus naturel
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 200);
            
            observer.unobserve(entry.target);
        }
    });
};

/**
 * CONFIGURATION DE L'OBSERVATEUR
 * Paramètres pour définir quand déclencher les animations
 */

// Créer un observateur
const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2
});

/**
 * FONCTION DE CALLBACK
 * Logique exécutée quand un élément entre ou sort de la zone visible
 */

// ...existing code...

/**
 * INITIALISATION DES ANIMATIONS
 * Application de l'observateur à tous les éléments animables
 */

// Sélectionner toutes les catégories à observer
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    observer.observe(category);
});
