(function() {
  'use strict';

  angular
    .module('login', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'login/views/login.html',
          controller: 'LoginController as loginCtrl'
        });

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
