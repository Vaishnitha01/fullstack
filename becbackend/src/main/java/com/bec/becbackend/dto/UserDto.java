package com.bec.becbackend.dto;

// import com.bec.becbackend.entity.UserRole;

// import com.bec.becbackend.entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long userId;
    private String userName;
    private String email;
    private String password;
    private String role;
}
