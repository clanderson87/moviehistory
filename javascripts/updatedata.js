define(["jquery", "firebase"], function($, firebase){
	return{
		updateuser: function(uid, imdbID){
			
			$.ajax({
        		url: "http://www.omdbapi.com/?i="+imdbID+"&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          // Execute the callback function that was sent to me
          		console.log(omdbdata.Title, omdbdata);
          		var searchResults = omdbdata;
          		console.log(searchResults);

          		searchResults.Poster = "http://img.omdbapi.com/?i=" + searchResults.imdbID + "&apikey=8513e0a1";
          		searchResults.watched = 0;
          		searchResults.rating = 5;
          		searchResults.towatch = 1;

          		console.log(searchResults)

          		var title = searchResults.Title;
          		console.log(title)
          		var movieObject = searchResults;
          		var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
				userRef.set({title: movieObject });

			})
		}
	}
});