var formularioContacto = document.getElementById("formulario-contacto");
formularioContacto.onsubmit = function() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  
  // Validación de campos
  if (nombre === "" || email === "" || mensaje === "") {
    var mensajeError = document.createElement("p");
    mensajeError.innerHTML = "Todos los campos son obligatorios.";
    mensajeError.style.color = "red";
    mensajeError.style.fontWeight = "bold";
    
    formularioContacto.insertBefore(mensajeError, formularioContacto.firstChild);
    
    return false;
  }
  
  if (nombre.length > 50) {
    var mensajeError = document.createElement("p");
    mensajeError.innerHTML = "El nombre debe tener menos de 50 caracteres.";
    mensajeError.style.color = "red";
    mensajeError.style.fontWeight = "bold";
    
    formularioContacto.insertBefore(mensajeError, formularioContacto.firstChild);
    
    return false;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    var mensajeError = document.createElement("p");
    mensajeError.innerHTML = "Ingrese un correo electrónico válido.";
    mensajeError.style.color = "red";
    mensajeError.style.fontWeight = "bold";
    
    formularioContacto.insertBefore(mensajeError, formularioContacto.firstChild);
    
    return false; 
  }
  
  if (mensaje.length > 300) {
    var mensajeError = document.createElement("p");
    mensajeError.innerHTML = "El mensaje debe tener menos de 300 caracteres.";
    mensajeError.style.color = "red";
    mensajeError.style.fontWeight = "bold";
    
    formularioContacto.insertBefore(mensajeError, formularioContacto.firstChild);
    
    return false;
  }
  
  // Envío de datos
  var mensajeExito = document.createElement("p");
  mensajeExito.innerHTML = "Gracias por su mensaje, " + nombre + ".";
  mensajeExito.style.color = "green";
  mensajeExito.style.fontWeight = "bold";
  
  formularioContacto.reset();
  formularioContacto.insertBefore(mensajeExito, formularioContacto.firstChild);
  
  return false;
};