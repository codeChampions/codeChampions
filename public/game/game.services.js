(function() {
  'use strict';

  angular
    .module('game')
    .factory('Game1Service', function($http, $location, _){
      var setGame = function(){
        $('#x').css('left', '10px');
        $('#x').css('top', '60px');
      };

      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves =0;

      var moveLeft = function(){
        if(posLeft>0){
        $('#char').animate({left: "-=50"}, {duration: 500});
        posLeft -=50;
        left++;
        numMoves++;
      }
      };

      var moveRight = function(){
        if(posLeft < 250){
        $('#char').animate({left: "+=50"}, {duration: 500});
        posLeft +=50;
        right++;
        numMoves++;
      }
      };

      var moveUp = function(){
        if(posUp > 0){
        $('#char').animate({top: "-=50"}, {duration: 500});
        posUp -= 50;
        up++;
        numMoves++;
      }
      };

      var moveDown = function(){
        if(posUp < 150){
        $('#char').animate({top: "+=50"}, {duration: 500});
        posUp += 50;
        down++;
        numMoves++;
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
      };

      var run = function(input){

        try{
          eval(input);
          if(numMoves > 1) throw "You are using too many steps to get to the destination.";
          if(down != 1) throw "You need to move down once";
          if(right !== 0) throw "You do not need to move right!";
          if(up > 0) throw "You do not need to move up!";
          if(left > 0) throw "You do not need to move left!";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
        if($('#char').position().top === 50 && $('#char').position().left === 0){
        //we succeeeded so we put update the progress
        putProgress();
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/lesson1');
          resetGame();
        }
        else{
        resetGame();
      }

      }
      else{
        $('#char').stop();
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        resetGame();

      }}, 600);

      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      var incrProgressUrl = '/incrementProgress ';
      var putProgress = function(){
        var currentGame = 1;
        return $http.post(incrProgressUrl + "/" + currentGame);
      };

      return{
        setGame: setGame,
        getCode: getCode,
        putCode: putCode,
        run: run,
      };
    })
    .factory('Game2Service', function($http, $location, _){
      var setGame = function(){
        $('#x').css('left', '100px');
        $('#x').css('top', '0px');
      };

      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves =0;

      var moveLeft = function(){
        if(posLeft>0){
        $('#char').animate({left: "-=50"}, {duration: 500});
        posLeft -=50;
        left++;
        numMoves++;
      }
      };

      var moveRight = function(){
        if(posLeft < 250){
        $('#char').animate({left: "+=50"}, {duration: 500});
        posLeft +=50;
        right++;
        numMoves++;
      }
      };

      var moveUp = function(){
        if(posUp > 0){
        $('#char').animate({top: "-=50"}, {duration: 500});
        posUp -= 50;
        up++;
        numMoves++;
      }
      };

      var moveDown = function(){
        if(posUp < 150){
        $('#char').animate({top: "+=50"}, {duration: 500});
        posUp += 50;
        down++;
        numMoves++;
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
      };

      var run = function(input){

        try{
          eval(input);
          if(numMoves > 2) throw "You are using too many steps to get to the destination.";
          if(down >0) throw "You do not need to move down!";
          if(right !== 2) throw "You are not moving right the correct amount";
          if(up > 0) throw "You do not need to move up!";
          if(left > 0) throw "You do not need to move left!";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        //we succeeeded so we put update the progress
        putProgress();
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/game');
          resetGame();
        }
        else{
        resetGame();
      }

      }
      else{
        $('#char').stop();
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        resetGame();

      }}, 1200);

      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      var incrProgressUrl = '/incrementProgress ';
      var putProgress = function(){
        var obj = {currentGame: 2};
        return $http.post(incrProgressUrl, obj);
      };

      return{
        setGame: setGame,
        getCode: getCode,
        putCode: putCode,
        run: run,
      };
    })
    .factory('GameService', function($http, $location, _){
      var posLeft = 0;
      var posUp = 0;
      var left = 0;
      var right = 0;
      var up = 0;
      var down = 0;
      var numMoves =0;

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
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        //we succeeeded so we put update the progress
        putProgress();
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/lesson1');
          resetGame();
        }
        else{
        resetGame();
      }

      }
      else{
        $('#char').stop();
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        resetGame();

      }}, 3000);

      };

      var game1Code = '/getGameCode';

      var getCode = function() {
        return $http.get(game1Code);
      };

      var putGameCode = '/putGameCode';

      var putCode = function(code) {
        var obj = {
          game1Code: code,
        };
        return $http.post(putGameCode, obj);
      };
      var incrProgressUrl = '/incrementProgress ';
      var putProgress = function(){
        var obj = {currentGame: 3};
        return $http.post(incrProgressUrl, obj);
      };
      var setGame = function(){
        $('#x').css('left', '150px');
        $('#x').css('top', '100px');
      };
      return {
        run: run,
        getCode: getCode,
        putCode: putCode,
        setGame: setGame
      };
    })
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
