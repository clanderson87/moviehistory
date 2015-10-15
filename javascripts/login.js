define(["jquery","firebase"], function($, firebase){
	console.log("on login")
	return{
		createUser: function(name){
			console.log(name.email, name.password)
			return name.email
		}
	}
});