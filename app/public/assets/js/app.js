/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Run scripts on page load
document.addEventListener('DOMContentLoaded', function () {
  // Set variable for all scroll animation elements
  var scrollEls = document.querySelectorAll(".scroll-animation"); // Run functions on page load

  animateScrollLoop(scrollEls);
  mountainParallax();
  fadeInMountains(); // Open hamburger menu on click

  document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('mobile-menu-open');
  }); // Run functions on page scroll

  window.addEventListener('scroll', function () {
    mountainParallax();
    animateScrollLoop(scrollEls);
  }); // Smooth scroll on hash link anchor elements

  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function (e) {
      e.preventDefault();
      var scrollEl = e.currentTarget.getAttribute('href');
      var offsetTop = document.querySelector(scrollEl).offsetTop;
      document.querySelector('body').classList.remove('mobile-menu-open');
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  }
}); // Parallax effect on scroll for mountains

function mountainParallax() {
  var scrollPos = window.scrollY,
      movePos = scrollPos / -10;
  document.querySelectorAll('.mountains-container > div')[1].style.transform = "translateY(" + movePos * 1 + "px)";
  document.querySelectorAll('.mountains-container > div')[2].style.transform = "translateY(" + movePos * 2 + "px)";
} // Add class on load to start mountain fade animation


function fadeInMountains() {
  if (window.scrollY == 0) {
    document.querySelector('.mountains-container').classList.add('fade-in');
  }

  document.querySelector('.mountains-container').classList.add('visible');
} //loop though animated scroll elements


function animateScrollLoop(els) {
  for (var i = 0; i < els.length; i++) {
    if (animateScrolledTo(els[i])) {
      els[i].classList.add('scrolled-to');
    }
  }
} //Determine if element is scrolled to, make sure to run on page load


function animateScrolledTo(el) {
  var elTop = el.getBoundingClientRect().top;
  return elTop <= (window.innerHeight || document.documentElement.clientHeight) * .9;
}

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/dev/web/profile/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /mnt/c/dev/web/profile/resources/scss/app.scss */"./resources/scss/app.scss");


/***/ })

/******/ });