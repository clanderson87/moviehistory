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

      var fiveStar =[];
      for (var i=0; i<allMovies.length; i++){
        if(allMovies[i].rating == 5){
          fiveStar.push(allMovies[i]);
        }
      }
      console.log(watchedMovies)

      $("#movies").html(initmovies(watchedMovies));
            $('#movies').show();
            $(".StarRate").rating({min:0, max:5, step:1, size:'sm'});
      });
    }
  }
});

