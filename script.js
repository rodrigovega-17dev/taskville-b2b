(function () {
  const b = document.body;
  const buttons = [...document.querySelectorAll('[data-lang-button]')];

  function setLang(l) {
    b.dataset.lang = l;
    document.documentElement.lang = l;
    buttons.forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.langButton === l));
    });
    try {
      localStorage.setItem('tv-b2b-lang', l);
    } catch (e) {}
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.langButton));
  });

  try {
    const savedLang = localStorage.getItem('tv-b2b-lang');
    if (savedLang === 'en' || savedLang === 'es') {
      setLang(savedLang);
    }
  } catch (e) {}
})();
