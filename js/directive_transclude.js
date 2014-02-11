/************************************************************** 
 * 
 * This is an example for create a custom directive with transclude
 * 
 **************************************************************/ 


'use strict';

var a=2;
myApp.directive('demoGreet', function($parse){
	return {
		scope:{
			title: '=title'
		},
		transclude: true,
		template: '<div class="hello">Hello World' + a + '<div ng-transclude></div> </div>',
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
