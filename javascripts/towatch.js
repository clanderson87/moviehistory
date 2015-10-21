define(["jquery", "hbs", "firebase", "hbs!../templates/load-movies"], function($, hbs, firebase, initmovies){
	return{
		retreiveuserdata: function(uid){
			var myFirebaseRef = new Firebase("https://moviehistory654.firebaseio.com/"+uid);
			myFirebaseRef.on("value", function(snapshot){
			var movies = snapshot.val();

			var allMovies = [];
			for(var key in movies){
				var movieWithId = movies[key];
				movieWithId.key = key;
				allMovies[allMovies.length] = movieWithId;
			}

			var towatchMovies =[];
			for (var i=0; i<allMovies.length; i++){
				if(allMovies[i].towatch == 1){
					towatchMovies.push(allMovies[i]);
				}
			}
			console.log(towatchMovies)

			$("#movies").html(initmovies(towatchMovies));
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

		$(document).on('click', '.watched', function(){
			console.log("clicked watched")
			$(this).parent().hide();
	})
			});
		}
	}
});
