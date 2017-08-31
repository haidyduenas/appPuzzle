/* Crear las tarjetas con jQuery*/

var contImagenes = [
		"assets/img/imgPuzzle/img1.png",
		"assets/img/imgPuzzle/img2.png",
		"assets/img/imgPuzzle/img3.png",
		"assets/img/imgPuzzle/img4.png",
		"assets/img/imgPuzzle/img5.png",
		"assets/img/imgPuzzle/img6.png",		
		];

$(function() {

for (var j = 0; j< 2 ; j++) {
	$.each(contImagenes, function(i, val) {
		$('#espacioPuzzle').append("<div id=tarjetas" + j + i + "><img src=" + val + " />");
	});
}

});