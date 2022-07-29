<template>
  <div>
    <Header />
    <FirstComponent />
    <!-- <first-component/> -->
    <p class="paragraph-dad">Just {{test}}...</p>
    <LifeCycle />
    <Person /> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    Header,
    FirstComponent,
    LifeCycle,
    Person,
},
  data() {
    return{
      test: "testing"
    } 
  }
}
</script>

<style>
  body {
    background-color:#333 ;
    color:#fff;
  }
  a {
    color: red;
  }
  .teste {
    background-color: black;
  }
</style>