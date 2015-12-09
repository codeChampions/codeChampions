(function() {
  'use strict';

  angular
    .module('codeChampions', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginController as loginCtrl'
        })
        .when('/newUser', {
          templateUrl: 'views/accountCreation.html',
          controller: 'NewUserController as newUserCtrl'
        })
        .when('/home',{
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/404',{
          template: '<h1>Sorry page not found</h1>',
          controller: 'MainController'
        })
        .otherwise({redirectTo: '/404'});
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
