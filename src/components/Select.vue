<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const emit = defineEmits(['change'])
/**
 * @description Takes an array of options and displays them with configured attributes
 * @expects { text: string, val: string, selected: bool }
 */
const props = defineProps(['opts']);

</script>

<template>
    <select @change="$emit('change', $event.target.value)">
        <option v-for="opt in props.opts" :selected="opt.selected">{{ opt.text }}
        </option>
    </select>
</template>