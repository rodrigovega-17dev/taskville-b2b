/* TaskVille motion layer v4: animated real tower artwork */
(function () {
  var d = document, w = window;

  function hero() {
    var host = d.querySelector('.tower-freestanding');
    if (!host || host.querySelector('.tv-anim')) return;
    var img = host.querySelector('img');
    if (!img) return;
    var src = (img.currentSrc || img.src).replace(/'/g, '%27');
    var css = [
      '.tower-freestanding{position:relative}',
      '.tv-on img{opacity:0}',
      '.tv-anim{position:absolute;inset:0;pointer-events:none}',
      '.tv-fa,.tv-fl,.tv-bg{position:absolute;inset:0}',
      '.tv-bg{background-size:100% 100%;background-repeat:no-repeat}',
      '.tv-anim i{position:absolute;display:block}',
      '.tv-gl{background:#a5f3fc;opacity:.1;mix-blend-mode:screen;border-radius:2px}',
      '.tv-wb{background:#6ee7b7;opacity:.05;mix-blend-mode:screen;border-radius:3px}',
      '.tv-st{width:1.6%;height:2%;border-radius:50%;background:rgba(255,255,255,.85);opacity:0}',
      '.tv-sp{width:2.4%;aspect-ratio:1;background:radial-gradient(circle,#fff 0,rgba(255,255,255,0) 70%);opacity:0}',
      '.tv-fs{position:absolute;left:24%;right:24%;top:81.5%;bottom:0;overflow:hidden}',
      '.tv-sh{top:0;bottom:0;left:0;width:40%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.45),rgba(255,255,255,0));transform:translateX(-150%) skewX(-14deg)}',
      '@media (prefers-reduced-motion:no-preference){',
      '.tv-fa{animation:tvIn .9s cubic-bezier(.2,.7,.2,1) both}',
      '.tv-fa.f2{animation-delay:.25s}.tv-fa.f1{animation-delay:.5s}',
      '.tv-fl{animation:tvFa var(--s) ease-in-out var(--o) infinite}',
      '.tv-gl,.tv-wb{animation:tvGl 3.2s linear var(--d) infinite}',
      '.tv-st{animation:tvSt 3.2s ease-out var(--d) infinite}',
      '.tv-sp{animation:tvSp 3.6s ease-in-out var(--d) infinite}',
      '.tv-sh{animation:tvSh 6.5s ease-in-out 1.5s infinite}',
      '@keyframes tvIn{from{opacity:0;transform:translateY(-28px)}to{opacity:1;transform:none}}',
      '@keyframes tvFa{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--a) * -1))}}',
      '@keyframes tvGl{0%,100%{opacity:.08}20%{opacity:.7}40%{opacity:.25}70%{opacity:.85}}',
      '@keyframes tvSt{0%{opacity:0;transform:translate(0,0) scale(.6)}30%{opacity:.7}100%{opacity:0;transform:translate(40%,-220%) scale(1.6)}}',
      '@keyframes tvSp{0%,100%{opacity:0;transform:scale(.2)}50%{opacity:1;transform:scale(1)}}',
      '@keyframes tvSh{0%{transform:translateX(-150%) skewX(-14deg)}55%,100%{transform:translateX(380%) skewX(-14deg)}}',
      '}'
    ].join('');
    var st = d.createElement('style');
    st.textContent = css;
    d.head.appendChild(st);

    function gl(l, t, wd, h, dl, c) { return '<i class="' + (c || 'tv-gl') + '" style="left:' + l + '%;top:' + t + '%;width:' + wd + '%;height:' + h + '%;--d:' + dl + 's"></i>'; }
    function steam(dl) { return '<i class="tv-st" style="left:30.6%;top:20%;--d:' + dl + 's"></i>'; }
    function layer(cls, clip, fl, extra) {
      var p = 'polygon(' + clip + ')';
      return '<div class="tv-fa ' + cls + '"><div class="tv-fl" style="clip-path:' + p + ';-webkit-clip-path:' + p + ';' + fl + '"><div class="tv-bg" style="background-image:url(\'' + src + '\')"></div>' + extra + '</div></div>';
    }
    var T = '0 0,100% 0,100% 25.5%,74.8% 25.5%,50% 35.4%,25.2% 25.5%,0 25.5%';
    var M = '0 25.5%,25.2% 25.5%,50% 35.4%,74.8% 25.5%,100% 25.5%,100% 48.3%,74.8% 48.3%,50% 58%,25.2% 48.3%,0 48.3%';
    var B = '0 48.3%,25.2% 48.3%,50% 58%,74.8% 48.3%,100% 48.3%,100% 100%,0 100%';

    var html = '';
    html += layer('f3', B, '--s:9s;--o:0s;--a:0px',
      gl(61, 62.7, 3.4, 2.6, 0.3) + gl(35.8, 66.8, 3.4, 2.6, 1.4) + gl(47.2, 71.4, 3.2, 2.6, 2.2) +
      '<div class="tv-fs"><i class="tv-sh"></i></div>' +
      '<i class="tv-sp" style="left:32.8%;top:79%;--d:0s"></i><i class="tv-sp" style="left:60.8%;top:91.6%;--d:1.7s"></i><i class="tv-sp" style="left:30%;top:90%;--d:2.6s"></i>');
    html += layer('f2', M, '--s:8s;--o:-3s;--a:5px',
      gl(58.3, 38.6, 3.4, 2.6, 0.8) + gl(45, 44, 3.4, 2.6, 1.9) + gl(53, 40.5, 3, 2.4, 2.7) +
      gl(66.5, 38, 5.2, 5.2, 0.5, 'tv-wb'));
    html += layer('f1', T, '--s:7s;--o:-1s;--a:7px',
      gl(39.5, 22.5, 2.8, 2.6, 0.2) + gl(48.5, 26.2, 3.2, 2.6, 1.2) + gl(33.5, 24.5, 3, 2.4, 2.3) +
      steam(0) + steam(1.1) + steam(2.2));

    var wrap = d.createElement('div');
    wrap.className = 'tv-anim';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = html;
    host.appendChild(wrap);
    host.classList.add('tv-on');
  }
  hero();

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
