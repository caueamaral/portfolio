document.addEventListener('DOMContentLoaded', function(){

  setTimeout(mostrarLogo, 700);

});


function mostrarLogo(){
  var logo = document.querySelector('#logo');

  if (logo) {
    logo.classList.add('destaque-titulo-ativo');
  }
}