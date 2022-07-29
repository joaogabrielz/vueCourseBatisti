const myApp = {     
    data() {
        return{
            name: "João",
            age: 22
        }
    }
}

Vue.createApp(myApp).mount("#app");