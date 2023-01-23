<script setup lang="ts">
import { computed, reactive, ref, onMounted, provide } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import useUserStore from './store/userStore';
import useHelloStore from './store/helloStore';

const userStore = useUserStore();
const helloStore = useHelloStore();

const handleClick = () => {
  userStore.setwork('做饭');
  console.log(userStore.getUserNow);
  
}
</script>

<template>
  <div>{{ helloStore.state.name }}</div>
  <div @click="handleClick">{{ userStore.state.info.work }}</div>
  <div >{{ userStore.getUserNow }}</div>
  <div >{{ userStore.getName }}</div>
  <div @click="userStore.setage">{{ userStore.getAge(500) }}</div>
  <HelloWorld></HelloWorld>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.aaa {
  font-size: 60px
}
</style>
