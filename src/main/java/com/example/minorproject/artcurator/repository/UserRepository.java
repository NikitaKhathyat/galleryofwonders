package com.example.minorproject.artcurator.repository;


import com.example.minorproject.artcurator.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
