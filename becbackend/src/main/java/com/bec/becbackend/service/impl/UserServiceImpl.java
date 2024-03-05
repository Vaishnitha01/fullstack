package com.bec.becbackend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.bec.becbackend.dto.UserDto;
import com.bec.becbackend.entity.User;
import com.bec.becbackend.exception.ResourceNotFoundException;
import com.bec.becbackend.mapper.UserMapper;
import com.bec.becbackend.repository.UserRepo;
import com.bec.becbackend.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userdto) {

        User user = UserMapper.maptoUser(userdto);
        User savedUser = userRepo.save(user);
        return UserMapper.maptoUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepo.findById(userId)
        
                .orElseThrow(
                        () -> new ResourceNotFoundException("User does not exist with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepo.findAll();

        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(UserMapper.maptoUserDto(user));
        }

        return userDtos;
    }

    public String addUser(User userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userRepo.save(userInfo);
        return "user added to system ";
    }
}
