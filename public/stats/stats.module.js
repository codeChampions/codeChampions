(function() {
  'use strict';

  angular
    .module('stats', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
    
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
