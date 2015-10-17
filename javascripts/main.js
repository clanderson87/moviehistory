define(["jquery", "q", "login", "newUser", "setdata", "updatedata", "retrievedata", "retrieveomdb"], function($, Q, login, newuser, setdata, update, retrieve, omdb){
	
	//this variable will hold the user id. this will be the key to passing data and retrieving it.
	var uid;

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
				$('#movies').show();
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
	$(document).on('click', '#towatch, #watched, #rating', function(){
		update.updateuser(uid);
		retrieve.retreiveuserdata(uid);
		console.log("added to", uid);
	});

	$(document).keypress(function(e) {
    if(e.which == 13) {
    	var title = $('#title').val();
        omdb.getomdb(title);
    }
});
	//this function is a check to make sure uid is being redefined after going through authentication. 
	function sayName(){
		console.log(uid);
	}
});