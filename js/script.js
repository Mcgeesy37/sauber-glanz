/* ============================================================
   SAUBER & GLANZ — script.js
   Header-Schatten, Mobile-Menü, Bezirks-Ticker,
   Scroll-Reveal, Kontaktformular
   ============================================================ */

// Header-Schatten beim Scrollen
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile-Menü
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  navLinks.classList.remove('open');
}));

// Bezirks-Ticker: Track duplizieren für nahtlosen Loop
const track = document.getElementById('tickerTrack');
if (track) track.innerHTML += track.innerHTML;

// Scroll-Reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Kontaktformular (Demo – hier später Backend, Formspree o.ä. anbinden)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.name.value.trim() || !form.email.value.trim() || !/\S+@\S+\.\S+/.test(form.email.value)) {
      form.reportValidity();
      return;
    }
    document.getElementById('formSuccess').style.display = 'block';
    form.querySelector('button[type=submit]').disabled = true;
  });
}
