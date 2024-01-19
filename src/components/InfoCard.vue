<template>
    <div class="info-card">
        <h3>{{ title }}</h3>
        <p style="margin-bottom: 30px;">{{ description }}</p>
        <router-link class="learn-link" :to="{ name: 'TutorialPage', params: { id: id } }">
            Learn!
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["title", "description", "id"]
}
</script>

<style>
.info-card {
    width: 200px;
    border-radius: 10px;
    background-color: bisque;
    margin: 10px;
    padding: 10px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.learn-link {
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border-radius: 10px;
    padding: 8px;
    text-decoration: none;
    color: darkslategray;
}
</style>