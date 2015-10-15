define(["jquery", "login"], function($, login){
	
	var uid;

	$(document).on('click', '#login', function(){
		console.log("logging in!");
	});
	$(document).on('click', '#register', function(){
		console.log("registering!");
		var newUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		}

		uid = login.createUser(newUser);
		sayName();
	});

	function sayName(){
		console.log(uid);
	}
});