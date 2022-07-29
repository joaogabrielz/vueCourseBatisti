<template>
    <h1>Name is: {{name}} ;)</h1>
</template>

<script>
export default {
    name: "LifeCycle",
    data(){
        return {
            name: "Dont know"
        }
    },
    created() {
        setTimeout(() => {
            this.name = "Jao"
        },1000)
        
    },
    mounted() {
          setTimeout(() => {
            this.name = "Jeff"
        },2000)
    }
}
</script>