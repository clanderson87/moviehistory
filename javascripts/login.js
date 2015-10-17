define(["jquery","firebase","q"], function($, firebase, Q){

	//this whole function when run returns the name.email and will eventually return uid back to main
	return{
		regUser: function(name){
			// console.log(name.email, name.password)
			// return name.email
			console.log(name);
			var deferred = Q.defer();
			var ref = new Firebase("https://moviehistory654.firebaseio.com");
			ref.authWithPassword({
  				email    : name.email,
  				password : name.password
			}, function(error, authData) {
  			if (error) {
    			console.log("Login Failed!", error);
    			deferred.reject(error);
  			} else {
    			console.log("Authenticated successfully with payload:", authData);
    			deferred.resolve(authData);
  			}
			});
			return deferred.promise;
		}
	};
});