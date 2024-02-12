<template>
    <input type="text" v-model="username" placeholder="Username" class="upper" style="margin: 30px 0px 25px 0px;">
    <input type="text" v-model="repository" placeholder="Repository" class="upper">
    <p>{{ fullURL(username, repository) }}</p>
    <button style="margin-right: 10px;" @click="folderPrompt">Select folder</button>
    <SummaryBox :url="fullURL(username, repository)" :path="folderData" />
</template>

<script setup>
import { ref } from 'vue';
import { fullURL, selectFolder } from "@/scripts/download.js"
import SummaryBox from './SummaryBox.vue';

const username = ref("");
const repository = ref("");

const folderData = ref("");

async function folderPrompt() {
    folderData.value = await selectFolder();
}
</script>

<style scoped>
input {
    text-align: center;
}
</style>