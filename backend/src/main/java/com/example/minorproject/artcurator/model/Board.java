package com.example.minorproject.artcurator.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "boards")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {

    @Id
    private String id;

    private String boardName;

    @DBRef
    private List<Wonder> wonderList;

    @DBRef
    private User createdBy;
}
