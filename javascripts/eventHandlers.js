define(["jquery", "require-handlebars-plugin"] function $, hbs {

  //this is the even handler for search OMDB button
    $(document).on('click, keypress', '#searchOMDB', function(){
      var title = $('#title').val();
        omdb.getomdb(title);
    })

    $(document).keypress(function(e) {
      if(e.which == 13) {
      var title = $('#title').val();
        omdb.getomdb(title);
    }

  //this is the event handler for the search My Movies
    $(document).on('click', '#searchMyMov', function(){

    })

  //this is the event handler for the display all button pill
    $(document).on('click', '#displayAll', function(){

    })

  //this is the event handler for the display watched pill
    $(document).on('click', '#displayWatched', function (){

    })

  //this is the event handler for the display to watch pill
    $(document).on('click', '#displayToWatch' function (){
      ()
    })

  //this is the event handler for the rating slider, "watched" button, "add" button
    $(document).on('click', '#towatch, #watched, #rating', function(){
        update.updateuser(uid);
        retrieve.retreiveuserdata(uid);
        console.log("added to", uid);
  });
}
