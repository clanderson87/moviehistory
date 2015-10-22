define(["jquery","q","lodash","hbs", "hbs!../templates/search-template", "retrievedata"], function($,Q,_,hbs, searchmovies, retrievedata){
  return {
    getomdb: function(title){
      var deferred = Q.defer();
      $.ajax({
            url: "http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json"
          }).done(function(omdbdata) {
          // Execute the callback function that was sent to me
              console.log(title, omdbdata);
              var searchResults = omdbdata;
              console.log(searchResults.Search.length);
              for(var i=0; i<searchResults.Search.length; i++){
                searchResults.Search[i].Poster = "http://img.omdbapi.com/?i=" + searchResults.Search[i].imdbID + "&apikey=8513e0a1";
                searchResults.Search[i].Actors = "http://img.omdbapi.com/?i=" + searchResults.Search[i].Actors + "&apikey=8513e0a1";
                searchResults.Search[i].rating = 0;
                searchResults.Search[i].towatch = "";
              }




              deferred.resolve(searchResults.Search)



              // console.log(searchResults);
            //   retrievedata.retreiveuserdata()
            //     .then(function(allMovies){
            //       console.log("got past promise")
            //       var match = _.filter(allMovies, _.matches({'title': title}))
            //       if(title === match){
            //         console.log("got here");

            //       }

            //     })


          });
          return deferred.promise;
    }

  }
});
