(function() {
  'use strict';

  angular
    .module('user')
    .factory('UserService', function($http, _){
      var logoutUrl = '/logout';
      var editUrl = '/editUser/';
      var createClassUrl = '/createClassroom';
      var getClassUrl= '/myClasses';
      var addStudentUrl = '/addStudent';

      var logout = function(){
        return $http.post(logoutUrl);
      };
    var edit = function(editInfo, id){
      console.log("SERIVCE: " + editInfo + "ID: " + id);
      var obj = {username: editInfo, id: id};
      return $http.put(editUrl + id, obj);
    };

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
      return {
        logout: logout,
        edit: edit,
        createClassroom: createClassroom,
        getClasses: getClasses,
        addStudent: addStudent
      };
    });
}());
