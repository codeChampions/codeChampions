package com.codechampions.entities;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

/**
 * Created by Jack on 12/9/15.
 */
@Entity
public class Message {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    @JsonView(View.userSummaryWithMessages.class)
    public int id;

    @Column
    @JsonView(View.userSummaryWithMessages.class)
    public int replyId;

    @Column(nullable = false)
    @JsonView(View.userSummaryWithMessages.class)
    public String messageText;

    @ManyToOne
    @JsonView(View.userSummaryWithMessages.class)
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
