package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
