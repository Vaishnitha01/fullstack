package com.bec.becbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bec.becbackend.dto.PaymentDto;
import com.bec.becbackend.entity.Payment;
import com.bec.becbackend.exception.ResourceNotFoundException;
import com.bec.becbackend.mapper.PaymentMapper;
import com.bec.becbackend.repository.PaymentRepo;
import com.bec.becbackend.service.PaymentService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo paymentRepository;

    @Override
    public PaymentDto addPayment(PaymentDto paymentDto) {
        Payment payment = PaymentMapper.maptoPayment(paymentDto);
        payment = paymentRepository.save(payment);
        return PaymentMapper.maptoPaymentDto(payment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found with id: " + paymentId));
        return PaymentMapper.maptoPaymentDto(payment);
    }

    @Override
    public List<PaymentDto> getAllPayments() {
        List<Payment> payments = paymentRepository.findAll();
        return PaymentMapper.mapToPaymentDtoList(payments);
    }

    

}
