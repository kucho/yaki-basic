const cats = [{
		label: "Mostrar todo",
		cat: "todo",
		img: "https://image.flaticon.com/icons/svg/13/13166.svg"
	},
	{
		label: "Entradas",
		cat: "entrada",
		img: "https://image.flaticon.com/icons/svg/701/701974.svg"
	},
	{
		label: "Sashimi",
		cat: "sashimi",
		img: "https://i.imgur.com/HxjwfYm.png"
	},
	{
		label: "Nigiri",
		cat: "nigiri",
		img: "https://image.flaticon.com/icons/svg/641/641903.svg"
	},
	{
		label: "Maki",
		cat: "maki",
		img: "https://image.flaticon.com/icons/svg/1691/1691132.svg"
	},
	{
		label: "Arroz",
		cat: "arroz",
		img: "https://image.flaticon.com/icons/svg/1694/1694441.svg"
	},
	{
		label: "Tallarines",
		cat: "tallarin",
		img: "https://image.flaticon.com/icons/svg/1046/1046893.svg"
	},
	{
		label: "Sets",
		cat: "set",
		img: "https://image.flaticon.com/icons/svg/113/113358.svg"
	},
	{
		label: "Sopas",
		cat: "sopa",
		img: "https://image.flaticon.com/icons/svg/1046/1046893.svg"
	},
	{
		label: "Bebidas",
		cat: "bebida",
		img: "https://image.flaticon.com/icons/svg/633/633652.svg"
	}

]

const dishes = [{
		id: 1,
		label: "Ensalada de Calamar",
		cat: "entrada",
		img: "img/ensalada-de-calamar.png",
		price: 16.00
	},
	{
		id: 2,
		label: "Ensalada de Algas",
		cat: "entrada",
		img: "img/ensalada-de-algas.png",
		price: 16.00
	},
	{
		id: 3,
		label: "Ensalada de Zanahorias",
		cat: "entrada",
		img: "img/ensalada-de-zanahorias-con-sal.png",
		price: 15.00
	},
	{
		id: 4,
		label: "Ceviche de dorada",
		cat: "entrada",
		img: "img/ceviche-de-dorada-a-leche-mang.png",
		price: 22.00
	},
	{
		id: 5,
		label: "Sashimi Salmón 5 piezas",
		cat: "sashimi",
		img: "img/sashimi-salmon-5-piezas.png",
		price: 20.00
	},
	{
		id: 6,
		label: "Nigiri Salmón",
		cat: "nigiri",
		img: "img/nigiri-salmon.png",
		price: 13.50
	},
	{
		id: 7,
		label: "Nigiri Atún",
		cat: "nigiri",
		img: "img/nigiri-atun.png",
		price: 13.50
	},
	{
		id: 8,
		label: "Nigiri Huevas de Salmón",
		cat: "nigiri",
		img: "img/nigiri-huevas-de-salmon.png",
		price: 17.50
	},
	{
		id: 9,
		label: "Nigiri Black Pepper",
		cat: "nigiri",
		img: "img/nigiri-black-pepper.png",
		price: 15.50
	},
	{
		id: 10,
		label: "Maki Aguacate",
		cat: "maki",
		img: "img/aguacate.png",
		price: 18.00
	},
	{
		id: 11,
		label: "Maki Atún Picante",
		cat: "maki",
		img: "img/atun-picante.png",
		price: 23.00
	},
	{
		id: 12,
		label: "Maki Crangrejo",
		cat: "maki",
		img: "img/cangrejo.png",
		price: 27.00
	},
	{
		id: 13,
		label: "Arroz Blanco",
		cat: "arroz",
		img: "img/arroz-blanco.png",
		price: 11.00
	},
	{
		id: 14,
		label: "Arroz Avinagrado",
		cat: "arroz",
		img: "img/arroz-avinagrado.png",
		price: 12.00
	},
	{
		id: 15,
		label: "Yakisoba",
		cat: "tallarin",
		img: "img/yakisoba.png",
		price: 25.00
	},
	{
		id: 16,
		label: "Set para 2",
		cat: "set",
		img: "img/setpara2.png",
		price: 120.00
	},
	{
		id: 17,
		label: "Happy Set",
		cat: "set",
		img: "img/happyset.png",
		price: 80.00
	},
	{
		id: 18,
		label: "Sopa Miso",
		cat: "sopa",
		img: "img/sopa-miso.png",
		price: 16.00
	},
	{
		id: 19,
		label: "Tonkotsu Ramen",
		cat: "sopa",
		img: "img/tonkotsu ramen.png",
		price: 26.00
	},
	{
		id: 20,
		label: "Shoyu Ramen",
		cat: "sopa",
		img: "img/shoyu ramen.png",
		price: 26.00
	},
	{
		id: 21,
		label: "Hakata Ramen",
		cat: "sopa",
		img: "img/hakata ramen.png",
		price: 25.00
	},
	{
		id: 22,
		label: "Cerveza Asahi",
		cat: "bebida",
		img: "img/cerveza-asahi-35cl.png",
		price: 12.00
	},
	{
		id: 23,
		label: "Coca Cola",
		cat: "bebida",
		img: "img/coca-cola-33cl.png",
		price: 6.5
	},
	{
		id: 24,
		label: "Sake Shirakabegura",
		cat: "bebida",
		img: "img/sake.png",
		price: 35.00
	}
]

/* Ejecutar cuando la página haya cargado */
window.onload = init()

/**
 *Dispara todos los eventos iniciales
 */
function init() {
	crearCategorias()
	crearPlatos()
}


/**
 *Comprueba que todos los platos hayan sido entragados para mostrar pop-up para llenar los datos de la boleta o factura
 */
function Facturar() {
	let cuenta = ContarEstados()

	if (cuenta.cocinando + cuenta.espera + cuenta.servido != cuenta.servido) {
		if (confirm("Aún no se han servido todo los platos. ¿Está seguro de querer continuar?")) {
			/* Procesar pop-up */
			AbrirModal()
		} else {
			return false
		}
	}
}
/**
 *Verifica que el producto haya sido agregado al carrito de pedidos. Si ya se estaba ahí, lo retira. Si no estaba, lo añade.
 */
function AlCarro(elemento, dish_id) {

	switch (elemento.checked) {
		case true:
			AgregaItemCarrito(dish_id)
			break
		case false:
			/* Si borro cuando hay solo un elemento */
			if (!BorrarItemCarrito(dish_id) == true) {
				elemento.checked = !elemento.checked
			}

			break
	}
	CalculaTotal()
	ActualizaResumen()
}

/**
 *Agrega item al carrito
 */
function AgregaItemCarrito(dish_id) {
	let items = document.getElementsByClassName("cart-item")
	let tabla_products = document.getElementById("products")
	let productList = document.getElementById("productList")
	let tabla_total = document.getElementById("totals")
	let cart_placeholder = document.getElementById("cart-placeholder")
	let resumen = document.getElementById("resumen")

	/* Si todavía no había items */
	if (items.length == 0) {
		/* Ocultamos placeholder y mostramos tablas */
		document.getElementById("cart-box").removeAttribute("style")
		cart_placeholder.setAttribute("style", "display:none;")
		tabla_products.removeAttribute("style")
		tabla_total.removeAttribute("style")
		resumen.removeAttribute("style")
	}

	let nombre = document.getElementById("dish-" + dish_id).innerText
	let precio = document.getElementById("price-" + dish_id).innerText

	let producto = document.createElement("tr")
	producto.classList.add("cart-item")
	producto.id = "cartProduct-" + dish_id
	producto.innerHTML = `<td style="position:relative;">
				<div class="box">
				  <select onchange="ActualizaResumen()">
				    <option>En espera</option>
				    <option>Preparando</option>
				    <option>Servido</option>
				  </select>
				</div>
			      </td>
			      <td>${nombre}</td>
			      <td>
				<i class="fa fa-minus-circle red" title="Disminuir" onClick="Down(${dish_id})"></i>
				<span id="amount-${dish_id}">1</span>
				<i class="fa fa-plus-circle green" title="Aumentar" onClick="Up(${dish_id})"></i>
			      </td>
			      <td><span class="soles">S/.</span>${precio}</td>
			      <td><span class="soles">S/.</span><span id="total-${dish_id}" class="total">${precio}<span></td>`

	productList.appendChild(producto)
}

/**
 *Elimina item del carrito
 */
function BorrarItemCarrito(dish_id) {

	let items = document.getElementsByClassName("cart-item")
	let tabla_products = document.getElementById("products")
	let tabla_total = document.getElementById("totals")
	let cart_placeholder = document.getElementById("cart-placeholder")
	let resumen = document.getElementById("resumen")

	if (confirm("¿Está seguro que desea eliminar este producto?")) {
		if (items.length == 1) {
			/* Mostramos el placeholder, ocultamos la tabla y restauramos el placeholder */
			document.getElementById("cart-box").setAttribute("style", "align-content: center;")
			cart_placeholder.removeAttribute("style")
			tabla_products.setAttribute("style", "display:none;")
			tabla_total.setAttribute("style", "display:none;")
			resumen.setAttribute("style", "display:none;")
		}

		let cartProduct = document.getElementById("cartProduct-" + dish_id)
		cartProduct.parentNode.removeChild(cartProduct)

		document.getElementById("checkbox-" + dish_id).checked = false

		return true
	} else {
		return false
	}
}

/**
 *Calcula el total a mostrar
 */
function CalculaTotal() {
	let totales = document.getElementsByClassName("total")
	let suma = 0.0

	for (let i = 0; i < totales.length; i++) {
		suma += parseFloat(totales[i].innerText)
	}

	/* Cálulos */
	let costo = suma / 1.18
	let igv = costo * 0.18
	let servicio = suma * 0.1
	let total = suma + servicio

	document.getElementById("subtotal").innerHTML = `<span class="soles">S/.</span>${costo.toFixed(2)}`
	document.getElementById("igv").innerHTML = `<span class="soles">S/.</span>${igv.toFixed(2)}`
	document.getElementById("servicio").innerHTML = `<span class="soles">S/.</span>${servicio.toFixed(2)}`
	document.getElementById("total").innerHTML = `<span class="soles">S/.</span>${total.toFixed(2)}`
}

/**
 *Aumenta la cantidad y recalcula el total
 */
function Up(cartItem) {

	let el = document.getElementById("amount-" + cartItem)
	let cantidad = parseInt(el.innerText)
	el.innerText = (cantidad + 1)

	let precio = parseFloat(document.getElementById("price-" + cartItem).innerText)
	let total = (cantidad + 1) * precio

	document.getElementById("total-" + cartItem).innerText = total.toFixed(2)

	CalculaTotal()
}

/**
 *Disminuye la cantidad y recalcula el total
 */
function Down(cartItem) {

	let el = document.getElementById("amount-" + cartItem)
	let cantidad = parseInt(el.innerText)

	if (cantidad == 1) {
		if (!BorrarItemCarrito(cartItem)) {
			return false
		}

	} else {
		el.innerText = (cantidad - 1)
		let precio = parseFloat(document.getElementById("price-" + cartItem).innerText)
		let total = (cantidad - 1) * precio
		document.getElementById("total-" + cartItem).innerText = total.toFixed(2)
	}
	CalculaTotal()
}

/**
 *Calcula el total de platos pendientes
 */
function ActualizaResumen() {

	let cuenta = ContarEstados()

	document.getElementById("n-espera").innerText = cuenta.espera
	document.getElementById("n-preparando").innerText = cuenta.cocinando
	document.getElementById("n-servido").innerText = cuenta.servido
}

/**
 *Recorre el carrito para retonar la cantidad de los platos en espera, cocinados y servidos
 */
function ContarEstados() {
	let states = document.getElementsByTagName("select")

	let espera, cocinando, servido
	espera = cocinando = servido = 0

	for (let i = 0; i < states.length; i++) {
		switch (states[i].value) {
			case "En espera":
				espera++
				break
			case "Preparando":
				cocinando++
				break
			case "Servido":
				servido++
				break
		}
	}

	return {
		espera,
		cocinando,
		servido
	}
}
/**
 * Crea las categorías
 */
function crearCategorias() {

	const container = document.getElementById("cat-list")
	for (let i = 0; i < cats.length; i++) {
		let item = document.createElement("div")
		item.setAttribute("cat-name", cats[i].cat)
		item.setAttribute("onClick", `filtrarSeleccion('${cats[i].cat}')`)
		item.classList.add("cat-item")

		let img = document.createElement("img")
		img.src = cats[i].img

		let label = document.createElement("h4")
		label.innerText = cats[i].label

		item.appendChild(img)
		item.appendChild(label)
		container.appendChild(item)
	}
}


/**
 * Crea los platos
 */
function crearPlatos() {

	const container = document.getElementById("dish-list")

	for (let i = 0; i < dishes.length; i++) {
		let item = document.createElement("div")
		item.setAttribute("cat-name", dishes[i].cat)
		item.classList.add("dish-item")
		item.id = dishes[i].id

		let check_box = document.createElement("div")
		check_box.classList.add("add-cart")
		let check = document.createElement("input")
		check.type = "checkbox"
		check.id = "checkbox-" + dishes[i].id
		check.classList.add("checkbox")
		check.setAttribute("onchange", `AlCarro(this,${dishes[i].id})`)
		check_box.appendChild(check)

		let img_box = document.createElement("div")
		img_box.classList.add("photo")
		let img = document.createElement("img")
		img.src = dishes[i].img
		img_box.appendChild(img)

		let data_box = document.createElement("div")
		data_box.classList.add("body")

		let label = document.createElement("div")
		label.classList.add("dish-name")
		label.id = "dish-" + (i + 1)
		label.innerText = dishes[i].label

		let price_box = document.createElement("div")
		price_box.classList.add("dish-price")
		let price_symbol = document.createElement("span")
		price_symbol.classList.add("soles")
		price_symbol.innerText = "S/."
		let price = document.createElement("span")
		price.id = "price-" + (i + 1)
		price.innerText = dishes[i].price.toFixed(2)
		price_box.appendChild(price_symbol)
		price_box.appendChild(price)

		data_box.appendChild(label)
		data_box.appendChild(price_box)

		item.appendChild(check_box)
		item.appendChild(img_box)
		item.appendChild(data_box)

		container.appendChild(item)
	}
}


/**
 *Filtra las los platos según la categoría seleccionada
 */
function filtrarSeleccion(category) {

	let cats = document.getElementsByClassName("cat-item")

	/* Damos el efecto de que el elemento ha sido seleccionado */
	for (let i = 0; i < cats.length; i++) {
		cats[i].classList.remove("active")

		if (cats[i].getAttribute("cat-name") == category) {
			cats[i].classList.add("active")
		}
	}

	muestraSeleccion(category)
}

/**
 *Muestra los elementos que tienen el mismo nombre de categoría
 */
function muestraSeleccion(category) {

	let dishes = document.getElementsByClassName("dish-item")

	for (let i = 0; i < dishes.length; i++) {

		if (category == "todo") {
			dishes[i].classList.remove("hide")
		} else {
			dishes[i].classList.add("hide")

			if (dishes[i].getAttribute("cat-name") == category) {
				dishes[i].classList.remove("hide")
			}
		}
	}
}

/**
 *Abre un pop-up para solicitar la información de facturación
 */

function AbrirModal() {
	let modalElement = document.getElementById("static")
	let backdrop = document.createElement('div')
	backdrop.id = "modal-backdrop"
	backdrop.classList.add("modal-backdrop")
	document.body.appendChild(backdrop)
	backdrop.classList.add("modal-open")
	modalElement.classList.add("modal-open")

	LimpiarModal()

	document.getElementById("factura-monto").innerHTML = document.getElementById("total").innerHTML
	document.getElementById("modal-usuario").value = document.getElementById("info-cliente").innerText
}

/**
 *Elimina el fondo oscurecedor y oculta el pop-up
 */

function CerrarModal() {
	let backdrop = document.getElementById("modal-backdrop")
	backdrop.parentNode.removeChild(backdrop)
	document.getElementById("static").classList.remove("modal-open")
}

/**
 *Limpia los valores ingresador en el pop-up
 */
function LimpiarModal() {
	document.getElementById("modal-usuario").value = ""
	document.getElementById("modal-numero").value = ""
	document.getElementById("modal-email").value = ""
	document.getElementById("factura-monto").innerHTML = ""

}

/**
 *Muestra un mensaje de éxito cuanto todos los campos estén bien llenados
 */
function GenerarFactura() {

	let container = document.getElementById("modal-body")
	let texto
	let color

	switch (RevisaFactura()) {
		case true:
			texto = "El comprobante fue creado y enviado al correo designado"
			color = "green"
			break

		case false:
			texto = "Por favor complete todos los campos antes de proceder"
			color = "crimson"
			break
	}

	let mensaje = document.getElementById("mensaje")

	if (mensaje == undefined) {
		mensaje = document.createElement("p")
		mensaje.id = "mensaje"
		container.appendChild(mensaje)
	}

	mensaje.setAttribute("style", `width:100%;background-color:${color};color:white;text-align:center;`)
	mensaje.innerText = texto
}

/**
 *Chequea si los campos de la facturación son válidos
 */
function RevisaFactura() {

	let inputs = document.getElementsByTagName("input")

	let val = true

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checkValidity() == false) {
			val = false
			break
		}
	}

	return val
}