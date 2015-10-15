define(["jquery", "firebase"], function($, firebase){
	return{
		createuser: function(name){
			console.log(name.email, name.password)
			return name.email
		}
	}
});