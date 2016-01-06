(function() {
  'use strict';

  angular
    .module('lesson', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider, $sceDelegateProvider){

      $routeProvider
        .when('/lesson11', {
          templateUrl: 'lesson/views/lesson11.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson12',{
          templateUrl: 'lesson/views/lesson12.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson21',{
          templateUrl: 'lesson/views/lesson21.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson22',{
          templateUrl: 'lesson/views/lesson22.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson31',{
          templateUrl: 'lesson/views/lesson31.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson32',{
          templateUrl: 'lesson/views/lesson32.html',
          controller: 'LessonController as lessonCtrl'
        })
        .when('/lesson33',{
          templateUrl: 'lesson/views/lesson33.html',
          controller: 'LessonController as lessonCtrl'
        });

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
