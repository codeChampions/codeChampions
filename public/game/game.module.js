(function() {
  'use strict';

  angular
    .module('game', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/game11', {
          templateUrl: 'game/views/game11.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/game12', {
          templateUrl: 'game/views/game12.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/game13', {
          templateUrl: 'game/views/game13.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/gamePlayground', {
          templateUrl: 'game/views/gametester.html',
          controller: 'GameController as gameCtrl'
        });
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
