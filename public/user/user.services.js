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
      return $http.put(editUrl + id, editInfo);
    };
      return {
        logout: logout,
        edit: edit
      };
    });
}());
