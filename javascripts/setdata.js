define(["jquery","firebase", "retrievedata"], function($,firebase, retrieve){
  return{
    addDatatoUser: function(uid){
      $.ajax({
            url: "http://www.omdbapi.com/?t=ghost+rider&y=&plot=short&r=json"
          }).done(function(omdbdata) {
          // Execute the callback function that was sent to me
              console.log(title, omdbdata);
              var searchResults = omdbdata;
              console.log(searchResults.Search.length);
              for(var i=0; i<searchResults.Search.length; i++){
                searchResults.Search[i].Poster = "http://img.omdbapi.com/?i=" + searchResults.Search[i].imdbID + "&apikey=8513e0a1";
              }

              searchResults.watched = 1;
              searchResults.rating = 5;
              searchResults.towatch = 0;
              var title = searchResults.Search[0].Title;
              var movieObject = searchResults.Search[0];

              var userRef = new Firebase('https://moviehistory654.firebaseio.com/'+uid);
        userRef.set({title: movieObject});

      })
    }
  }
});
