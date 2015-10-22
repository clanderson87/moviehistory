define(["jquery", "firebase", "q"], function($, firebase, Q){

  //this whole function when run returns the name.email and will eventually return uid back to main
  return{
    createsuser: function(name){
      // console.log(name.email, name.password)
      // return name.email
      var deferred = Q.defer();
      var ref = new Firebase("https://moviehistory654.firebaseio.com");

      var newUid = ref.createUser({
          email    : name.email,
          password : name.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
          deferred.reject(error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          deferred.resolve(name);
        }
      });
      return deferred.promise;

    }
  };
});
