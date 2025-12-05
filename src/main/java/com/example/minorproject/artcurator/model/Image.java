package com.example.minorproject.artcurator.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Image {

    @Field("filename")
    private String filename;

    @Field("path")
    private String path;
}
