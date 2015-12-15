(function() {
  'use strict';

  angular
    .module('message')
    .factory('MessageService', function($http, _){
      var getUrl = '/showGameBoard';
      var postUrl = '';

      var getMessages = function(){
        return $http.get(getUrl);
      };
      var sendNewMessage = function(newMessage){
          console.log("send new message");
      };

      var sendReply = function(replyMessage){
        console.log("send reply message");
      };

      var check = function(){
        console.log("in message service");
        console.log("worked, bitch");
      };

      return{
          sendReply: sendReply,
          sendNewMessage: sendNewMessage,
          check: check,
          getMessages: getMessages,
      };
    });
}());
