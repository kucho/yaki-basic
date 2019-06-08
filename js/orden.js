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
		img: "https://www.sushishop.eu/product-5488-400x400/ensalada-de-calamar.png",
		price: 16.00
	},
	{
		id: 2,
		label: "Ensalada de Algas",
		cat: "entrada",
		img: "https://www.sushishop.eu/product-5475-200x200/ensalada-de-algas.png",
		price: 16.00
	},
	{
		id: 3,
		label: "Ensalada de Zanahorias",
		cat: "entrada",
		img: "https://www.sushishop.eu/product-6825-200x200/ensalada-de-zanahorias-con-sal.png",
		price: 15.00
	},
	{
		id: 4,
		label: "Ceviche de dorada y leche de mango",
		cat: "entrada",
		img: "https://www.sushishop.eu/product-6793-200x200/ceviche-de-dorada-a-leche-mang.png",
		price: 22.00
	},
	{
		id: 5,
		label: "Sashimi Salmón 5 piezas",
		cat: "sashimi",
		img: "https://www.sushishop.eu/product-6059-200x200/sashimi-salmon-5-piezas.png",
		price: 20.00
	},
	{
		id: 6,
		label: "Nigiri Salmón",
		cat: "nigiri",
		img: "https://www.sushishop.eu/product-5425-200x200/nigiri-salmon.png",
		price: 13.50
	},
	{
		id: 7,
		label: "Nigiri Atún",
		cat: "nigiri",
		img: "https://www.sushishop.eu/product-5435-200x200/nigiri-atun.png",
		price: 13.50
	},
	{
		id: 8,
		label: "Nigiri Huevas de Salmón",
		cat: "nigiri",
		img: "https://www.sushishop.eu/product-5464-200x200/nigiri-huevas-de-salmon.png",
		price: 17.50
	},
	{
		id: 9,
		label: "Nigiri Black Pepper",
		cat: "nigiri",
		img: "https://www.sushishop.eu/product-5444-200x200/nigiri-black-pepper.png",
		price: 15.50
	},
	{
		id: 10,
		label: "Maki Aguacate",
		cat: "maki",
		img: "https://www.sushishop.eu/product-5447-200x200/aguacate.png",
		price: 18.00
	},
	{
		id: 11,
		label: "Maki Atún Picante",
		cat: "maki",
		img: "https://www.sushishop.eu/product-6813-200x200/atun-picante.png",
		price: 23.00
	},
	{
		id: 12,
		label: "Maki Crangrejo",
		cat: "maki",
		img: "https://www.sushishop.eu/product-6029-200x200/cangrejo.png",
		price: 27.00
	},
	{
		id: 13,
		label: "Arroz Blanco",
		cat: "arroz",
		img: "https://www.sushishop.eu/product-5461-200x200/arroz-blanco.png",
		price: 11.00
	},
	{
		id: 14,
		label: "Arroz Avinagrado",
		cat: "arroz",
		img: "https://www.sushishop.eu/product-5462-200x200/arroz-avinagrado.png",
		price: 12.00
	},
	{
		id: 15,
		label: "Yakisoba",
		cat: "tallarin",
		img: "https://www.narusushi.es/wp-content/uploads/entrantes-yakisoba.png",
		price: 25.00
	},
	{
		id: 16,
		label: "Set para 2",
		cat: "set",
		img: "https://www.sushishop.eu/product-6921-400x400/box-for-two.png",
		price: 120.00
	},
	{
		id: 17,
		label: "Happy Set",
		cat: "set",
		img: "https://www.sushishop.eu/product-7085-200x200/happy-sushi-box.png",
		price: 80.00
	},
	{
		id: 18,
		label: "Sopa Miso",
		cat: "sopa",
		img: "https://www.sushishop.eu/product-5463-200x200/sopa-miso.png",
		price: 16.00
	},
	{
		id: 19,
		label: "Tonkotsu Ramen",
		cat: "sopa",
		img: "https://www.seekpng.com/png/full/112-1129654_ramen-bowl-png-vector-free-bowl-of-ramen.png",
		price: 26.00
	},
	{
		id: 20,
		label: "Shoyu Ramen",
		cat: "sopa",
		img: "https://www.seekpng.com/png/full/112-1129678_bowl-of-ramen-png-vector-freeuse-library-ramen.png",
		price: 26.00
	},
	{
		id: 21,
		label: "Hakata Ramen",
		cat: "sopa",
		img: "https://www.aguramen.com/assets/img/ramen/hakata.png",
		price: 25.00
	},
	{
		id: 22,
		label: "Cerveza Asahi",
		cat: "bebida",
		img: "https://www.sushishop.eu/product-6690-200x200/cerveza-asahi-35cl.png",
		price: 12.00
	},
	{
		id: 23,
		label: "Coca Cola",
		cat: "bebida",
		img: "https://www.sushishop.eu/product-6433-200x200/coca-cola-33cl.png",
		price: 6.5
	},
	{
		id: 24,
		label: "Sake Shirakabegura",
		cat: "bebida",
		img: "https://www.sushishop.eu/product-6451-200x200/sake-shirakabegura-kimoto-junm.png",
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
 *Verifica que el producto haya sido agregado al carrito de pedidos. Si ya se estaba ahí, lo retira. Si no estaba, lo añade.
 */
function AlCarro(elemento, dish_id) {

	let items = document.getElementsByClassName("cart-item")
	let tabla_products = document.getElementById("products")
	let productList = document.getElementById("productList")
	let tabla_total = document.getElementById("totals")
	let cart_placeholder = document.getElementById("cart-placeholder")

	switch (elemento.checked) {

		case true:
			/* Si todavía no había items */
			if (items.length == 0) {
				/* Ocultamos placeholder y mostramos tablas */
				document.getElementById("cart-box").removeAttribute("style")
				cart_placeholder.setAttribute("style", "display:none;")
				tabla_products.removeAttribute("style")
				tabla_total.removeAttribute("style")
			}

			let nombre = document.getElementById("dish-" + dish_id).innerText
			let precio = document.getElementById("price-" + dish_id).innerText

			let producto = document.createElement("tr")
			producto.classList.add("cart-item")
			producto.id = "cartProduct-" + dish_id
			producto.innerHTML = `<td>Preparando</td>
					      <td>${nombre}</td>
					      <td>1</td>
					      <td><span class="soles">S/.</span>${precio}</td>
					      <td><span class="soles">S/.</span><span class="total">${precio}<span></td>`

			productList.appendChild(producto)


			break
		case false:
			/* Si borro cuando hay solo un elemento */
			if (confirm("¿Está seguro que desea eliminar este producto?")) {
				if (items.length == 1) {
					/* Mostramos el placeholder, ocultamos la tabla y restauramos el placeholder */
					document.getElementById("cart-box").setAttribute("style", "align-content: center;")
					cart_placeholder.removeAttribute("style")
					tabla_products.setAttribute("style", "display:none;")
					tabla_total.setAttribute("style", "display:none;")
				}

				let cartProduct = document.getElementById("cartProduct-" + dish_id)
				cartProduct.parentNode.removeChild(cartProduct)
			}

			break
	}

	CalculaTotal()
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