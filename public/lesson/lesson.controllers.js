(function() {
  'use strict';

  angular
    .module('lesson')
    .controller('LessonController', function($scope, $location, LessonService){
        var vm = this;

        vm.getStatus = function(){
          // LessonService.getStatus().then(function(res){
          //   console.log(res);
          // });
          console.log("in lesson controller");
        };
        vm.getStatus();

    });


}());
