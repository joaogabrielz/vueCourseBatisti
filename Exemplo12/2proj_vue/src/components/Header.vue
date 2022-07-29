<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background-color: rgba(153, 153, 153, 0.445);
    }
    li {
        margin-right: 10px;
    }
    a {
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }
    a:hover {
        color: turquoise;
    }
</style>