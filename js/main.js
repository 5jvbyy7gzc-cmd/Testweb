document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var carousel = document.getElementById('dish-carousel');
  var prevBtn = document.querySelector('.carousel-arrow.prev');
  var nextBtn = document.querySelector('.carousel-arrow.next');

  if (carousel && prevBtn && nextBtn) {
    var scrollByCard = function (direction) {
      var item = carousel.querySelector('.carousel-item');
      var gap = 28;
      var amount = (item ? item.offsetWidth : 300) + gap;
      carousel.scrollBy({ left: direction * amount, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', function () { scrollByCard(-1); });
    nextBtn.addEventListener('click', function () { scrollByCard(1); });
  }

  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: wire this up to a real form backend (e.g. Formspree, Netlify Forms,
      // or your own endpoint) — this currently only confirms client-side.
      if (formStatus) {
        formStatus.textContent = 'Vielen Dank! Ihre Nachricht wurde übermittelt — wir melden uns in Kürze bei Ihnen.';
      }
      form.reset();
    });
  }
});
