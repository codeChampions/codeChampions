package com.codechampions.controllers;

import com.codechampions.entities.Classroom;
import com.codechampions.entities.Message;
import com.codechampions.entities.User;
import com.codechampions.services.ClassroomRepository;
import com.codechampions.services.MessageRepository;
import com.codechampions.services.UserRepository;
import com.codechampions.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */

@RestController
public class CodeChampionsController {
    @Autowired
    UserRepository users;
    @Autowired
    MessageRepository messages;
    @Autowired
    ClassroomRepository classrooms;

    public String game1_1InitialCode = ("//Javascript goes here \n moveDown();");
    public String game1_2InitialCode = ("//Javascript goes here \n");
    public String game1_3InitialCode = ("//Javascript goes here \n");

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException, FileNotFoundException {
        User admin = users.findOneByUsername("Admin");
        if (admin == null) {
            admin = new User();
            admin.username = "Admin";
            admin.password = PasswordHash.createHash("Admin");
            admin.accessType = User.AccessType.ADMIN;
            admin.game1_1Code = "This is Admin's game 1 code!";
            admin.lesson1Progress = 0;
            users.save(admin);
        }

            Message message = new Message(1, -1, "Game Message Board", admin);
            Message message1 = new Message(2, -1, "Classroom Message Board", admin);
            Message message2 = new Message(3, -1, "Lesson Message Board", admin);
            Message message3 = new Message(4, 1, "Hello Game Board!", admin);
            Message message4 = new Message(5, 2, "Hello Classroom Board!", admin);
            Message message5 = new Message(6, 1, "Hey Game Board!", admin);
            Message message6 = new Message(7, 6, "Whats Up! This is a reply to a reply", admin);
            messages.save(message);
            messages.save(message1);
            messages.save(message2);
            messages.save(message3);
            messages.save(message4);
            messages.save(message5);
            messages.save(message6);
    }

    @RequestMapping(path = "/newUser", method = RequestMethod.POST)
    public User createUser(HttpServletResponse response, @RequestBody User tempUser, HttpSession session) throws Exception {
        if (tempUser.username == null || tempUser.password == null) {
            response.sendError(403, "Please enter both a username and password!");
        } else if (users.findOneByUsername(tempUser.username) != null) {
            response.sendError(404, "Username already exists");
        } else {
            session.setAttribute("username", tempUser.username);
            User user = new User();
            user.username = tempUser.username;
            user.password = PasswordHash.createHash(tempUser.password);
            user.email = tempUser.email;
            user.accessType = tempUser.accessType;
            users.save(user);
            System.out.println("Success!");
            return user;
        }
        return null;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User login(HttpServletResponse response, HttpSession session, @RequestBody User tempUser) throws Exception {
        User user = users.findOneByUsername(tempUser.username);
        session.setAttribute("username", tempUser.username);
        session.getAttribute(tempUser.username);

        if (tempUser.username == null || tempUser.password == null) {
            response.sendError(404, "Please enter both a username and password!");
        } else if (user == null) {
            response.sendError(403, "Username does not exist!");
        } else if (!PasswordHash.validatePassword(tempUser.password, user.password)) {
            response.sendError(405, "Wrong Password!");
        }
        //else if (session.getAttribute("username") != tempUser.username) {
         //   response.sendError(405, "There is already an active session!");
       // }
        else {
            System.out.println("Success!");
            return user;
        }
        return null;
    }

    @RequestMapping("/logout")
    public void logout(HttpSession session) throws IOException {
        session.invalidate();
        System.out.println("Successfully Logged Out!");
    }

    @RequestMapping("/users")
    public List<User> users() {
        return (List<User>) users.findAll();
    }

    @RequestMapping(path = "/editUser/{id}", method = RequestMethod.PUT)
    public void editUser(HttpSession session, HttpServletResponse response, @RequestBody User tempUser) throws IOException, InvalidKeySpecException, NoSuchAlgorithmException {
        session.getAttribute(tempUser.username);
        User user = users.findOne(tempUser.id);

        if (tempUser.username == null) {
            response.sendError(403, "Not logged in.");
        } else if (users.findOneByUsername(tempUser.username) != null) {
            response.sendError(404, "Username already exists!");
        } else {
            user.username = tempUser.username;
            users.save(user);
        }
    }

    @RequestMapping("/messages")
    public List<Message> messages() {
        return (List<Message>) messages.findAll();
    }

    @RequestMapping("/showGameBoard")
        public Message gameMessage() {
            return messages.findOne(1);
        }

    @RequestMapping("/showClassroomBoard")
    public Message classroomMessage() {
        return messages.findOne(2);
    }

    @RequestMapping("/showLessonBoard")
    public Message lessonMessage() {
        return messages.findOne(3);
    }

    @RequestMapping("/showReplies/{id}")
    public List<Message> showReplies(@PathVariable("id") int id) {
        return messages.findAllByReplyId(id);
    }

    @RequestMapping("/addMessage/{id}")
    public Message addMessage(HttpServletResponse response, HttpSession session, @PathVariable("id") int id, @RequestBody Message tempMessage) throws IOException {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        Message message = messages.findOne(id);

        if (user == null) {
            response.sendError(403, "You are not logged in!");
            return null;
        }
        Message newMessage = new Message();
        newMessage.replyId = message.id;
        newMessage.messageText = tempMessage.messageText;
        newMessage.user = user;
        messages.save(newMessage);
        System.out.println("New message added!");
        return newMessage;
    }

    @RequestMapping("/getGameCode")
    public User user(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        if (user.game1_1Code == null) {
            user.game1_1Code = game1_1InitialCode;
            return user;
        }
        if (user.game1_2Code == null) {
            user.game1_2Code = game1_2InitialCode;
            return user;
        }
        if (user.game1_3Code == null) {
            user.game1_3Code = game1_3InitialCode;
            return user;
        }
        else {
            return user;
        }
    }

    @RequestMapping("/putGameCode")
    public void putGameCode(HttpSession session, @RequestBody User tempUser) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        try {
            user.game1_1Code = tempUser.game1_1Code;
            user.game1_2Code = tempUser.game1_2Code;
            user.game1_3Code = tempUser.game1_3Code;
            users.save(user);
        }
        catch (Exception e) {
        }
    }

    @RequestMapping("/getLesson1Progress")
    public User user2(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user2 = users.findOneByUsername(username);
        return user2;
    }

    @RequestMapping("/putLesson1Progress")
    public void putLesson1Progress(HttpSession session, @RequestBody User tempUser) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        user.lesson1Progress = tempUser.lesson1Progress;
        users.save(user);
    }

    @RequestMapping("/incrementProgress/{id}")
    public void incrementProgress(HttpSession session, @PathVariable("id") int id) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        if (user.lesson1Progress < id) {
            user.lesson1Progress++;
            users.save(user);
            System.out.println("Progress Incremented!");
        } else {
            System.out.println("Game is completed!");
        }

    }

    @RequestMapping("/createClassroom")
    public Classroom classroom (HttpSession session, HttpServletResponse response, @RequestBody Classroom tempClass) throws IOException {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        if (user.accessType == User.AccessType.TEACHER) {
            Classroom classroom = new Classroom();
            classroom.className = tempClass.className;
            classroom.owner = user;

            Message newBoard = new Message();
            newBoard.replyId = -1;
            newBoard.messageText = String.format("%s Message Board", classroom.className);
            newBoard.user = user;
            messages.save(newBoard);

            classroom.messageBoard = newBoard;
            classrooms.save(classroom);
            return classroom;
        } else {
            response.sendError(403, "Only teachers can create a classroom");
        }
        return null;
    }

    @RequestMapping("/addStudent/{id}")
    public void addStudent(HttpServletResponse response, @PathVariable("id") int id, @RequestBody User tempUser) throws IOException {
        Classroom classroom = classrooms.findOne(id);
        User user = users.findOneByUsername(tempUser.username);
        if (user.accessType == User.AccessType.STUDENT) {
            classroom.classStudents.add(user);
            classrooms.save(classroom);
        }
        else {
            response.sendError(403, "Only students can be added to a classroom");
        }
    }

    @RequestMapping("/classrooms")
    public List<Classroom> classrooms() {
        return (List<Classroom>) classrooms.findAll();
    }

    @RequestMapping("/myClasses")
    public List<Classroom> myClasses(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        return classrooms.findAllByOwner(user);
    }

    @RequestMapping("myClasses/{id}")
    public Classroom myClass(@PathVariable("id") int id) {
        Classroom classroom = classrooms.findOne(id);
        return classroom;
    }
}