package com.codechampions.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by Jack on 12/30/15.
 */

@Entity
public class Upload {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String fileName;

    @Column(nullable = false)
    public String name;

    @Column
    public LocalDateTime uploadTime;

    @ManyToOne
    public User uploadUser;

    @ManyToOne
    public Classroom uploadClass;
}
