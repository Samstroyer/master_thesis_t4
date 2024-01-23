<template>
    <h1>Repository creator!</h1>
    <div>
        <p>Select a name for the repo</p>
        <input type="text" v-model="repoName" placeholder="Enter name">
        <p>The name will be: {{ actualName() }}</p>
    </div>

    <h1 @click="createRepo">Press here</h1>
</template>

<script setup>
import { ref } from 'vue';
import { exec } from "child_process"
import os from 'os';

const illegalCharacters = `#%&{}\\<>*?/$!'":@+\`|=`

const repoName = ref("")

console.log(os.type())

const actualName = () => {
    return repoName.value.replace(" ", "_")//.replaceAll(illegalCharacters, ""); to be fixed.
}

async function createRepo() {
    let testUrl = "https://github.com/Samstroyer/master_thesis_t4.git"

    // Have a return here so that no accidental things can happen...
    return;
    exec("git clone https://github.com/Samstroyer/master_thesis_t4.git ~/Desktop/test_creation", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    })


}
</script>