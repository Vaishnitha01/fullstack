package com.bec.becbackend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.bec.becbackend.entity.Course;
import com.bec.becbackend.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {
    private Long paymentId;
    private User student;
    private Course course;
    private BigDecimal amount;
    private LocalDate paymentDate;
}
