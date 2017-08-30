$('.tarjeta').hide();

$('.conImagen').click(function(event){
	$('.tarjeta').show();
	var img = event.target.src;
	var mostrar = '<img src="'+ img +'">'
	$('#img1').append(mostar);
});
