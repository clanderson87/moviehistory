define(["jquery", "hbs", "hbs!../templates/search-template"], function($, hbs, searchmovies){
	return{
		initsearch: function(){
			$.ajax({
        		url: "http://www.omdbapi.com/?s=halloween&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          		var searchResults = omdbdata;
          		for(var i=0; i<searchResults.Search.length; i++){
          			searchResults.Search[i].Poster = "http://img.omdbapi.com/?i=" + searchResults.Search[i].imdbID + "&apikey=8513e0a1";
          		}
              console.log(searchResults);
          		$("#movies").html(searchmovies(searchResults.Search));
          		$('#movies').show();
              $(".StarRate").rating({min:0, max:5, step:1, size:'sm'});

     //      			Poster: omdbdata.Poster,
					// Title: omdbdata.Title,
					// Type: omdbdata.Type,
					// Year: omdbdata.Year,
					// imdbID: omdbdata.imdbID
        	});
		}
	}
});
