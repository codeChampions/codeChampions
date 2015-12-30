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
        .when('/lesson2',{
          templateUrl: 'lesson/views/lesson2.html',
          controller: 'LessonController as lessonCtrl'
        });
        //thanks Zumek for the tip on StackOverflow http://stackoverflow.com/questions/21292114/external-resource-not-being-loaded-by-angularjs
        $sceDelegateProvider
         .resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
