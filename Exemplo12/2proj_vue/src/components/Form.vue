<template>
    <form action="" @submit="sendForm($event)">
        <h2>My Form:</h2>
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        <div>
            <Submit />
        </div>
        
    </form>
</template>
<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data() {
        return {
            name: "",
            email: ""
        }
    },
    methods: {
        sendForm(e){
            e.preventDefault();
            const name = this.name;
            const email = this.email;
            if(name){
                alert("Form Sended Mr "+ name)
            }
            
        }
    }
}
</script>
