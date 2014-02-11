/************************************************************** 
 * 
 * This is an example for create a custom directive
 * to modify text of an element inside of custom directive
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return function linkFn(scope, lElement, attrs ){
		console.log('linkingfn(', scope, lElement, attrs, ')');
		lElement.text("Hello World");
	}
	
});
