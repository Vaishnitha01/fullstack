package com.bec.becbackend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.bec.becbackend.dto.CourseDto;
import com.bec.becbackend.entity.Course;

public class CourseMapper {
    
    public static CourseDto maptoCourseDto(Course course) {
        return new CourseDto(
            course.getCourseId(),
            course.getCourseName(),
            course.getDescription(),
            course.getDuration(),
            course.getCost());
        }
        
        public static Course maptoCourse(CourseDto courseapplied) {
            return new Course(
                courseapplied.getCourseId(),
                courseapplied.getCourseName(),
                courseapplied.getDescription(),
                courseapplied.getDuration(),
                courseapplied.getCost());
            }

        // Map a list of Course entities to a list of CourseDto objects
        public static List<CourseDto> mapToCourseDtoList(List<Course> courses) {
            return courses.stream()
                .map(CourseMapper::maptoCourseDto)
                .collect(Collectors.toList());
            }

    }