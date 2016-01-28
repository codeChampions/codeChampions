(function() {
  'use strict';

  angular
    .module('pm')
    .factory('PMService', function($http, $location, _){
      var sendMessageUrl = '/newPM';
      var sendNewMessage = function(toName, newMessage){
        var obj = {message: newMessage, toName: toName};
        return $http.post(sendMessageUrl, obj);
      };
      return{
          sendNewMessage: sendNewMessage
      };
    });
}());
