package com.csfaubion.bugtracker.model;

import org.springframework.data.annotation.Id;

public class Authority {
    @Id
    private final Long authorityId;
    private final Long user;
    private final String role;

    public Authority(Long authorityId, Long user, String role) {
        this.authorityId = authorityId;
        this.user = user;
        this.role = role;
    }

    public Long getAuthorityId() {
        return this.authorityId;
    }

    public Long getUser() {
        return this.user;
    }

    public String getRole() {
        return this.role;
    }

}
