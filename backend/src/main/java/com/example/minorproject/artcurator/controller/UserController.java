package com.example.minorproject.artcurator.controller;


import com.example.minorproject.artcurator.model.User;
import com.example.minorproject.artcurator.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

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
        return userRepository.findById(userId).orElseThrow().getPostedWonders();
    }

}
