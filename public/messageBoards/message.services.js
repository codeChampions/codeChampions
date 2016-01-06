(function() {
  'use strict';

  angular
    .module('message')
    .factory('MessageService', function($http, _){
      var getUrl = '/showReplies/1';
      var postUrl = '/addMessage';
      //get messages
      var getMessages = function(id){
        return $http.post('/showReplies/'+id, {id: 1});
      };
      //get replies
      var getReplies = function(Id){
        return $http.post('/showReplies/' + Id, {id: Id});
      };
      //send messages
      var sendNewMessage = function(newMessage, userName, id){
        var obj = {messageText: newMessage};
        return $http.post(postUrl + '/' + id, obj);
      };
      // send reply
      var sendReply = function(replyMessage, replyId){
        var obj = {messageText: replyMessage};
        return $http.post(postUrl + '/' + replyId, obj);
      };


      return{
          sendReply: sendReply,
          sendNewMessage: sendNewMessage,
          getMessages: getMessages,
          getReplies: getReplies
      };
    });
}());
