<template>
    <div>    
        <h1>Hell0 VueJS!</h1>
        <p>My name is {{name}}, i am a {{job}}</p>
        <MultiplosEventos />
        <Reutilizacao /> <!-- Components Independentes -->
    </div>
    <br>
     <Reutilizacao />
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'

export default{
    name: 'FirstComponent',
    components: {
    MultiplosEventos,
    Reutilizacao,
},
    data(){
        return {
            name: "Joao",
            job: "Developer"
        }
    }
}

</script>