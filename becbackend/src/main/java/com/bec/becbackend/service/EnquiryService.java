package com.bec.becbackend.service;
import java.util.List;

import com.bec.becbackend.dto.EnquiryDto;

public interface EnquiryService {
    EnquiryDto addEnquiry(EnquiryDto enquiryDto);

    EnquiryDto getEnquiryById(Long enquiryId);

    List<EnquiryDto> getAllEnquiries();
}
