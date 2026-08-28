/* ============================================================
   INTELLUX PAYROLL & ACCOUNTING — MAIN JAVASCRIPT
   ============================================================
   Once a design concept is chosen, move that demo's <script>
   block into this file (the scroll-reveal animation code, etc.)
   ============================================================ */

// Scroll-reveal animation — used by all 5 design concepts.
// Any element with class="reveal" fades/slides in when scrolled into view.
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

// Mobile hamburger nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
  // On phones: first tap on "Services" opens the accordion, second tap follows the link
  document.querySelectorAll('.has-dropdown > a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width:880px)').matches) {
        const li = a.parentElement;
        if (!li.classList.contains('open')) { e.preventDefault(); li.classList.add('open'); }
      }
    });
  });
}
