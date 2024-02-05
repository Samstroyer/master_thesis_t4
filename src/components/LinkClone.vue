<template>
    <input type="text" v-model="project_link" placeholder="Link" class="upper" style="margin-bottom: 10px;">
    <br />
    <button style="margin-right: 10px;" @click="selectFolder">Select folder</button>
    <input type="text" v-model="project" placeholder="Enter project name">
    <div class="summary-box">
        <p>Downloading {{ fullURL() }}</p>
        <p>At {{ fullPath() }}</p>
        <button @click="$emit('download', fullURL(), fullPath())">Download!</button>
        <div v-if="err != ''">{{ err }}</div>
    </div>
</template>

<script setup>
import { remote } from 'electron';
import { ref, defineEmits } from 'vue';

const emits = defineEmits(["download"]);

const project_link = ref("");
const path = ref("");
const project = ref("");
const err = ref("");

const fullURL = () => {
    return project_link.value;
}

const fullPath = () => {
    return path.value + "/" + project.value;
}

function selectFolder() {
    remote.dialog.showOpenDialog({
        properties: [
            'openDirectory'
        ]
    })
        .then(res => path.value = res.filePaths[0])
        .catch(e => {
            err.value = e;
        });
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