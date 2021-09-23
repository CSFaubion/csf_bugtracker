package com.csfaubion.bugtracker.model;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

public class User {
    @Id
    private final Long userId;
    private final String username;
    private final String password;
    private final boolean enabled;
    private final String name;
    private final String phone;
    private final String email;

    @MappedCollection
    private final Set<Authority> authorities;

    public User(Long userId, String username, String password, boolean enabled, String name, String phone, String email,
            Set<Authority> authorities) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.authorities = authorities;
    }

    public Long getUserId() {
        return this.userId;
    }

    public String getUsername() {
        return this.username;
    }

    // //maybe shouldn't even have this method.
    // public String getPassword() {
    //     return this.password;
    // }

    public boolean isEnabled() {
        return this.enabled;
    }

    public boolean getEnabled() {
        return this.enabled;
    }

    public String getName() {
        return this.name;
    }

    public String getPhone() {
        return this.phone;
    }

    public String getEmail() {
        return this.email;
    }

    public Set<Authority> getAuthorities() {
        return this.authorities;
    }

    public User addAuthority(Authority authority) {
        Set<Authority> authorities = new HashSet<>(this.authorities);
        authorities.add(authority);
        return new User(this.userId, this.username, this.password, this.enabled, this.name, this.phone, this.email,
                authorities);
    }

    // this method is unnecessary without getPassword() method.
    // //use this method to pass a user object without revealing the password. do not save a sanitized user!
    // public User sanitized() {
    //     return new User(this.userId, this.username, null, this.enabled, this.name, this.phone, this.email, this.authorities);
    // }
}
