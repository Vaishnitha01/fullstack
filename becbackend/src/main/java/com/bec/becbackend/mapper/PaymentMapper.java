package com.bec.becbackend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.bec.becbackend.dto.PaymentDto;
import com.bec.becbackend.entity.Payment;

public class PaymentMapper {
    
    public static PaymentDto maptoPaymentDto(Payment payment) {
        return new PaymentDto(
            payment.getPaymentId(),
            payment.getStudent(),
            payment.getCourse(),
            payment.getAmount(),
            payment.getPaymentDate());
        }
        
        public static Payment maptoPayment(PaymentDto paydetails) {
            return new Payment(
                paydetails.getPaymentId(),
                paydetails.getStudent(),
                paydetails.getCourse(),
                paydetails.getAmount(),
                paydetails.getPaymentDate());
            }
            
        public static List<PaymentDto> mapToPaymentDtoList(List<Payment> payments) {
            return payments.stream()
            .map(PaymentMapper::maptoPaymentDto)
                .collect(Collectors.toList());
            }   
            
    }