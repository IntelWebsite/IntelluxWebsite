/* ============================================================
   INTELLUX PAYROLL & ACCOUNTING — MAIN JAVASCRIPT
   ============================================================ */

// Scroll-reveal animation. Any element with class="reveal" fades/slides in when scrolled into view.
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Mobile nav toggle — hamburger button reveals the full nav-links list.
document.querySelectorAll('nav').forEach((navEl) => {
  const toggle = navEl.querySelector('.nav-toggle');
  const links = navEl.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navEl.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
