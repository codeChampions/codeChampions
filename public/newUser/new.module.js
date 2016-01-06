(function() {
  'use strict';

  angular
    .module('newuser', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
      .when('/newUser', {
        templateUrl: 'newUser/views/accountCreation.html',
        controller: 'NewUserController as newUserCtrl'
      });
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
