package com.example.minorproject.artcurator.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "wonders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Wonder {

    @Id
    private String id;

    private String name;

    private Image image;

    private String description;

    private List<String> tag;

    @DBRef
    private User user;

    @DBRef
    private List<User> likes;

    @DBRef
    private List<Comment> comments;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
