package com.codechampions.entities;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */

@Entity
@Table(name = "users")
public class User {
    public enum userType {
        ADMIN, TEACHER, STUDENT
    }

    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;

    @Column
    public String email;

    @Column
    public String game1Code;

    @Column
    public int lesson1Progress;

   // @Column
   // public String game2Code;

   // @Column
   // public int progress;

    @Column
    public userType userType;


    //Image Avatar field

    //user type (extend user class or as field?




    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
