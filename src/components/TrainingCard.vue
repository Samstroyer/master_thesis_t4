<script setup>
import { defineProps, ref } from 'vue';
import Select from './Select.vue';

const props = defineProps(["question", "answers"])
const selectedIndex = ref(0);

function checkCorrect() {
    console.log(selectedIndex.value)
    if (props.answers[selectedIndex.value].correct) {
        return "correct"
    } else {
        return "wrong"
    }
}

function shortPrompt(prompt) {
    if (prompt.length < 8) { return prompt }
    else {
        return Array.from(prompt).splice(0, 8).join("")
    }
}
</script>

<template>
    <div class="container" :class="checkCorrect()">
        <h2>{{ props.question }}</h2>
        <p>Chosen: {{ selectedIndex }}</p>
        <Select :opts="answers.map((a, i) => { return { text: ++i + ' ' + shortPrompt(a.prompt) } })"
            @change="(val) => console.log(val)" />
    </div>
</template>

<style scoped>
.correct {
    background-color: rgb(71, 255, 71);
}

.wrong {
    background-color: rgb(255, 109, 109);
}

.container {
    width: 24%;
}
</style>
