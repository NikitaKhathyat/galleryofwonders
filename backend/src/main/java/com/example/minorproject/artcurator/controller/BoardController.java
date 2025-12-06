package com.example.minorproject.artcurator.controller;

import com.example.minorproject.artcurator.model.Board;
import com.example.minorproject.artcurator.model.Wonder;
import com.example.minorproject.artcurator.repository.BoardRepository;
import com.example.minorproject.artcurator.repository.WonderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
public class BoardController {


    private final BoardRepository boardRepository;
    private final WonderRepository wonderRepository;

    // CREATE BOARD
    @PostMapping
    public Board create(@RequestBody Board board) {
        return boardRepository.save(board);
    }

    // GET BOARD
    @GetMapping("/{id}")
    public Board getBoard(@PathVariable String id) {
        return boardRepository.findById(id).orElse(null);
    }

//    // ADD WONDER
//    @PostMapping("/{id}/add-wonder")
//    public Board addWonder(@PathVariable String id, @RequestParam String wonderId) {
//        Board b = boardRepository.findById(id).orElseThrow();
//        Wonder wonder=wonderRepository.getReferenceById(wonderId);
//        b.getWonderList().add(wonder);
//        return boardRepository.save(b);
//    }

    // REMOVE WONDER
    @DeleteMapping("/{id}/remove-wonder")
    public Board removeWonder(@PathVariable String id, @RequestParam String wonderId) {
        Board b = boardRepository.findById(id).orElseThrow();
        b.getWonderList().remove(wonderId);
        return boardRepository.save(b);
    }

//    // GET USER BOARDS
//    @GetMapping("/user/{userId}")
//    public Object getUserBoards(@PathVariable String userId) {
//        return boardRepository.findByCreatedById(userId);
//    }
}
