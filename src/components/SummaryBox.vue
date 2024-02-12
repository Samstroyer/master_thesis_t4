<script setup>
import { defineProps } from 'vue';
import { createRepo } from '@/scripts/download.js'

const props = defineProps(['url', 'path']);

const download = () => createRepo(props.url, props.path);
</script>

<template>
    <div class="summary-box">
        <p>Downloading {{ props.url }}</p>
        <p>At {{ props.path }}</p>
        <!-- Maybe fix some stricter checks in future -->
        <button @click="download">Download!</button>
    </div>
</template>

<style>
.summary-box {
    margin-top: 10px;
    box-shadow: 5px 5px 5px gray;
    border: 1px dotted aquamarine;
}
</style>