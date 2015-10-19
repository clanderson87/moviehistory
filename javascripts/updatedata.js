define(["jquery", "firebase"], function($, firebase){
	return{
		updateuser: function(uid, imdbID, watchstatus){
			
			$.ajax({
        		url: "http://www.omdbapi.com/?i="+imdbID+"&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          // Execute the callback function that was sent to me
          		var searchResults = omdbdata;


          		searchResults.Poster = "http://img.omdbapi.com/?i=" + searchResults.imdbID + "&apikey=8513e0a1";
          		
          		switch(watchstatus){
          			case "towatch": 
          				searchResults.towatch = 1;
          				break;
          			case "watched":
          				searchResults.towatch = 0;
          				break;
          		}

          		var title = searchResults.Title;
          		var movieObject = searchResults;
          		var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
				userRef.update({title: movieObject });

			})
		}
	}
});