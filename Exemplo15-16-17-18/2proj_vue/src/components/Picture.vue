<template>
    <img :src="avatar" :alt="description">
    <!-- <Reutilizacao /> -->
    <ChangeImg @change-Image="change" />
</template>

<script>
import Reutilizacao from './Reutilizacao.vue'
import ChangeImg from './ChangeImg.vue'

export default{
    name:'Picture',
    components: {
        Reutilizacao,
        ChangeImg
    },
    data() {
        return{
            avatar: "/img/avatar.png",
            description: "user description :)"
        }
    },
    methods: {
        change(){
            if(this.avatar == "/img/avatar.png"){
                this.avatar = "/img/avatar2.png"
            }
            else if(this.avatar == "/img/avatar2.png"){
                this.avatar = "/img/avatar.png"
            }
            
        }
    }
}
</script>