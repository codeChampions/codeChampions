(function() {
  'use strict';

  angular
    .module('pm')
    .factory('PMService', function($http, $location, _){
      var sendMessageUrl = '/newPM';
      var sendNewMessage = function(toName, newMessage){
        var obj = {messageText: newMessage, replyUser: {username: toName}};
        return $http.post(sendMessageUrl, obj);
      };
      return{
          sendNewMessage: sendNewMessage
      };
    });
}());
