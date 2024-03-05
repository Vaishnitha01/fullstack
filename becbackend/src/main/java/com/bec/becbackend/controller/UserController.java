package com.bec.becbackend.controller;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.becbackend.dto.AuthRequest;
// import com.bec.becbackend.dto.UserDto;
import com.bec.becbackend.entity.User;
import com.bec.becbackend.service.JwtService;
import com.bec.becbackend.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

     @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @PostMapping("/new")
    public String addNewUser(@RequestBody User userInfo) {
        return userService.addUser(userInfo);
    }
    
    // // Build Add User REST API
    // @PostMapping
    // public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
    //     UserDto savedUser = userService.createUser(userDto);
    //     return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    // }

    // // Build Get User REST API
    // @GetMapping("{id}")
    // public ResponseEntity<UserDto> getUserId(@PathVariable("id") Long userId) {
    //     UserDto userDto = userService.getUserById(userId);
    //     return ResponseEntity.ok(userDto);
    // }

    // // Build Get All User REST API
    // @GetMapping
    // public ResponseEntity<List<UserDto>> getAllUsers() {
    //     List<UserDto> users = userService.getAllUsers();
    //     return ResponseEntity.ok(users);
    // }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
