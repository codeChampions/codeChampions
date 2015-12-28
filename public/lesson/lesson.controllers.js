(function() {
  'use strict';

  angular
    .module('lesson')
    .controller('LessonController', function($scope, $location, $timeout, LessonService){
        var vm = this;

        vm.getStatus = function(){
          LessonService.getStatus().then(function(res){
            vm.lesson1Progress = res.data.lesson1Progress;
            console.log(vm.lesson1Progress);
            vm.progress();
          });
        };
        vm.getStatus();
      //   vm.lessonsData =[
      //   {
      //     title:"Introduction",
      //     video:"https://www.youtube.com/embed/4J2rdLm5Z0k",
      //     img1: "../../images/codeEditor.png",
      //     openingP:"Welcome, future Code Champion, to the exciting world of programming. Before we can embark on our adventure,there are some things you should know.\nWe will be working in a language called JavaScript that is featured on many websites that you visit daily.\nLike any language, JavaScript has rules. As we progress through the courses, you'll learn more of the rules, but there are a few you should know to start.",
      //     li1: "JavaScript likes to be told when you're done with a certain action. That's why we end lines of code with a semi-colon (;) to tell it to move on to the next thing. Think of it like putting a period at the end of a sentence. Failure to put a semi-colon or putting the wrong punctuation can make your code go crazy and not work properly.",
      //     li2: "Spelling and capitalization matter. If you want access to something you need to make sure it is spelled correctly and that all letters are properly capitalized based on how it was defined. If you incorrectly try to access something, you will get an error saying it is 'undefined'.",
      //     link: '#/game',
      //     caption1: "Our shiny, wonderful Code Editor!"
      //   },
      //   {
      //     title:"What's Your Function",
      //     video:"https://www.youtube.com/embed/4J2rdLm5Z0k",
      //     img1: "../../images/movement.png",
      //     openingP:"In our everyday lives, we run programs without even knowing it. For instance, you might have a certain way that you brush your teeth every day. Let's say you put toothpaste on your toothbrush, brush the top for one minute, brush the bottom for one minute, spit out the toothpaste, and finally rinse your mouth. You can think of that entire process as a function called brushTeeth (In JavaScript, we like to use something called camel-case where we capitalize all words after the first one).\nJust like you tell your body to run your brushTeeth function, you have to tell a computer exactly what you want it to do. Computers aren't as smart as people, though, so you have to be extremely specific when it comes both telling them what to do and what order to do it in. JavaScript will perform actions one line at a time in the order given. JavaScript can be written in a text document or a special code editor like the one shown below that we'll be using on this site.",
      //     li1: "",
      //     li2: "",
      //     link: '#/game',
      //     caption1: "Typing moveRight(); will send your character to the right!"
      //   },
      // ];

      //setting the lesson data based on the url
      // vm.pickData = function(){
      //   var loc = $location.url();
      //   switch (loc) {
      //     case '/lesson1':
      //     vm.lessonData = vm.lessonsData[0];
      //       break;
      //     case '/lesson2':
      //     console.log(loc);
      //       vm.lessonData = vm.lessonsData[1];
      //         break;
      //     default:
      //
      //   }
      // };
      //vm.pickData();
        vm.goToLesson1 = function(){
          switch (vm.lesson1Progress) {
            case 0:
              $location.path('/lesson');
              break;
            case 1:
              $location.path('/lesson1');
              break;
            case 2:
              $location.path('/game');
              break;
            default: $location.path('/404');
          }
        };

        vm.max = 100;

  vm.progress = function() {
    var value = Math.round(vm.lesson1Progress / 3*100);
    console.log(value);
    // var type;

    // if (value < 25) {
    //   type = 'success';
    // } else if (value < 50) {
    //   type = 'info';
    // } else if (value < 75) {
    //   type = 'warning';
    // } else {
    //   type = 'danger';
    // }

    // vm.showWarning = (type === 'danger' || type === 'warning');

    vm.dynamic = value;
    // vm.type = type;
  };

  // vm.randomStacked = function() {
  //   vm.stacked = [];
  //   var types = ['success', 'info', 'warning', 'danger'];
  //
  //   for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
  //       var index = Math.floor((Math.random() * 4));
  //       vm.stacked.push({
  //         value: Math.floor((Math.random() * 30) + 1),
  //         type: types[index]
  //       });
  //   }
  // };
  // vm.randomStacked();


    });


}());
