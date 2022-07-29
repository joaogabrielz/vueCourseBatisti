<template>
    <div>
        <p v-if="!is_working"><strong>I'am Working at moment</strong></p>
        <p v-else ><strong>I'am Looking for a new Job</strong></p>
        <p>My stacks: </p>
        <ul>
            <li>Javascript</li>
            <li>Vue</li>
            <li>Php</li>
            <li>Laravel</li>
        </ul>
        <div>
            <button @click="show_email">{{txtButton}}</button>
        </div>
        <p v-show="varShow_email">Send message to: <strong>{{email}} </strong></p>
        <p>To access my portifolio <a v-bind:href="linkImg">Click me</a> </p>
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
        data() {
            return {
                is_working: true,
                varShow_email: false,
                email: "zezinho@gmail.com",
                linkImg: "https://google.com",
                txtButton: "Show Email"
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