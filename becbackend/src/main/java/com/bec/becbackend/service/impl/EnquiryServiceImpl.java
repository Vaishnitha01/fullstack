package com.bec.becbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bec.becbackend.exception.ResourceNotFoundException;
import com.bec.becbackend.dto.EnquiryDto;
import com.bec.becbackend.entity.Enquiry;
import com.bec.becbackend.mapper.EnquiryMapper;
import com.bec.becbackend.repository.EnquiryRepo;
import com.bec.becbackend.service.EnquiryService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepo enquiryRepository;
    // private final EnquiryMapper enquiryMapper;

    @Override
    public EnquiryDto addEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.maptoEnquiry(enquiryDto);
        enquiry = enquiryRepository.save(enquiry);
        return EnquiryMapper.maptoEnquiryDto(enquiry);
    }

    @Override
    public EnquiryDto getEnquiryById(Long enquiryId) {
        Enquiry enquiry = enquiryRepository.findById(enquiryId)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + enquiryId));
        return EnquiryMapper.maptoEnquiryDto(enquiry);
    }

    @Override
    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return EnquiryMapper.mapToEnquiryDtoList(enquiries);
    }
}
