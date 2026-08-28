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
