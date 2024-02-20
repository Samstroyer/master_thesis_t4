<script setup>
import { defineProps, ref } from 'vue';
import Select from './Select.vue';

const props = defineProps(["question", "answers"])
const selected = ref(props.answers[0].prompt);

function checkCorrect() {
    const index = props.answers.findIndex(val => val.prompt == selected.value)
    
    if(props.answers[index].correct) {
        return "correct"
    } else {
        return "wrong"
    }
}
</script>

<template>
    <div class="container" :class="checkCorrect()">
        <h1>{{ props.question }}</h1>
        <p>Chosen: {{ selected }}</p>
        <Select :opts="answers.map(a => { return { text: a.prompt } })" @change="(val) => selected = val" />
    </div>
</template>

<style scoped>
.correct {
    background-color: green;
}

.wrong {
    background-color: red;
}
</style>
