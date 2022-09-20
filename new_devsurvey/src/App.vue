<template>
  <div class="body">
    <header-component></header-component>
     
   
 
  </div>

     
    

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HeaderComponent from './components/HeaderComponent'





export default {
  name: 'App',
  components: {
    HeaderComponent,

   
  }
}
</script>
<style>
  .body{
    width: 100%;
  }
</style>