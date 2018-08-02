$(document).ready(function(){
  var numberFrom1to5 = (Math.random()*4 + 1).toFixed(0);
	$('.my-image').attr('src', 'img/me_' + numberFrom1to5 + '.jpg').load();

	$(".radial_list article").mouseenter( function () {
		// при наведении мышки
		$(this).parent().children("section").fadeIn(200);
	});

	$(".radial_list section").mouseleave( function () {
		// при наведении мышки
		$(this).fadeOut(200);
	});
});