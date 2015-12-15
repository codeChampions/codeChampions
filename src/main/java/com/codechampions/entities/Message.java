package com.codechampions.entities;

import javax.persistence.*;

/**
 * Created by Jack on 12/9/15.
 */
@Entity
public class Message {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column
    public int replyId;

    @Column(nullable = false)
    public String messageText;

    @ManyToOne
    public User user;

    public Message() {
    }

    public Message(int id, int replyId, String messageText, User user) {
        this.id = id;
        this.replyId = replyId;
        this.messageText = messageText;
        this.user = user;
    }
}
