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
        .when('/game21', {
          templateUrl: 'game/views/game21.html',
          controller: 'Game2Controller as game2Ctrl'
        })
        .when('/game22', {
          templateUrl: 'game/views/game22.html',
          controller: 'Game2Controller as game2Ctrl'
        })
        .when('/game23', {
          templateUrl: 'game/views/game23.html',
          controller: 'Game2Controller as game2Ctrl'
        })
        .when('/game31', {
          templateUrl: 'game/views/game31.html',
          controller: 'Space1Controller as space1Ctrl'
        })
        .when('/game32', {
          templateUrl: 'game/views/game32.html',
          controller: 'Space2Controller as space2Ctrl'
        })
        .when('/game33', {
          templateUrl: 'game/views/game33.html',
          controller: 'Space3Controller as space3Ctrl'
        })
        .when('/gamePlayground', {
          templateUrl: 'game/views/gametester.html',
          controller: 'GameController as gameCtrl'
        })
        .when('/phaserPlayground',{
          templateUrl: 'game/views/phaserTester.html',
          controller: 'SpacePlayController as spacePCtrl'
        });
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
