$(document).ready(function(){
	$('.mobile_menu_icon').click(function(){
		$('.nav').toggle();
		$('.header_content').css({
			'margin-top':'0px'
		});
	});
	$('.first_half input').click(function(){
		$('.first_half label').hide();
	});
	$('.second_half input').click(function(){
		$('.second_half label').hide();
	});
	$('.second_colum textarea').click(function(){
		$('.second_colum label').hide();
	});
});