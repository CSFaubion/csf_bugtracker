package com.csfaubion.bugtracker.service;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import com.csfaubion.bugtracker.model.TestMessage;
import com.csfaubion.bugtracker.model.User;
import com.csfaubion.bugtracker.model.Authority;
import com.csfaubion.bugtracker.model.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin(origins = "*")
public class UserService {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/user")
    @ResponseBody
    public User user(Principal user) {
        return userRepository.findFirstByName(user.getName());
    }

    @GetMapping("/test")
    @ResponseBody
    public Iterable<User> test() {
        Set<Authority> auth = new HashSet<Authority>();
        var user = new User(null, "newtest", "not a password", true, "james", "1234567898", "james@j.com", auth);
        user = user.addAuthority(new Authority(null, user.getUserId(), "ROLE_USER"));
        userRepository.save(user);
        return userRepository.findAll();
        // return new TestMessage("test works!");
    }

    @GetMapping("/securetest")
    @ResponseBody
    public TestMessage securetest() {
        return new TestMessage("secure test works!");
    }

}
