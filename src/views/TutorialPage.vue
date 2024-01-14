<template>
    <div v-if="tutorialData">
        <h1>Tutorial {{ tutorialData.order }}</h1>
        <div class="tablet-view">
            <h2>{{ tutorialData.title }}</h2>
            <h3>{{ tutorialData.description }}</h3>
        </div>
    </div>
    <div v-else>
        <h1>Searching for tutorial...</h1>
    </div>
</template>

<script>
const { MongoClient } = require('mongodb');

const publicUser = {
    username: "public",
    password: "vZFRtVEEtGUMUJLI"
};

const uri = `mongodb+srv://${publicUser.username}:${publicUser.password}@tutorials.b1fyfce.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const database = client.db("Tutorials");
const tutorialsCollection = database.collection("Tutorials");

async function Connect(id) {
    await client.connect().catch(err => console.log(err));
    const result = await tutorialsCollection.findOne({ order: id });
    client.close();
    return result;
}

export default {
    data() {
        return {
            id: this.$route.params.id,
            tutorialData: null
        }
    },
    async mounted() {
        this.tutorialData = await Connect(this.id);
    }
}
</script>

<style>
.tablet-view {
    background-color: bisque;
    margin: auto 10%;
}
</style>