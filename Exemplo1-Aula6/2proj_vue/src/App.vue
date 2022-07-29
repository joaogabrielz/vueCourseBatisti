<template>
    <FirstComponent/>
    <!-- <first-component/> -->
    <p>Just {{test}}...</p>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'

export default {
  name: 'App',
  components: {
    FirstComponent
  },
  data() {
    return{
      test: "testing"
    } 
  }
}
</script>