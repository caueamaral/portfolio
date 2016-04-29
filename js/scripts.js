window.addEventListener('DOMContentLoaded', function(){

	/* portfolio */
	cShow.init('.portfolio-item');


	/* contato */
	contatoForm();

});


function contatoForm() {
	var contatoBtn = document.querySelector('#contato-btn');

	if (contatoBtn) {
		contatoBtn.addEventListener('click', acao);
	}

	function acao(evento) {
		evento.preventDefault();

		var validado = contatoValidacao();

		if (validado) {
			var resposta = 'ok';

			console.log('resposta', resposta);
		}
	}
}

function contatoValidacao() {
	return true;
}