<template>
    <div>
        <!-- <p>{{compEmail}} -  {{email}}</p> -->
        <p>{{email}}</p>
        <p v-if="is_working"><strong>I'am Working at moment</strong></p>
        <p v-else ><strong>I'am Looking for a new Job</strong></p>
        <p>My stacks Back-End: </p>
        <ul>
            <li v-for="(tecnology, index) in backend_tecnologies" v-bind:key="index">{{tecnology}}</li>
        </ul>
        <p>My stack Front-End: </p>
        <ul>
            <li v-for="tecnology in frontend_tecnologies" v-bind:key="tecnology.id">{{tecnology.language}}</li>
        </ul>
        <div>
            <button @click="show_email">{{txtButton}}</button>
        </div>
        <p v-show="varShow_email">Send message to: <strong>{{email}} </strong></p>
        <p class="teste">To access my portifolio <a v-bind:href="linkImg">Click me</a> </p>
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'
    export default{
        name: 'Info',
        components: {
            Picture
        },
        props: {
            // compEmail: String
            email: String,
            is_working: Boolean,
        },
        data() {
            return {
                // is_working: true,
                varShow_email: false,
                // email: "zezinho@gmail.com",
                linkImg: "https://google.com",
                txtButton: "Show Email",
                backend_tecnologies: ["Node", "Php", "Java"],
                frontend_tecnologies: [
                    {id: 1, language: 'Html'},
                    {id: 2, language: 'Css'},
                    {id: 3, language: 'JavaScript'}
                ]
            }
        },
        methods:{
            show_email(){
                this.varShow_email = !this.varShow_email
                if(!this.varShow_email){
                    this.txtButton = "Show email"
                }
                else{
                    this.txtButton = "Hide email"
                }
            }
        }
    }
</script>

<style>
    .paragraph-dad {
        color: red;
    }
</style>