<template>
    <h1>Repository creator!</h1>
    <Select :options="Methods" @change="(val) => selectedMethod = val" />
    <br />
    <UserClone v-if="selectedMethod == 'Name'" @download="(GitHubUrl, FullPath) => createRepo(GitHubUrl, FullPath)" />
    <LinkClone v-if="selectedMethod == 'Link'" @download="(GitHubUrl, FullPath) => createRepo(GitHubUrl, FullPath)" />
</template>

<script setup>
import UserClone from '@/components/UserClone.vue';
import LinkClone from '@/components/LinkClone.vue';
import Select from '@/components/Select.vue';
import { exec } from "child_process"
import { ref } from 'vue';
import os from 'os'; // os.type() == Darwin for Mac

const Methods = ["Link", "Name"]
const selectedMethod = ref("Link");

async function createRepo(url, path) {
    // -v is not verbose and -q is just pointless
    exec(`git clone "${url}" ${path}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    })
}
</script>

<style scoped>
select {
    width: 10vw;
}
</style>