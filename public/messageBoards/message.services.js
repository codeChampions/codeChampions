(function() {
  'use strict';

  angular
    .module('message')
    .factory('MessageService', function($http, _){
      var getUrl = '/showReplies/1';
      var postUrl = '/addMessage';

      var getMessages = function(id){
        return $http.post('/showReplies/'+id, {id: 1});
      };
      var getReplies = function(Id){
        return $http.post('/showReplies/' + Id, {id: Id});
      };
      var sendNewMessage = function(newMessage, userName, id){
        var obj = {username: userName, message: newMessage, id: id};
        console.log(obj);
        return $http.post(postUrl + '/' + id, obj);
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
          getReplies: getReplies
      };
    });
}());
