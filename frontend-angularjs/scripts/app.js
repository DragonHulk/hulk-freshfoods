angular.module('myapp', ["ui.router","ui-notification","base64"])
    .config(function($stateProvider, $urlRouterProvider,NotificationProvider){

			$stateProvider
			.state('root', {
				abstract: true,
				url:''
			})
      .state('root.home', {
				url: '/home',
				templateUrl: 'view/home.html',
        controller: 'homeCtrl',
			})

      .state('root.login', {
				url: '/login',
				templateUrl: 'view/login.html',
        controller: 'loginCtrl',
			})
      .state('root.signup', {
				url: '/signup',
				templateUrl: 'view/signup.html',
        controller:'loginCtrl',
			})
      .state('root.logout', {
				url: '/logout',
				templateUrl: 'view/logout.html',
        controller:'logoutCtrl',
			})
      .state('root.payment', {
				url: '/payment',
				templateUrl: 'view/payment.html',
        controller:'paymentCtrl',
			})

      .state('root.home.profile',{
        url:'/profile',
        templateUrl:'view/profile.html',
        controller:'homeCtrl',
      })

      .state('root.home.order',{
        url:'/order',
        templateUrl:'view/order.html',
        controller:'orderCtrl',
      })
      .state('root.home.cart',{
        url:'/cart',
        templateUrl:'view/cart.html',
        controller:'cartCtrl',
      })


      .state('root.home.product',{
        url:'/product',
        templateUrl:'view/product.html',
        controller:'productCtrl',
      })
      .state('root.home.singleproduct',{
        url:'/singleproduct/:id',
        templateUrl:'view/singleproduct.html',
        controller:'singleproductCtrl'
      })
      .state('root.home.allproduct',{
        url:'/allproduct',
        templateUrl:'view/allproduct.html',
        controller:'allproductCtrl'
      })

			$urlRouterProvider.otherwise("/login");

      NotificationProvider.setOptions({
          delay: 10000,
          startTop: 20,
          startRight: 10,
          verticalSpacing: 20,
          horizontalSpacing: 20,
          positionX: 'right',
          positionY: 'bottom'
      });
    });
