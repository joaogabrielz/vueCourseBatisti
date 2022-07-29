<template>
    <div>
        <h1>Hell0 VueJS!</h1>
        <p>My name is {{name}}, i am a {{job}}</p>
    </div>
</template>

<script>
export default{
    name: 'FirstComponent',
    data(){
        return {
            name: "Joao",
            job: "Developer"
        }
    }
}

</script>