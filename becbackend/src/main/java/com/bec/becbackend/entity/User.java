package com.bec.becbackend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
    
    
    @Column(nullable = false)
    private String role;

    // public String getRoles() {
    //     StringBuilder rolesBuilder = new StringBuilder();
    //     rolesBuilder.append(role.name()); // Add the user's main role
    //     // Add additional roles if needed
    //     if (role == UserRole.ADMIN) {
    //         rolesBuilder.append(",ADMIN");
    //     } else if (role == UserRole.STUDENT) {
    //         rolesBuilder.append(",STUDENT");
    //     }
    //     return rolesBuilder.toString();
    // }
    
}
