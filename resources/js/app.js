document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('mobile-menu-open');
});

document.addEventListener('DOMContentLoaded', function() {
  mountainParallax();
});

window.addEventListener('scroll', function() {
  mountainParallax();
});

var anchorLinks = document.querySelectorAll('a[href^="#"]');
for(var i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    const scrollEl  = e.currentTarget.getAttribute('href');
    const offsetTop = document.querySelector(scrollEl).offsetTop;

    document.querySelector('body').classList.remove('mobile-menu-open');
 
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}

function mountainParallax() {
  var scrollPos = window.scrollY,
      movePos   = scrollPos / -10;

  if(scrollPos < window.innerHeight) {
    document.querySelectorAll('.mountains-container svg')[1].style.transform = "translateY("+(movePos * 1)+"px)";
    document.querySelectorAll('.mountains-container svg')[2].style.transform = "translateY("+(movePos * 2)+"px)";
  }
}
window.mountainParallax = mountainParallax;