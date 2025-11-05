// Navigation mobile
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si le bouton de navigation existe déjà
    if (!document.querySelector('.nav-toggle')) {
        const navToggle = document.createElement('button');
        navToggle.className = 'nav-toggle';
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.innerHTML = '<span></span><span></span><span></span>';
        document.body.appendChild(navToggle);
    }
    
    // Utiliser le bouton existant ou nouvellement créé
    const navToggle = document.querySelector('.nav-toggle');
    
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        const isOpening = !navLinks.classList.contains('active');
        
        // Animation du bouton
        if (isOpening) {
            navToggle.querySelector('span:first-child').style.transform = 'rotate(45deg) translate(5px, 5px)';
            navToggle.querySelector('span:nth-child(2)').style.opacity = '0';
            navToggle.querySelector('span:last-child').style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            navToggle.querySelector('span:first-child').style.transform = 'none';
            navToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            navToggle.querySelector('span:last-child').style.transform = 'none';
        }

        // Animation du menu
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.querySelector('span:first-child').style.transform = 'none';
            navToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            navToggle.querySelector('span:last-child').style.transform = 'none';
        });
    });
});

// Timer pour l'examen de maths discrètes
function updateTimer() {
    // Date de l'examen (à modifier selon la vraie date)
    const examDate = new Date('2026-01-15T09:00:00').getTime();
    const now = new Date().getTime();
    const distance = examDate - now;

    // Calcul des jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mise à jour des éléments HTML
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "C'EST L'HEURE DE PANIQUER! 🚨";
    }
}

// Mise à jour du timer toutes les secondes
if (document.getElementById('timer')) {
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Première mise à jour immédiate
}

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation amusante lors de l'envoi
        const button = contactForm.querySelector('button');
        button.textContent = "Message en cours d'envoi... 🚀";
        
        setTimeout(() => {
            alert("Message reçu! On te répond dès qu'on a fini de compter nos bitcoins! 💰");
            button.textContent = "Envoyer";
            contactForm.reset();
        }, 1500);
    });
}