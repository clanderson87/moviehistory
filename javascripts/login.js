define(["jquery","firebase"], function($, firebase){
	console.log("on login")
	return{
		regUser: function(name){
			console.log(name.email, name.password)
			return name.email
		}
	}
});