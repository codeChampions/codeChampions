package com.codechampions.entities;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.ArrayList;

/**
 * Created by Jack on 12/9/15.
 */

@Entity
@Table(name = "users")
public class User {
    public enum AccessType {
        ADMIN, TEACHER, STUDENT
    }

    @Id
    @GeneratedValue
    @Column(nullable = false)
    @JsonView(View.userSummary.class)
    public int id;

    @Column(nullable = false)
    @JsonView(View.userSummary.class)
    public String username;

    @Column(nullable = false)
    public String password;

    @Column
    public String email;

    @Column
    public String game1_1Code;

    @Column
    public String game1_2Code;

    @Column
    public String game1_3Code;

    @Column
    public int lesson1Progress;

    @Column
    public String game2_1Code;

    @Column
    public String game2_2Code;

    @Column
    public String game2_3Code;

    @Column
    public int lesson2Progress;

    @Column
    public String game3_1Code;

    @Column
    public String game3_2Code;

    @Column
    public String game3_3Code;

    @Column
    public int lesson3Progress;

    @Column
    @JsonView(View.userSummary.class)
    public AccessType accessType;

    @Column
    public String avatar;


    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public AccessType getAccessType() {
        return accessType;
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

    public void setAccessType(AccessType accessType) {
        this.accessType = accessType;
    }
}