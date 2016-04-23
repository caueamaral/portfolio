var cShow = (function(){
	'use strict';

	var cShow = {};

	cShow.init = function(elemento){
		cShow.elemento = elemento;

		cShow.esconder();
	}

	cShow.esconder = function() {
		var i;

		var ocorrencias      = document.querySelectorAll('.portfolio-item');
		var ocorrenciasTotal = ocorrenciasTl.length;

		for (i = 0; i < ocorrenciasTotal; i++) {
			ocorrencias[i].style.opacity = .5;
		}
	}

	return {
		init: cShow.init
	}
})();