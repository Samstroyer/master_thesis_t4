<script setup>
import UserClone from './UserClone.vue';
import LinkClone from './LinkClone.vue';
import { defineProps, ref } from 'vue';
import Select from './Select.vue';

const using = ref("Name");

const options = [
    { text: "Name", selected: true },
    { text: "Link", selected: false }
];

</script>

<template>
    <Select :opts="options" @change="(newVal) => using = newVal" />
    <br />
    <UserClone v-if="using == 'Name'" />
    <LinkClone v-if="using == 'Link'" />
</template>