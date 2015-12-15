(function() {
  'use strict';

  angular
    .module('message')
    .factory('MessageService', function($http, _){
      var getUrl = '/showReplies/1';
      var postUrl = '';

      var getMessages = function(){
        return $http.post('/showReplies/1', {id: 1});
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
