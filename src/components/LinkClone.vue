<template>
    <input type="text" v-model="urlData" placeholder="Link" style="margin: 30px 0px 25px 0px;">
    <br />
    <button style="margin-right: 10px;" @click="folderPrompt">Select folder</button>
    <SummaryBox :path="folderData" :url="urlData" />
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import SummaryBox from './SummaryBox.vue';
import { selectFolder, fullUrl } from '@/scripts/download.js'

const emits = defineEmits(["download"]);

const urlData = ref("");
const folderData = ref("");

async function folderPrompt() {
    folderData.value = await selectFolder();
}
</script>

<style scoped>
input {
    text-align: center;
}

.summary-box {
    margin-top: 10px;
    box-shadow: 5px 5px 5px gray;
    border: 1px dotted aquamarine;
}
</style>