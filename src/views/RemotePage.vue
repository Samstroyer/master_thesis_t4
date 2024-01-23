<template>
    <h1>Welcome to quickstart page!</h1>

    <div class="quickstart-option-container">
        <router-link :to="{name: 'CreateRepo'}">Create Git repository</router-link>
        <button>Clone existing from GitHub</button>
    </div>

    <router-link :to="{ name: 'TutorialBrowser' }">Or visit the tutorials page</router-link>
</template> 

<script setup>
</script>

<style>
.quickstart-option-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 100px 20px;
}
</style>