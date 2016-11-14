$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			$('.menu').attr('style', 'position: fixed;');
		} else {
			$('.menu').removeAttr('style');
		}
	});
});