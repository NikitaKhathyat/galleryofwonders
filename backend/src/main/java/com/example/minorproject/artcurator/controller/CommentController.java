package com.example.minorproject.artcurator.controller;

import com.example.minorproject.artcurator.model.Comment;
import com.example.minorproject.artcurator.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {


    private final CommentRepository commentRepository;

    // UPDATE COMMENT
    @PutMapping("/{id}")
    public Comment updateComment(@PathVariable String id, @RequestBody Comment newC) {
        Comment c = commentRepository.findById(id).orElseThrow();
        c.setComment(newC.getComment());
        return commentRepository.save(c);
    }

    // DELETE COMMENT
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable String id) {
        commentRepository.deleteById(id);
    }
}
