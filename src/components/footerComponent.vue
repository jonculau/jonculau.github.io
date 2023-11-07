<script setup lang="ts">

</script>
<template>
    <div class="footer">
        <a class="icon i-linkedin" href="https://www.linkedin.com/in/jonathan-culau/"></a>
        <a class="icon i-github" href="https://github.com/jonculau"></a>
        <a class="material-icons" href="mailto:jonathan.culau@outlook.com">mail</a>
    </div>
</template>
<style scoped>
.footer {
    height: var(--nav-height);
    background-color: var(--background-color);
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon{
    background-color: var(--p-color);
}
.icon{
    --size: calc(var(--nav-height) - 15px);
}
a{
    text-decoration: none;
}
.material-icons{
    color: var(--p-color);
    font-size: calc(var(--nav-height) - 15px);
}

</style>