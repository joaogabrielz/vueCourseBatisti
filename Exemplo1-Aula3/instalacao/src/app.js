const myApp = {     
    data() {
        return{
            name: "João",
            age: 22,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();

            this.name = this.input_name;
        }
    }
}

Vue.createApp(myApp).mount("#app");