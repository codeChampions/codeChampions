(function() {
  'use strict';

  angular
    .module('user')
    .factory('UserService', function($http, _){
      var logoutUrl = '/logout';
      var editUrl = '/editUser/';

      var logout = function(){
        return $http.post(logoutUrl);
      };
    var edit = function(editInfo, id){
      console.log("SERIVCE: " + editInfo + "ID: " + id);
      var obj = {username: editInfo, id: id};
      return $http.put(editUrl + id, obj);
    };


      return {
        logout: logout,
        edit: edit,
      };
    });
}());
