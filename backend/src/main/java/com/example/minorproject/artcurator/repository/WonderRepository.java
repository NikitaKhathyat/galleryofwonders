package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.Wonder;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface WonderRepository extends MongoRepository<Wonder, String> {
}
