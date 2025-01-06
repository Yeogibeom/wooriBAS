package example.wooribastest.dto;

import example.wooribastest.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter
@Setter
public class UserForm {
    private Long id;
    private String userid;
    private String password;
    private String role;

    public User toEntity() {
        return new User(id,userid,password,role);
    }
}
