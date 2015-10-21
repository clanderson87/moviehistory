requirejs.config({
	baseUrl: "./javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"firebase":"../lib/bower_components/firebase/firebase",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"lodash": "../lib/bower_components/lodash/lodash",
		"q": "../lib/bower_components/q/q",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap", 
		"bootstrap-star-rating": "../lib/bower_components/bootstrap-star-rating/js/star-rating.min"
	},
	shim:{
		"bootstrap":["jquery"],
		'firebase':{
			exports:'Firebase'
		}, 
		"bootstrap-star-rating":["bootstrap"]
	}
});

//this is the starting point telling it which javacsript files to reference

require(["jquery","bootstrap", "main"], function(){

});
