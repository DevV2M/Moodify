package com.application.moodify.Controller;

import com.application.moodify.Entity.Users;
import com.application.moodify.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("")
    private boolean submitUser(@RequestBody Users users){
        userService.submitMetaDataOfUser(users);
        return true;
    }

    @GetMapping("/{userid}")
    private Users getUserDetails(@PathVariable("userid") String userId){
        userService.displayUserMetaData(userId);
        return new Users();
    }
}
