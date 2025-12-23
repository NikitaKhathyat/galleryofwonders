package com.example.minorproject.artcurator.controller;


import com.example.minorproject.artcurator.model.Comment;
import com.example.minorproject.artcurator.model.User;
import com.example.minorproject.artcurator.model.Wonder;
import com.example.minorproject.artcurator.model.WonderRequest;
import com.example.minorproject.artcurator.repository.CommentRepository;
import com.example.minorproject.artcurator.repository.UserRepository;
import com.example.minorproject.artcurator.repository.WonderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/wonders")
@RequiredArgsConstructor
@Slf4j
public class WonderController {

    @Autowired
    WonderRepository wonderRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserRepository userRepository;


    // CREATE WONDER
    @PostMapping
    public ResponseEntity<Wonder>  createWonder(@RequestBody WonderRequest request) {
        log.info("wonder:{}",request);
        Wonder wonder = new Wonder();
        wonder.setName(request.getName());
        wonder.setDescription(request.getDescription());
        wonder.setTag(request.getTag());
        wonder.setImage(request.getImage());
        // Link the user
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        wonder.setUser(user);
        Wonder savedWonder = wonderRepository.save(wonder);
        if(user.getPostedWonders()!=null){
            user.getPostedWonders().add(savedWonder);
        }else{
            user.setPostedWonders(List.of(savedWonder));
        }
        userRepository.save(user);

        return ResponseEntity.ok(savedWonder);
    }


    // GET ALL WONDERS
    @GetMapping
    public List<Wonder> getAllWonders() {
        return wonderRepository.findAll();
    }

    // GET WONDER BY ID
    @GetMapping("/{id}")
    public Wonder getWonder(@PathVariable String id) {
        log.info("Id:{}",id);
        return wonderRepository.findById(id).orElse(null);
    }

    // LIKE WONDER
    @PostMapping("/{id}/like")
    public Wonder like(@PathVariable String id, @RequestParam User userId) {
        Wonder w = wonderRepository.findById(id).orElseThrow();
        w.getLikes().add(userId);
        return wonderRepository.save(w);
    }

    // UNLIKE WONDER
    @PostMapping("/{id}/unlike")
    public Wonder unlike(@PathVariable String id, @RequestParam String userId) {
        Wonder w = wonderRepository.findById(id).orElseThrow();
        w.getLikes().remove(userId);
        return wonderRepository.save(w);
    }

}

