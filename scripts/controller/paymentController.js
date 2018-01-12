angular.module('myapp')
	.controller('paymentCtrl', [
			'$window',
			'$state',
      '$http',
      '$scope',
      'Notification',
      'serviceCall',function (
		  $window,
			$state,
      $http,
      $scope,
      Notification,
      serviceCall,
    ) {

		 function init(){
       $scope.user = {};
       $scope.user.userid = parseInt($window.sessionStorage.getItem("loggedInUser"));
       serviceCall.getUserDetailById(cbSucessUser,$scope.user.userid)
     }

     function cbSucessUser(payload) {
			 var user =  payload.data;
			 $scope.user = user[0];
		 }

     $scope.updateMoney = function updateMoney(amount){
      var moneyUpdateUrl = "http://localhost:8080/FreshFoods/rest/userdetail/putAmountByUserId?id="+$scope.user.userid+"&amount="+($scope.user.money_balance+amount);
      $http.put(moneyUpdateUrl).then(
        function(payload) {
          Notification.primary(payload.data);
          $state.go('root.home.allproduct');
          //location.reload();
        }, function(error){
						console.log(error);
            Notification.error("please wait while we handel the transaction");
          });
      };

     init();
 }]);
