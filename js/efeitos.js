document.addEventListener('DOMContentLoaded', function(){

  /* ----- logo ----- */
  setTimeout(mostrarLogo, 800);

});



function mostrarLogo(){
  var logo = document.querySelector('#logo');

  if (logo) {
    logo.classList.add('logo-ativo');
  }
}