/* 
 * SCRIPTS JAVASCRIPT POUR ANIMATIONS D'APPARITION - PAGE CERTIFICATIONS
 * Système d'apparition avec threshold de 10% pour réactivité maximale
 * Auteur: Manley.B
 */

/**
 * OBSERVER ULTRA-SENSIBLE POUR APPARITIONS À 10%
 * Détection dès que 10% de l'élément est visible
 */

// Configuration de l'observateur avec threshold très faible
const certificationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const elementType = target.tagName.toLowerCase();
            const classList = target.classList;
            
            // Délais personnalisés selon le type d'élément
            let delay = 0;
            
            if (classList.contains('certification-category')) {
                delay = 150; // Délai pour catégories
            } else if (classList.contains('certification-card')) {
                // Délai progressif pour les cartes
                const cards = document.querySelectorAll('.certification-card');
                const index = Array.from(cards).indexOf(target);
                delay = 200 + (index * 100);
            } else if (target.id === 'certifications-list') {
                delay = 100; // Délai pour section liste
            } else if (target.id === 'certifications-hero') {
                delay = 0; // Immédiat pour hero
            }
            
            // Application de l'animation avec délai
            setTimeout(() => {
                target.classList.add('visible');
                
                // Animation spéciale pour les cartes dans les catégories
                if (classList.contains('certification-category')) {
                    animateCardsInCategory(target);
                }
            }, delay);
            
            // Ne plus observer cet élément après animation
            certificationObserver.unobserve(target);
        }
    });
}, {
    threshold: 0.05, // 10% de l'élément visible
    rootMargin: '0px' // Pas de marge supplémentaire
});

/**
 * ANIMATION SPÉCIALE POUR LES CARTES DANS CHAQUE CATÉGORIE
 * Effet cascade pour les cartes à l'intérieur d'une catégorie
 */
function animateCardsInCategory(category) {
    const cards = category.querySelectorAll('.certification-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150); // 150ms entre chaque carte
    });
}

/**
 * INITIALISATION DES ANIMATIONS POUR LA PAGE CERTIFICATIONS
 * Démarrage du système d'observation
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Observer toutes les sections principales
        const sections = document.querySelectorAll('#certifications-hero, #certifications-list');
        sections.forEach(section => {
            certificationObserver.observe(section);
        });
        
        // Observer toutes les catégories de certifications
        const categories = document.querySelectorAll('.certification-category');
        categories.forEach(category => {
            certificationObserver.observe(category);
        });
        
        // Observer toutes les cartes individuellement pour plus de contrôle
        const cards = document.querySelectorAll('.certification-card');
        cards.forEach(card => {
            certificationObserver.observe(card);
        });
        
        // Log pour debug
        console.log(`🎯 Certification animations initialized: ${sections.length} sections, ${categories.length} categories, ${cards.length} cards`);
        
    } catch (error) {
        console.warn('Certification animations error:', error);
        
        // Fallback : rendre tout visible immédiatement
        document.querySelectorAll('#certifications-hero, #certifications-list, .certification-category, .certification-card').forEach(element => {
            element.classList.add('visible');
        });
    }
});