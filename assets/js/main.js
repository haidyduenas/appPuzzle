/* Crear las tarjetas con jQuery*/

//var Tarjetas = '#espacioPuzzle';
var contImagenes = [
		"assets/img/imgPuzzle/img1.png",
		"assets/img/imgPuzzle/img1.png",
		"assets/img/imgPuzzle/img2.png",
		"assets/img/imgPuzzle/img2.png",
		"assets/img/imgPuzzle/img3.png",
		"assets/img/imgPuzzle/img3.png",
		"assets/img/imgPuzzle/img4.png",
		"assets/img/imgPuzzle/img4.png",
		"assets/img/imgPuzzle/img5.png",
		"assets/img/imgPuzzle/img5.png",
		"assets/img/imgPuzzle/img6.png",		
		"assets/img/imgPuzzle/img6.png"
		];
$(function() {

for (var j = 1; j< 3 ; j++) {
	$.each(contImagenes, function(i, val) {
		$('#espacioPuzzle').append("<div id=tarjetas" + j + i + "><img src=" + val + " wi/>");
	});
}

});