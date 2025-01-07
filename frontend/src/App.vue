<template>
  <div id="app">
    <UserLogin />
    <TestHome/><!-- 변경된 컴포넌트 이름 사용 -->
  </div>
</template>

<script>
import UserLogin from './components/Login.vue'; // 변경된 컴포넌트 이름
import TestHome from './components/home.vue';
export default {
  name: 'App',
  components: {
    UserLogin, // 등록된 이름도 수정
    TestHome,
  },
};
</script>
