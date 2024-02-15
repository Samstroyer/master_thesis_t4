<script setup>
import { GetData } from '../scripts/ProjectExplorer';
import { ref } from "vue";

const commitInfo = ref([]);
const branchInfo = ref([]);
const tagInfo = ref([]);

const getInfo = () => {
    branchInfo.value = [];
    commitInfo.value = [];
    tagInfo.value = [];

    GetData(branchInfo.value, tagInfo.value, commitInfo.value)
};

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
            <br />
            <div class="datagrid">
                <div>
                    <h2>Tags</h2>
                    <div v-for="tag in tagInfo">
                        <h1>{{ tag }}</h1>
                    </div>
                </div>
                <div>
                    <h2>Branches</h2>
                    <div v-for="branch in branchInfo">
                        <h1>{{ branch }}</h1>
                    </div>
                </div>
                <div>
                    <h2>Commits</h2>
                    <div v-for="commit in commitInfo">
                        <h1>{{ commit }}</h1>
                    </div>
                </div>
            </div>
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
    border: none;
}

.datagrid {
    display: grid;
    grid-template-columns: 30% 40% 30%;
}

.datagrid h1 {
    word-wrap: break-word;
    font-size: small;
}

.page {
    display: grid;
    grid-template-columns: 30% 70%;
}

.page h1 {
    margin-bottom: 50px;
}
</style>