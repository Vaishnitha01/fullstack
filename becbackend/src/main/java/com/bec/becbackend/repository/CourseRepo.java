package com.bec.becbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.becbackend.entity.Course;

public interface CourseRepo extends JpaRepository<Course,Long> {
    
}

