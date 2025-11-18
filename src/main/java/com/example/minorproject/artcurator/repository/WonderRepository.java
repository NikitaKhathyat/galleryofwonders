package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.Wonder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WonderRepository extends JpaRepository<Wonder, String> {
}
