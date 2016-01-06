(function() {
  'use strict';

  angular
    .module('classroom')
    .controller('ClassController', function($scope, $location, $routeParams, ClassService){

        var vm = this;

        vm.username = sessionStorage.getItem("username");

        //Make new classroom. Only accessible to teachers

        vm.createClassroom =function(name){
          angular.element(document).find('input[name="className"]').val("");
          ClassService.createClassroom(name).then(function(res){
            vm.getClasses();
          });

        };
        // show classes. Accessible to all.
        vm.getClasses=function(){
          ClassService.getClasses().then(function(res){
            vm.classList = res.data;
          });
        };
        //getClasses when controller starts
        vm.getClasses();

        //move to single class on when clicked
        vm.getSingleClass= function(){
          ClassService.getSingleClass($routeParams.classId).then(function(res){
            vm.singleClass = res.data;
          });
        };

        vm.getClassNotes = function(){
          ClassService.getClassNotes($routeParams.classId).then(function(res){
            console.log(res.data);
            vm.notes = res.data;
          });
        };

        //grab single class data when in a lone classroom
        if($routeParams.classId){
          vm.getSingleClass();
          vm.getClassNotes();
        }

        //add student
        vm.addStudent= function(student, id){
          angular.element(document).find('input[name="studentName"]').val("");
          ClassService.addStudent(student, id).then(function(res){
            console.log(res);
            vm.getSingleClass();

          });
        };
        //delete an uploaded file. teachers only
        vm.deleteUpload = function(uploadId){
          ClassService.deleteUpload(uploadId).then(function(res){
            vm.getClassNotes();
          });
        };

    });


}());
