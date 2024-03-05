package com.bec.becbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.becbackend.entity.Enquiry;

public interface EnquiryRepo extends JpaRepository<Enquiry,Long> {
    
}

