<template>
  <div>
    <h3>{{ count }}</h3>
    <div @click="add">按钮</div>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const add = () => {
  count.value++
}
</script>
