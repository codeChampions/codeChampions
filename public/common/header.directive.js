(function() {
  'use strict';

  angular
    .module('codeChampions')
    .directive('headerDirect', function(){
      return {
        restrict: 'EA',
        templateUrl: 'common/views/header.directive.html',
        scope: {
          pick: '=',
          logout: '&',
        },
      };


    });

}());
