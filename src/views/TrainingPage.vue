<script setup>
import TrainingCard from '@/components/TrainingCard.vue';
import training_data from '../scripts/training_data.json';

const data = training_data.data;
</script>

<template>
    <div class="card-container">
        <TrainingCard v-for="card in data" :question="card.question" :answers="card.answers" />
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
}
</style>