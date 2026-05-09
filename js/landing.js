/* ============================================================
   ENCORE — Landing Page JavaScript
   landing.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV scroll effect ──────────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Hero parallax ──────────────────────────────────────────
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      hero.style.backgroundPositionY = `calc(30% + ${window.scrollY * 0.2}px)`;
    }
  }, { passive: true });

  // ── Hero entrance sequence ─────────────────────────────────
  const heroTexts = ['rt0', 'rt1', 'rt2'];
  heroTexts.forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id)?.classList.add('visible');
    }, 200 + i * 160);
  });
  setTimeout(() => {
    document.getElementById('heroSub')?.classList.add('visible');
    document.getElementById('heroActions')?.classList.add('visible');
    document.getElementById('heroStats')?.classList.add('visible');
  }, 800);

  // ── Intersection Observer for scroll animations ────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.classList.contains('reveal-text') ||
          el.classList.contains('fade-up') ||
          el.classList.contains('line-draw')) {
        el.classList.add('visible');
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  // Observe scroll-animated elements (exclude hero elements — those fire on load)
  document.querySelectorAll(
    '.reveal-text:not(#rt0):not(#rt1):not(#rt2), ' +
    '.fade-up:not(#heroSub):not(#heroActions):not(#heroStats), ' +
    '.line-draw'
  ).forEach(el => observer.observe(el));

});
