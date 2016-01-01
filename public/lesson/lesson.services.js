(function() {
  'use strict';

  angular
    .module('lesson')
    .factory('LessonService', function($http, $location, _){

      var statusUrl = '/getLessonProgress';

      var getStatus = function(){
        return $http.get(statusUrl);
      };


      return{
        getStatus: getStatus
      };
    });

}());
