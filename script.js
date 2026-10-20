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

(function () {
  var hero = document.querySelector('.hero, #hero, header.hero, main > section, section');
  if (!hero || document.querySelector('.trusted-partners')) return;
  var s = document.createElement('section');
  s.className = 'trusted-partners';
  s.setAttribute('aria-label', 'Trusted partners');
  s.style.cssText = 'padding:48px 24px;text-align:center;';
  var base = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/';
  s.innerHTML = '<p style="font-size:14px;letter-spacing:0.12em;text-transform:uppercase;color:#9fb0cc;margin:0 0 24px;">Trusted partners</p>' +
    '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:48px;">' +
    '<img src="' + base + 'composio/default.svg" alt="Composio" loading="lazy" style="height:44px;width:auto;">' +
    '<img src="' + base + 'aws/default.svg" alt="AWS" loading="lazy" style="height:44px;width:auto;">' +
    '</div>';
  hero.insertAdjacentElement('afterend', s);
})();
