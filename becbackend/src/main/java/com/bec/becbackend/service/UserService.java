package com.bec.becbackend.service;

import java.util.List;

import com.bec.becbackend.dto.UserDto;
import com.bec.becbackend.entity.User;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    String addUser(User userInfo);

}
