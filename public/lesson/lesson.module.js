(function() {
  'use strict';

  angular
    .module('lesson', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/lesson', {
          templateUrl: 'lesson/views/lesson.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson1',{
          templateUrl: 'lesson/views/lesson1.html',
          controller: 'LessonController as lessonCtrl'
        });

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
