package com.example.minorproject.artcurator.controller;

import com.example.minorproject.artcurator.model.User;
import com.example.minorproject.artcurator.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user); // later we hash password
    }

    // LOGIN
    @PostMapping("/login")
    public User login(@RequestBody User loginRequest) {
        return userRepository
                .findByEmailAndPassword(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
                )
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
}
