/************************************************************** 
 * 
 * This is an example for create a custom directive with isolate scope
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return {

		/************************************************************** 
		 * 
		 * This is an isolate scope
		 * Another option is to use 'scope: true' to create a child scope of current scope,
		 * But create an isolated scope as following is more useful.
		 * equal sign means two way binding with scope above
		 * the first title is local variable, the second tile is title attribute
		 * 
		 **************************************************************/ 
		scope:{
			title: '=title'
		},
		template: '<div class="hello">Please click: Hello World</div> ',
		link: function linkFn(scope, lElement, attrs ){
			console.log('linkingfn(', scope, lElement, attrs, ')');
					
			lElement.bind('click', function(){	
				scope.$apply(function(){
					scope.title = "Bob";
				});
				
			});
		}
	
		
	} 
});
