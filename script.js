(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.12});
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));
  // The request form uses the visitor's email app. Replace the address with a real inbox before publishing.
  const form = document.querySelector('[data-request-form]');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const recipient = form.dataset.recipient || 'REPLACE_WITH_REAL_EMAIL';
    if (recipient === 'REPLACE_WITH_REAL_EMAIL' || !recipient.includes('@')) {
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'النموذج جاهز، لكن يجب ضبط بريد الاستقبال الحقيقي في contact.html قبل استقبال الطلبات.';
      return;
    }
    const data = new FormData(form);
    const subject = `طلب خدمة جديد من MH — ${data.get('service')}`;
    const body = [...data.entries()].map(([key,value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'تم تجهيز الطلب في تطبيق البريد لديك. أكّد الإرسال من تطبيق البريد.';
  });
})();
