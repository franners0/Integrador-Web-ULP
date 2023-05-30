var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

function cargarCarrusel() {
  var carrusel = document.getElementById("carousel");
  for (var i = 0; i < imagenes.length; i++) {
    var imagen = document.createElement("img");
    imagen.src = "img/" + imagenes[i];
    carrusel.appendChild(imagen);
  }
}

window.onload = function() {
  cargarCarrusel();
};