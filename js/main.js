/* ===================================
   LUMINA ELECTRIC — Main JS
   =================================== */

// ===== DARK MODE (runs immediately to prevent flash) =====
(function () {
  function getTheme() {
    const saved = localStorage.getItem('lumina-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme, updateBtn) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lumina-theme', theme);
    if (updateBtn) {
      const btn = document.getElementById('themeToggle');
      if (btn) btn.textContent = theme === 'dark' ? '☀' : '🌙';
    }
  }

  // Apply immediately (before DOMContentLoaded — prevents FOUC)
  applyTheme(getTheme(), false);

  // Inject toggle button & wire up after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const navCta = document.querySelector('.nav__cta');
    if (navCta) {
      const btn = document.createElement('button');
      btn.id = 'themeToggle';
      btn.className = 'theme-toggle';
      btn.setAttribute('aria-label', 'Basculer mode sombre/clair');
      btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '🌙';
      btn.addEventListener('click', function () {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
      });
      // Insert before the phone link
      const phone = navCta.querySelector('.nav__phone');
      navCta.insertBefore(btn, phone || navCta.firstChild);
    }

    // Mobile menu toggle (smaller, at bottom of lang switcher)
    const mobileLang = document.querySelector('.nav__mobile-lang');
    if (mobileLang) {
      const mBtn = document.createElement('button');
      mBtn.className = 'theme-toggle';
      mBtn.style.cssText = 'width:100%;border-radius:8px;height:44px;font-size:0.95rem;gap:8px;display:flex;align-items:center;justify-content:center;margin-top:8px;';
      const cur = document.documentElement.getAttribute('data-theme');
      mBtn.textContent = cur === 'dark' ? '☀  Mode clair' : '🌙  Mode sombre';
      mBtn.addEventListener('click', function () {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
        mBtn.textContent = next === 'dark' ? '☀  Mode clair' : '🌙  Mode sombre';
      });
      mobileLang.parentNode.insertBefore(mBtn, mobileLang.nextSibling);
    }

    // React to OS preference changes (when user hasn't set explicit preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem('lumina-theme')) {
        applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  });
})();

// ===== URGENCE BANNER HEIGHT (used to offset the fixed nav and body padding) =====
function updateUrgenceHeight() {
  const banner = document.querySelector('.urgence-banner');
  const h = banner ? banner.offsetHeight : 0;
  document.documentElement.style.setProperty('--urgence-h', h + 'px');
}
updateUrgenceHeight();
window.addEventListener('resize', updateUrgenceHeight);
window.addEventListener('load', updateUrgenceHeight); // re-run after fonts/images settle

// ===== NAV SCROLL BEHAVIOR =====
const nav = document.getElementById('nav');

function updateNav() {
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.classList.remove('nav--transparent');
    nav.classList.add('nav--solid');
  } else {
    nav.classList.remove('nav--solid');
    nav.classList.add('nav--transparent');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ===== MOBILE MENU =====
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', !isOpen);
    toggle.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Close mobile menu on outside click
document.addEventListener('click', e => {
  if (mobileMenu && toggle && !mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
    mobileMenu.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ===== SCROLL ANIMATIONS =====
const animatedEls = document.querySelectorAll('.fade-up, .fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

animatedEls.forEach(el => observer.observe(el));

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-question.open').forEach(openBtn => {
      openBtn.classList.remove('open');
      openBtn.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ===== HERO PARALLAX =====
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
  }, { passive: true });

  // Animate bg scale in
  setTimeout(() => { heroBg.style.transform = 'scale(1) translateY(0)'; }, 100);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    const btn = contactForm.querySelector('[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    }
    // Netlify handles submission — allow default behavior
  });
}

// ===== SMOOTH ANCHOR SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
