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
        boolean loginSuccess = userService.login(dto);
        if (loginSuccess) {
            String role = userService.getRole(dto);
            // 역할이 null이 아니고, 로그인 정보가 일치하면
            if (role != null) {
                // 역할에 따라 처리
                if ("ADMIN".equals(role)) {
                    return ResponseEntity.ok("관리자 로그인");
                } else if ("ADVANCED_USER".equals(role)) {
                    return ResponseEntity.ok("고급사용자 로그인");
                } else if ("USER".equals(role)) {
                    return ResponseEntity.ok("일반 사용자 로그인");
                } else {
                    return ResponseEntity.status(401).body("Login Failed: Unknown Role");
                }
            }
        }
        // 사용자 정보가 없거나 비밀번호가 틀린 경우
        return ResponseEntity.status(401).body("Login Failed: Invalid Credentials");

    }
    @GetMapping("/")
    public String home() {
        return "welcome";
    }

}
