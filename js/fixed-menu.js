$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.header').addClass('fixed');
		} else	 {
			$('.header').removeClass('fixed');
		}
	});
});