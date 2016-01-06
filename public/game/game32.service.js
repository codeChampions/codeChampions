(function() {
  'use strict';

  angular
  .module('game')
  .factory('SpaceGame2Service', function($http, $location, $window, _){

    var winner = new Audio('../../sounds/winner.m4a');
    var tryAgain = new Audio('../../sounds/tryagain.m4a');

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
      game.load.image('bullet', 'assets/spr_bullet_strip04.png', 32, 32);
      game.load.image('kaboom', 'assets/exload01_2.png', 10, 10);
    };

    var create = function() {
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.add.sprite(0, 0, 'sky');

      player = game.add.sprite(32, game.world.height - 150, 'ship');

      game.physics.arcade.enable(player);

      bullets = game.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
      bullets.createMultiple(10, 'bullet');
      bullets.scale.set(1, 1);
      bullets.setAll('outOfBoundsKill', true);
      bullets.setAll('checkWorldBounds', true);

      //  Player physics properties.
      player.body.bounce.y = 0.2;
      player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;

      aliens = game.add.group();
      aliens.enableBody = true;
      aliens.physicsBodyType = Phaser.Physics.ARCADE;

         createAliens();

      explosions = game.add.group();
      explosions.createMultiple(100, 'kaboom');
      explosions.forEach(setupInvader, this);

      cursors = this.input.keyboard.createCursorKeys();
    };

    var createAliens = function() {
        for (var y = 0; y < 1; y++) {
          for (var x = 0; x < 1; x++) {
            var alien = aliens.create(x * 200, y * 200, 'aliens');
            alien.anchor.setTo(0.5, 0.5);
            alien.play('fly', 10, true);
            alien.body.moves = false;
            livingEnemies++;
          }
        }
        aliens.x = 250;
        aliens.y = 80;
    };

    var scanForEnemy = function(){
      if(livingEnemies > 0){
        return true;
      }
      else{
        return false;
      }
    };

    var scanForward = function(){
      var alienPos = aliens.x;
      var playerPos = player.body.x;
      if(alienPos + 20 >= playerPos && alienPos -20 <= playerPos){
        return true;
      }
      else{
        return false;
      }
    };

    var setupInvader = function(invader){
        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
    };

    var descend = function() {
        aliens.y += 10;
    };

    var firing = false;
    var shotsFired = 0;
    var fireLaser = function() {
       //  Grab the first bullet we can from the pool
       var bullet = bullets.getFirstExists(false);
       if (bullet) {
           //  And fire it
           bullet.reset(player.x, player.y + 8);
           bullet.body.velocity.y = -400;
           bulletTime = game.time.now + 200;
           firing = true;
           shotsFired++;
       }
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
      leftMove = true;
    };

    var rightMove = false;
    var numRight = 0;


    var mobilizeRight = function(amount){
        rightMove = true;
    };

    var attackRight = function(){
      mobilizeRight();
      setTimeout(function(){
        fireLaser();
      }, 1500);
    };

    var attackLeft = function(){
      moveLeft();
      setTimeout(function(){
        fireLaser();
      }, 1500);
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
      if (rightMove) {
       player.x += 2;
       player.animations.play('right', 10, true);
       rightMove = false;
     }
     if (leftMove) {
       player.x -= 2;
       player.animations.play('left', 10, true);
       leftMove = false;
     }
     game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
    };


    var game;
    var gameSet = function(){
        game = new Phaser.Game(600, 400, Phaser.AUTO, 'spaceGame', { preload: preload, create: create, createAliens: createAliens, setupInvader: setupInvader, update: update });
    };
    gameSet();

    var resetGame = function(){
      $('canvas').remove();
      game.world.shutdown();
      game.destroy();
      gameSet();
      shotsFired = 0;
      $('#error').html("");
      $('#error').addClass('hidden');
      $('#runButton').removeClass('hidden');
      $('#resetButton').addClass('hidden');
      $('#nextLessonButton').addClass('hidden');
    };

    var goNext = function(){
      $location.path('/lesson33');
      resetGame();
    };

    var run = function(input){
        try{
          eval(input);
        }
        catch(error){
          $('#error').removeClass('hidden');
          $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+error);
          tryAgain.play();
          $('#runButton').addClass('hidden');
          $('#resetButton').removeClass('hidden');
        }
        setTimeout(function(){
          try {
              if (player.body.x <50) throw "You did not move correctly!";
              if (shotsFired > 0) throw "You were supposed to pilot the Space Avenger!";
              if (!/else/.test(input)) throw "You don't have an else statement!";
          }
          catch(err){
            console.log(err);
            $('#error').removeClass('hidden');
            $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+err);
          }
          finally {
            //winning condition and what happens
            if(player.body.x > 50 && shotsFired === 0 && /else/.test(input)) {
              putProgress();
              winner.play();
              game.destroy();
              $('#runButton').addClass('hidden');
              $('#nextLessonButton').removeClass('hidden');
              $('#gameSuccess').removeClass('hidden');
              $('#gameSuccess').html('<span class="glyphicon glyphicon-star"></span> Well Done, Code Champion!');
            }
            //losing condition and what happens
            else {
              tryAgain.play();
              $('#runButton').addClass('hidden');
              $('#resetButton').removeClass('hidden');
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
        game3_2Code: code,
      };
      return $http.post(putGameCode, obj);
    };
    //route to increment user's progress on server
    var incrProgressUrl = '/incrementProgress3/';
    var putProgress = function(){
      var currentGame = "2";
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
