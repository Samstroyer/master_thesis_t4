<template>
    <select @change="$emit('change', selectedVal)" v-model="selectedVal">
        <option v-for="txt in props.options" :value="txt">{{ txt }}</option>
    </select>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const selectedVal = ref("");

const emit = defineEmits(['change'])

const props = defineProps({
    options: { type: Array, required: true }
})

</script>