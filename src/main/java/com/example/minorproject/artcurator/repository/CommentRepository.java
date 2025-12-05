package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CommentRepository extends MongoRepository<Comment, String> {
}
