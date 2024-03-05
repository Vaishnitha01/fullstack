package com.bec.becbackend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.bec.becbackend.dto.EnquiryDto;
import com.bec.becbackend.entity.Enquiry;

public class EnquiryMapper {
    
    public static EnquiryDto maptoEnquiryDto(Enquiry enquiry) {
        return new EnquiryDto(
            enquiry.getEnquiryId(),
            enquiry.getStudent(),
            enquiry.getCourse(),
            enquiry.getEnquiryType(),
            enquiry.getDescription());
        }
        
        public static Enquiry maptoEnquiry(EnquiryDto enquirysubmit) {
            return new Enquiry(
                enquirysubmit.getEnquiryId(),
                enquirysubmit.getStudent(),
                enquirysubmit.getCourse(),
                enquirysubmit.getEnquiryType(),
                enquirysubmit.getDescription());
            }
            
         // Map a list of Enquiry entities to a list of EnquiryDto objects
        public static List<EnquiryDto> mapToEnquiryDtoList(List<Enquiry> enquiries) {
            return enquiries.stream()
                .map(EnquiryMapper::maptoEnquiryDto)
                .collect(Collectors.toList());
            }
            
    }