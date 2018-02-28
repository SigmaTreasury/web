
$(document).ready(function()
{

	// Mobile menu
	$('#mobile-menu.btn-open').click(function() {
		$('body').addClass('no-scroll');
		$('header #menu').removeClass('screen').addClass('overlay').addClass('open');
		$('#btn-close').show();
	});	

	$('#btn-close').click(function() {
		$('body').removeClass('no-scroll');
		$('header #menu').addClass('screen').removeClass('overlay').removeClass('open');
		$('#btn-close').hide();
	});	

	$('body').on('click', '#menu.open li a', function() {
		$( "#btn-close" ).trigger( "click" );
	});
});


