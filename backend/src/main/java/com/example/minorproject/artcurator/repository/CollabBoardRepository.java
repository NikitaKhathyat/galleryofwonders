package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.CollabBoard;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.jpa.repository.JpaRepository;

public interface CollabBoardRepository extends MongoRepository<CollabBoard, String> {
}
