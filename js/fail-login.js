$(document).ready(function () {
	$('#loginSubmit').click(function () {
		var name = $('#name').val();
		var password = $('#password').val();
		var fail = "";

		if (name == "") fail = "Вы не ввели ваш логин!";
		else if (name.length <= 3) fail = "Логин введен не коректно!"
		else if (password == "") fail = "Вы не ввели ваш пароль!";
		else if (password.length <= 5) fail = "Пароль введен не коректно!"

		if (fail != "") $('#fail-login').html(fail);
		else {
			$('#fail-login').hide();
			location.reload();
		}
	});
});