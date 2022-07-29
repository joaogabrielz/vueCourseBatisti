<template>
    <div>
        <h2>This is description of Person: {{name}}</h2>
        <Info :email="email" :is_working="false"/>
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
                name: "Jaum",
                email: "Tester@EMAIL.CUM",
                // is_working: false,
            }
        }
    }
</script>