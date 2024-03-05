package com.bec.becbackend.mapper;

import com.bec.becbackend.dto.UserDto;
import com.bec.becbackend.entity.User;

public class UserMapper {
    
    public static UserDto maptoUserDto(User user) {
        return new UserDto(
            user.getUserId(),
            user.getUserName(),
            user.getEmail(),
            user.getPassword(),
            user.getRole());
        }
        
        public static User maptoUser(UserDto userjoined) {
            return new User(
                userjoined.getUserId(),
                userjoined.getUserName(),
                userjoined.getEmail(),
                userjoined.getPassword(),
                userjoined.getRole());
            }
            
            
            
    }