
// Run scripts on page load
document.addEventListener('DOMContentLoaded', function() {

  // Set variable for all scroll animation elements
  var scrollEls = document.querySelectorAll(".scroll-animation");
  
  // Run functions on page load
  headerShrink();
  fadeInMountains();
  mountainParallax();
  animateScrollLoop(scrollEls);
  
  // Open hamburger menu on click
  document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('html').classList.toggle('mobile-menu-open');
  });
  
  // Run functions on page scroll
  window.addEventListener('scroll', function() {
    headerShrink();
    mountainParallax();
    animateScrollLoop(scrollEls);
  });
  
  // Smooth scroll on hash link anchor elements
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for(var i = 0; i < anchorLinks.length; i++) {
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
});

// Shrink header on scroll & add background color
function headerShrink() {
  scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  if(scrollTop > 0) {
    document.querySelector('html').classList.add('header-shrink');
  }
  else {
    document.querySelector('html').classList.remove('header-shrink');
  }
}

// Parallax effect on scroll for mountains
function mountainParallax() {
  var scrollPos = window.scrollY,
      movePos   = scrollPos / -6;

  document.querySelectorAll('.mountains-container > div')[1].style.transform = "translateY("+(movePos * 1)+"px)";
  document.querySelectorAll('.mountains-container > div')[2].style.transform = "translateY("+(movePos * 2)+"px)";
}

// Add class on load to start mountain fade animation
function fadeInMountains() {
  if(window.scrollY == 0) {
    document.querySelector('.mountains-container').classList.add('fade-in');
  }
  document.querySelector('.mountains-container').classList.add('visible');
}

//loop though animated scroll elements
function animateScrollLoop(els) {
  for(var i = 0; i < els.length; i++) {
    if(animateScrolledTo(els[i])) {
      els[i].classList.add('scrolled-to');
    }
  }
}

//Determine if element is scrolled to, make sure to run on page load
function animateScrolledTo(el) {
  var elTop = el.getBoundingClientRect().top;
  return elTop <= ((window.innerHeight || document.documentElement.clientHeight) * .9);
}