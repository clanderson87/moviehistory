define(["jquery", "login"], function($, login){
	$(document).on('click', '#login', function(){
		console.log("logging in!");
		console.log(login.createUser("joel"));

	})
	$(document).on('click', '#register', function(){
		console.log("registered!");
	})
});