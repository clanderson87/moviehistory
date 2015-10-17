define(["jquery"], function($){
	return {
		getomdb: function(title){
			$.ajax({
        		url: "http://www.omdbapi.com/?s="+title+"&y=&plot=short&r=json"
      		}).done(function(omdbdata) {
          // Execute the callback function that was sent to me
          		console.log(title, omdbdata);
        	});
		}
	}
});