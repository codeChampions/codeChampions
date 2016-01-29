package com.codechampions.entities;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @ManyToOne
    @JsonView(View.userSummaryWithMessages.class)
    public User replyUser;

    @Column
    @JsonView(View.userSummaryWithMessages.class)
    public boolean isRead;

    @Column(nullable = false)
    @JsonView(View.userSummaryWithMessages.class)
    public LocalDateTime messageTime;

    public Message() {
    }

    public Message(int id, int replyId, String messageText, User user, LocalDateTime messageTime) {
        this.id = id;
        this.replyId = replyId;
        this.messageText = messageText;
        this.user = user;
        this.messageTime = messageTime;
    }
}
