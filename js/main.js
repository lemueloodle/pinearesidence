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
});
