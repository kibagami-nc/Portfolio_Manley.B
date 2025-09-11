/* 
 * ANIMATION DE TEXTE AVEC SYMBOLES ALÉATOIRES
 * Effet spécial pour la page d'accueil - symboles randoms puis vrai texte
 * Auteur: Manley.B
 */

// Configuration
const config = {
    chars: '!@#$%^&*()_+-=[]{}|;:,.<>?~`',
    duration: 50,
    iterations: 10,
    delay: 100
};

const animated = new Set();

// Préparer l'élément avec des spans
function setupElement(element) {
    const text = element.getAttribute('data-text') || element.textContent;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.classList.add('letter');
        
        if (text[i] === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = config.chars[Math.floor(Math.random() * config.chars.length)];
        }
        
        element.appendChild(span);
    }
    
    element.classList.add('ready');
    return { text, spans: element.querySelectorAll('.letter') };
}

// Animer une lettre spécifique
function animateLetter(span, finalChar) {
    let count = 0;
    
    const interval = setInterval(() => {
        if (finalChar === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = config.chars[Math.floor(Math.random() * config.chars.length)];
        }
        
        count++;
        
        if (count >= config.iterations) {
            clearInterval(interval);
            span.textContent = finalChar;
            if (finalChar === ' ') {
                span.innerHTML = '&nbsp;';
            }
            span.classList.add('animate');
        }
    }, config.duration);
}

// Démarrer l'animation complète
function startAnimation(element) {
    if (animated.has(element)) return;
    
    const { text, spans } = setupElement(element);
    
    spans.forEach((span, index) => {
        setTimeout(() => {
            animateLetter(span, text[index]);
        }, index * config.delay);
    });
    
    animated.add(element);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scramble-text');
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    startAnimation(entry.target);
                }, 300);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
});

// Fonction de reset pour tests
window.triggerScrambleAnimation = () => {
    animated.clear();
    document.querySelectorAll('.scramble-text').forEach(el => {
        el.classList.remove('ready');
        startAnimation(el);
    });
};