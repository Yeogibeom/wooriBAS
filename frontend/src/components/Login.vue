<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow" style="width: 400px;">
      <div class="card-body">
        <h2 class="text-center mb-4">Woori BAS</h2>

        <form @submit.prevent="handleLogin">

          <div class="form-group">
            <label for="userid">아이디</label>
            <input
                type="text"
                v-model="userid"
                id="userid"
                class="form-control"
                placeholder="아이디 입력"
                required
            />
          </div>

          <div class="form-group">
            <label for="password">비밀번호</label>
            <input
                type="password"
                v-model="password"
                id="password"
                class="form-control"
                placeholder="비밀번호 입력"
                required
            />
          </div>

          <div v-if="errorMessage" class="text-danger small mb-3">
            {{ errorMessage }}
          </div>

          <div class="form-check mb-3">
            <input
                type="checkbox"
                id="rememberMe"
                class="form-check-input"
            />
            <label class="form-check-label" for="rememberMe">아이디 저장</label>
          </div>

          <button type="submit" class="btn btn-primary btn-block">로그인</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      userid: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:8080/login", {
          userid: this.userid,
          password: this.password,
        });
        alert(response.data);
      } catch (error) {
        this.errorMessage = "아이디 또는 비밀번호가 잘못되었습니다.";
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

body {
  background-color: #f8f9fa;
}

.card {
  border-radius: 10px;
  padding: 20px;
}
</style>
