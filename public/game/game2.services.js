(function() {
  'use strict';

  angular
    .module('game')
    .factory('Game2_1Service', function($http, $window, $location, _){
      //set audio
      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');
      //set variables
      var animal1="";
      var animal2="";
      var animal3="";
      var animal4="";
      //go to next lesson or game
      var goNext = function(){
        $location.path('/game22');
        resetGame();
      };
      //remove error message and change buttons
      var resetGame = function(){
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
      };

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
          //winning conditions
          if(animal1.toLowerCase() ==="senor bacon" && animal2.toLowerCase() ==="pascal the penguin" && animal3.toLowerCase() ==="owlie" && animal4.toLowerCase() ==="thomas the turtle"){
            putProgress();
            winner.play();
            $('#runButton').addClass('hidden');
            $('#nextLessonButton').removeClass('hidden');
            $('#gameSuccess').removeClass('hidden');
            $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');
          }
          //losing conditions
          else{
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');
          }
        }, 1000);
      };
      //game code getting
      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };
      //put user's code
      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_1Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      //increment user's progress. number is sent to check whether progress is incremented or if game has been completed before
      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "2";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
        goNext: goNext,
        resetGame: resetGame
      };
    })
    //Game 2 part 2
    .factory('Game2_2Service', function($http, $window, $location, _){
      //set game audio
      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');

      //set where user goes next
      var goNext = function(){
        $location.path('/lesson22');
        resetGame();
      };
      //reset errors and buttons
      var resetGame = function(){
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
      };
      //run code
      var run = function(input){
        var greeting="";
        var x="";
        var y="";
        var isFriendly="";
        try{
          eval(input);
          //throw errors
          if (greeting.toLowerCase() !="good morning") throw "greeting is not correct!";
          if (typeof x != "number") throw "x must be a number not a string!";
          if (typeof y != "number") throw "y must be a number not a string!";
          if ((x + y) != 5) throw "your numbers don't add up to 5!";
          if (isFriendly != true) throw "Doesn't the ghost look nice?"
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
          //winning
          if(greeting.toLowerCase() === "good morning" && (x + y) === 5 && typeof x === "number" && typeof y === "number" && isFriendly === true){
            putProgress();
            winner.play();
            $('#runButton').addClass('hidden');
            $('#nextLessonButton').removeClass('hidden');
            $('#gameSuccess').removeClass('hidden');
            $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');
          }
          //losing
          else{
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');
          }
        }, 1000);
      };
      //get code
      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };
      //put code
      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_2Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      //increment progress
      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "2";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
        goNext: goNext,
        resetGame: resetGame
      };
    })
    //set up game 2_3
    .factory('Game2_3Service', function($http, $window, $location, _){
      //set game audio
      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');
      //set intitial values
      var doors=[];
      var treasures = 0;
      //set gameplay function
      var openDoor = function(door){
        $('#door'+door).addClass('hidden');
        $('#behindDoor'+door).removeClass('hidden');
        doors.push(door);
        if(door === 1 || door === 4){
          treasures++;
        }
        console.log(doors);
      };
      //set next location
      var goNext = function(){
        $location.path('/lesson31');
        resetGame();
      };
      //reset pictures, error messages and buttons
      var resetGame = function(){
        //reset all doors
        for(var i=0; i<5; i++){
          $('#door'+i).removeClass('hidden');
          $('#behindDoor'+i).addClass('hidden');
        }
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
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
          //winning conditions
          if(doors.length === 2 && treasures === 2 && _.contains(doors, 1) && _.contains(doors, 4)){
            putProgress();
            winner.play();
            $('#runButton').addClass('hidden');
            $('#nextLessonButton').removeClass('hidden');
            $('#gameSuccess').removeClass('hidden');
            $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');
          }
          //losing conditions
          else{
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');
          }
        }, 1500);
      };
      //get code to start
      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };
      //put new code
      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game2_3Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      //increment progress
      var incrProgressUrl = '/incrementProgress2/';
      var putProgress = function(){
        var currentGame = "3";
        return $http.post(incrProgressUrl + currentGame);
      };


      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
        resetGame: resetGame,
        goNext: goNext
      };
    });
}());
