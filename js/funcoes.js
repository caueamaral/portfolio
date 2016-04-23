var cShow = (function(){
	'use strict';

	var cShow = {};

	cShow.init = function(element){
		cShow.element = element;

		cShow.hide();
		cShow.scrolling();
	}

	cShow.hide = function() {
		var i;
		var $elements     = document.querySelectorAll(this.element);
		var elementsTotal = $elements.length;

		for (i = 0; i < elementsTotal; i++) {
			$elements[i].style.opacity = .5;
		}
	}

	cShow.scrolling = function() {
		var trigger = cShow.trigger();

		window.addEventListener('resize', triggerVerify);
		window.addEventListener('scroll', action);

		function triggerVerify() {
			trigger = cShow.trigger();
		}

		function action() {
			var scrolled = window.pageYOffset;

			if (scrolled > trigger) {
				cShow.show();
			}
		}
	}

	cShow.trigger = function() {
		var pageHeight      = window.innerHeight;
		var elementPosition = document.querySelector(this.element).offsetTop;
		var start           = elementPosition;

		return start;
	}

	cShow.show = function () {
		var i             = 0;
		var $elements     = document.querySelectorAll(this.element);
		var elementsTotal = $elements.length;

		console.log('Start effect');
	}

	return {
		init: cShow.init
	}
})();