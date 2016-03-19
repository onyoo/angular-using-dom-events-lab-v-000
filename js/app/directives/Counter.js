function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function(scope, element, attr, ctrl, transclude) {
			element.on('click', function (){
				ctrl.count++;
				// console.log(ctrl.count);
				scope.$apply();
			});
			scope.$on('$destroy', function () {
          //  element.off();
        });
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);

// function Counter() {
// 	return {
// 		template: [
// 			'<div>',
// 				'<h3>Counter</h3>',
// 				'<div>Click anywhere to increment the counter!</div>',
// 				'<div>Current count: {{count}} </div>',
// 			'</div>'
// 		].join(''),
// 		controller: function(scope) {
// 			$scope.count = 0;
// 		}
// 	}
// }
