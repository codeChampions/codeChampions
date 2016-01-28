(function() {
  'use strict';

  angular
    .module('pm', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/myPM', {
          templateUrl: 'pm/views/myPM.html',
          controller: 'PMController as PMCtrl'
        });
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
