
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
		]

var tablero= document.getElementById('container');
var tabla = document.createElement('table');
var tarjeta =[];
console.log(tarjeta)
for (var i = 0; i < 3; i++) {
  var fila = document.createElement('tr');
  for (var j = 0; j < 4; j++) {
    var celda = document.createElement('td');
  	celda.setAttribute('class','tarjeta');
  	for (var k = 0; k < contImagenes.length; k++) {
  		var img = document.createElement('img');
  		img.src = contImagenes[k];
  	}
    fila.appendChild(celda);
    tarjeta.push(celda);
  }
  tabla.appendChild(fila);
}
tablero.appendChild(tabla);
