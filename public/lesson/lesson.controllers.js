(function() {
  'use strict';

  angular
    .module('lesson')
    .controller('LessonController', function($scope, $location, $timeout, LessonService){
        var vm = this;

        vm.getStatus = function(){
          LessonService.getStatus().then(function(res){
            vm.lesson1Progress = res.data.lesson1Progress;
            vm.lesson2Progress = res.data.lesson2Progress;
            vm.lesson3Progress = res.data.lesson3Progress;
            vm.progress();
          });
        };
        vm.getStatus();

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

        vm.goToLesson2 = function(){
          switch (vm.lesson2Progress) {
            case 0:
              $location.path('/lesson21');
              break;
            case 1:
              $location.path('/lesson22');
              break;
            case 2:
              $location.path('/game23');
              break;
            case 3:
              $location.path('/game23');
              break;
            default: $location.path('/404');
          }
        };

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

  vm.progress = function() {
    var value = Math.round(vm.lesson1Progress / 3*100);
    console.log(value);


    vm.dynamic = value;
    // vm.type = type;
  };

    });


}());
