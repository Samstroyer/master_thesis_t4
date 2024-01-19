<template>
    <div>
        <p>{{ content }}</p>
    </div>
</template>

<script setup>
const props = defineProps(["content", "type"]); 
</script>

<style>
div {
    padding: 10px 15px;
}
</style>