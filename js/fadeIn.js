// Fonction de callback pour l'observateur
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

// Créer un observateur
const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.2
});

// Sélectionner toutes les catégories à observer
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    observer.observe(category);
});
