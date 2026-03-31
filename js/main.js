// ============================================
// LUMINA ELECTRIC - JAVASCRIPT PRINCIPAL
// Navigation, FAQ, Formulaires, Tracking
// ============================================

// Configuration
const CONFIG = {
  lang: 'fr', // Langue par défaut
  trackingId: 'G-XXXXXXXXXX' // À remplacer par votre ID GA4
};

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initFAQ();
  initForms();
  initScrollEffects();
  initLanguageSwitcher();
  initTracking();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const header = document.getElementById('header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Sticky header avec effet au scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Menu mobile
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fermer le menu au clic sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Highlight du lien actif
  highlightActiveLink();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length === 0) return;
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = item.classList.contains('active');
        
        // Fermer tous les autres items (accordion mode)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle l'item actuel
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
        
        // Track l'événement
        trackEvent('faq_click', {
          question: question.textContent.trim()
        });
      });
    }
  });
}

// ============================================
// FORMULAIRES
// ============================================
function initForms() {
  const forms = document.querySelectorAll('form[data-form-type]');
  
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
  
  // Validation en temps réel
  const formInputs = document.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formType = form.dataset.formType;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // Validation
  if (!validateForm(form)) {
    return;
  }
  
  // Désactiver le bouton
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading"></span> Envoi en cours...';
  
  // Récupérer les données
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  try {
    // Simuler l'envoi (à remplacer par votre endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success
    showFormMessage(form, 'success', getSuccessMessage(formType));
    form.reset();
    
    // Track la conversion
    trackEvent('form_submit', {
      form_type: formType,
      form_name: form.name || 'unnamed'
    });
    
    // Redirection optionnelle
    if (formType === 'contact') {
      setTimeout(() => {
        window.location.href = 'merci.html';
      }, 2000);
    }
    
  } catch (error) {
    // Error
    showFormMessage(form, 'error', 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
    
  } finally {
    // Réactiver le bouton
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('.form-control[required]');
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(input) {
  const value = input.value.trim();
  const type = input.type;
  let isValid = true;
  let errorMessage = '';
  
  // Required
  if (input.required && !value) {
    isValid = false;
    errorMessage = 'Ce champ est obligatoire';
  }
  
  // Email
  else if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Email invalide';
    }
  }
  
  // Phone
  else if (type === 'tel' && value) {
    const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Numéro de téléphone invalide';
    }
  }
  
  // Min length
  else if (input.minLength && value.length < input.minLength) {
    isValid = false;
    errorMessage = `Minimum ${input.minLength} caractères`;
  }
  
  // Afficher l'erreur
  if (!isValid) {
    showFieldError(input, errorMessage);
  } else {
    clearFieldError(input);
  }
  
  return isValid;
}

function showFieldError(input, message) {
  clearFieldError(input);
  
  input.classList.add('error');
  const errorDiv = document.createElement('span');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  input.parentNode.appendChild(errorDiv);
}

function clearFieldError(input) {
  input.classList.remove('error');
  const existingError = input.parentNode.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
}

function showFormMessage(form, type, message) {
  // Supprimer les messages existants
  const existingMessages = form.querySelectorAll('.success-message, .error-message');
  existingMessages.forEach(msg => msg.remove());
  
  // Créer le nouveau message
  const messageDiv = document.createElement('div');
  messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
  messageDiv.innerHTML = `<p>${message}</p>`;
  
  // Insérer au début du formulaire
  form.insertBefore(messageDiv, form.firstChild);
  
  // Scroll vers le message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function getSuccessMessage(formType) {
  const messages = {
    contact: '✓ Merci ! Votre demande a été envoyée. Nous vous répondrons dans les 24 heures.',
    devis: '✓ Demande de devis envoyée ! Nous vous contacterons rapidement pour planifier une visite.',
    urgence: '✓ Votre demande urgente est enregistrée. Nous vous rappelons dans les plus brefs délais.'
  };
  
  return messages[formType] || '✓ Message envoyé avec succès !';
}

// ============================================
// EFFETS DE SCROLL
// ============================================
function initScrollEffects() {
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// CHANGEMENT DE LANGUE
// ============================================
function initLanguageSwitcher() {
  window.switchLanguage = function(lang) {
    CONFIG.lang = lang;
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Rediriger vers la version linguistique
    // Pour un vrai site, implémenter la logique de redirection
    // Exemple: window.location.href = `/${lang}/` + currentPage;
    
    // Track le changement de langue
    trackEvent('language_change', { language: lang });
    
    // Pour la démo, juste un message
    console.log(`Language switched to: ${lang}`);
  };
}

// ============================================
// TRACKING & ANALYTICS
// ============================================
function initTracking() {
  // Track les clics sur les CTA
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const text = this.textContent.trim();
      const href = this.getAttribute('href');
      
      trackEvent('cta_click', {
        button_text: text,
        button_url: href
      });
    });
  });
  
  // Track les clics téléphone
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
      const phone = this.getAttribute('href').replace('tel:', '');
      trackEvent('phone_click', { phone_number: phone });
    });
  });
  
  // Track les clics email
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
      const email = this.getAttribute('href').replace('mailto:', '');
      trackEvent('email_click', { email_address: email });
    });
  });
  
  // Track le temps passé sur la page
  let startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', {
      seconds: timeSpent,
      page: window.location.pathname
    });
  });
}

function trackEvent(eventName, params = {}) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
  
  // Console log pour debug
  console.log('Track Event:', eventName, params);
  
  // Vous pouvez ajouter d'autres plateformes de tracking ici
  // Facebook Pixel, LinkedIn Insight Tag, etc.
}

// ============================================
// UTILITAIRES
// ============================================

// Formater un numéro de téléphone
function formatPhone(phone) {
  return phone.replace(/\s/g, '').replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
}

// Détection du type d'appareil
function isMobile() {
  return window.innerWidth <= 768;
}

// Cookie consent (RGPD)
function initCookieConsent() {
  const consent = localStorage.getItem('cookie_consent');
  
  if (!consent) {
    showCookieBanner();
  }
}

function showCookieBanner() {
  // Implémenter votre bannière de cookies ici
  console.log('Cookie banner should be displayed');
}

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'true');
  trackEvent('cookie_consent', { action: 'accept' });
}

// Export des fonctions globales
window.trackEvent = trackEvent;
window.formatPhone = formatPhone;
window.acceptCookies = acceptCookies;
