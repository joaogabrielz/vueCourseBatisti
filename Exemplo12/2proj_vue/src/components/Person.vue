<template>
    <div>
        <h2>This is description of Person: {{name}}</h2>
        <Info />
        <Form />
    </div>
</template>

<script>
    import Info from './Info.vue'
    import Form from './Form.vue'

    export default{
        components: {
            Info,
            Form
        },
        name: "Person",
        data(){
            return{
                name: "Jaum"
            }
        }
    }
</script>