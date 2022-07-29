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

        this.lifeCycle();
    },
    mounted() {
          setTimeout(() => {
            this.name = "Jeff"
        },2000)

         this.lifeCycle();
    },
    methods:{
        lifeCycle(){
            console.log("Exec...")
        }
    }
}
</script>