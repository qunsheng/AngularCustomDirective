/************************************************************** 
 * 
 * This is an example for create a custom directive with template
 * 
 **************************************************************/ 



'use strict';

myApp.directive('demoGreet', function($parse){
	return {
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
