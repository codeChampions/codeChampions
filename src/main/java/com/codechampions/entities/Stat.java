package com.codechampions.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by Jack on 1/1/16.
 */

@Entity
public class Stat {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @OneToOne
    @JsonIgnore
    public User user;

    @Column
    public int linesCoded;

    @Column
    public int gamesFinished;

    @Column
    public int lessonsFinished;


}
