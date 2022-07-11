<template>
    <div class="container mx-auto px-4 py-8 space-x-6 ">
        <h6 class="font-bold">
            Component Button
        </h6>
        <button class="bg-blue-400 px-4 py-1 rounded text-white shadow-md text-sm overflow-hidden hover:bg-blue-900">
            Save
        </button>
        <button class="bg-blue-400 px-4 py-1 rounded text-white shadow-md text-md overflow-hidden hover:bg-blue-900">
            Save
        </button>
        <button class="bg-blue-400 px-4 py-1 rounded text-white shadow-md text-lg   overflow-hidden hover:bg-blue-900">
            Save
        </button>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ButtonComponent"
})
</script>

<style scoped>
</style>