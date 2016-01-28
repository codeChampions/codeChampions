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

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
