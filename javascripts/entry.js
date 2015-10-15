requirejs.config({
	baseUrl: "./javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"firebase":"../lib/bower_components/firebase/firebase",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"lodash": "../lib/bower_components/lodash/lodash",
		"q": "../bower_components/q/q",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap"
	},
	shim:{
		"bootstrap":["jquery"],
		'firebase':{
			exports:'Firebase'
		}
	}
});

//this is the starting point telling it which javacsript files to reference

require(["jquery","bootstrap"], function($){
	console.log("started");
	$(document).on('click', '#login', function(){
		console.log("logged in!");
	})
	$(document).on('click', '#register', function(){
		console.log("registered!");
	})
});