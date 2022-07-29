<template>
    <div>
        <button @click="first($event), second(txt2, $emit), three()">Active MultipleEvents</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
export default{
    name: "MultiplosEventos",
    data() {
        return {
            multiplos_eventos: "",
            txt2: "Second Event"
        }
    },
    methods: {
        first(e){
            this.multiplos_eventos = "First Event !"
        },
        second(txt, e){
            setTimeout(() => this.multiplos_eventos = txt, 500)
        },
        three(){
            setTimeout(() => this.multiplos_eventos = "", 1500)
        }
    }
}
</script>

<style scoped>
    div {
        margin: 50px;
    }
</style>>