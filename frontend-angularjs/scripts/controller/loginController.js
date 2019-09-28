angular.module('myapp')
	.controller('loginCtrl', [
			'$scope',
			'$state',
      '$http',
			'$window',
			'sharedService',
			'Notification',
			'$base64',function (
		  $scope,
			$state,
      $http,
			$window,
			sharedService,
			Notification,
			$base64) {

	   var init = function init() {
       $scope.user = {};
			 $scope.Status;
			 $scope.confirm = {};
      console.log("enter");
	   };

		$scope.onLogin = function onLogin(){
			//encrypt();
			var data = {
				emailid: $scope.user.emailid,
				pwd: $scope.user.password
			};
      var url = "http://localhost:8080/FreshFoods/rest/user/auth";
			$http.post(url,data).then(
					function(payload) {
						var loggedInUser = JSON.parse(payload.data);
						$window.sessionStorage.setItem("loggedInUser",JSON.stringify(loggedInUser.userid));
						$state.go('root.home.allproduct');
					}, function(error){
						$scope.Status="Invalid Email ID or password";
					});

		};

		//function encrypt(){
		//	$scope.encoded = $base64.encode('a string');
		//}

    $scope.onSignup = function onSignup(){
      $state.go('root.signup');
    }

		$scope.onadduser = function onadduser(user,detail,confirm){
			var result = check(user,confirm);
			if (result)
			{
			var url = "http://localhost:8080/FreshFoods/rest/user/add";

			$http.post(url,user).then(
					function(payload) {
						var id =parseInt(payload.data);
						addUserToDetails(detail,id);
					}, function(error){
						console.log(error);
					});
				}
		}
		
		function addUserToDetails(detail,id){
			$scope.detail.userid = id;
			var url = "http://localhost:8080/FreshFoods/rest/userdetail/add";
			$http.post(url,detail).then(
					function(payload){
						Notification.primary("you have been gifted 1000 rs to shop in your wallet");
						Notification.primary("enter your user name and password to login");
						$state.go('root.login');
					}, function(error){

						console.log(error);
					});

		}

		function check(user,confirm){
			if(user.pwd == confirm.pwd){
				return 1;
			}
			else {
				$scope.Status = "Pasword did not match";
					return 0;
			}
		}

			init();
 }]);
