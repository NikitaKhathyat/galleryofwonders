package com.example.minorproject.artcurator.controller;


import com.example.minorproject.artcurator.model.Comment;
import com.example.minorproject.artcurator.model.User;
import com.example.minorproject.artcurator.model.Wonder;
import com.example.minorproject.artcurator.repository.CommentRepository;
import com.example.minorproject.artcurator.repository.WonderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wonders")
@RequiredArgsConstructor
public class WonderController {

    @Autowired
    WonderRepository wonderRepository;
    @Autowired
    CommentRepository commentRepository;


    // CREATE WONDER
    @PostMapping
    public Wonder createWonder(@RequestBody Wonder wonder) {
        return wonderRepository.save(wonder);
    }

    // GET ALL WONDERS
    @GetMapping
    public List<Wonder> getAllWonders() {
        return wonderRepository.findAll();
    }

    // GET WONDER BY ID
    @GetMapping("/{id}")
    public Wonder getWonder(@PathVariable String id) {
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

    // ADD COMMENT
    @PostMapping("/{id}/comments")
    public Comment addComment(@PathVariable String id, @RequestBody Comment comment) {
        Comment saved = commentRepository.save(comment);
        Wonder w = wonderRepository.findById(id).orElseThrow();
        w.getComments().add(saved);
        wonderRepository.save(w);
        return saved;
    }

//    // GET COMMENTS
//    @GetMapping("/{id}/comments")
//    public Object getComments(@PathVariable String id) {
//        Wonder w = wonderRepository.findById(id).orElseThrow();
//        return commentRepository.findAllById();
//    }
}

