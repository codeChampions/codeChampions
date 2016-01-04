(function() {
  'use strict';

  angular
  .module('game')
  .factory('SpaceGame3Service', function($http, $location, $window){

    var player;
          var aliens;
          var bullets;
          var bulletTime = 0;
          var cursors;
          var fireButton;
          var explosions;
          var starfield;
          var firingTimer = 0;
          var stateText;
          var livingEnemies = 0;

        var preload = function() {


              game.load.image('sky', 'assets/Gamedevtuts_Free_Shmup_Sprites/Backgrounds/farback.gif');
              game.load.image('ship', 'assets/SpaceShipSmall.png', 32, 48);
              game.load.image('aliens', 'assets/ship (16).png', 40, 44);
              game.load.image('bullet', 'assets/projectile1.svg', 32, 32);
              game.load.image('kaboom', 'assets/exload01_2.png', 10, 10);
          };

          var create = function() {

          game.physics.startSystem(Phaser.Physics.ARCADE);

          game.add.sprite(0, 0, 'sky');

          player = game.add.sprite(225, game.world.height - 150, 'ship');

          game.physics.arcade.enable(player);

          bullets = game.add.group();
          bullets.enableBody = true;
          bullets.physicsBodyType = Phaser.Physics.ARCADE;
          bullets.createMultiple(30, 'bullet');
          bullets.setAll('anchor.x', 0.5);
          bullets.setAll('anchor.y', 1);
          bullets.setAll('outOfBoundsKill', true);
          bullets.setAll('checkWorldBounds', true);


          //  Player physics properties.
          player.body.bounce.y = 0.2;
          player.body.gravity.y = 300;
          player.body.collideWorldBounds = true;

          //  Our animations of walking
          // player.animations.add('left', [0, 1, 2, 3], true);
          // player.animations.add('right', [5, 6, 7, 8], true);
          // player.animations.add('up', [0, 1, 2, 3], true);
          // player.animations.add('down', [5, 6, 7, 8], true);

          aliens = game.add.group();
          aliens.enableBody = true;
          aliens.physicsBodyType = Phaser.Physics.ARCADE;

             createAliens();

          explosions = game.add.group();
          explosions.createMultiple(100, 'kaboom');
          explosions.forEach(setupInvader, this);


          cursors = this.input.keyboard.createCursorKeys();
          // fireButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        };

          var createAliens = function() {

              for (var y = 0; y < 1; y++)
              {
                  for (var x = 0; x < 1; x++)
                  {
                      var alien = aliens.create(x * 200, y * 200, 'aliens');
                      alien.anchor.setTo(0.5, 0.5);
                      // alien.animations.add('fly', [ 0, 1, 2, 3 ], true);
                      alien.play('fly', 10, true);
                      alien.body.moves = false;
                      livingEnemies++;
                  }
              }

              aliens.x = 50;
              aliens.y = 80;

              //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
              // var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

              //  When the tween loops it calls descend
              // tween.onLoop.add(descend, this);
          };

          var scanForEnemy = function(){
            console.log(aliens.x);
            var alienPos = aliens.x;
            var playerPos = player.body.x;
            if(alienPos + 20 >= playerPos && alienPos -20 <= playerPos){
              console.log("scanForEnemy", true);
              return true;
            }
            else{
              console.log(false);
              return false;
            }
          };

          var scanRight = function(){
            console.log(aliens.x);
            var alienPos = aliens.x;
            var playerPos = player.body.x;
            if(alienPos > playerPos - 25){
              console.log(true);
              return true;
            }
            else{
              console.log(false);
              return false;
            }
          };

          var scanLeft = function(){
            console.log(aliens.x);
            var alienPos = aliens.x;
            var playerPos = player.body.x;
            if(alienPos < playerPos - 25){
              console.log(true);
              return true;
            }
            else{
              console.log(false);
              return false;
            }
          };


        var setupInvader = function(invader){

            invader.anchor.x = 0.5;
            invader.anchor.y = 0.5;
            // invader.animations.add('kaboom');

        };

        var descend = function() {

            aliens.y += 10;

        };
        var firing = false;
        var shotsFired = 0;
        var fireLaser = function() {

           //  To avoid them being allowed to fire too fast we set a time limit
          // if (game.time.now > bulletTime)
          // {
               //  Grab the first bullet we can from the pool
               var bullet = bullets.getFirstExists(false);

               if (bullet)
               {
                   //  And fire it
                   bullet.reset(player.x, player.y + 8);
                   bullet.body.velocity.y = -400;
                   bulletTime = game.time.now + 200;
                   firing = true;
                   shotsFired++;
               }
           //}


        };

    var collisionHandler = function(bullet, alien, explosion) {

            //  When a bullet hits an alien we kill them both
            bullet.kill();
            alien.kill();
            livingEnemies--;

          var explosion = explosions.getFirstExists(false);
           explosion.reset(alien.body.x, alien.body.y);
           explosion.play('kaboom', 100, false, true);

           explosion.kill();

         };



      var resetBullet = function(bullet) {

            //  Called if the bullet goes out of the screen
            bullet.kill();

        };
        var leftMove = false;
        var numLeft = 0;
      var moveLeft = function(){
        // player.body.velocity.x = -150;
        leftMove = true;
        numLeft++;
      };

      var rightMove = false;
      var numRight = 0;


      var mobilizeRight = function(amount){
          rightMove = true;
          numRight++;
      };

      var attackRight = function(){
        mobilizeRight();
        setTimeout(function(){
          fireLaser();
        }, 1000);

    };

    var attackLeft = function(){
      moveLeft();
      setTimeout(function(){
        fireLaser();
      }, 1000);

  };

      var moveUp = function(){
        player.body.velocity.y = -150;
      };

      var moveDown = function(){
         player.body.velocity.y = 150;
      };

      var update = function() {

          player.body.velocity.x = 0;
          player.body.velocity.y = 0;
        //  console.log("updating");

          if (rightMove)
           {
              //  Move to the left
              console.log(numRight);
             player.body.velocity.x = 40000*numRight;
             console.log(numRight);
             console.log("once moved" + player.body.x);

            player.animations.play('right', 10, true);
            rightMove = false;
            numRight= 0;
           }
           if (leftMove)
            {
               //  Move to the left
               console.log(numLeft);
              player.body.velocity.x = -40000*numLeft;
              console.log(numLeft);
              console.log("once moved" + player.body.x);

             player.animations.play('left', 10, true);
             leftMove = false;
             numLeft= 0;
            }

          game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);

        };


    var game = new Phaser.Game(600, 400, Phaser.AUTO, 'spaceGame', { preload: preload, create: create, createAliens: createAliens, setupInvader: setupInvader, update: update });

    var resetGame = function(){
      player.body.x = 32;
      $('#error').html("");
      $('#error').addClass('hidden');
    };

    var run = function(input){

        console.log("starting " + player.body.x);

        eval(input);

        setTimeout(function(){
        try {
            if (player.body.x > 400) throw "You did not move correctly!";
            if (livingEnemies > 0) throw "You did not get the aliens!";
            if (shotsFired === 0) throw "You did not shoot the aliens!";
        }
        catch(err){
          console.log(err);
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
        }
        finally {
          //winning condition and what happens

          if(player.body.x < 200 && livingEnemies === 0 && shotsFired > 0  ){
            putProgress();
            //confirm move to next lesson

          var goTo = confirm("Congrats, you piloted the Space Avenger. Go to home?");
          if(goTo === true){
            console.log("in if");
            console.log($location.url());
            game.destroy();
            $window.location.assign('#/home');
            resetGame();
          }
          else{
            console.log("in else");

            resetGame();
          }
        }
        //losing condition and what happens
        else{
          alert("You failed to pilot the Space Avenger correctly. Try Again!")
          resetGame();
        }
      }
    },2000);

  };

    var game3Code = '/getGameCode';

    var getCode = function() {
      return $http.get(game3Code);
    };
    //route to update game code in user object on server
    var putGameCode = '/putGameCode';

    var putCode = function(code) {
      var obj = {
        game3_3Code: code,
      };
      return $http.post(putGameCode, obj);
    };
    //route to increment user's progress on server
    var incrProgressUrl = '/incrementProgress3/';
    var putProgress = function(){
      var currentGame = "3";
      return $http.post(incrProgressUrl + currentGame);
    };




    return {
      run: run,
      getCode: getCode,
      putCode: putCode
    };
});

}());
