angular.module('myapp')
	.controller('logoutCtrl', [
			'$window',
			'$state',function (
		  $window,
			$state) {

		 function init(){
      $window.sessionStorage.clear();
			$state.go('root.login');
     }

     init();
 }]);
