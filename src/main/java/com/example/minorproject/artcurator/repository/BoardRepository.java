package com.example.minorproject.artcurator.repository;

import com.example.minorproject.artcurator.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, String> {
}
