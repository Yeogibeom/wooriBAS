<template>
  <div class="login">
    <div class="login-bg">
      <div class="head">
        <h1 class="logo"><a href="#"><span class="skip">Woori BAS</span></a></h1>
      </div>
    </div>
    <div class="container">
      <!-- 로그인 폼 -->
      <form @submit.prevent="handleLogin">
        <fieldset>
          <legend>로그인 폼</legend>
          <h3 class="tit">사용자 로그인</h3>
          <!-- 아이디 입력 필드 -->
          <div class="form-group id">
            <input
                type="text"
                v-model="userid"
                class="form-control"
                placeholder="아이디 입력"
                required
            />
          </div>
          <!-- 비밀번호 입력 필드 -->
          <div class="form-group pw">
            <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="비밀번호 입력"
                required
            />
            <!-- 에러 메시지 표시 -->
            <div v-if="errorMessage" class="wrong-ment">{{ errorMessage }}</div>
          </div>
          <!-- 아이디 저장 체크박스 -->
          <div class="custom-control custom-checkbox">
            <input type="checkbox" id="check1" class="custom-control-input" />
            <label class="custom-control-label" for="check1">아이디 저장</label>
          </div>
          <!-- 로그인 버튼 -->
          <button type="submit" class="btn btn-primary btn-block btn-lg">로그인</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// axios를 가져옵니다.
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      userid: "", // 사용자 ID
      password: "", // 비밀번호
      errorMessage: null, // 에러 메시지
    };
  },
  methods: {
    // 로그인 처리 메서드
    async handleLogin() {
      try {
        // Spring Boot 서버의 /login 엔드포인트로 POST 요청
        const response = await axios.post("http://localhost:8080/login", {
          userid: this.userid, // 입력된 사용자 ID
          password: this.password, // 입력된 비밀번호
        });

        // 요청 성공 시 처리
        if (response.status === 200) {
          alert(response.data); // 성공 메시지 표시
          // TODO: 로그인 성공 후 페이지 이동 또는 토큰 저장 로직 추가 가능
        }
      } catch (error) {
        // 요청 실패 시 처리
        this.errorMessage = "아이디 또는 비밀번호가 잘못되었습니다."; // 에러 메시지 표시
        console.error(error); // 콘솔에 에러 출력
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/bootstrap/dist/css/bootstrap.min.css";
@import "@/assets/@fortawesome/fontawesome-free/css/fontawesome.min.css";
@import "@/assets/css/style.css";

/* 에러 메시지 스타일 */
.wrong-ment {
  color: red;
  margin-top: 5px;
}
</style>
