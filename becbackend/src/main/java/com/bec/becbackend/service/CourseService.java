package com.bec.becbackend.service;

import java.util.List;

import com.bec.becbackend.dto.CourseDto;

public interface CourseService {
    CourseDto addCourse(CourseDto courseDto);

    CourseDto getCourseById(Long courseId);

    List<CourseDto> getAllCourses();

    void deleteCourse(Long courseId); // New method for deleting a course
}
