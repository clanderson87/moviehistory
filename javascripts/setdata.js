define(["jquery","firebase"], function($,firebase){
	return{
		addDatatoUser: function(uid){
			var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
			userRef.set({up: ["array of movie data"]})
		}
	}
});