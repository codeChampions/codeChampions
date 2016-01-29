(function() {
  'use strict';

  angular
    .module('pm')
    .factory('PMService', function($http, $location, _){
      var sendMessageUrl = '/newPM';
      var getPMUrl = '/myPM';

      var getPM = function(){
        return $http.get(getPMUrl);
      };
      var sendNewMessage = function(toName, newMessage){
        var obj = {messageText: newMessage, replyUser: {username: toName}};
        return $http.post(sendMessageUrl, obj);
      };
      var sendReply = function(toName, replyMessage, Id){
        var obj = {messageText: replyMessage, replyUser: {username: toName}, replyId: Id};
        return $http.post(sendMessageUrl, obj);
      };
      return{
          getPM: getPM,
          sendNewMessage: sendNewMessage,
          sendReply: sendReply
      };
    });
}());
