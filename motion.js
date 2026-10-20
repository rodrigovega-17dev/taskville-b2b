/* Motion layer: does nothing when reduced motion is requested or IntersectionObserver is missing */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  root.classList.add('motion-ready');

  var revealSelector = 'section, .card, .metric, .pricing-card, .faq-item';
  var targets = Array.prototype.slice.call(document.querySelectorAll(revealSelector));

  // Stagger siblings so groups of cards enter one after another
  var indexByParent = new Map();
  targets.forEach(function (el) {
    var parent = el.parentElement || document.body;
    var i = indexByParent.get(parent) || 0;
    indexByParent.set(parent, i + 1);
    el.classList.add('reveal');
    el.style.transitionDelay = (Math.min(i, 6) * 80) + 'ms';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });

  // Gentle float on the hero visual, if one exists
  document.querySelectorAll('.hero-visual, .hero img').forEach(function (el) {
    el.classList.add('float');
  });
})();
