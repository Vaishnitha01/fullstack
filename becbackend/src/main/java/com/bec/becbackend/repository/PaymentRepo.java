package com.bec.becbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.becbackend.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Long> {
    
}

