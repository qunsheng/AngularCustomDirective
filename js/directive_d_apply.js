/************************************************************** 
 * 
 * This is an example for create a custom directive using $apply
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
		 * but we have to call $apply to make Angular to make dirty check
		 * difference for $apply with $digest:
		 * $apply force entire page to check and update
		 * $digest only take current scope and its children to check
		 * 
		 **************************************************************/ 
		lElement.bind('click', function(){

			scope.$apply(function(){
				scope.name = "Bobby";
			});
			
		});
	}
	
});
