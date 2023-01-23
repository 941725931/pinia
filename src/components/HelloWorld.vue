<script setup lang="ts">
import useHelloStore from '../store/helloStore';
const helloStore = useHelloStore()
</script>

<template>
  <div @click="helloStore.setName">{{ helloStore.state.name }}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
