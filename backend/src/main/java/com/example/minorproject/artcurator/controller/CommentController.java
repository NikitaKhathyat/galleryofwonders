package com.example.minorproject.artcurator.controller;

import com.example.minorproject.artcurator.model.Comment;
import com.example.minorproject.artcurator.model.Wonder;
import com.example.minorproject.artcurator.repository.CommentRepository;
import com.example.minorproject.artcurator.repository.WonderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {


    private final CommentRepository commentRepository;
    private final WonderRepository wonderRepository;


    // ADD COMMENT
    @PostMapping("/{id}/comments")
    public Comment addComment(@PathVariable String id, @RequestBody Comment comment) {
        Comment saved = commentRepository.save(comment);
        Wonder w = wonderRepository.findById(id).orElseThrow();
        w.getComments().add(saved);
        wonderRepository.save(w);
        return saved;
    }
    // UPDATE COMMENT
    @PutMapping("/{id}")
    public Comment updateComment(@PathVariable String id, @RequestBody Comment newC) {
        Comment c = commentRepository.findById(id).orElseThrow();
        c.setComment(newC.getComment());
        return commentRepository.save(c);
    }

//        // GET COMMENTS
//    @GetMapping("/{id}/comments")
//    public Object getComments(@PathVariable String id) {
//        Wonder w = wonderRepository.findById(id).orElseThrow();
//        return commentRepository.findAllById();
//    }

    // DELETE COMMENT
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable String id) {
        commentRepository.deleteById(id);
    }
}
