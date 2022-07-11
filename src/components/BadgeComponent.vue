<template>
    <div class="container mx-auto px-4 py-8 space-x-6 ">
        <h6 class="font-bold">
            Component BadgeComponent
        </h6>
        <div>
            <div class="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
                Ativo
            </div>
            <div class="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
                Inativo
            </div>
        </div>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BadgeComponent"
})
</script>

<style scoped>
</style>