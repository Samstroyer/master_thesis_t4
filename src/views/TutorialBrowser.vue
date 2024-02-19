<template>
    <h1>Tutorials</h1>
    <div v-if="tutorials" class="tutorial-container">
        <InfoCard v-for="item in tutorials" :title="item.title" :description="item.description" :id="item.order" />
    </div>
    <div v-else>
        <h2>
            Fetching data...
        </h2>
    </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue';
const { MongoClient } = require('mongodb');

const publicUser = {
    username: "public",
    password: "vZFRtVEEtGUMUJLI"
};

const uri = `mongodb+srv://${publicUser.username}:${publicUser.password}@tutorials.b1fyfce.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const database = client.db("Tutorials");
const tutorialsCollection = database.collection("Tutorials");

async function Connect() {
    await client.connect().catch(err => console.log(err));
    const matchCursor = await tutorialsCollection.find();

    const ret = [];
    for await (let tutorial of matchCursor) {
        ret.push(tutorial)
    }

    client.close();

    return ret;
}

export default {
    data() {
        return {
            tutorials: null
        };
    },
    async mounted() {
        this.tutorials = await Connect();
    },
    components: { InfoCard }
};
</script>

<style>
.tutorial-container {
    display: grid;
    grid-template-columns: auto auto auto;
}
</style>