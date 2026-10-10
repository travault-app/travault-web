// Travault marketing site interactions

// Smooth scroll helper for internal nav (fallback in case CSS smooth-scroll isn't supported)
function smoothScrollTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mobile navigation toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });
}

// Enhance in-page anchor links with smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#0') return;
    const url = new URL(anchor.href);
    if (url.pathname !== window.location.pathname) return;

    event.preventDefault();
    smoothScrollTo(href);
  });
});

// Scroll reveal animations using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: make all visible
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Screenshot carousel controls (lightweight scroll-based)
const screenshotTrack = document.getElementById('screenshot-track');
const prevBtn = document.querySelector('.screenshot-nav--prev');
const nextBtn = document.querySelector('.screenshot-nav--next');

if (screenshotTrack && prevBtn && nextBtn) {
  const scrollByCard = () => {
    const firstCard = screenshotTrack.querySelector('.screenshot-card');
    return firstCard ? firstCard.getBoundingClientRect().width + 20 : 260;
  };

  prevBtn.addEventListener('click', () => {
    screenshotTrack.scrollBy({
      left: -scrollByCard(),
      behavior: 'smooth',
    });
  });

  nextBtn.addEventListener('click', () => {
    screenshotTrack.scrollBy({
      left: scrollByCard(),
      behavior: 'smooth',
    });
  });
}

// Dynamic footer year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

