define(["jquery", "login", "newUser"], function($, login, newuser){
	
	//this variable will hold the user id. this will be the key to passing data and retrieving it.
	var uid;

	//log a already registered user into the system this process will authenticate and return the user id
	$(document).on('click', '#login', function(){
		console.log("logging in!");
		var regisUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		}

		uid = login.regUser(regisUser);
		sayName();
	});

	//this process registers a user by creating the user then authenticating them it will return the user id
	$(document).on('click', '#register', function(){
		console.log("registering!");
		var newUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		}

		uid = newuser.createuser(newUser);
		sayName();

	});

	//this function is a check to make sure uid is being redefined after going through authentication. 
	function sayName(){
		console.log(uid);
	}
});