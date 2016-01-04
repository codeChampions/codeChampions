package com.codechampions.entities;

import com.codechampions.entities.User.AccessType;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Jack on 12/18/15.
 */

@Entity
public class Classroom {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    @JsonView(View.userSummarywithClassrooms.class)
    public int id;

    @Column(nullable = false)
    @JsonView(View.userSummarywithClassrooms.class)
    public String className;

    @ManyToOne
    @JsonView(View.userSummarywithClassrooms.class)
    public User owner;

    @ManyToMany
    @JsonView(View.userSummarywithClassrooms.class)
    public List<User> classStudents;

    @ManyToOne
    @JsonView(View.userSummarywithClassrooms.class)
    public Message messageBoard;
}