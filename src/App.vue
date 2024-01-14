<template>
  <ul>
    <li>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Tutorials' }">Tutorials</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'About' }">About</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
const { MongoClient } = require('mongodb');

const publicUser = {
  username: "public",
  password: "vZFRtVEEtGUMUJLI"
};

const uri = `mongodb+srv://${publicUser.username}:${publicUser.password}@tutorials.b1fyfce.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function Connect() {
  const database = client.db("Tutorials");
  const tutorials = database.collection("Tutorials");

  await client.connect().catch(err => console.log(err));

  const test = await tutorials.find();

  for await (let thing of test) {
    console.log(thing);
  }
}

Connect();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #555;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #333;
}

li:last-child {
  float: right;
}

li:not(:last-child) {
  border-right: 1px solid white;
}
</style>
