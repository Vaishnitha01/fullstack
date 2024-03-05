package com.bec.becbackend.dto;

import com.bec.becbackend.entity.Course;
import com.bec.becbackend.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryDto {
    private Long enquiryId;
    private User student;
    private Course course;
    private String enquiryType;
    private String description;
}
