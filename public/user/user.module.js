(function() {
  'use strict';

  angular
    .module('user', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/student', {
          templateUrl: 'user/views/studentHome.html',
          controller: 'UserController as userCtrl'
        })
        .when('/teacher', {
          templateUrl: 'user/views/teacherHome.html',
          controller: 'UserController as userCtrl'
        })
        .when('/profile',{
          templateUrl: 'user/views/profile.html',
          controller: 'UserController as userCtrl'
        });
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });


}());
