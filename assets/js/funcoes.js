/* ----- clog ----- */
function clog(message) {
	return console.log(message);
}




/* ----- cShow ----- */
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
			$elements[i].style.opacity = 0;
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
		var element         = document.querySelector(this.element);
		var elementPosition = element.offsetTop;
		var elementHeight   = element.clientHeight;
		var start           = elementPosition + (elementHeight / 2);

		return start;
	}

	cShow.show = function () {
		var i             = 0;
		var $elements     = document.querySelectorAll(this.element);
		var elementsTotal = $elements.length;

		for (i = 0; i < elementsTotal; i++) {
			action(i);
		}

		function action(index) {
			var index = index;

			setTimeout(function(){
				$elements[index].style.opacity = 1;
			}, 300 * index);
		}
	}

	return {
		init: cShow.init
	}
})();