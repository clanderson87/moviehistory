define(["jquery", "hbs", "hbs!../templates/load-movies"], function($, hbs, initmovies){
	return{
		initsearch: function(){
			console.log("initsearch")
			$.ajax({
        		url: "http://www.omdbapi.com/?s=halloween&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          		var searchResults = omdbdata;
          		console.log(searchResults.Search.length);
          		for(var i=0; i<searchResults.Search.length; i++){
          			searchResults.Search[i].Poster = "http://img.omdbapi.com/?i=" + searchResults.Search[i].imdbID + "&apikey=8513e0a1";
          		}
          		console.log(searchResults);

          		$("#movies").html(initmovies(searchResults.Search));
          		$('#movies').show();

     //      			Poster: omdbdata.Poster,
					// Title: omdbdata.Title,
					// Type: omdbdata.Type,
					// Year: omdbdata.Year,
					// imdbID: omdbdata.imdbID
        	});
		}
	}
});