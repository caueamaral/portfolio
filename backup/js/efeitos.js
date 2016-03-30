document.addEventListener('DOMContentLoaded', function(){

  /* ----- logo ----- */
  setTimeout(mostrarLogo, 800);



  /* ----- menu ----- */
  var menu = document.querySelector('#menu');

  if (menu) {
    menu.addEventListener('click', function(evento){
      evento.preventDefault();

      var clicado = evento.target;

      if (clicado.classList.contains('menu-link')) {
        clicado = clicado.hash;

        irPara(clicado);
      }
    });
  }

});



function mostrarLogo() {
  var logo = document.querySelector('#logo');

  if (logo) {
    logo.classList.add('logo-ativo');
  }
}



var contador = 0;

function irPara(destino){
  var rolado  = pageYOffset,
      destino = document.querySelector(destino).getBoundingClientRect().top,
      rolar   = rolado + destino;

  var intervalo = setInterval(function(){

    if (contador <= destino) {
      acao();
      contador += 10;
    }
    else {
      clearInterval(intervalo);
    }
  }, 5);

  function acao() {
    window.scrollTo(0, contador);
  }
}





/* ----- goTo ----- */
var goTo = function(destino, duracao, intervalo){
  duracao   = duracao   || 1000;
  intervalo = intervalo || 0;

  var rolado       = pageYOffset;
  var destinoFinal = document.querySelector(destino).offsetTop;

  if (intervalo == 0) {
    document.body.style.overflow = 'hidden';

    intervalo = (rolado / duracao) * 10;

    setTimeout(function(){
      document.body.style.overflow = 'scroll';
    }, duracao);
  }

  if (rolado > destinoFinal) {
    setTimeout(function(){
      var andar = rolado - intervalo;
      window.scrollTo(0, andar);

      goTo(destino, duracao, intervalo);
    }, 10);
  }
}
