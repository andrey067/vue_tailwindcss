<template>
    <div class="container mx-auto px-4 py-8 space-x-6 ">
        <h6 class="font-bold">
            Component InputComponent
        </h6>
        <input type="text"
            class="bg-gray-50 border-gray-300 rounded-md px-2 py-1 text-sm text-gray-800 placeholder-gray-800 focus:outline-none"
            placeholder="Digite seu nome">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InputComponent"
})
</script>

<style scoped>
</style>