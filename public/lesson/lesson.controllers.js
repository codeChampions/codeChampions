(function() {
  'use strict';

  angular
    .module('lesson')
    .controller('LessonController', function($scope, $location, $timeout, LessonService){
        var vm = this;
        // shows how much progress each user has made in each lesson
        vm.getStatus = function(){
          LessonService.getStatus().then(function(res){
            vm.lesson1Progress = res.data.lesson1Progress;
            vm.lesson2Progress = res.data.lesson2Progress;
            vm.lesson3Progress = res.data.lesson3Progress;
            vm.progress();
          });
        };
        vm.getStatus();
        //sets current path based on progress in lesson 1
        vm.goToLesson1 = function(){
          switch (vm.lesson1Progress) {
            case 0:
              $location.path('/lesson11');
              break;
            case 1:
              $location.path('/lesson12');
              break;
            case 2:
              $location.path('/game13');
              break;
            case 3:
              $location.path('/game13');
              break;
            default: $location.path('/404');
          }
        };
        //sets current path based on progress in lesson 2
        vm.goToLesson2 = function(){
          switch (vm.lesson2Progress) {
            case 0:
              $location.path('/lesson21');
              break;
            case 1:
              $location.path('/game22');
              break;
            case 2:
              $location.path('/lesson22');
              break;
            case 3:
              $location.path('/game23');
              break;
            default: $location.path('/404');
          }
        };
        //sets current path based on progress in lesson 3
        vm.goToLesson3 = function(){
          switch (vm.lesson3Progress) {
            case 0:
              $location.path('/lesson31');
              break;
            case 1:
              $location.path('/lesson32');
              break;
            case 2:
              $location.path('/lesson33');
              break;
            case 3:
              $location.path('/game33');
              break;
            default: $location.path('/404');
          }
        };

        vm.max = 100;
 //controller progress bars
  vm.progress = function() {
    //lesson 1 progress bar
    var value1 = Math.round(vm.lesson1Progress / 3*100);
    vm.dynamic1 = value1;
    //lesson 2 progress bar
    var value2 = Math.round(vm.lesson2Progress / 3*100);
    vm.dynamic2 = value2;
    //lesson 3 progress bar
    var value3 = Math.round(vm.lesson3Progress / 3*100);
    vm.dynamic3 = value3;

  };

});




}());
