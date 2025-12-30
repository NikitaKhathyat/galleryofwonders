package com.example.minorproject.artcurator.controller;


import com.example.minorproject.artcurator.model.User;
import com.example.minorproject.artcurator.model.Wonder;
import com.example.minorproject.artcurator.repository.UserRepository;
import com.example.minorproject.artcurator.repository.WonderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserRepository userRepository;
    private final WonderRepository wonderRepository;

    // REGISTER USER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
    }

    // GET USER
    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId) {
        return userRepository.findById(userId).orElse(null);
    }

    // UPDATE USER
    @PutMapping("/{userId}")
    public User updateUser(@PathVariable String userId, @RequestBody User newData) {
        User user = userRepository.findById(userId).orElseThrow();
        user.setName(newData.getName());
        user.setImage(newData.getImage());
        return userRepository.save(user);
    }

    // GET USER BOOKMARKS
    @GetMapping("/{userId}/bookmarks")
    public Object getBookmarks(@PathVariable String userId) {
        return userRepository.findById(userId).orElseThrow().getBookmarked();
    }

    // GET USER COLLECTIONS (boards)
    @GetMapping("/{userId}/collections")
    public Object getCollections(@PathVariable String userId) {
        return userRepository.findById(userId).orElseThrow().getCollections();
    }

    // GET USER WONDERS
    @GetMapping("/{userId}/wonders")
    public Object getUserWonders(@PathVariable String userId) {
        log.info("getUserWonders,USer:{}",userId);
        return userRepository.findById(userId).orElseThrow().getPostedWonders();
    }


    @GetMapping("/bookmarks")
    public List<Wonder> getMyBookmarks(Authentication auth) {
        String email = auth.getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        return user.getBookmarked();
    }

    @PostMapping("/bookmarks/{wonderId}")
    public ResponseEntity<?> saveBookmark(
            @PathVariable String wonderId,
            Authentication auth
    ) {
        String email = auth.getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        Wonder wonder = wonderRepository.findById(wonderId).orElseThrow();

        if (user.getBookmarked() == null) {
            user.setBookmarked(new ArrayList<>());
        }

        if (user.getBookmarked().stream().noneMatch(w -> w.getId().equals(wonderId))) {
            user.getBookmarked().add(wonder);
            userRepository.save(user);
        }

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/bookmarks/{wonderId}")
    public ResponseEntity<?> removeBookmark(
            @PathVariable String wonderId,
            Authentication auth
    ) {
        String email = auth.getName();
        User user = userRepository.findByEmail(email).orElseThrow();

        if (user.getBookmarked() != null) {
            user.getBookmarked().removeIf(w -> w.getId().equals(wonderId));
            userRepository.save(user);
        }

        return ResponseEntity.ok().build();
    }



}
