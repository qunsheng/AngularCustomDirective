/************************************************************** 
 * 
 * This is main JavaScript file using Angular.js
 * 
 **************************************************************/ 

/************************************************************** 
 * 
 * Define an angular module for our app
 *
 **************************************************************/ 
var myApp = angular.module('myApp', []);

/************************************************************** 
 * 
 * controller
 * 
 **************************************************************/ 
myApp.controller('Demo', function($scope) {
	console.log("demo controller...");
	$scope.name = "world";

});

