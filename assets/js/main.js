/* Crear las tarjetas con jQuery*/
var trjAbierta = "";
var imgAbierta = ""; //contador para saber si las imagenes abiertas
var contadorAciertos = 0;
var trjEncontrada = 0;

var contImagenes = [
		"assets/img/imgPuzzle/img1.png",
		"assets/img/imgPuzzle/img2.png",
		"assets/img/imgPuzzle/img3.png",
		"assets/img/imgPuzzle/img4.png",
		"assets/img/imgPuzzle/img5.png",
		"assets/img/imgPuzzle/img6.png",		
		];



/*Creamos la puzzle con div's ,utilizando el array,y le damos un id distinto a cada uno*/
$(function() {

for (var j = 0; j< 2 ; j++) {
	/*Utilizamos 'each' para recorrer los elementos de la seleccion,le damos 2 parametros,indice y el elemento*/
	$.each(contImagenes, function(i, val) {
		$('#espacioPuzzle').append("<div id=tarjetas" + j + i + "><img src=" + val + " />");
	});
}
	$("#espacioPuzzle" + " div").click(playCard);
});


/* Creamos la funcion que le da la vuelta a las tarjetas*/

function playCard(){
	//Buscamos el atributo de Dom 'id' con 'attr'.
	var id = $(this).attr("id");
	// Realizamos una comparacion con un metodo de filtrado,para saber si la imagen tiene la propieda 'hidden', que nos permite esconder una imagen pero que siga ocupando el mismo espacio.
	if ($("#" + id + " img").is(":hidden")) {
		$("#espacioPuzzle" + " div").off("click", playCard);
		/*Una función para llamar una vez que la animación se completa, llamada una vez por elemento emparejado.*/
		$("#" + id + " img").slideDown('slow');
		/*Implementamos las animaciones,cuando las imagenes son diferentes tomamos la ruta de la primera imagen y el id de la segunda,demanera que en la comparacion ambos seran diferentes*/
		if (imgAbierta == "") {
			trjAbierta = id;
			/*obtenemos la ruta de acceso de la primera imagen a la que le hacemos click*/
			imgAbierta = $("#" + id + " img").attr("src");
			console.log(imgAbierta);
			setTimeout(function() {
				$("#espacioPuzzle" + " div").on("click", playCard)
			}, 100);
		} else {
			/*obtenemos la ruta de acceso de la primera segunda imagen a la que le hacemos click*/
			trjActual = $("#" + id + " img").attr("src");
			console.log(trjActual);
			/*Comparamos las rutas almacenadas en las variables,aqui tomamos las rutas y las alamacenamos en las variable para compararlas*/
			if (imgAbierta != trjActual) {
				console.log(trjAbierta);
				setTimeout(function() {
					$("#" + id + " img").slideUp('slow');
					$("#" + trjAbierta + " img").slideUp('slow');
					trjAbierta = "";
					imgAbierta = "";
				}, 100);
			} else {
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + trjAbierta + " img").parent().css("visibility", "hidden");
				trjEncontrada++;
				trjAbierta = "";
				imgAbierta = "";
			}
			setTimeout(function() {
				$("#espacioPuzzle" + " div").on("click", playCard)
			}, 100);
		}
	}
}
