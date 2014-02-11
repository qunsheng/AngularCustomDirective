/************************************************************** 
 * 
 * This is an example for create a custom directive with restrict
 * 
 **************************************************************/ 


'use strict';

myApp.directive('demoGreet', function($parse){
	return {
		restrict: 'A',
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
