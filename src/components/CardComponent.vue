<template>
    <div class="container mx-auto px-4 py-8 dark:bg-gray-800">
        <h6 class="font-bold">
            Component Card
        </h6>
        <div class="bg-white p-4 rounded-lg shadow-md dark: hover:bg-gray-100 hover:border-spacing-9">
            <div class="w-full bg-gray-100 p-4 border-b border-gray-100">
                <h4 class="font-semibold"> Titulo Card</h4>
            </div>

            <div class="p-4">
                Velit est qui irure consequat tempor.
            </div>

            <div class="w-full bg-gray-50 p-4 border-t border-gray-200">
                <h4 class="font-semibold"> Roda pé</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CardComponent"
})
</script>

<style scoped>
</style>