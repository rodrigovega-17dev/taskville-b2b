/* TaskVille motion layer v3 */
(function () {
  var d = document, w = window;

  function win(x, y, wd, h, dl) { return `<rect class='win' x='${x}' y='${y}' width='${wd}' height='${h}' fill='url(#tvW)' style='--d:${dl}s'/>`; }
  function ag(x, y, wd, h, dl, c) {
    var cx = x + wd / 2;
    return `<g class='ag' style='--d:${dl}s'><rect x='${cx - 9}' y='${y + h - 14}' width='18' height='14' fill='${c}'/><rect x='${cx - 6}' y='${y + h - 26}' width='12' height='12' fill='#fcd9b6'/><rect x='${cx - 6}' y='${y + h - 26}' width='12' height='5' fill='#0b1329'/></g>`;
  }
  function floor(cls, y, wins, extra) {
    var o = `<g class='tv-rise ${cls}'><rect x='150' y='${y}' width='220' height='130' fill='url(#tvG)' stroke='#0b1329' stroke-width='4'/><rect x='150' y='${y}' width='220' height='12' fill='#bfdbfe' stroke='#0b1329' stroke-width='4'/>`;
    wins.forEach(function (a, i) {
      var wy = y + 30;
      o += win(a[0], wy, a[1], 60, (i * 0.7 + y / 300).toFixed(1));
      if (a[2]) o += ag(a[0], wy, a[1], 60, (i * 0.4).toFixed(1), a[2]);
    });
    return o + (extra || '') + '</g>';
  }
  function cloud(cls, x, y, s) {
    return `<g class='tv-cloud ${cls}' fill='#fff' opacity='.95'><ellipse cx='${x}' cy='${y}' rx='${46 * s}' ry='${16 * s}'/><ellipse cx='${x + 28 * s}' cy='${y - 12 * s}' rx='${30 * s}' ry='${18 * s}'/><ellipse cx='${x - 20 * s}' cy='${y - 10 * s}' rx='${24 * s}' ry='${14 * s}'/></g>`;
  }
  function svg() {
    var s = `<svg class='tv-svg' viewBox='0 0 520 640' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='TaskVille tower with content, delivery and sales floors where AI agents work and a human signs off'>`;
    s += `<defs><linearGradient id='tvG' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#60a5fa'/><stop offset='1' stop-color='#1d4ed8'/></linearGradient><linearGradient id='tvG2' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3b82f6'/><stop offset='1' stop-color='#1e3a8a'/></linearGradient><linearGradient id='tvW' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#fde68a'/><stop offset='1' stop-color='#f59e0b'/></linearGradient><linearGradient id='tvS' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='#fff' stop-opacity='0'/><stop offset='.5' stop-color='#fff' stop-opacity='.5'/><stop offset='1' stop-color='#fff' stop-opacity='0'/></linearGradient><clipPath id='tvC'><rect x='150' y='195' width='220' height='390'/></clipPath></defs>`;
    [[60, 60, 0], [455, 70, 1.1], [330, 36, .5], [175, 82, 1.7], [486, 250, .8], [40, 300, 2]].forEach(function (p) { s += `<circle class='tw' cx='${p[0]}' cy='${p[1]}' r='3' fill='#fff' style='--d:${p[2]}s'/>`; });
    s += cloud('a', 96, 160, 1) + cloud('b', 430, 118, 1.1) + cloud('a', 446, 340, .7);
    s += `<ellipse cx='260' cy='604' rx='232' ry='14' fill='#0b1329' opacity='.16'/><rect x='40' y='584' width='440' height='20' rx='8' fill='#172554'/><rect x='40' y='584' width='440' height='8' rx='4' fill='#34d399'/>`;
    s += `<g class='tv-rise r0'><rect x='64' y='510' width='86' height='74' fill='url(#tvG2)' stroke='#0b1329' stroke-width='4'/><polygon points='54,512 160,512 136,476 78,476' fill='#172554' stroke='#0b1329' stroke-width='4' stroke-linejoin='round'/>${win(82, 536, 22, 26, 0.4)}${win(112, 536, 22, 26, 1.3)}</g>`;
    s += `<g class='tv-rise r0'><rect x='364' y='522' width='92' height='10' fill='#bfdbfe' stroke='#0b1329' stroke-width='4'/><rect x='370' y='532' width='80' height='52' fill='url(#tvG2)' stroke='#0b1329' stroke-width='4'/>${win(388, 546, 22, 22, 0.9)}${win(418, 546, 22, 22, 2.1)}<rect x='480' y='558' width='8' height='26' fill='#7c2d12'/><circle cx='484' cy='540' r='24' fill='#10b981' stroke='#0b1329' stroke-width='4'/></g>`;
    s += floor('r1', 455, [[166, 50, '#34d399'], [304, 50, '#8b5cf6']], `<rect x='238' y='525' width='44' height='59' fill='url(#tvW)' stroke='#0b1329' stroke-width='3'/><rect x='258' y='525' width='4' height='59' fill='#0b1329'/>`);
    s += floor('r2', 325, [[166, 36, null], [216, 36, '#60a5fa'], [266, 36, null], [316, 36, '#f59e0b']]);
    s += floor('r3', 195, [[166, 36, '#8b5cf6'], [216, 36, null], [266, 36, '#34d399'], [316, 36, null]]);
    s += `<g class='tv-rise r4'><rect x='186' y='150' width='148' height='46' fill='url(#tvG2)' stroke='#0b1329' stroke-width='4'/><rect x='176' y='140' width='168' height='14' fill='#bfdbfe' stroke='#0b1329' stroke-width='4'/>${win(206, 162, 28, 24, 0.5)}${win(286, 162, 28, 24, 1.8)}<rect x='257' y='92' width='6' height='50' fill='#0b1329'/><circle class='ring' cx='260' cy='86' r='8' fill='none' stroke='#fbbf24' stroke-width='3'/><circle class='beacon' cx='260' cy='86' r='8' fill='#fbbf24' stroke='#0b1329' stroke-width='3'/></g>`;
    s += `<g clip-path='url(#tvC)'><polygon class='shine' points='150,195 205,195 155,585 100,585' fill='url(#tvS)'/></g>`;
    s += `<line class='flow' x1='392' y1='580' x2='392' y2='268' stroke='#0b1329' stroke-opacity='.45' stroke-width='3' stroke-dasharray='6 8'/>`;
    [0, 1.4, 2.8].forEach(function (dl) { s += `<rect class='pk' x='386' y='566' width='12' height='14' fill='#fff' stroke='#0b1329' stroke-width='2' style='--d:${dl}s'/>`; });
    s += `<circle class='ok-ring' cx='392' cy='244' r='20' fill='none' stroke='#34d399' stroke-width='3'/><circle cx='392' cy='244' r='20' fill='#34d399' stroke='#0b1329' stroke-width='4'/><path d='M382 244 l7 8 l13 -16' fill='none' stroke='#0b1329' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>`;
    return s + '</svg>';
  }

  var host = d.querySelector('.tower-freestanding');
  if (host && !host.querySelector('.tv-svg')) {
    host.insertAdjacentHTML('afterbegin', svg());
    var img = host.querySelector('img');
    if (img) img.remove();
  }

  var header = d.querySelector('.header');
  var bar = d.createElement('div');
  bar.className = 'tv-progress';
  d.body.appendChild(bar);
  var ticking = false, scrolled = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = w.scrollY || 0, max = d.documentElement.scrollHeight - w.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
      if (header) {
        if (!scrolled && y > 24) { scrolled = true; header.classList.add('is-scrolled'); }
        else if (scrolled && y < 8) { scrolled = false; header.classList.remove('is-scrolled'); }
      }
      ticking = false;
    });
  }
  w.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in w)) return;
  d.documentElement.classList.add('motion-ready');

  /* Reveal: only elements below the fold are hidden, so nothing flashes on load */
  var revealSel = '.team-card,.workflow-card,.step-box,.pricing-card,.meta-box,.faq-item,.award-card,.final-cta,.office-preview,.section-intro';
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.classList.add('is-visible');
      io.unobserve(el);
      var delay = parseFloat(el.style.getPropertyValue('--rd')) || 0;
      setTimeout(function () { el.classList.remove('reveal', 'is-visible'); el.style.removeProperty('--rd'); }, 1100 + delay * 1000);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  [].slice.call(d.querySelectorAll(revealSel)).forEach(function (el) {
    if (el.getBoundingClientRect().top < w.innerHeight * 0.95) return;
    var idx = [].indexOf.call(el.parentElement.children, el);
    el.style.setProperty('--rd', ((idx % 4) * 0.09).toFixed(2) + 's');
    el.classList.add('reveal');
    io.observe(el);
  });

  /* Count-up numbers */
  function prep(el) {
    var n = null, tw = d.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (tw.nextNode()) { if (/\d/.test(tw.currentNode.nodeValue)) { n = tw.currentNode; break; } }
    if (!n) return null;
    var t = n.nodeValue, m = /(\d[\d,]*)/.exec(t), v = parseInt(m[1].replace(/,/g, ''), 10);
    if (!v) return null;
    return { n: n, t: t, m: m[1], v: v, c: m[1].indexOf(',') > -1 };
  }
  function fmt(x, c) { var s = String(x); return c ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s; }
  function run(o) {
    var t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / 1100), e = 1 - Math.pow(1 - p, 3);
      o.n.nodeValue = o.t.replace(o.m, fmt(Math.round(o.v * e), o.c));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      cio.unobserve(en.target);
      var o = en.target._tv;
      setTimeout(function () { run(o); }, 300);
    });
  }, { threshold: 0.6 });
  [].slice.call(d.querySelectorAll('.hero-metric-item h4,.price-num')).forEach(function (el) {
    var o = prep(el);
    if (!o) return;
    o.n.nodeValue = o.t.replace(o.m, fmt(0, o.c));
    el._tv = o;
    cio.observe(el);
  });

  /* Tilt cards toward the cursor */
  if (w.matchMedia && w.matchMedia('(hover: hover)').matches) {
    [].slice.call(d.querySelectorAll('.team-card,.workflow-card,.step-box,.pricing-card,.meta-box')).forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        if (el.classList.contains('reveal')) return;
        var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        var pop = el.classList.contains('popular') && w.innerWidth > 1024 ? ' scale(1.02)' : '';
        el.style.transition = 'transform .12s ease-out, box-shadow .25s ease';
        el.style.transform = 'perspective(900px) rotateX(' + ((0.5 - py) * 6).toFixed(2) + 'deg) rotateY(' + ((px - 0.5) * 8).toFixed(2) + 'deg) translateY(-4px)' + pop;
      });
      el.addEventListener('mouseleave', function () { el.style.transition = ''; el.style.transform = ''; });
    });
  }
})();
