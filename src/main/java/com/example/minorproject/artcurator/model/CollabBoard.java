package com.example.minorproject.artcurator.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "collabBoards")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CollabBoard {

    @Id
    private String id;

    private String collabBoardName;

    private String joiningId;

    @DBRef
    private List<Wonder> wonderList;

    @DBRef
    private User createdBy;

    @DBRef
    private List<User> collaborators;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
