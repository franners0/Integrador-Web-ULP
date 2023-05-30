document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    var errorMessage = '';
    if (!nombre) {
      errorMessage += 'El nombre es obligatorio.<br>';
    }
  
    if (!email) {
      errorMessage += 'El email es obligatorio.<br>';
    } else if (!isValidEmail(email)) {
      errorMessage += 'El email no es válido.<br>';
    }
  
    if (!mensaje) {
      errorMessage += 'El mensaje es obligatorio.<br>';
    } else if (mensaje.length > 500) {
      errorMessage += 'El mensaje excede la longitud máxima permitida.<br>';
    }
  
    if (errorMessage) {
      document.getElementById('result').innerHTML = '<div id="error-mensaje">' + errorMessage + '</div>';
    } else {

      document.getElementById('resultado').innerHTML = '<div>Nombre: ' + nombre + '</div>' +
        '<div>Email: ' + email + '</div>' +
        '<div>Mensaje: ' + mensaje + '</div>';
      document.getElementById('contact-form').reset();
    }
  });
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  