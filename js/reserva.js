/**
 *Agrega una orden a una reserva
 */
function orden_reserva (id_full) {
  /* Descomponemos el id compuesto a mesa y hora */
  let detalles = idAgenda_a_detalles(id_full)
  let mesa = detalles[0]
  let hora = detalles[1]

  /* Verificamos que haya un cliente registrado en la reserva */
  let cliente = document.getElementById(`cliente-${mesa}-${hora}`)
  /* Para ello, verificamos si tiene al menos un campo activo. Podría ser cualquiera */
  if (cliente.getAttribute('codigo') == '') {
    alert(
      'No se encontró una reserva activa para ordenar. Verifique y vuelva a intentarlo.'
    )
    return false
  }

  /* Extraemos los valores del cliente para fácil manipulación */
  let codigo = cliente.getAttribute('codigo')
  let nombre = cliente.getAttribute('nombre')
  let cantidad = cliente.getAttribute('cantidad')

  /* Abrimos la página de orden */
  let opened = window.open('./orden.html', '_blank')

  opened.addEventListener(
    'load',
    function () {
      opened.document.getElementById('info-mesa').innerText = mesa
      opened.document.getElementById('info-reserva').innerText = codigo
      opened.document.getElementById('info-cliente').innerText = nombre
      opened.document.getElementById('info-cantidad').innerText = cantidad
    },
    true
  )
}

/**
 *Agrega una mesa al salón principal
 */
function agregar_mesa () {
  let cap

  /* Validamos que la capacidad sea un número de 1 a 12 */
  while (cap < 0 || cap > 12 || isNaN(cap) == true) {
    cap = parseInt(prompt('Ingrese la capacidad de la mesa'))

    if (cap < 0 || cap > 12 || isNaN(cap) == true) {
      if (
        !confirm(
          'El número ingresado no es válido. Cada mesa puede tener una capacidad máxima de 12 comensales. ¿Desea volver a intentarlo?'
        )
      ) {
        return false
      }
    }
  }

  const container = document.getElementById('mesas')

  /* Guardamos todas los elementos que tengan la clase mesa */
  const mesas = document.getElementsByClassName('mesa')
  let num

  if (mesas.length > 0) {
    /* Obtener el id de la última mesa creada */
    let mesa_id = mesas[mesas.length - 1].parentNode.getAttribute('id')
    /* Descomponemos el id de "mesa-" + número, y le añadimos uno para seguir con la numeración */
    num = parseInt(mesa_id.substr(5)) + 1
  } else {
    /* Si no hay ninguna mesa creada, la numeración empieza de 1 */
    num = 1
  }

  let mesa_box = document.createElement('div')
  let mesa_id = `mesa-${num}`

  mesa_box.setAttribute('id', mesa_id)

  let mesa = document.createElement('div')

  mesa.setAttribute('class', 'mesa')
  mesa.setAttribute('onClick', `seleccionar_mesa('${num}')`)

  let texto = document.createElement('span')

  texto.innerText = 'Mesa #' + num

  if (isNaN(cap) == true) {
    /* Si la capacidad no es numérica, se crea una al azar */
    cap = random_int_entre(2, 8)
  }

  /* Creamos un atributo personalizado para que la caja ya tenga la capacidad guardada */
  mesa_box.setAttribute('cap', cap)
  mesa.appendChild(texto)
  mesa_box.appendChild(mesa)
  container.appendChild(mesa_box)

  /* Finalmente creamos la agenda que acompañará a esta mesa */
  crear_agenda()

  /* Lanzamos eventos para mantener limpio el diseño */
  limpiar_form()
  bloquear_form()
}

/**
 *Elimina una mesa al salón principal
 */
function quitar_mesa () {
  const selec = document.getElementsByClassName('seleccionado')

  if (selec.length > 0) {
    /* Eliminamos todos los elementos seleccionados */
    for (let i = 0; i < selec.length; i++) {
      /* Extramos el id para mandar un mensaje de confirmación al usuario */
      let id_mesa = selec[i].getAttribute('id').substr(5)

      if (
        confirm(
          `¿Está seguro de querer eliminar la mesa ${id_mesa}? Se perderán todos los registros de la agenda.`
        )
      ) {
        /* Eliminamos la mesa seleccionada */
        selec[i].parentElement.removeChild(selec[i])

        /* Eliminamos la agenda vinculada */
        let agenda = document.getElementById(`agenda-${id_mesa}`)
        agenda.parentElement.removeChild(agenda)

        /* Dejamos en blanco el título de la barra lateral izquierda */
        let titulo = document.getElementById('titulo-#mesa')
        titulo.innerText = ''
      } else {
        /* No hacaemos nada si desiste */
        return false
      }
    }
  } else {
    alert('Debe seleccionar una mesa para elminar')
  }

  /* Lanzamos eventos para mantener limpio el diseño */
  limpiar_form()
  bloquear_form()
}

/**
 *Combina dos o más mesas para atender a más personas
 */
function combinar_mesas () {
  const selec = document.getElementsByClassName('seleccionado')

  if (selec.length > 2) {
    alert('Debe seleccionar al menos dos mesas')
  } else {
  }
}

/**
 *Una agenda contiene el detalle de todas las horas de una mesa
 */
function crear_agenda () {
  const container = document.getElementById('agenda')
  const tablas = document.getElementsByTagName('table')
  let num

  if (tablas.length > 0) {
    /* Obtenemos el id de la última tabla */
    let tabla_id = tablas[tablas.length - 1].getAttribute('id')
    /* Descomponemos el id de "agenda-" + número, y le añadimos uno para seguir con la numeración */
    num = parseInt(tabla_id.substr(7)) + 1
  } else {
    /* Si no hay ninguna agenda creada, la numeración empieza de 1 */
    num = 1
  }

  let tabla = document.createElement('table')
  tabla.setAttribute('id', `agenda-${num}`)
  tabla.setAttribute('class', 'table')
  tabla.setAttribute('style', `display:none;`)

  let encabezado = document.createElement('thead')
  let fila_enc = document.createElement('tr')

  let hora_enc = document.createElement('th')
  hora_enc.innerText = 'Hora'

  let reserva_enc = document.createElement('th')
  reserva_enc.innerText = '# Reserva'

  let acciones_enc = document.createElement('th')
  acciones_enc.innerText = 'Acciones'

  let cuerpo = document.createElement('tbody')

  /* Configuramos el horario de inicio de la agenda y la cantidad de horas que se atenderá */
  let apertura = 12
  let horas_jornada = 11

  /* Creamos las n filas de la tabla por cada hora de jornada, con 3 columnas antes indicadas */
  for (let j = 0; j < horas_jornada; j++) {
    let fila_cuerpo = document.createElement('tr')
    fila_cuerpo.setAttribute(
      'onClick',
      `seleccionar_reserva(${num}, ${apertura + j})`
    )

    let hora_fila = document.createElement('th')
    hora_fila.innerText = `${apertura + j}:00 - ${apertura + j + 1}:00`

    let id_agenda_estado = `agenda-${num}--estado-${apertura + j}`
    let estado_fila = document.createElement('th')
    estado_fila.setAttribute('id', id_agenda_estado)
    estado_fila.setAttribute('class', 'libre-fuente')
    estado_fila.innerText = 'Libre'

    let botones_fila = document.createElement('th')
    botones_fila.setAttribute('class', 'edit-buttons')

    let btn_orden = document.createElement('button')
    btn_orden.classList.add('blue')
    btn_orden.setAttribute('type', 'button')
    btn_orden.setAttribute('onClick', `orden_reserva('${id_agenda_estado}')`)
    btn_orden.innerText = 'Orden'

    let btn_editar = document.createElement('button')
    btn_editar.classList.add('green')
    btn_editar.setAttribute('type', 'button')
    btn_editar.setAttribute('onClick', `editar_reserva('${id_agenda_estado}')`)
    btn_editar.innerText = 'Editar'

    let btn_borrar = document.createElement('button')
    btn_borrar.classList.add('red')
    btn_borrar.setAttribute('type', 'button')
    btn_borrar.setAttribute('onClick', `borrar_reserva('${id_agenda_estado}')`)
    btn_borrar.innerText = 'Borrar'

    botones_fila.appendChild(btn_orden)
    botones_fila.appendChild(btn_editar)
    botones_fila.appendChild(btn_borrar)

    /* Creamos un elemento personalizado que no se mostrará en el navegador, con la información del cliente */
    let cliente = document.createElement('cliente')
    cliente.setAttribute('id', `cliente-${num}-${apertura + j}`)
    cliente.setAttribute('codigo', '')
    cliente.setAttribute('nombre', '')
    cliente.setAttribute('celular', '')
    cliente.setAttribute('cantidad', '')

    fila_cuerpo.appendChild(hora_fila)
    fila_cuerpo.appendChild(estado_fila)
    fila_cuerpo.appendChild(botones_fila)
    fila_cuerpo.appendChild(cliente)

    cuerpo.appendChild(fila_cuerpo)
  }

  fila_enc.appendChild(hora_enc)
  fila_enc.appendChild(reserva_enc)
  fila_enc.appendChild(acciones_enc)
  encabezado.appendChild(fila_enc)

  tabla.appendChild(encabezado)
  tabla.appendChild(cuerpo)

  container.appendChild(tabla)
}

/**
 *Una agenda contiene el detalle de todas las horas de una mesa
 */
function seleccionar_mesa (id_mesa, e) {
  /* Si no se mantuvo presionado Shift, selecciona solo uno */
  let marcados = document.getElementsByClassName('seleccionado')

  /* Deseleccionamos todos las mesas, eliminado su respectiva clase */
  for (let i = 0; i < marcados.length; i++) {
    marcados[i].setAttribute('class', '')
  }

  /* Eliminamos el texto guía una vez que cumple con su propósito */
  var agenda_placeholder = document.getElementById('agenda-placeholder')
  var info_placeholder = document.getElementById('info-mesa-placeholder')

  /* Si el elemento ya fue eliminado, no hacemos nada */
  if (agenda_placeholder != null || agenda_placeholder != undefined) {
    agenda_placeholder.parentNode.removeChild(agenda_placeholder)
  }

  if (info_placeholder != null || info_placeholder != undefined) {
    info_placeholder.parentNode.removeChild(info_placeholder)
  }

  /* Añadimos el estilo seleccionado a la mesa que hicimos click */
  let objetivo = document.getElementById('mesa-' + id_mesa)
  objetivo.setAttribute('class', 'seleccionado')

  /* Mostramos la información relevantre */
  mostrar_tabla(id_mesa)
  mostrar_mesa_info(id_mesa)
  /* Dejamos de recordar la reserva que seleccionó el usuario */
  limpiar_reservas_seleccionadas()
}

/**
 *Elimina la reserva de una agenda
 */
function borrar_reserva (id_full) {
  /* Descomponemos el id completo de la reserva, en mesa y hora, y la almacenamos en un arreglo */
  let detalles = idAgenda_a_detalles(id_full)
  let mesa = detalles[0]
  let hora = detalles[1]

  /* Verificamos que haya un cliente registrado en la reserva */
  let cliente = document.getElementById(`cliente-${mesa}-${hora}`)
  /* Verificamos si tiene al menos un campo activo. Podría ser cualquiera */
  if (cliente.getAttribute('codigo') == '') {
    return false
  }

  if (!confirm('¿Está seguro de eliminar esta reserva?')) {
    return false
  }

  /* Ubicamos el estado de la reserva */
  const estado = document.getElementById(`agenda-${mesa}--estado-${hora}`)

  /* Borramos solo si hay reserva activa */
  if (estado.parentElement.classList.contains('ocupado-bg')) {
    /* Limpiamos todos los datos de tu nuestra reserva, almacenados en el elemento personalizando "cliente" */
    cliente.setAttribute('codigo', '')
    cliente.setAttribute('nombre', '')
    cliente.setAttribute('celular', '')
    cliente.setAttribute('cantidad', '')

    /* Restablecemos los valores iniciales del estado */
    estado.innerText = 'Libre'
    estado.setAttribute('class', 'libre-fuente')
    estado.parentElement.removeAttribute('class')
  } else {
    return false
  }

  limpiar_form()
  bloquear_form()
}

/**
 *Guardamos la reserva del input box a nuestra agenda
 */
function guardar_reserva () {
  /* Para guardar la información de una reserva en algún horario de la agenda, al menos una fila debe estar seleccionada como objetivo */
  const fila_selec = document.getElementsByClassName('fila-seleccionada')

  if (fila_selec.length < 1) {
    alert('Debe seleccionar una mesa y una hora de la agenda.')
    return false
  }

  /* Validaremos que la información esté completa y sea válida antes de almacenarla */
  let nom_input = document.getElementsByName('nombre')
  let cel_input = document.getElementsByName('celular')
  let can_input = document.getElementsByName('cantidad')
  let cod_input = document.getElementsByName('codigo')

  if (cod_input[0].value == '') {
    alert('El código no puede estar vacío.')
    return false
  }

  if (nom_input[0].value == '') {
    alert('El nombre no puede estar vacío.')
    return false
  }

  if (cel_input[0].value == '' || isNaN(cel_input[0].value) == true) {
    alert('El celular del cliente tiene que ser válido.')
    return false
  }

  if (can_input[0].value == '') {
    alert('Debe seleccionar la cantidad de comensales.')
    return false
  }

  /* Sacamos el id del segundo hijo de la fila seleccionada; es decir, la columna que tiene el det alle de la reserva */
  let detalles = idAgenda_a_detalles(fila_selec[0].childNodes[1].id)
  let mesa = detalles[0]
  let hora = detalles[1]

  /* Validamos que la cantidad de comensales sea menor o igual que la capacidad de la mesa */
  if (
    parseInt(can_input[0].value) >
    parseInt(document.getElementById('mesa-' + mesa).getAttribute('cap'))
  ) {
    alert(
      'La cantidad de comensales excede la capacidad de la mesa. Por favor seleccione una nueva mesa o agregue más capacidad.'
    )
    return false
  }

  const estado = document.getElementById(`agenda-${mesa}--estado-${hora}`)
  const cliente = document.getElementById(`cliente-${mesa}-${hora}`)

  /* Mostramos el código de la reserva en la agenda */
  estado.innerText = cod_input[0].value

  /* Cambiamos la clase del texto y del padre para darle estilo ocupado */
  estado.setAttribute('class', 'ocupado-fuente')
  estado.parentElement.setAttribute('class', 'ocupado-bg')

  /* Guardamos todo esto en el cliente oculto */
  cliente.setAttribute('codigo', cod_input[0].value)
  cliente.setAttribute('nombre', nom_input[0].value)
  cliente.setAttribute('celular', cel_input[0].value)
  cliente.setAttribute('cantidad', can_input[0].value)

  limpiar_form('total')
  bloquear_form()
  limpiar_reservas_seleccionadas()

  alert('Su reserva fue guardada con éxito.')
}

/**
 *Muestra la información almacenada del cliente en el cuadro de información de reserva
 */
function actualiza_data_form (mesa, hora) {
  /* Extraemos la información del cliente que está en la agenda */
  const cliente = document.getElementById(`cliente-${mesa}-${hora}`)

  let codigo = cliente.getAttribute('codigo')
  let nombre = cliente.getAttribute('nombre')
  let celular = cliente.getAttribute('celular')
  let cantidad = cliente.getAttribute('cantidad')

  /* Si la reserva será nueva y no hay código, creamos una al azar */
  if (codigo == '') {
    codigo = crear_cod(7)
  }

  /* Copiamos los valores al form para mostrar al cliente */
  let cod_input = document.getElementsByName('codigo')
  cod_input[0].value = codigo

  let nom_input = document.getElementsByName('nombre')
  nom_input[0].value = nombre

  let cel_input = document.getElementsByName('celular')
  cel_input[0].value = celular

  let can_input = document.getElementsByName('cantidad')
  can_input[0].value = cantidad
}

/**
 *Limpia todos los campos del cuadro de información del cliente
 */
function limpiar_form (tipo) {
  /* Si la limpieza es total, borramos también el código */
  if (tipo == 'total') {
    const cod_input = document.getElementsByName('codigo')
    cod_input[0].value = ''
  }

  const nom_input = document.getElementsByName('nombre')
  nom_input[0].value = ''

  const cel_input = document.getElementsByName('celular')
  cel_input[0].value = ''

  const can_input = document.getElementsByName('cantidad')
  can_input[0].value = ''

  return false
}

/**
 *Muestra la tabla al quitarle el elemento que lo oculta
 */
function mostrar_tabla (id_mesa) {
  /* Ocultamos todas las tablas actuales */
  const tablas = document.getElementsByTagName('table')

  for (let i = 0; i < tablas.length; i++) {
    tablas[i].setAttribute('style', 'display:none;')
  }

  /* Mostramos la tabla objetivo */
  const objetivo = document.getElementById('agenda-' + id_mesa)
  objetivo.setAttribute('style', 'display:table;')

  /* Se actualiza el título del panel acorde */
  const titulo = document.getElementById('titulo-#mesa')
  titulo.innerText = id_mesa
}

/**
 *Muestra la información de la mesa en el cuadro lateral
 */
function mostrar_mesa_info (id_mesa) {
  /* Muestro el cuadro de información al quitarle el display:none */
  const data = document.getElementById('data-info-mesa')
  data.style = ''

  /* Busco la mesa objetivo y almaceno su capacidad */
  const mesa = document.getElementById('mesa-' + id_mesa)
  let cap = mesa.getAttribute('cap')

  /* Actualizo el cuadro con el valor que está guardado dentro de la mesa */
  document.getElementById('n-mesa').innerText = id_mesa
  document.getElementById('capacidad').innerText = cap
}

/**
 *Es una función auxiliar que descompone el id compuesto de una hora de la agenda
 *@Retorna 2 valores, el id de la mesa y la hora
 */
function idAgenda_a_detalles (id_full) {
  let inicio = 7 // dónde inicia el número de la mesa? ahora en el séptimo
  let quitar = 11 // quitarle los 11 caracteres finales
  let ancho = id_full.length - quitar - inicio // determinar si el número es de 1 o 2 dígitos

  // ahora sí saca el id de la mesa
  let mesa_id = id_full.substr(inicio, ancho)
  let hora_inicio = id_full.substr(-2)

  return [mesa_id, hora_inicio]
}

/**
 *Dispara los eventos luego de intentar editar una reserva de la agenda
 */
function editar_reserva (id_full) {
  /* Descomponemos el id compuesto a mesa y hora */
  let detalles = idAgenda_a_detalles(id_full)
  let mesa = detalles[0]
  let hora = detalles[1]

  seleccionar_reserva(mesa, hora)
  desbloquear_form()
  actualiza_data_form(mesa, hora)
}

/**
 *Es una función que responde al evento click de una fila de la agenda. Añade un estilo para dar efecto de seleccionado
 */
function seleccionar_reserva (mesa, hora) {
  limpiar_reservas_seleccionadas()

  /* Marcamos toda la fila objetivo */
  const fila = document.getElementById(`agenda-${mesa}--estado-${hora}`)
  fila.parentElement.classList.add('fila-seleccionada')
}

/**
 *Deselecciona todas las filas
 */
function limpiar_reservas_seleccionadas () {
  const filas = document.getElementsByClassName('fila-seleccionada')

  if (filas.length > 0) {
    for (let i = 0; i < filas.length; i++) {
      filas[i].classList.remove('fila-seleccionada')
    }
  }
}

/**
 *Da el efecto de bloqueado al cuadro de información de la reserva
 */
function bloquear_form () {
  /* Se desactivan todos los elementos del tipo input */
  const inputs = document.getElementsByTagName('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute('disabled', '')
  }

  /* Se desactivan todos los elementos del tipo select */
  const selects = document.getElementsByTagName('select')
  for (let i = 0; i < selects.length; i++) {
    selects[i].setAttribute('disabled', '')
  }

  /* Agregamos el estilo inactivo al bloquear */
  const box_body = document.getElementById('reserva-info-box')
  box_body.classList.add('color-inactivo')
}

/**
 *Quita el efecto de bloqueo
 */
function desbloquear_form () {
  /* Se des-desactivan (activan) todos los elementos del tipo input */
  const inputs = document.getElementsByTagName('input')
  /* Empezamos con i=1 porque no queremos activar la casilla de código, eso debe ser dada por "sistema" */
  for (let i = 1; i < inputs.length; i++) {
    inputs[i].removeAttribute('disabled')
  }

  /* Se des-desactivan (activan) todos los elementos del tipo select */
  const selects = document.getElementsByTagName('select')
  for (let i = 0; i < selects.length; i++) {
    selects[i].removeAttribute('disabled')
  }

  /* Quitamos el estilo inactivo al bloquear */
  const box_body = document.getElementById('reserva-info-box')
  box_body.classList.remove('color-inactivo')
}

/**
 *Función auxiliar para crear un código al azar de un tamaño fijo, teniendo como pool números y letras
 */
function crear_cod (tamaño) {
  var resultado = ''
  var caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var carac_largo = caracteres.length
  for (var i = 0; i < tamaño; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * carac_largo))
  }
  return resultado
}

/**
 *Función auxiliar para un integer de manera aleatoria entre dos valores
 */
function random_int_entre (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
