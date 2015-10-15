define(["jquery", "firebase"], function($, firebase){
	
	//this whole function when run returns the name.email and will eventually return uid back to main
	return{
		createuser: function(name){
			console.log(name.email, name.password)
			return name.email
		}
	}
});