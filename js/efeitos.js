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



function irPara(destino){
  var rolado  = window.pageYOffset,
      destino = document.querySelector(destino).getBoundingClientRect().top,
      rolar   = rolado + destino;

  window.scrollTo(0, rolar);
}