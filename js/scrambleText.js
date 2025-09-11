/* 
 * ANIMATION DE TEXTE AVEC LETTRES ALÉATOIRES
 * Effet spécial pour la page d'accueil - les lettres apparaissent aléatoirement
 * avant de former le texte final
 * Auteur: Manley.B
 */

/**
 * CONFIGURATION DE L'ANIMATION
 * Paramètres pour personnaliser l'effet scramble
 */
const SCRAMBLE_CONFIG = {
    // Caractères utilisés pour l'effet de brouillage
    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
    // Durée du brouillage par lettre (en millisecondes)
    scrambleDuration: 50,
    // Nombre d'itérations de brouillage par lettre
    scrambleIterations: 8,
    // Délai entre chaque lettre
    letterDelay: 100
};

/**
 * CLASSE PRINCIPALE POUR L'ANIMATION SCRAMBLE
 */
class ScrambleText {
    constructor(element) {
        this.element = element;
        this.originalText = element.getAttribute('data-text') || element.textContent;
        this.chars = SCRAMBLE_CONFIG.chars;
        this.isAnimating = false;
        
        // Préparer l'élément pour l'animation
        this.setupElement();
    }
    
    /**
     * PRÉPARATION DE L'ÉLÉMENT
     * Divise le texte en spans individuels pour chaque caractère
     */
    setupElement() {
        // Vider l'élément et créer des spans pour chaque caractère
        this.element.innerHTML = '';
        this.letters = [];
        
        for (let i = 0; i < this.originalText.length; i++) {
            const letter = document.createElement('span');
            letter.classList.add('letter');
            letter.textContent = ' '; // Caractère vide au lieu du texte original
            
            // Préserver les espaces
            if (this.originalText[i] === ' ') {
                letter.innerHTML = '&nbsp;';
            }
            
            this.element.appendChild(letter);
            this.letters.push(letter);
        }
        
        // Marquer l'élément comme prêt pour l'animation
        this.element.classList.add('ready');
    }
    
    /**
     * DÉMARRAGE DE L'ANIMATION SCRAMBLE
     * Lance l'effet de brouillage pour chaque lettre avec un délai échelonné
     */
    startAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.letters.forEach((letter, index) => {
            // Délai échelonné pour chaque lettre
            setTimeout(() => {
                this.animateLetter(letter, index);
            }, index * SCRAMBLE_CONFIG.letterDelay);
        });
    }
    
    /**
     * ANIMATION D'UNE LETTRE INDIVIDUELLE
     * Fait défiler des caractères aléatoires avant d'afficher la lettre finale
     */
    animateLetter(letter, index) {
        const finalChar = this.originalText[index];
        let iterations = 0;
        
        // Animation de brouillage
        const scrambleInterval = setInterval(() => {
            // Générer un caractère aléatoire (sauf pour les espaces)
            if (finalChar === ' ') {
                letter.innerHTML = '&nbsp;';
            } else {
                const randomChar = this.chars[Math.floor(Math.random() * this.chars.length)];
                letter.textContent = randomChar;
            }
            
            iterations++;
            
            // Arrêter le brouillage et afficher la lettre finale
            if (iterations >= SCRAMBLE_CONFIG.scrambleIterations) {
                clearInterval(scrambleInterval);
                letter.textContent = finalChar;
                if (finalChar === ' ') {
                    letter.innerHTML = '&nbsp;';
                }
                
                // Ajouter la classe d'animation CSS
                letter.classList.add('animate');
            }
        }, SCRAMBLE_CONFIG.scrambleDuration);
    }
    
    /**
     * RÉINITIALISATION DE L'ANIMATION
     * Remet l'élément dans son état initial
     */
    reset() {
        this.isAnimating = false;
        this.letters.forEach(letter => {
            letter.classList.remove('animate');
            letter.style.opacity = '0';
        });
    }
}

/**
 * GESTIONNAIRE D'INTERSECTION OBSERVER
 * Déclenche l'animation quand l'élément entre dans la vue
 */
class ScrambleObserver {
    constructor() {
        this.scrambleElements = [];
        this.observer = null;
        this.init();
    }
    
    /**
     * INITIALISATION DE L'OBSERVATEUR
     */
    init() {
        // Trouver tous les éléments avec la classe scramble-text
        const elements = document.querySelectorAll('.scramble-text');
        
        elements.forEach(element => {
            const scrambler = new ScrambleText(element);
            this.scrambleElements.push({
                element: element,
                scrambler: scrambler,
                hasAnimated: false
            });
        });
        
        // Configurer l'Intersection Observer
        this.setupObserver();
    }
    
    /**
     * CONFIGURATION DE L'INTERSECTION OBSERVER
     */
    setupObserver() {
        const options = {
            threshold: 0.3, // Déclencher quand 30% de l'élément est visible
            rootMargin: '0px 0px -100px 0px' // Marge pour déclencher plus tôt
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const scrambleData = this.scrambleElements.find(
                        item => item.element === entry.target
                    );
                    
                    if (scrambleData && !scrambleData.hasAnimated) {
                        // Petit délai pour un effet plus naturel
                        setTimeout(() => {
                            scrambleData.scrambler.startAnimation();
                            scrambleData.hasAnimated = true;
                        }, 200);
                    }
                }
            });
        }, options);
        
        // Observer tous les éléments scramble
        this.scrambleElements.forEach(item => {
            this.observer.observe(item.element);
        });
    }
}

/**
 * INITIALISATION AU CHARGEMENT DE LA PAGE
 * Démarre le système d'animation quand le DOM est prêt
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser immédiatement pour préparer les éléments
    new ScrambleObserver();
});

/**
 * FONCTION UTILITAIRE POUR DÉCLENCHER MANUELLEMENT L'ANIMATION
 * Peut être utilisée pour redéclencher l'effet si nécessaire
 */
window.triggerScrambleAnimation = () => {
    const elements = document.querySelectorAll('.scramble-text');
    elements.forEach(element => {
        const scrambler = new ScrambleText(element);
        scrambler.startAnimation();
    });
};