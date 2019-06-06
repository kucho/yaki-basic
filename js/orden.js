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