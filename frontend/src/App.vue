<template>
  <div id="app">
    <UserLogin />
   !-- 변경된 컴포넌트 이름 사용 -->
  </div>
</template>

<script>
import UserLogin from './components/Login.vue'; // 변경된 컴포넌트 이름

export default {
  name: 'App',
  components: {
    UserLogin, // 등록된 이름도 수정

  },
};
</script>
