define(["jquery", "hbs", "firebase", "hbs!../templates/load-movies"], function($, hbs, firebase, initmovies){
	return{
		retreiveuserdata: function(uid, omdbResults){
			var myFirebaseRef = new Firebase("https://moviehistory654.firebaseio.com/"+uid);
			myFirebaseRef.on("value", function(snapshot){
			var movies = snapshot.val();

			var allMovies = [];
			for(var key in movies){
				var movieWithId = movies[key];
				movieWithId.key = key;
				allMovies[allMovies.length] = movieWithId;
			}

			console.log(allMovies);
        	var combined = omdbResults.concat(allMovies);
      		console.log(omdbResults);
      		$("#movies").html(initmovies(combined));
            $('#movies').show();
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