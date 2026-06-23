<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    {{ user.firstname }}
</template>