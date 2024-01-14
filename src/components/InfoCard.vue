<template>
    <div class="info-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ["title", "description"]
}
</script>

<style>
.info-card {
    width: 200px;
    border-radius: 10px;
    background-color: bisque;
    margin: 10px;
}
</style>