<template>
  <div>
    <NuxtButton />
    <h2>nuxt3 demo</h2>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">hom22e</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const appConfig = useAppConfig()

console.log('runtimeConfig:', runtimeConfig, appConfig)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
