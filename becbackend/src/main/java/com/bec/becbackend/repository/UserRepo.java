package com.bec.becbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.becbackend.entity.User;

public interface UserRepo extends JpaRepository<User,Long> {
    
    Optional<User> findByUserName(String username);
}

