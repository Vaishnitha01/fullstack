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

import com.bec.becbackend.dto.PaymentDto;
import com.bec.becbackend.service.PaymentService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<PaymentDto> addPayment(@RequestBody PaymentDto paymentDto) {
        PaymentDto savedPayment = paymentService.addPayment(paymentDto);
        return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDto> getPaymentById(@PathVariable("id") Long paymentId) {
        PaymentDto paymentDto = paymentService.getPaymentById(paymentId);
        return ResponseEntity.ok(paymentDto);
    }

    @GetMapping
    public ResponseEntity<List<PaymentDto>> getAllPayments() {
        List<PaymentDto> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }
}
