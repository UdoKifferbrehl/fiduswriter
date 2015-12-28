/* This file has been automatically generated. DO NOT EDIT IT. 
 Changes will be overwritten. Edit highlight-buttons.es6.js and run ./es6-compiler.sh */
/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Highlight buttons (adapted from ProseMirror's src/menu/update.js)

	var MIN_FLUSH_DELAY = 200;
	var UPDATE_TIMEOUT = 200;

	var HighlightToolbarButtons = exports.HighlightToolbarButtons = (function () {
	  function HighlightToolbarButtons(pm, events) {
	    var _this = this;

	    _classCallCheck(this, HighlightToolbarButtons);

	    this.pm = pm;

	    this.mustUpdate = false;
	    this.updateInfo = null;
	    this.timeout = null;
	    this.lastFlush = 0;

	    this.events = events.split(" ");
	    this.onEvent = this.onEvent.bind(this);
	    this.force = this.force.bind(this);
	    this.events.forEach(function (event) {
	      return pm.on(event, _this.onEvent);
	    });
	    pm.on("flushed", this.onFlushed = this.onFlushed.bind(this));
	  }

	  _createClass(HighlightToolbarButtons, [{
	    key: "detach",
	    value: function detach() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.events.forEach(function (event) {
	        return _this2.pm.off(event, _this2.onEvent);
	      });
	      this.pm.off("flush", this.onFlush);
	      this.pm.off("flushed", this.onFlushed);
	    }
	  }, {
	    key: "onFlushed",
	    value: function onFlushed() {
	      var now = Date.now();
	      if (this.mustUpdate && now - this.lastFlush >= MIN_FLUSH_DELAY) {
	        this.lastFlush = now;
	        clearTimeout(this.timeout);
	        this.mustUpdate = false;
	        this.markMenu();
	      }
	    }
	  }, {
	    key: "onEvent",
	    value: function onEvent() {
	      this.mustUpdate = true;
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(this.force, UPDATE_TIMEOUT);
	    }
	  }, {
	    key: "force",
	    value: function force() {
	      if (this.pm.operation) {
	        this.onEvent();
	      } else {
	        this.mustUpdate = false;
	        this.updateInfo = null;
	        this.lastFlush = Date.now();
	        clearTimeout(this.timeout);
	        this.markMenu();
	      }
	    }
	  }, {
	    key: "markMenu",
	    value: function markMenu() {
	      /* Fidus Writer code */
	      var marks = theEditor.editor.activeMarks();

	      var strong = marks.some(function (mark) {
	        return mark.type.name === 'strong';
	      });

	      if (strong) {
	        jQuery('#button-bold').addClass('ui-state-active');
	      } else {
	        jQuery('#button-bold').removeClass('ui-state-active');
	      }

	      var em = marks.some(function (mark) {
	        return mark.type.name === 'em';
	      });

	      if (em) {
	        jQuery('#button-italic').addClass('ui-state-active');
	      } else {
	        jQuery('#button-italic').removeClass('ui-state-active');
	      }

	      var link = marks.some(function (mark) {
	        return mark.type.name === 'link';
	      });

	      if (link) {
	        jQuery('#button-link').addClass('ui-state-active');
	      } else {
	        jQuery('#button-link').removeClass('ui-state-active');
	      }

	      return true;
	    }
	  }]);

	  return HighlightToolbarButtons;
	})();

	window.HighlightToolbarButtons = HighlightToolbarButtons;



/***/ }
/******/ ]);