(function() {
  'use strict';

  angular
    .module('classroom', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace',
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/classroom', {
          templateUrl: 'classrooms/views/classroom.html',
          controller: 'ClassController as classCtrl'
        })
        .when('/classroom/:classId',{
          templateUrl: 'classrooms/views/classroom.html',
          controller: 'ClassController as classCtrl'
        })
        .when('/makeClassroom', {
          templateUrl: 'classrooms/views/makeClassroom.html',
          controller: 'ClassController as classCtrl'
        });

    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });
}());
