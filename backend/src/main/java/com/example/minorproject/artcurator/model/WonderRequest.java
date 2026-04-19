package com.example.minorproject.artcurator.model;

import lombok.Data;

import java.util.List;

@Data
public class WonderRequest {
    private String name;
    private String description;
    private List<String> tag;
    private String image;
    private String userId;
    private String email;
    // <- frontend sends this
}
