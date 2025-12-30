package com.example.minorproject.artcurator.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String email; // optional, can add userId or name
}
