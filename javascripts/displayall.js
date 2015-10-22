define(["jquery", "hbs", "firebase", "hbs!../templates/load-movies", "bootstrap-star-rating"], function($, hbs, firebase, initmovies, bootstar){
	return{
		retreiveuserdata: function(uid, omdbResults, title){
			var myFirebaseRef = new Firebase("https://moviehistory654.firebaseio.com/"+uid);
			myFirebaseRef.on("value", function(snapshot){
			var movies = snapshot.val();

			var allMovies = [];
			for(var key in movies){
				var movieWithId = movies[key];
				movieWithId.key = key;
				allMovies[allMovies.length] = movieWithId;
			}

			var fullDataArray;
			for(i=0;i<omdbResults.length; i++){
				$.ajax({
        			url: "http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json"
      			}).done(function(omdbdata){
      				fullDataArray = omdbdata;
      			})
			}

			console.log(allMovies);
        	var combined = omdbResults.concat(allMovies);

      		console.log(combined);
      		$("#movies").html(initmovies(combined));
            $('#movies').show();
            $(".StarRate").rating({min:0, max:5, step:1, size:'sm'});
		// var uniqSongs = _.uniq(allSongs, 'title');
		// var uniqAlbums = _.chain(allSongs).uniq('album').value();
		// var uniqArtists = _.chain(allSongs).uniq('artist').pluck('artist').value();
		// var uniqGenres = _.chain(allSongs).uniq('genre').pluck('genre').value();

		// $("#songList").html(templates.songs({songs: uniqSongs}));
		// $("#albums2").html(templates.albums({albums: uniqAlbums}));
		// $("#artists2").html(templates.artists({artists: uniqArtists}));
		// $("#genre2").html(templates.genres({genre: uniqGenres}));

			});
		}
	}
});
