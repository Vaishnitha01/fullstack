package com.bec.becbackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.becbackend.dto.CourseDto;
import com.bec.becbackend.service.CourseService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private CourseService courseService;

    // Add Course REST API
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<CourseDto> addCourse(@RequestBody CourseDto courseDto) {
        CourseDto savedCourse = courseService.addCourse(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // Get Course by ID REST API
    @GetMapping("/{id}")
    // @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable("id") Long courseId) {
        CourseDto courseDto = courseService.getCourseById(courseId);
        return ResponseEntity.ok(courseDto);
    }

    // Get All Courses REST API
    @GetMapping
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        List<CourseDto> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    // Delete Course by ID REST API
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course with ID " + courseId + " has been deleted successfully.");
    }
}
