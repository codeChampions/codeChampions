(function() {
  'use strict';

  angular
    .module('game')
    .factory('Game2_1Service', function($http, $window, $location, _){
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
    .factory('Game2_3Service', function($http, $window, $location, _){

      var doors=[];
      var treasures = 0;

      var openDoor = function(door){
        $('#door'+door).addClass('hidden');
        $('#behindDoor'+door).removeClass('hidden');
        doors.push(door);
        if(door === 1 || door === 4){
          treasures++;
        }
        console.log(doors);
      };

      var resetGame = function(){
        for(var i=0; i<5; i++){
          $('#door'+i).removeClass('hidden');
          $('#behindDoor'+i).addClass('hidden');
        }
        doors=[];
        treasures = 0;
      };

      var run = function(input){
        try{
          eval(input);
          if(doors ===[]) throw "You need to select a door";
          if(doors.length !=2) throw "You need to search two rooms.";
          if(!_.contains(doors, 1)) throw "you visited the wrong room";
          if(!_.contains(doors, 4)) throw "you visited the wrong room";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
          console.log("doors " + doors);
          console.log("treasures: " + treasures);
          if(doors.length === 2 && treasures === 2 && _.contains(doors, 1) && _.contains(doors, 4)){
            putProgress();
            var moveOn = confirm("Congrats, would you like to go to the next lesson?");
            if(moveOn === true){
              console.log('in move on');
              $window.location.assign('#/lesson31');
              resetGame();
            }
            else{
              console.log('why not?');
              resetGame();
            }
          }
          else{
            alert("Sorry, try again");
            $('#error').html("");
            $('#error').addClass('hidden');
            resetGame();
          }
        }, 1500);
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
