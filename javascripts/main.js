define(["jquery", "firebase", "q", "login", "newUser", "setdata", "updatedata", "retrievedata", "retrieveomdb", "initsearch", "towatch", "watched", "displayAll", "display5", "bootstrap-star-rating"], function($, firebase,  Q, login, newuser, setdata, update, retrieve, omdb, initsearch, towatch, watched, displayall, fivestar, bootstar){

	//this variable will hold the user id. this will be the key to passing data and retrieving it.
	var uid;
	var title;
	var omdbResults;
	//log a already registered user into the system this process will authenticate and return the user id
	$(document).on('click', '#login', function(){
		console.log("logging in!");
		var regisUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		};

		login.regUser(regisUser)
			.then(function(authData){
				uid = authData.uid;
				omdbResults = [];
				title = "";
				displayall.retreiveuserdata(uid, omdbResults, title);
				// displayall.retreiveuserdata(uid, omdbResults, title);
				// initsearch.initsearch();
				// $('#movies').show();
			})


	});

	//this process registers a user by creating the user then authenticating them it will return the user id
	$(document).on('click', '#register', function(){
		console.log("registering!");
		var newUser={
			"email": $('#email').val(),
			"password": $('#password').val()
		};

		//this is the promise for creating a user and returning the uid
		newuser.createsuser(newUser)
			.then(function(newUser){
				console.log(newUser);
				//passing new user login creds to login function which contains the second promise, it'll return the user uid
				return login.regUser(newUser);
			})
			//after getting back authdata which contains uid, authdata.uid is put into global var uid for use outside of function
			.then(function(authData){
				uid= authData.uid;
				console.log(uid);
				setdata.addDatatoUser(uid);
			})
			.done();


	});

	//onclick feature to add movies to to watch feature
	$(document).on('click', '.towatch', function(){
		var imdbid = $(this).data("imdbid");
		var watchstatus = $(this).data("watchstatus");
		console.log(imdbid);
		update.updateuser(uid, imdbid, watchstatus);
		console.log("added to watch", uid);
	});

	//onclick feature to add movies to watched feature
	$(document).on('click', '.watched', function(){
		var imdbid = $(this).data("imdbid");
		var watchstatus = $(this).data("watchstatus");
		console.log();
		update.updateuser(uid, imdbid, watchstatus);
		console.log("added to watched", uid);
	});

	//onclick feature to add a rating to a movie
	$(document).on('click', '.rating', function(){
		var imdbid = $(this).data("imdbid");
		console.log(imdbid);
		update.updateuser(uid, imdbid);
		console.log("added a rating to", uid);
	});


	//on enter function to search omdb
	$(document).keypress(function(e) {
    if(e.which == 13) {
    	title = $('#title').val();
    	console.log(title);
    	$("movies").hide();
        omdb.getomdb(title)
        	.then(function(searchResults){
        		omdbResults = searchResults;
        		console.log(omdbResults)
        		displayall.retreiveuserdata(uid, omdbResults, title);
        	})
        	.done();
    }
	});

	//onclick to see to watch movies
	$(document).on('click', '#displayToWatch', function(){
		$("#movies").hide();
		towatch.retreiveuserdata(uid);
	})

	//onclick to see watched movies
	$(document).on('click', '#displayWatched', function(){
		$("#movies").hide();
		watched.retreiveuserdata(uid);
	})

	$(document).on('click', '#display5', function(){
		$("#movies").hide();
		fivestar.retreiveuserdata(uid);
	})

	//onclick to see all movies
	$(document).on('click', '#displayAll', function(){
		$("#movies").hide();
		displayall.retreiveuserdata(uid);
	})

	$(document).on('click', '.removeButton', function(){
		console.log("clicked remove")
		$(this).parent().hide();
	})


	$(document).on('click', '#displayWatched', function() {
     $(this).addClass("active");
     $('#displayToWatch').removeClass("active");
     $('#display5').removeClass("active");
 });

 $(document).on('click', '#displayToWatch', function() {
     $(this).addClass("active");
     $('#displayWatched').removeClass("active");
     $('#display5').removeClass("active");
 });

 $(document).on('click', '#display5', function() {
     $(this).addClass("active");
     $('#displayToWatch').removeClass("active");
     $('#display5').removeClass("active");
 });

});
