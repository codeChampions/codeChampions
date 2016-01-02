(function() {
  'use strict';

  angular
    .module('game')
    .factory('Game2_1Service', function($http, $window, $location, _){
      var run = function(input){
        console.log("running");
      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_1Code: code,
        };
        return $http.post(putGameCode, obj);
      };

      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "1";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
      };
    })
    //Game 2 part 2
    .factory('Game2_2Service', function($http, $window, $location, _){

      var animal1="";
      var animal2="";
      var animal3="";
      var animal4="";

      var run = function(input){
        var animal1="";
        var animal2="";
        var animal3="";
        var animal4="";
        try{
          eval(input);
          if (animal1.toLowerCase() !="senor bacon") throw "animal1 is not named correctly!";
          if (animal2.toLowerCase() !="pascal the penguin") throw "animal2 is not named correctly!";
          if (animal3.toLowerCase() !="owlie") throw "animal3 is not named correctly!";
          if (animal4.toLowerCase() !="thomas the turtle") throw "animal4 is not named correctly!";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
          if(animal1.toLowerCase() ==="senor bacon" && animal2.toLowerCase() ==="pascal the penguin" && animal3.toLowerCase() ==="owlie" && animal4.toLowerCase() ==="thomas the turtle"){
            putProgress();
            var moveOn = confirm("Congrats, would you like to go to the next lesson?");
            if(moveOn === true){
              console.log('in move on');
              $window.location.assign('#/lesson22');
            }
            else{
              console.log('why not?');
            }
          }
          else{
            alert("Sorry, try again");
            $('#error').html("");
            $('#error').addClass('hidden');
          }
        }, 1000);
      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_2Code: code,
        };
        return $http.post(putGameCode, obj);
      };

      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "2";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
      };
    })
    //set up game 2_3
    .factory('Game2_3Service', function($http, $location, _){

      var run = function(input){
        console.log("running");
      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_3Code: code,
        };
        return $http.post(putGameCode, obj);
      };

      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "3";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
      };
    });
}());
