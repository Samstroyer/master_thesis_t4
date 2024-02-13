<template>
  <ul>
    <li>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'TutorialBrowser' }">Tutorials</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Quickstart' }">Quickstart</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'ExtraTools' }">Extra</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'About' }">About</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>

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
  border-left: 1px solid white;
}

li:not(:last-child) {
  border-right: 1px solid white;
}
</style>
