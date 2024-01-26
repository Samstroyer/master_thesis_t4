<template>
    <input type="text" v-model="project_link" placeholder="Link" class="upper" style="margin-bottom: 10px;">
    <br />
    <input type="text" v-model="path" placeholder="Enter path">
    <input type="text" v-model="project" placeholder="Enter project name">
    <div class="summary-box">
        <p>Downloading {{ fullURL() }}</p>
        <p>At {{ fullPath() }}</p>
        <button @click="$emit('download', fullURL(), fullPath())">Download!</button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(["download"]);

const project_link = ref("");
const path = ref("");
const project = ref("");

const fullURL = () => {
    return project_link.value;
}

const fullPath = () => {
    return path.value + "/" + project.value;
}
</script>

<style scoped>
input.upper {
    text-align: center;
    margin-top: 50px;
}

.summary-box {
    margin-top: 10px;
    box-shadow: 5px 5px 5px gray;
    border: 1px dotted aquamarine;
}
</style>