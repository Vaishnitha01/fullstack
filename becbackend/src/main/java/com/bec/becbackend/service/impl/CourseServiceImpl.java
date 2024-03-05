package com.bec.becbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bec.becbackend.exception.ResourceNotFoundException;
import com.bec.becbackend.dto.CourseDto;
import com.bec.becbackend.entity.Course;
import com.bec.becbackend.mapper.CourseMapper;
import com.bec.becbackend.repository.CourseRepo;
import com.bec.becbackend.service.CourseService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepo courseRepository;
    // private final CourseMapper courseMapper;

    @Override
    public CourseDto addCourse(CourseDto courseDto) {
        Course course = CourseMapper.maptoCourse(courseDto);
        course = courseRepository.save(course);
        return CourseMapper.maptoCourseDto(course);
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + courseId));
        return CourseMapper.maptoCourseDto(course);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return CourseMapper.mapToCourseDtoList(courses);
    }

    @Override
    public void deleteCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + courseId));
        courseRepository.delete(course);
    }
}
