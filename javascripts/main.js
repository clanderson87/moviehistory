define(["jquery", "login", "newUser"], function($, login, newuser){
	
	var uid;

	$(document).on('click', '#login', function(){
		console.log("logging in!");
		var regisUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		}

		uid = login.regUser(regisUser);
		sayName();
	});

	$(document).on('click', '#register', function(){
		console.log("registering!");
		var newUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		}

		uid = newuser.createuser(newUser);
		sayName();

	});

	function sayName(){
		console.log(uid);
	}
});