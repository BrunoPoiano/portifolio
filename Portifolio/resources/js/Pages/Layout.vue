<template>
    <li class="nav">
        <router-link to="/">Home</router-link>|
        <router-link :to="{ name: 'Teste' }">Teste</router-link>
    </li>
    <router-view />
</template>

<script>
export default {};
</script>

<style></style>
