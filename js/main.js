/* ============================================
   INX Technologies - Shared JavaScript
   Enhancement Only (Site works without JS)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* =================================================
     Mobile Navigation Toggle
     ================================================= */

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    /* Close menu after clicking a link (mobile UX) */
    var links = navLinks.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    }
  }

  /* =================================================
     Fade-In Animation (Opacity Only)
     ================================================= */

  var fadeElements = document.querySelectorAll('.fade-in');

  function checkFadeIn() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    for (var i = 0; i < fadeElements.length; i++) {
      var el = fadeElements[i];
      var rect = el.getBoundingClientRect();

      if (rect.top <= windowHeight - 60) {
        el.classList.add('visible');
      }
    }
  }

  /* Run once on load */
  checkFadeIn();

  /* Throttled scroll listener */
  var scrollTimeout;

  window.addEventListener('scroll', function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(checkFadeIn, 50);
  });

  /* =================================================
     Contact Form Enhancement (NO interception)
     Adds timestamp before native submission
     ================================================= */

  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function () {

      var timestampField = document.getElementById('formTimestamp');

      if (timestampField) {
        timestampField.value = new Date().toISOString();
      }

      /* IMPORTANT:
         No preventDefault()
         Browser submits form normally
      */
    });
  }

});

