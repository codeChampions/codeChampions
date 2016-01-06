(function() {
  'use strict';

  angular
    .module('stats')
    .factory('StatsService', function($http, _){
      //stats end point and get function
      var statsUrl = '/myStats';
      var getStats= function(){
        return $http.get(statsUrl);
      };
      return{
          getStats: getStats
      };
    });
}());
