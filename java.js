const btnDatos = document.getElementById('datos');
const seccionExp = document.getElementById('experiencia');
const seccionEdu = document.getElementById('edu');
const seccionHab = document.getElementById('hab');

btnDatos.addEventListener('click', function() {
  // Oculta los otros contenedores
  seccionEdu.style.display = 'none';
  seccionHab.style.display = 'none';

  // Muestra el contenedor de experiencia si está oculto, o lo oculta si está visible
  if (seccionExp.style.display === 'none') {
    seccionExp.style.display = 'block';
  } else {
    seccionExp.style.display = 'none';
  }
});

const btnEdu = document.getElementById('educacion');

btnEdu.addEventListener('click', function() {
  // Oculta los otros contenedores
  seccionExp.style.display = 'none';
  seccionHab.style.display = 'none';

  // Muestra el contenedor de Educación si está oculto, o lo oculta si está visible
  if (seccionEdu.style.display === 'none') {
    seccionEdu.style.display = 'block';
  } else {
    seccionEdu.style.display = 'none';
  }
});

const btnHab = document.getElementById('habilidades');

btnHab.addEventListener('click', function() {
  // Oculta los otros contenedores
  seccionExp.style.display = 'none';
  seccionEdu.style.display = 'none';

  // Muestra el contenedor de Habilidades si está oculto, o lo oculta si está visible
  if (seccionHab.style.display === 'none') {
    seccionHab.style.display = 'block';
  } else {
    seccionHab.style.display = 'none';
  }
});
