// Fonction de callback pour l'observateur
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajouter la classe 'visible' quand l'élément est dans la vue
            entry.target.classList.add('visible');
            // Optionnel : arrêter d'observer une fois que l'élément a été vu
            observer.unobserve(entry.target);
        }
    });
};

// Créer un observateur
const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.5 // L'élément doit être à 50% visible pour activer le fade
});

// Sélectionner toutes les catégories à observer
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    observer.observe(category);
});
