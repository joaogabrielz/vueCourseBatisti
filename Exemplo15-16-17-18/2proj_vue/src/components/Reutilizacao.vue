<template>
    <div>
        <button @click="active">Click me!</button>
        <span v-show="activated">activated</span>
    </div>
</template>

<script>
    export default {
        name: "Reutilizacao",
        data() {
            return {
               activated: false
            }
        },
        methods: {
            active() {
                this.activated = !this.activated
            }
        }
    }
</script>