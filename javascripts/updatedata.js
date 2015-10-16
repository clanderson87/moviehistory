define(["jquery", "firebase"], function($, firebase){
	return{
		updateuser: function(uid){
			var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid)
			userRef.update({
				frozen: "object of movie data"
			})
		}
	}
});