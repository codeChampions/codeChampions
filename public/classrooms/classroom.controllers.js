(function() {
  'use strict';

  angular
    .module('classroom')
    .controller('ClassController', function($scope, $location, $routeParams, ClassService){
        var vm = this;

        vm.username = sessionStorage.getItem("username");
        console.log(vm.username);

        vm.createClassroom =function(name){
          angular.element(document).find('input[name="className"]').val("");
          ClassService.createClassroom(name).then(function(res){
            vm.getClasses();
          });

        };

        vm.getClasses=function(){
          ClassService.getClasses().then(function(res){
            vm.classList = res.data;
          });
        };
        vm.getClasses();
        if($routeParams.classId){
          ClassService.getSingleClass($routeParams.classId).then(function(res){
            vm.singleClass = res.data;

          });
        }

        vm.addStudent= function(student, id){
          angular.element(document).find('input[name="studentName"]').val("");
          ClassService.addStudent(student, id).then(function(res){
            console.log(res);

          });
        };


    });


}());
