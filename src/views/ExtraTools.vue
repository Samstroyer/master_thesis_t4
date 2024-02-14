<script setup>

const tools = [
    {
        name: "Version tagger",
        description: "Tags commits, can tag things like 'V 1.0', 'BETA'",
        status: "not implemented yet",
    },
    {
        name: "Bare power",
        description: "Shows the power of bare repos and working with multiple branches simultaniously!",
        status: "not implemented yet",
    },
    {
        name: "Project explorer",
        description: "Explores branches and data about repositories",
        status: "not implemented yet",
    },
]

const opentool = (tool) => {
    console.log(tool.name);
    if (tool.status == "not implemented yet") {
        alert(tool.status)
    }
}

</script>

<template>
    <h1>Tools:</h1>
    <div class="container">
        <div v-for="tool in tools" class="tool">
            <h2>{{ tool.name }}</h2>
            <h4>{{ tool.description }}</h4>
            <button @click="opentool(tool)">Go to tool!</button>
        </div>
    </div>
    <h3>With the help of drive and my liking to learn, I have created some extra tools.</h3>
    <h4>The tools above will let you explore Git and its version handling in a interactive way!</h4>
</template>

<style scoped>
ul {
    all: revert;
}

li {
    all: revert;
    margin: 10px 0px;
}

.tool {
    border: 1px solid red;
    background-color: rgba(106, 187, 224, 0.486);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.tool:nth-child(even) {
    align-items: flex-start;
}

.tool:nth-child(odd) {
    align-items: flex-end;
}

.tool button {
    margin: 5px 18%;
    border-radius: 50%;
    padding: 1%;
    background-color: #02ff8d;
}

.tool h2 {
    margin: 5px 15%;
}

.tool h4 {
    width: 45%;
}
</style>