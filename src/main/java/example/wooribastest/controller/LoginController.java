package example.wooribastest.controller;

import example.wooribastest.dto.UserForm;
import example.wooribastest.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class LoginController {
    @Autowired
    private  UserService userService;

//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody UserForm dto){
//        boolean result = userService.login(dto);
//        log.info(String.valueOf(result));
//        if(result){
//            return ResponseEntity.ok("Login successful");
//        }
//        return ResponseEntity.ok("Login failed");
//
//    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserForm dto, HttpServletResponse response) throws Exception {

        boolean result = userService.login(dto);
        log.info(String.valueOf(result));
        if(result){
           response.sendRedirect("/");
        }
        return ResponseEntity.ok("Login failed");

    }
    @GetMapping("/")
    public String home() {
        return "welcome";
    }

}
