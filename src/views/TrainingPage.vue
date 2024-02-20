<script setup>
import TrainingCard from '@/components/TrainingCard.vue';
import training_data from '../scripts/training_data.json';

const data = training_data.data;
</script>

<template>
    <div class="card-container">
        <div class="card" v-for="card in data">
            <TrainingCard :question="card.question" :answers="card.answers" />
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
}

.card {
    width: 24%;
}
</style>