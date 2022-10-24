<template>
  <div>
    <NuxtButton />
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const appConfig = useAppConfig()

console.log('runtimeConfig:', runtimeConfig, appConfig)
</script>
