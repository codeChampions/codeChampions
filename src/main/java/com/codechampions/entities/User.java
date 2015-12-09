package com.codechampions.entities;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;

    //Email field

    //Image Avatar field

    //@OneToMany(mappedBy = "user")
    //public List<Message> messages;
}
