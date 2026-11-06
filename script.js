// Rumble Supply Co. — minimal progressive enhancement
(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Order form: swap the mailto action for Formspree once configured.
  // Sign up at formspree.io, add the form ID below, and orders land in your
  // inbox without the customer needing an email app.
  var form = document.querySelector('.order-form');
  var formspreeId = 'YOUR_FORM_ID'; // e.g. 'xqkndvpa'
  if (form && formspreeId && formspreeId.indexOf('YOUR_FORM_ID') === -1) {
    form.setAttribute('action', 'https://formspree.io/f/' + formspreeId);
    form.setAttribute('method', 'post');
    form.removeAttribute('enctype');
    var note = form.querySelector('.fine-print');
    if (note) {
      note.textContent = "We'll reply within one business day. No payment is taken on this site.";
    }
  }
})();
