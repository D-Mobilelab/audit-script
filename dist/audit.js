(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Audit"] = factory();
	else
		root["Audit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	* @ngdoc object
	* @name Audit
	*
	* @description
	* Audit script
	*/
	module.exports = new function(){
	    this.init = __webpack_require__(1);
	    this.open = __webpack_require__(2);
	};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	* @ngdoc function
	* @name init
	* @methodOf Audit
	*
	* @description init audit script
	*
	* @param {Object} options options object
	* @param {boolean} options.enable enable/disable audit script
	*
	* @example
	* <pre>
	*   Audit.init({
	*    enable: true
	*   });
	* </pre>
	*/

	module.exports = function(options){
	    if(options.enable){
	        var element = document.createElement('div');
	        element.style.display = 'block';
	        element.style.width = '100%';
	        element.style.position = 'absolute';
	        element.style.backgroundColor = 'rgba(221, 221, 221, 0.7)';
	        element.style.color = '#000000';
	        element.style.zIndex = '999999999';
	        element.style.top = '0';
	        element.style.left = '0';
	        element.innerHTML = 'This message is visible only with set track <a style=\'color:red;\' href=\'#\' onclick=\'Audit.open();return false;\'>Audit tool</a>';
	        document.body.appendChild(element);
	    }    
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	* @ngdoc function
	* @name open
	* @methodOf Audit
	*
	* @description open audit script
	*
	* @example
	* <pre>
	*   Audit.open();
	* </pre>
	*/

	module.exports = function(){
	    window.location = window.location.origin + '/audit?page=' + encodeURIComponent(window.location.href);
	};

/***/ })
/******/ ])
});
;

/* Audit Script 1.0.3 */