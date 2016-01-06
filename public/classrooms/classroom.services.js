(function() {
  'use strict';

  angular
    .module('classroom')
    .factory('ClassService', function($http, $location, _){

      var createClassUrl = '/createClassroom';
      var getClassUrl= '/myClasses';
      var addStudentUrl = '/addStudent';
      var getNotesUrl = '/myUploads';
      var deleteUpUrl = '/deleteUpload';

      //post to classroom database
      var createClassroom = function(name){
        var obj = {className: name};
        return $http.post(createClassUrl,obj);
      };
      //grab from classroom database
      var getClasses=function(){
        return $http.get(getClassUrl);
      };
      // add students to classroom
      var addStudent = function(student, id){
        return $http.post(addStudentUrl + '/' + id, {username: student});
      };
      // get single classroom based on id passed when clicked
      var getSingleClass = function(classId){
        return $http.get(getClassUrl +'/' + classId);
      };
      // get notes the teacher has uploaded based on class id
      var getClassNotes = function(classId){
        return $http.get(getNotesUrl + '/' + classId);
      };
      //delete notes from classroom. teacher only.
      var deleteUpload = function(uploadId){
        var obj={id: uploadId};
        return $http.post(deleteUpUrl, obj);
      };

      return {
          createClassroom: createClassroom,
          getClasses: getClasses,
          addStudent: addStudent,
          getSingleClass: getSingleClass,
          getClassNotes: getClassNotes,
          deleteUpload: deleteUpload
        };
    });

}());
