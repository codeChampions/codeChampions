(function() {
  'use strict';

  angular
    .module('classroom')
    .factory('ClassService', function($http, $location, _){
      var createClassUrl = '/createClassroom';
      var getClassUrl= '/myClasses';
      var addStudentUrl = '/addStudent';

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

      return {
          createClassroom: createClassroom,
          getClasses: getClasses,
          addStudent: addStudent,
          getSingleClass: getSingleClass
        };
    });

}());
