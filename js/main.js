$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
	
	$('area#agroup').on('click', function() {
		$('#agroupmodal').modal('show');
	});
	$('area#aview1').on('click', function() {
		$('#aview1modal').modal('show');
	});
	$('area#aview2').on('click', function() {
		$('#aview2modal').modal('show');
	});
	$('area#aview3').on('click', function() {
		$('#aview3modal').modal('show');
	});

	$('area#bgroup').on('click', function() {
		$('#bgroupmodal').modal('show');
	});
	$('area#bview1').on('click', function() {
		$('#bview1modal').modal('show');
	});

	$('.agroupclose').on('click', function() {
		$('#agroupmodal').modal('hide');
	});
	$('.aview1close').on('click', function() {
		$('#aview1modal').modal('hide');
	});
	$('.aview2close').on('click', function() {
		$('#aview2modal').modal('hide');
	});
	$('.aview3close').on('click', function() {
		$('#aview3modal').modal('hide');
	});
});
