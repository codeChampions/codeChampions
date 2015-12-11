(function() {
  'use strict';

  angular
    .module('game')
    .factory('GameService', function($http, $location, _){
      var posLeft = 0;
      var posUp = 0;

      var moveLeft = function(){
        if(posLeft>0){
        $('#char').animate({left: "-=50"}, {duration: 500});
        posLeft -=50;
      }
      };

      var moveRight = function(){
        if(posLeft < 250){
        $('#char').animate({left: "+=50"}, {duration: 500});
        posLeft +=50;
      }
      };

      var moveUp = function(){
        if(posUp > 0){
        $('#char').animate({top: "-=50"}, {duration: 500});
        posUp -= 50;
      }
      };

      var moveDown = function(){
        if(posUp < 150){
        $('#char').animate({top: "+=50"}, {duration: 500});
        posUp += 50;
      }
      };

      var run = function(input){
        eval(input);
        setTimeout(function(){
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/for');
        }
        else{
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
      }

      }
      else{
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;

      }}, 3000);

      };


      return {
        run: run,
      };
    });

}());
