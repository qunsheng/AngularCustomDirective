/************************************************************** 
 * 
 * This is an example for create a custom directive with priority
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return {
		/************************************************************** 
		 * 
		 * Higher priority will be called first
		 * 101 is special number because {{xxxx}}'s priority is 100
		 * 
		 **************************************************************/ 
		priority: 101,
		template: '<div class="hello">Hello World</div> ',
		link: function linkFn(scope, lElement, attrs ){
			console.log('linkingfn(', scope, lElement, attrs, ')');
					
			lElement.bind('click', function(){	
				scope.$apply(function(){
					scope.name = "Rob";
				});
				
			});
		}
	
		
	} 
});
