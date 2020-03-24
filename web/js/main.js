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

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hambugerMenu = document.querySelector('#js-mobile-nav');\nvar mobileNav = document.querySelector('.collapse');\n\nfunction openMenu() {\n  mobileNav.classList.toggle('collapse');\n}\n\nhambugerMenu.addEventListener('click', openMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcz80NWQ4Il0sIm5hbWVzIjpbImhhbWJ1Z2VyTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vYmlsZU5hdiIsIm9wZW5NZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBbEI7O0FBRUEsU0FBU0UsUUFBVCxHQUFvQjtBQUNqQkQsV0FBUyxDQUFDRSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixVQUEzQjtBQUNGOztBQUVETixZQUFZLENBQUNPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDSCxRQUF2QyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFtYnVnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW1vYmlsZS1uYXYnKTtcbmNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZScpO1xuXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgIG1vYmlsZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xufVxuXG5oYW1idWdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/main.js\n");

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9mMjEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL3Nhc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/sass/app.scss\n");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./assets/js/main.js ./assets/sass/app.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/michealcopanos/projects/client-projects/blog/assets/js/main.js */"./assets/js/main.js");
module.exports = __webpack_require__(/*! /Users/michealcopanos/projects/client-projects/blog/assets/sass/app.scss */"./assets/sass/app.scss");


/***/ })

/******/ });