/************************************************************** 
 * 
 * This is an example for create a custom directive using $watch
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return function linkFn(scope, lElement, attrs ){
		console.log('linkingfn(', scope, lElement, attrs, ')');
		scope.$watch(attrs.demoGreet, function(value){
			lElement.text("Hello World " + value);
		});
		
	}
	
});
