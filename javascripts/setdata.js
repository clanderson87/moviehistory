define(["jquery","firebase", "retrievedata"], function($,firebase, retrieve){
	return{
		addDatatoUser: function(uid){
			var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
			userRef.set({up: ["object of movie data"]}, function(uid){
				retrieve.retreiveuserdata(uid);
				$('#movies').show();
			})
		}
	}
});