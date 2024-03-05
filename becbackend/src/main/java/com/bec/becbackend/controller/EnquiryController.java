package com.bec.becbackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.becbackend.dto.EnquiryDto;
import com.bec.becbackend.service.EnquiryService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private EnquiryService enquiryService;

    // Add Enquiry REST API
    @PostMapping
    public ResponseEntity<EnquiryDto> addEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto savedEnquiry = enquiryService.addEnquiry(enquiryDto);
        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }

    // Get Enquiry by ID REST API
    @GetMapping("/{id}")
    public ResponseEntity<EnquiryDto> getEnquiryById(@PathVariable("id") Long enquiryId) {
        EnquiryDto enquiryDto = enquiryService.getEnquiryById(enquiryId);
        return ResponseEntity.ok(enquiryDto);
    }

    // Get All Enquiries REST API
    @GetMapping
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }
}
