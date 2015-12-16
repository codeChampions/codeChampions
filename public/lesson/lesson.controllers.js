(function() {
  'use strict';

  angular
    .module('lesson')
    .controller('LessonController', function($scope, $location, LessonService){
        var vm = this;

        vm.getStatus = function(){
          LessonService.getStatus().then(function(res){
            vm.lesson1Progress = res.data.lesson1Progress;
            console.log(vm.lesson1Progress);
          });
        };
        vm.getStatus();

        vm.goToLesson1 = function(){
          switch (vm.lesson1Progress) {
            case 0:
              $location.path('/lesson');
              break;
            default: $location.path('/404');
          };  
        };


    });


}());
