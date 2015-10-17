define(["jquery"], function($){
	return {
		getomdb: function(title){
			$.ajax({
        		url: "http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          // Execute the callback function that was sent to me
          		console.log(title, omdbdata);
          		var searchResults = omdbdata;
          		console.log(searchResults.Search.length);
          		for(var i=0; i<searchResults.Search.length; i++){
          			searchResults.Search[i].Poster = "http://img.omdbapi.com/?i=" + searchResults.Search[i].imdbID + "&apikey=8513e0a1";
          		}
          		console.log(searchResults);

          		$("#movies").html(templates.load-movies(searchResults));

     //      			Poster: omdbdata.Poster,
					// Title: omdbdata.Title,
					// Type: omdbdata.Type,
					// Year: omdbdata.Year,
					// imdbID: omdbdata.imdbID
        	});
		}
	}
});