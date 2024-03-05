package com.bec.becbackend.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto {
    private Long courseId;
    private String courseName;
    private String description;
    private String duration;
    private BigDecimal cost;
}
