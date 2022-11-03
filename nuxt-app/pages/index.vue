<template>
    <div>
        home page
        <p>{{ res }}</p>
    </div>
</template>

<script setup lang="ts">
const baseUrl = 'http://localhost:3001'
const { data: res } = await useFetch(`${baseUrl}/user-info`)

console.log('res::', res.value)

const { data } = await useAsyncData('count', () => $fetch(`${baseUrl}/order`))

console.log('data==>:', data.value)

onMounted(async () => {

    const { data } = await useAsyncData('count', () => $fetch(`${baseUrl}/order`))

    console.log('data2222==>:', data.value)

})
</script>
