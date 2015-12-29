package com.codechampions.entities;

import com.codechampions.entities.User.AccessType;

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
    public int id;

    public String className;

    @ManyToOne
    public User owner;

    @ManyToMany
    public List<User> classStudents;

   @ManyToOne
   public Message messageBoard;

}