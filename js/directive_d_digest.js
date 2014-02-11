/************************************************************** 
 * 
 * This is an example for create a custom directive using $digest
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return function linkFn(scope, lElement, attrs ){
		console.log('linkingfn(', scope, lElement, attrs, ')');
		lElement.text("Please click this: Hello World");
		
		/************************************************************** 
		 * 
		 * The element object is actually jquery element
		 * We can use jQuery bind to modify the dom
		 * but we have to call $digest to make Angular to make dirty check
		 * 
		 **************************************************************/ 
		lElement.bind('click', function(){
			scope.name = "Bob";
			scope.$digest();
		});
	}
	
});
