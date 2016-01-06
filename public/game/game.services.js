(function() {
  'use strict';

  angular
    .module('game')
    .factory('Game1_1Service', function($http, $location, _){

      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');

      //set up current game coordinates
      var setGame = function(){
        $('#x').css('left', '10px');
        $('#x').css('top', '60px');
      };
      // initialize values
      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves =0;

      //move the character left
      var moveLeft = function(){
        left++;
        numMoves++;
        if(posLeft>0){
          posLeft -=50;
          $('#char').animate({left: "-=50"}, {duration: 500});
        }
      };

      //move the character right
      var moveRight = function(){
        right++;
        numMoves++;
        if(posLeft < 250){
          posLeft +=50;
          $('#char').animate({left: "+=50"}, {duration: 500});
        }
      };
      //move the character up
      var moveUp = function(){
        up++;
        numMoves++;
        if(posUp > 0){
          posUp -= 50;
          $('#char').animate({top: "-=50"}, {duration: 500});

        }
      };
      //move the character down
      var moveDown = function(){
        down++;
        numMoves++;
        if(posUp < 150){
          posUp += 50;
          $('#char').animate({top: "+=50"}, {duration: 500});
        }
      };
      //reset the game to initial values after running
      var resetGame = function(){
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        down = 0;
        right = 0;
        left = 0;
        top = 0;
        numMoves = 0;
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
      };

      var goNext = function(){
        $location.path('/lesson12');
        resetGame();
      };

      //run the code
      var run = function(input){
        //look for errors
        try{
          eval(input);
          if(numMoves > 1) throw "You are using too many steps to get to the destination.";
          if(down != 1) throw "You need to move down once";
          if(right !== 0) throw "You do not need to move right!";
          if(up > 0) throw "You do not need to move up!";
          if(left > 0) throw "You do not need to move left!";
        }
        //send errors
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
        //winning condition
          if(numMoves === 1 && down === 1){
          //we succeeeded so we put update the progress
          putProgress();
          winner.play();
          $('#runButton').addClass('hidden');
          $('#nextLessonButton').removeClass('hidden');
          $('#gameSuccess').removeClass('hidden');
          $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');

        }
        //losing condition
          else{
            $('#char').stop();
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');

          }
        }, 600);

      };
      //route to grab code for game
      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };
      // route to send updated code to be stored in the user object in the server
      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1_1Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      // route to update progress in lesson 1
      var incrProgressUrl = '/incrementProgress1/';

      var putProgress = function(){
        var currentGame = '1';
        return $http.post(incrProgressUrl + currentGame);
      };

      return{
        setGame: setGame,
        getCode: getCode,
        putCode: putCode,
        run: run,
        resetGame: resetGame,
        goNext: goNext
      };
    })
    //Game 1 part 2
    .factory('Game1_2Service', function($http, $location, _){
      //set up game 1 part 2

      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');

      var setGame = function(){
        $('#x').css('left', '100px');
        $('#x').css('top', '0px');
      };
      //initialize values
      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves =0;
      //move character left
      var moveLeft = function(){
        left++;
        numMoves++;
        if(posLeft>0){
          posLeft -=50;
          $('#char').animate({left: "-=50"}, {duration: 500});
        }
      };
      //move character right
      var moveRight = function(){
        right++;
        numMoves++;
        if(posLeft < 250){
          posLeft +=50;
          $('#char').animate({left: "+=50"}, {duration: 500});
        }
      };
      //move character up
      var moveUp = function(){
        up++;
        numMoves++;
        if(posUp > 0){
          posUp -= 50;
          $('#char').animate({top: "-=50"}, {duration: 500});
        }
      };
      //move character down
      var moveDown = function(){
        down++;
        numMoves++;
        if(posUp < 150){
          posUp += 50;
          $('#char').animate({top: "+=50"}, {duration: 500});
        }
      };
      //reset game to initial state after running
      var resetGame = function(){
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        down = 0;
        right = 0;
        left = 0;
        top = 0;
        numMoves = 0;
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
      };

      var goNext = function(){
        $location.path('/game13');
        resetGame();
      };
      var run = function(input){
        //run code and throw errors
        try{
          eval(input);
          if(numMoves > 2) throw "You are using too many steps to get to the destination.";
          if(down >0) throw "You do not need to move down!";
          if(right !== 2) throw "You are not moving right the correct amount";
          if(up > 0) throw "You do not need to move up!";
          if(left > 0) throw "You do not need to move left!";
        }
        //display errors
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
        //check winning condition
          if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
            //we succeeeded so we put update the progress
            putProgress();
            winner.play();
            $('#runButton').addClass('hidden');
            $('#nextLessonButton').removeClass('hidden');
            $('#gameSuccess').removeClass('hidden');
            $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');
          }
        //set losing condition
          else{
            $('#char').stop();
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');


          }
        }, 1200);

      };
      //route to get game code
      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };
      //route to update game code in user object on server
      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1_2Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      //route to increment user's progress on server
      var incrProgressUrl = '/incrementProgress1/';
      var putProgress = function(){
        var currentGame = "2";
        return $http.post(incrProgressUrl + currentGame);
      };

      return{
        setGame: setGame,
        getCode: getCode,
        putCode: putCode,
        run: run,
        resetGame: resetGame,
        goNext: goNext
      };
    })
    //set up game 1_3
    .factory('Game1_3Service', function($http, $location, _){
      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves = 0;

      var winner = new Audio('../../sounds/winner.m4a');
      winner.volume = 0.4;
      var tryAgain = new Audio('../../sounds/tryagain.m4a');

      var moveLeft = function(){
        left++;
        numMoves++;
        if(posLeft>0){
        $('#char').animate({left: "-=50"}, {duration: 500});
        posLeft -=50;

      }
      };

      var moveRight = function(){
        right++;
        numMoves++;
        if(posLeft < 250 && (posUp !== 0 || posLeft !== 0)){
        $('#char').animate({left: "+=50"}, {duration: 500});
        posLeft +=50;

      }
      };

      var moveUp = function(){
        up++;
        numMoves++;
        if(posUp > 0){
        $('#char').animate({top: "-=50"}, {duration: 500});
        posUp -= 50;

      }
      };

      var moveDown = function(){
        down++;
        numMoves++;
        if(posUp < 150){
        $('#char').animate({top: "+=50"}, {duration: 500});
        posUp += 50;

      }
      };
      var resetGame = function(){
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        down = 0;
        right = 0;
        left = 0;
        top = 0;
        numMoves = 0;
        $('#error').html("");
        $('#error').addClass('hidden');
        $('#runButton').removeClass('hidden');
        $('#resetButton').addClass('hidden');
        $('#nextLessonButton').addClass('hidden');
      };

      var goNext = function(){
        $location.path('/lesson21');
        resetGame();
      };

      var run = function(input){

        try{
          eval(input);
          if(numMoves > 5) throw "You are using too many steps to get to the destination. Remember you only have 3s.";
          if(down != 2) throw "You need to move down twice";
          if(right != 3) throw "You need to move right three times";
          if(up > 0) throw "You do not need to move up";
          if(left > 0) throw "You do not need to move left";
          if(down === 2 && right === 3 && posLeft !== 150) throw "Watch out for that obstacle";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
          if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left && numMoves === 5){
            //we succeeeded so we put update the progress
            putProgress();
            winner.play();
            $('#runButton').addClass('hidden');
            $('#nextLessonButton').removeClass('hidden');
            $('#gameSuccess').removeClass('hidden');
            $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span>Well Done, Code Champion!');

          }
          //failing code
          else{
            $('#char').stop();
            tryAgain.play();
            $('#runButton').addClass('hidden');
            $('#resetButton').removeClass('hidden');

          }
        }, 3000);

      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1_3Code: code,
        };
        return $http.post(putGameCode, obj);
      };

      var incrProgressUrl = '/incrementProgress1/';
      var putProgress = function(){
        var currentGame = "3";
        return $http.post(incrProgressUrl + currentGame);
      };

      var setGame = function(){
        $('#x').css('left', '150px');
        $('#x').css('top', '100px');
      };

      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
        setGame: setGame,
        resetGame: resetGame,
        goNext: goNext
      };
    })
    //game playground for development
    .factory('GamePlayService', function($http, $location, _){

      var moveLeft = function(){
        $('#char').animate({left: "-=50"}, {duration: 500});
      };

      var moveRight = function(){
        $('#char').animate({left: "+=50"}, {duration: 500});
      };

      var moveUp = function(){
        $('#char').animate({top: "-=50"}, {duration: 500});
      };

      var moveDown = function(){
        $('#char').animate({top: "+=50"}, {duration: 500});
      };

      var run = function(input){
        eval(input);
      };


      var setGame = function(){
        $('#char').css('left', '120px');
        $('#char').css('top', '80px');
      };
      return {
        run: run,
        setGame: setGame
      };
    });


}());
