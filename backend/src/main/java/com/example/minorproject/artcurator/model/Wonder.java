package com.example.minorproject.artcurator.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    private String image;

    private String description;

    private List<String> tag;

    @DBRef
    private User user;

    @DBRef
    @JsonIgnore
    private List<User> likes;

    @DBRef
    @JsonIgnore
    private List<Comment> comments;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
