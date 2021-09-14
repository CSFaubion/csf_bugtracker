package com.csfaubion.bugtracker.service;

import java.security.Principal;

import com.csfaubion.bugtracker.model.TestMessage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@CrossOrigin(origins = "*")
public class UserService {
    
    @GetMapping("/user")
    @ResponseBody
    public Principal user(Principal user) {
        return user;
    }

    @GetMapping("/test")
    @ResponseBody
    public TestMessage test() {
        return new TestMessage("test works!");
    }

    @GetMapping("/securetest")
    @ResponseBody
    public TestMessage securetest() {
        return new TestMessage("secure test works!");
    }

}
