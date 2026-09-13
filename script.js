const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const gallery = document.querySelector('#gallery');
const galleryStep = () => Math.min(320, gallery.clientWidth * 0.8);
const resetGallery = () => gallery.scrollTo({ left: 0, behavior: 'auto' });
resetGallery();
window.addEventListener('pageshow', resetGallery);
document.querySelector('#gallery-prev').addEventListener('click', () => gallery.scrollBy({ left: -galleryStep(), behavior: 'smooth' }));
document.querySelector('#gallery-next').addEventListener('click', () => gallery.scrollBy({ left: galleryStep(), behavior: 'smooth' }));

gallery.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') gallery.scrollBy({ left: -galleryStep(), behavior: 'smooth' });
  if (event.key === 'ArrowRight') gallery.scrollBy({ left: galleryStep(), behavior: 'smooth' });
});

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
