/* TaskVille motion layer v2: reveal on cards only, never hides what is already in view, count-up numbers, tilt, scroll progress. */
(function () {
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('motion-ready');

  function count(el) {
    var w = d.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var m = n.nodeValue.match(/\d[\d,]*/);
      if (!m) continue;
      var end = parseInt(m[0].replace(/,/g, ''), 10);
      if (!end) return;
      var comma = m[0].indexOf(',') > -1;
      var pre = n.nodeValue.slice(0, m.index);
      var post = n.nodeValue.slice(m.index + m[0].length);
      var t0 = null;
      (function (node, pre, post, end, comma) {
        function step(t) {
          t0 = t0 || t;
          var p = Math.min((t - t0) / 1100, 1);
          var v = Math.round(end * (1 - Math.pow(1 - p, 3)));
          node.nodeValue = pre + (comma ? v.toLocaleString('en-US') : v) + post;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      })(n, pre, post, end, comma);
      return;
    }
  }

  var vh = window.innerHeight;
  var sel = '.team-card,.workflow-card,.step-box,.pricing-card,.meta-box,.faq-item,.section-intro,.award-card,.final-cta,.office-preview,.pricing-title-row';
  var els = [].slice.call(d.querySelectorAll(sel));
  var seen = new Map();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      el.classList.add('is-visible');
      if (el.matches('.pricing-card')) { var pn = el.querySelector('.price-num'); if (pn) count(pn); }
      setTimeout(function () { el.classList.add('is-done'); el.style.removeProperty('--d'); }, 1000 + (el._d || 0) * 1000);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  els.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < vh) { el.classList.add('is-done'); return; }
    var p = el.parentElement, i = seen.get(p) || 0;
    seen.set(p, i + 1);
    el._d = Math.min(i * 0.09, 0.4);
    el.style.setProperty('--d', el._d + 's');
    el.classList.add('reveal');
    io.observe(el);
  });

  // Count-up for hero metrics, runs once on load
  [].slice.call(d.querySelectorAll('.hero-metric-item h4')).forEach(count);

  // Tilt on hover cards (mouse devices only)
  if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    [].slice.call(d.querySelectorAll('.team-card,.workflow-card,.pricing-card,.step-box,.meta-box')).forEach(function (c) {
      c.classList.add('tilt');
      c.addEventListener('mousemove', function (e) {
        if (c.classList.contains('reveal') && !c.classList.contains('is-done')) return;
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = 'perspective(900px) rotateX(' + (-y * 5) + 'deg) rotateY(' + (x * 6) + 'deg) translateY(-6px)';
      });
      c.addEventListener('mouseleave', function () { c.style.transform = ''; });
    });
  }

  // Scroll progress bar
  var bar = d.createElement('div');
  bar.className = 'tv-progress';
  bar.setAttribute('aria-hidden', 'true');
  d.body.appendChild(bar);
  var tick = false;
  function upd() {
    var h = root.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
    tick = false;
  }
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();
