function validar () {
  let usuario = document.getElementById('user').value
  let clave = document.getElementById('pass').value

  if (usuario == 'demo') {
    if (clave == '1234') {
      // acá redirecciona
      window.location.assign('./reserva.html')
    } else {
      // avisamos que la clave está mal
      alert('La clave no es correcta')
    }
  } else {
    // avisamos que el usuario está mal
    alert('El usuario no es correcto')
  }
  return false
}
