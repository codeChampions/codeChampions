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
        .when('/game', {
          templateUrl: 'game/views/game.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/game1', {
          templateUrl: 'game/views/game1.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/game2', {
          templateUrl: 'game/views/game2.html',
          controller: 'GameController as gameCtrl'
        });

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
