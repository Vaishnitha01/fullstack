package com.bec.becbackend.service;

import java.util.List;

import com.bec.becbackend.dto.PaymentDto;

public interface PaymentService {
    PaymentDto addPayment(PaymentDto paymentDto);

    PaymentDto getPaymentById(Long paymentId);

    List<PaymentDto> getAllPayments();
}
