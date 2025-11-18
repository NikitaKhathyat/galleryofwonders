package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, String> {
}
