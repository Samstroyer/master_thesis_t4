<script setup>
import { selectFolder } from '@/tools/scripts/download';
import { initRepo } from "@/tools/scripts/repo_actions"
import { ref } from 'vue';

const path = ref("");
const status = ref("");

</script>

<template>
    <div>
        <h1>Create a new repository!</h1>

        <router-link :to="{ name: 'TutorialPage', params: { id: '1' } }" class="shy">What is a
            repository?</router-link>

        <br />
        <button v-bind:value="path" type="button" @click="async () => path = await selectFolder()"
            class="space-above">Select init location</button>

        <div class="summary-box">
            <p>Init at {{ path }}</p>
            <button @click="() => status = initRepo(path)">Init!</button>
            <h3>{{ status }}</h3>
        </div>
    </div>
</template>

<style>
.shy {
    font-size: small;
    color: gray;
    transition: all 500ms;
}

.shy:hover {
    font-size: medium;
    color: rgb(107, 107, 107)
}

.space-above {
    margin-top: 20px;
}


.summary-box {
    margin-top: 10px;
    box-shadow: 5px 5px 5px gray;
    border: 1px dotted aquamarine;
}
</style>