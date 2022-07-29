<template>
  <div>
    <FirstComponent />
    <!-- <first-component/> -->
    <p>Just {{test}}...</p>
    <LifeCycle />
    <Person /> 
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    FirstComponent,
    LifeCycle,
    Person
  },
  data() {
    return{
      test: "testing"
    } 
  }
}
</script>