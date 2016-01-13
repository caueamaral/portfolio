document.addEventListener('DOMContentLoaded', function(){

  setTimeout(mostrarLogo, 800);

});


function mostrarLogo(){
  var logo = document.querySelector('#logo');

  if (logo) {
    logo.classList.add('destaque-titulo-ativo');
  }
}