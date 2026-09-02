/* ============================================================
   INTELLUX PAYROLL & ACCOUNTING — MAIN JAVASCRIPT
   ============================================================
   
   ============================================================ */



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
