//Este archivo agrega y elimina el efecto de la barra superior cuando el offset de Y (el alto de la pantalla), cambia durante el scroll.

// throttle es una función que regula la ejecución de la función insertada como parámetro, dependiendo del tiempo que debería tardar con el "delay".
function throttle(fn, delay) {
	var last = undefined;
	var timer = undefined;

	return function () {
		var now = +new Date();

		if (last && now < last + delay) {
			clearTimeout(timer);

			timer = setTimeout(function () {
				last = now;
				fn();
			}, delay);
		} else {
			last = now;
			fn();
		}
	};
}

// onScroll es una función que agrega o remueve la clase .is-active de la barra de navegación, dependiendo de si se mueve el offset Y de la página.
function onScroll() {
	if (window.pageYOffset) {
		$$header.classList.add('active-top');

	} else {
		$$header.classList.remove('active-top');
	}
}

// la variable header almacena un objeto, por eso la notación $$. Usulamente se utiliza $, pero eso es comúnmente usado por jQuery.
var $$header = document.querySelector('.js-header');

// ejecutiva la función throttle cuando se realiza el evento scroll del navegador. Asimismo, si el tiempo de ejecución + delay es mayor que la última vez que se ejecutó, 
//entonces evaluará la función onScroll cada 25 ms. Si el offset cambió, entonces agregará la clase "is-active" a la barra de navegación superior y se quedará pegada.
window.addEventListener('scroll', throttle(onScroll, 25));