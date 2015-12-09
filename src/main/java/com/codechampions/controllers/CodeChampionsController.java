package com.codechampions.controllers;

import com.codechampions.entities.User;
import com.codechampions.services.UserRepository;
import com.codechampions.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

/**
 * Created by Jack on 12/9/15.
 */

@RestController
public class CodeChampionsController {
    @Autowired
    UserRepository users;

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException, FileNotFoundException {
        User admin = users.findOneByUsername("Admin");
        if (admin == null) {
            admin = new User();
            admin.username = "Admin";
            admin.password = PasswordHash.createHash("Admin");
            users.save(admin);
        }
    }

    @RequestMapping("/create-user")
    public void createUser(HttpServletResponse response, HttpSession session, String username, String password) throws IOException, InvalidKeySpecException, NoSuchAlgorithmException {
        User user = users.findOneByUsername(username);
        if (user == null) {
            user.username = username;
            user.password = PasswordHash.createHash(password);
            users.save(user);
            session.setAttribute("username", username);
            response.sendRedirect("/");
        }
        else {
            response.sendRedirect("/login");
        }
    }

    @RequestMapping("/login")
    public void login(HttpServletResponse response, HttpSession session, String username, String password) throws Exception {
        User user = users.findOneByUsername(username);
        if (user == null) {
            response.sendRedirect("/create-user");
        }

        if (!PasswordHash.validatePassword(password, user.password)) {
            throw new Exception("Wrong password! Try Again!");
        }
        else if (username == null || password == null) {
            throw new Exception("Please enter both a username and password!");
        }
        else if (PasswordHash.validatePassword(password, user.password)) {
            session.setAttribute("username", username);
            response.sendRedirect("/");
        }
    }

    @RequestMapping("/logout")
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
    }


}
