package com.example.minorproject.artcurator.repository;

import com.example.minorproject.artcurator.model.Board;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends MongoRepository<Board, String> {
}
