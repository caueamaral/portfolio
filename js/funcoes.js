var cShow = (function(){
	'use strict';

	var cShow = {};

	cShow.init = function(element){
		cShow.element = element;

		cShow.hide();
		cShow.trigger();
	}

	cShow.hide = function() {
		var i;
		var $elements     = document.querySelectorAll(this.element);
		var elementsTotal = $elements.length;

		for (i = 0; i < elementsTotal; i++) {
			$elements[i].style.opacity = .5;
		}
	}

	cShow.trigger = function() {
		var pageHeight      = window.innerHeight;
		var elementPosition = document.querySelector(this.element).getBoundingClientRect().top;
	}

	return {
		init: cShow.init
	}
})();