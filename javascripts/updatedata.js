define(["jquery", "firebase"], function($, firebase){
	return{
		updateuser: function(uid, imdbID, watchstatus){
			
			$.ajax({
        		url: "http://www.omdbapi.com/?i="+imdbID+"&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          // Execute the callback function that was sent to me
          		console.log(omdbdata.Title, omdbdata);
          		var searchResults = omdbdata;
          		console.log(searchResults);

          		searchResults.Poster = "http://img.omdbapi.com/?i=" + searchResults.imdbID + "&apikey=8513e0a1";
          		
          		console.log(watchstatus)
          		switch(watchstatus){
          			case "towatch": 
          				searchResults.towatch = 1;
          				console.log(watchstatus);
          				break;
          			case "watched":
          				searchResults.towatch = 0;
          				console.log("got here")
          				break;
          		}


          		// if(watchstatus === "towatch"){
          		// 	searchResults.towatch = 1;
          		// }else if(watchstatus === "watched"){
          		// 	console.log(watchstatus)
          		// 	searchResults.towatch= 0;
          		// }else{
          		// 	searchResults.rating = 4;
          		// }


          		console.log(searchResults.towatch)

          		console.log(searchResults);

          		var title = searchResults.Title;
          		console.log(title)
          		var movieObject = searchResults;
          		var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
				userRef.update({title: movieObject });

			})
		}
	}
});