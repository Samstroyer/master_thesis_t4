<script setup>
import { GetData } from '../scripts/ProjectExplorer';


const getInfo = () => GetData();

</script>

<template>
    <div class="page">
        <div class="description" style="border: 2px solid blue;">
            <h1>What is this?</h1>
            <h3 style="background-color: aquamarine; border-radius: 15%; padding: 5px;">
                Project explorer was created to easily see the branches in a repository and other data in it.
            </h3>
            <br />
            <h3>
                Things you can see with this tool:
            </h3>
            <h4>(Only supports local for now!)</h4>
            <!-- Make these links to tutorials later! -->
            <menu>
                <li>Branches</li>
                <li>Tags</li>
                <li>Specific commits</li>
                <li>Commit messages</li>
                <li>Authors</li>
            </menu>
        </div>
        <div class="tool">
            <h1>Tool</h1>
            <input type="text" placeholder="GitHub Link">
            <button style="margin-left: 5px;" @click="getInfo">Get data!</button>
        </div>
    </div>
</template>

<style scoped>
input {
    text-align: center;
}

ul {
    all: revert;
}

li {
    float: left;
    margin: 5px 5px;
}

.page {
    display: grid;
    grid-template-columns: 30% 70%;
}

.page h1 {
    margin-bottom: 50px;
}
</style>