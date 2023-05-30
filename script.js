const imagenes = [
    'cabildo.jpeg',
    'catedral.jpeg',
    'municipalidad.jpeg',
    'terrazas.jpg'
  ];
  
  let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const BtnAtras = document.getElementById('BtnAtras');
  const BtnAdel = document.getElementById('BtnAdel');
  
  function showImagen() {
    carousel.style.backgroundImage = `url(${imagenes[currentIndex]})`;
  }
  
  function prevImagen() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImagen();
  }
  
  function nextImagen() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    showImagen();
  }
  
  BtnAtras.addEventListener('click', prevImagen);
  BtnAdel.addEventListener('click', nextImagen);
  
  showImagen();
  