(function() {
  'use strict';

  angular
    .module('codeChampions')
    .directive('lessonDirect', function(){
      return {
        restrict: 'EA',
        templateUrl: 'lesson/views/lesson.directive.html',
        scope: {
          data: '=',
        },
      };


    });

}());
