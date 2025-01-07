<template>
  <p>{{ message }}</p> <!-- 받아온 메시지를 화면에 표시 -->
 <div>
   <button v-if="isButtonVisible" @click="handleLogin">로그인</button>
 </div><!-- 버튼 클릭 시 handleLogin 호출 -->
</template>

<script>
import axios from "axios";

export default {
  name:'HomePage',
  data() {
    return {
      isButtonVisible:true,
      message: "" // 서버에서 받은 응답을 저장할 변수
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.get("http://localhost:8080/test"); // Spring Boot 서버로 GET 요청
        this.message = response.data; // 응답 데이터로 message 업데이트
      } catch (error) {
        console.error("요청 실패:", error);
        alert("요청 실패");
      }
    }
  }
};
</script>

<style scoped>
button {
  display: block;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
}

</style>
