<template>
    <h1>Welcome to quickstart page!</h1>

    <div class="quickstart-option-container">
        <router-link :to="{ name: 'CloneRepo' }" class="quickstart-option">Clone existing from GitHub</router-link>
        <router-link :to="{ name: 'InitRepo' }" class="quickstart-option">Init new Git repo</router-link>
    </div>

    <router-link :to="{ name: 'TutorialBrowser' }" class="visit-tutorial-link">Or visit the tutorials page</router-link>
</template> 

<script setup>
</script>

<style>
a {
    font-size: large;
}

.quickstart-option-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px 20px;
    background: gray;
    padding: 0px;
}

.quickstart-option {
    background-color: red;
    width: max-content;
    height: max-content;
    padding: 15%;
}

.quickstart-option:nth-child(1) {
    background-color: green;
}

.quickstart-option:nth-child(2) {
    background-color: orange;
}
</style>