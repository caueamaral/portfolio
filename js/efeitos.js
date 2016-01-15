document.addEventListener('DOMContentLoaded', function(){

  /* ----- logo ----- */
  setTimeout(mostrarLogo, 800);



  /* ----- projetos ----- */
  window.addEventListener('scroll', mostrarProjetos);

});



function mostrarLogo(){
  var logo = document.querySelector('#logo');

  if (logo) {
    logo.classList.add('logo-ativo');
  }
}


function mostrarProjetos(){
  var rolado  = document.body.scrollTop,
      respiro = window.innerHeight * .6;

  var posicao = document.querySelector('#projetos');
      posicao = posicao.getBoundingClientRect().top + rolado;

  if (rolado > posicao - respiro) {
    acao();
  }

  function acao() {
    var itens = document.querySelectorAll('.projetos-item');

    console.log('itens', itens);
  }
}