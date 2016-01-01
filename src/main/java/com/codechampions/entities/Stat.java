package com.codechampions.entities;

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
    public User user;

    @Column
    public int linesCoded;

    @Column
    public int gamesFinished;

    @Column
    public int lessonsFinished;


}
