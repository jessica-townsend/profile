document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const scrollEls = document.querySelectorAll('.scroll-animation');
  const landingRevealEls = document.querySelectorAll('.mountains-scene .reveal');
  const landingRevealSet = new Set(landingRevealEls);
  const otherRevealEls = Array.from(document.querySelectorAll('.reveal')).filter(el => !landingRevealSet.has(el));
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const hamburger = document.getElementById('hamburger');
  const mountainsContainer = document.querySelector('.mountains');
  const mountainLayers = document.querySelectorAll('.mountains__layer');

  initAnchorLinks(anchorLinks, html);
  initMenu(hamburger, html);
  observeVisibility(otherRevealEls, 'reveal--visible');
  observeVisibility(scrollEls, 'scroll-animation--visible');
  fadeInMountains(mountainsContainer, landingRevealEls);
  headerShrink(html);
  mountainParallax(mountainLayers);

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function() {
      headerShrink(html);
      mountainParallax(mountainLayers);
      ticking = false;
    });
  });
});

function initAnchorLinks(anchorLinks, html) {
  for (let i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (!target) return;

      html.classList.remove('is-mobile-menu-open');
      scroll({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  }
}

function initMenu(hamburger, html) {
  if (!hamburger) return;
  hamburger.addEventListener('click', function() {
    html.classList.toggle('is-mobile-menu-open');
  });
}

function observeVisibility(els, visibleClass) {
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add(visibleClass));
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => observer.observe(el));
}

function fadeInMountains(mountainsContainer, landingRevealEls) {
  if (!mountainsContainer) {
    landingRevealEls.forEach(el => el.classList.add('reveal--visible'));
    return;
  }
  const isInitialLoad = window.scrollY === 0;
  if (isInitialLoad) {
    mountainsContainer.classList.add('mountains--fading-in');
  }
  mountainsContainer.classList.add('mountains--visible');

  const revealDelay = isInitialLoad ? 900 : 0;
  setTimeout(function() {
    landingRevealEls.forEach(el => el.classList.add('reveal--visible'));
  }, revealDelay);
}

function headerShrink(html) {
  const threshold = window.innerHeight * 0.6;
  if (window.scrollY > threshold) {
    html.classList.add('is-header-shrink');
  } else {
    html.classList.remove('is-header-shrink');
  }
}

function mountainParallax(mountainLayers) {
  if (mountainLayers.length < 3) return;
  const movePos = window.scrollY / -6;
  mountainLayers[1].style.transform = 'translateY(' + (movePos * 1) + 'px)';
  mountainLayers[2].style.transform = 'translateY(' + (movePos * 2) + 'px)';
}

