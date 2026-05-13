// Define global variables
let scrollEls;
let anchorLinks;

document.addEventListener('DOMContentLoaded', function() {

  // Set global variables
  scrollEls = document.querySelectorAll(".scroll-animation");
  anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Run functions on page load
  initAnchorLinks();
  initMenu();
  fadeInMountains();
  headerShrink();
  mountainParallax();
  animateScrollLoop();

  // Run functions on page scroll
  window.addEventListener('scroll', function() {
    headerShrink();
    mountainParallax();
    animateScrollLoop();
  });
});

// Smooth scroll on hash link anchor elements
function initAnchorLinks() {
  for(let i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      const scrollEl  = e.currentTarget.getAttribute('href');
      const offsetTop = document.querySelector(scrollEl).offsetTop;

      document.querySelector('html').classList.remove('mobile-menu-open');

      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  }
}

// Open hamburger menu on click
function initMenu() {
  document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('html').classList.toggle('mobile-menu-open');
  });
}

// Add class on load to start mountain fade animation
function fadeInMountains() {
  if(window.scrollY == 0) {
    document.querySelector('.mountains-container').classList.add('fade-in');
  }
  document.querySelector('.mountains-container').classList.add('visible');
}

// Shrink header on scroll & add background color
function headerShrink() {
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  const threshold = window.innerHeight * 0.5;
  if(scrollTop > threshold) {
    document.querySelector('html').classList.add('header-shrink');
  }
  else {
    document.querySelector('html').classList.remove('header-shrink');
  }
}

// Parallax effect on scroll for mountains
function mountainParallax() {
  let scrollPos = window.scrollY
  let movePos   = scrollPos / -6;

  document.querySelectorAll('.mountains-container > div')[1].style.transform = "translateY("+(movePos * 1)+"px)";
  document.querySelectorAll('.mountains-container > div')[2].style.transform = "translateY("+(movePos * 2)+"px)";
}

// Loop though animated scroll elements
function animateScrollLoop() {
  for(let i = 0; i < scrollEls.length; i++) {
    if(animateScrolledTo(scrollEls[i])) {
      scrollEls[i].classList.add('scrolled-to');
    }
  }
}

// Determine if element is scrolled to, make sure to run on page load
function animateScrolledTo(el) {
  const elTop = el.getBoundingClientRect().top;
  return elTop <= ((window.innerHeight || document.documentElement.clientHeight) * .9);
}
