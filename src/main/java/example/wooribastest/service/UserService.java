package example.wooribastest.service;

import example.wooribastest.dto.UserForm;
import example.wooribastest.entity.User;
import example.wooribastest.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public boolean login(UserForm dto) {
        User user = userRepository.findByUserid(dto.getUserid());
        if (user != null && user.getPassword().equals(dto.getPassword())) {
            return true;
        }
        return false;
    }
}
