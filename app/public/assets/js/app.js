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

document.getElementById('mobile-menu-link').addEventListener('click', function () {
  document.querySelector('body').classList.toggle('mobile-menu-open');
});
var dropdowns = document.querySelectorAll('.dropdown .dropdown-title');

for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function (e) {
    e.currentTarget.parentElement.classList.toggle('active');
  });
}

window.addEventListener('scroll', function () {
  scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop > 0) {
    document.querySelector('body').classList.add('header-shrink');
  } else {
    document.querySelector('body').classList.remove('header-shrink');
  }
});
var repeatingInputAdd = document.querySelectorAll('form .add-inputs');

for (var i = 0; i < repeatingInputAdd.length; i++) {
  repeatingInputAdd[i].addEventListener('click', function (e) {
    var repeatContainer = e.currentTarget.previousElementSibling,
        repeatNum = parseInt(repeatContainer.lastElementChild.getAttribute('repeat-num')) + 1,
        newInput = '';
    newInput = '<div class="new-repeat" repeat-num="' + repeatNum + '"><div class="title-container"><h4>Junior Information</h4><span class="delete-input" onclick="removeInput(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"/></svg>Delete</span></div><div class="input-group"><input placeholder="Junior Name" required aria-label="Junior 1 Name" type="text" name="junior-name[]"><input placeholder="Junior Age" required aria-label="Junior 1 Age" type="text" name="junior-age[]"></div><div class="input-group"><div class="radio-input"><p>Right or left handed?</p><label><input required checked type="radio" name="junior-handedness[' + repeatNum + ']" value="Right"> Right</label><label><input required type="radio" name="junior-handedness[' + repeatNum + ']" value="Left"> Left</label></div><div class="radio-input"><p>Do they have their own clubs?</p><label><input required checked type="radio" name="junior-clubs[' + repeatNum + ']" value="Yes"> Yes</label><label><input required type="radio" name="junior-clubs[' + repeatNum + ']" value="No"> No</label></div></div></div>';
    repeatContainer.insertAdjacentHTML('beforeend', newInput);

    if (repeatNum > 3) {
      repeatContainer.parentElement.querySelector('.add-inputs').remove();
    }
  });
}

var signUpButtons = document.querySelectorAll('[btn-type="sign-up"]');

for (var i = 0; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', function () {
    document.querySelector('body').classList.toggle('popup-open');
  });
}

function removeInput(el) {
  el.parentElement.parentElement.remove();
}

window.removeInput = removeInput;

function submitRegistration(e) {
  e.preventDefault();
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