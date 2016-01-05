Code Champions

Terry Kennair
Jack Neligan
Kellee-Morgan Witherspoon

Coding education app aimed at middle/high school students that provides an intermediate alternative between block based learning sites (i.e. Scratch) and dry code only sites (i.e. Code Academy). Teachers can create classrooms and monitor students’ progress in mini-games and an overarching game weighted by total progress.

Technologies:

Angular
UI Router
HTML/CSS
JavaScript
Canvas/PhaserJs
LibGDX (+ GWT)
H2 + Spring (Mongo)
Piskel, Sprites
Ace Editor (Code Mirror)
Photoshop

Features (MVP):

User Authentication (Admin, Teacher, Student) and Account Creation
Progress Tracking
Classrooms
Multiple Lessons (Text-based/Video)
Minimum 2 games
Code Editor (JavaScript)
Message Boards

Roadmap:

Java lessons
Teachers upload notes/games
Game making sandbox (Phaser sandbox)
Trophies for finishing lessons/coding X lines
Facebook Integration to post achievements
Most Popular Games/Lessons
People playing now
Private Messages
Funny 404 Page
User Avatars


User Stories

Name: User Authentication and Account Creation

Size: Medium

Value Statements: As a user I want to be able to maintain a personal account where I can leave and return to continue work without loss.

Assumptions:
Admins have @codechampions.org accounts.
No duplicate usernames.
Users have name, username, password, email, interests. (profile pic- roadmap)

Acceptance:
Sign-up by adults for under 13.
Distinguishes between admin, teacher, and student accounts and brings to corresponding homepage.
Ability to login and continue on previous progress/work.
Admin: Add/Delete/Edit Messages and Games. Teachers and Students can email questions/concerns/report bugs to admin @codechampions.org email addresses.
Teacher: Create Classrooms, Access to all lessons.
Student: Play Games, unable to skip around in lessons.
User Database




Name: Profile Editing/Deleting

Size: Small

Value Statements: As a user I want to be able to change my profile information or delete my account if I no longer want to use it.

Assumptions:
None.

Acceptance:
User can successfully edit/delete their profile saving changes to the database.
If a username is changed, the progress will carry over.
If a username is changed, the old username will become available again.


Name: Progress Tracking

Size: Medium

Value Statements:  As a user, I want to be able to return to lessons to continue working without losing my earlier work.

Assumptions:
User progress will be stored in a user database on the backend.
Students will have access to only their progress.
Teachers will have access to the progress of all their students.

Acceptance:
Users see their already typed in code when they restart a previously completed lesson.
Clicking on an in progress lesson will bring them to the next incomplete part.
User progress will unlock functionality in the LibGDX game.
Student progress is displayed to classrooms they belong to.
Users get trophies based on progress (roadmap).



Name: Classrooms

Size: Medium

Value Statements: As a teacher user I want to track my students’ progress and have a way to communicate with them. As a student user, I want a way to communicate with my teacher for help.

Assumptions:
Teachers have a special code(?) to distinguish them from students to allow them to create classrooms.

Acceptance:
Teachers have ability to create classrooms.
Students have ability to join classrooms.
Teachers can add students to a classroom.
Teachers can view students’ progress in a graph.
Teachers can add special notes to help their students with topics (roadmap).
Teacher can make a custom lesson plan from existing games (roadmap).
Teachers and students can communicate via message boards (roadmap).



Name: Multiple Lessons

Size: Large

Value Statements: As a user, I want the ability to learn a multitude of topics in one place.

Assumptions:
Lessons are in text and video form.
Admins can add lessons.

Acceptance:
Lessons should build upon one another.
User can choose between text or video.
Lessons should be challenging enough to push the student, but easy enough for them to accomplish the work/reach their goals on their own.
Message board is functional to ask questions/seek help if necessary (road-map).
Lessons have links to additional information for students seeking to further their knowledge of a topic.


Name: Multiple Games

Size: Large

Value Statements: As a user, I want variety to keep me engaged in the learning process.

Assumptions:
Each lesson has its own minigame.
There is a larger game dependent on the progress in lessons/minigames.
The game builds upon the knowledge taught in the corresponding lesson successfully.
Smaller games built on Canvas/Phaser.
Larger game built in LibGDX.

Acceptance:
Game is fun. All 3 admins concur.
Game responds to user changes in the REPL.
Game recognizes success/failure and sends user to appropriate next step.
Users can access hints/note to help complete the game.



Name: Code Editor

Size: Large

Value Statements: As a user, I want the ability to edit/see the results of my coding in real-time, so I can get quick feedback.  

Assumptions:
The editor will interact with the games.
Ace Editor will be used for input.
The initial editor will be in JavaScript.
Future Java editor will be sought (roadmap).

Acceptance:
Users can successfully add code to the editor.
The game functions are controlled by the editor.
Users can reset the code.
Correct answers can be tested for validity (front end testing. wrap code in try-catch?. Backend- nashorn)
Student’s entered code will reload if they revisit a lesson.
Safeguards are in place to prevent harmful code from being entered by users.


Name: Message Boards

Size: Medium/Large

Value Statements: As a user, I want the ability to ask questions about lessons and communicate with fellow users to gain additional insight into the topics.

Assumptions:
Entry displays username and their message.

Acceptance:
Users can post to message boards in lessons and in their classrooms.
Admins can delete messages if content is inappropriate.
Users can edit messages that they posted (roadmap).
Users can delete messages that they posted.
Users can reply to other messages to create a chain, or they can start a new chain.

Game Ideas

Name: Sandwich Maker

Lesson: Order of operations, functions

How to Play: User creates a sandwich where order matters (ingredients between the bread).



Name: Buried treasure

Lesson: Loops

How to Play: User must move their character from a starting position to a spot marked ‘x’ using prebuilt functions. Game then expands to show how to use for loops to avoid repetition.



Name: Space Avengers

Lesson: Order of operations, functions, variables, If statements

How to Play: User must move the space-ship by using the arrow keys to shoot down the aliens. The user will use prebuilt functions to give the arrows functionality.


Name:  What’s behind door #2?

Lesson: Arrays

How to Play: Users guide their character to doors based on indices of arrays to learn array ordering.



Name:  Untitled Card Game

Lesson: Objects

How to Play: Students learn about objects, keys, and values by playing a card game.


Name:  Super Awesome Education Game

Lesson: Everything

How to Play: Either an RPG or Side-scroller.  When a user first makes an account, the character will be too weak to actually play the game, so you have to complete other lessons to build up your character.  The more lessons you complete, the stronger your character and the further you can go in the game.  At certain points in the game, you will have to answer review questions based on the site’s lessons to proceed.
