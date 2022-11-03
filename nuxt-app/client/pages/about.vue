<template>
  <div>
    about page
    <img src="~/assets/img/demo.jpg" alt="" srcset="">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'about page',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ children: 'console.log(\'Hello world\')' }]
})
</script>
