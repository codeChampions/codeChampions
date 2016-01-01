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

      var createClassroom = function(name){
        var obj = {className: name};
        return $http.post(createClassUrl,obj);
      };
      var getClasses=function(){
        return $http.get(getClassUrl);
      };
      var addStudent = function(student, id){
        return $http.post(addStudentUrl + '/' + id, {username: student});
      };
      var getSingleClass = function(classId){
        return $http.get(getClassUrl +'/' + classId);
      };
      var getClassNotes = function(classId){
        return $http.get(getNotesUrl + '/' + classId);
      };
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
