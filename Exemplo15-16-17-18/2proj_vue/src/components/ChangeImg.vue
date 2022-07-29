<template>
    <div>
        <button @click="$emit('changeImage')">Change Img</button>
    </div>    
</template>

<script>
    export default{
        name: "ChangeImg",
        emits: ['changeImage']
    }
</script>