package com.example.minorproject.artcurator.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    private String id;
    private String password;
    private String name;
    private String email;
    private String image;

    @DBRef
    @JsonIgnore
    private List<Wonder> postedWonders;

    @DBRef
    private List<Board> collections;

    @DBRef
    private List<Wonder> bookmarked;

    @DBRef
    private List<CollabBoard> collabBoard;

}
