$(document).ready(function () {
	$('#vk').hover(function () {
		$(this).attr('src', 'images/socials/hover/vk.png');
	}, function () {
		$(this).attr('src', 'images/socials/vk.png');
	});

	$('#facebook').hover(function () {
		$(this).attr('src', 'images/socials/hover/facebook.png');
	}, function () {
		$(this).attr('src', 'images/socials/facebook.png');
	});

	$('#twitter').hover(function () {
		$(this).attr('src', 'images/socials/hover/twitter.png');
	}, function () {
		$(this).attr('src', 'images/socials/twitter.png');
	});

	$('#gmail').hover(function () {
		$(this).attr('src', 'images/socials/hover/gmail.png');
	}, function () {
		$(this).attr('src', 'images/socials/gmail.png');
	});
});