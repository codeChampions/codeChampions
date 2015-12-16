(function() {
  'use strict';

  angular
    .module('game')
    .factory('GameService', function($http, $location, _){
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
          if(numMoves > 5) throw "You are using too many steps to get to the destination. Remember you only have 3s.";
          if(down != 2) throw "You need to move down twice";
          if(right != 3) throw "You need to move right three times";
          if(up > 0) throw "You do not need to move up";
          if(left > 0) throw "You do not need to move left";
        }
        catch(err){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        setTimeout(function(){
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/for');
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

      var game1Code = '/getGame1Code';

      var getCode = function() {
        return $http.get(game1Code);
      };

      return {
        run: run,
        getCode: getCode
      };
    });

}());
