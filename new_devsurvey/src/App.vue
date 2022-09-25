<template>
  <div class="content">
    <header-component></header-component>
    <div class="container-fluid">
      <div class="row" style="background-color:#F6F6F6;">
        <div class="col-12 col-md-6">
          <charts-component></charts-component>
				</div>
        <div class="col-12 col-md-6">
          <maps-component></maps-component>
				</div>
       
       
        
      </div>
    </div>
    <favlang-component></favlang-component>
    <lang-component></lang-component>
   
  </div>
   
 
 

     
    

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HeaderComponent from './components/HeaderComponent'
import MapsComponent from './components/MapsComponent.vue';
import ChartsComponent from './components/ChartsComponent.vue'
import FavlangComponent from './components/FavlangComponent.vue'
import LangComponent from './components/LangComponent.vue';





export default {
  name: 'App',
  components: {
    HeaderComponent,
    MapsComponent,
    ChartsComponent,
    FavlangComponent,
    LangComponent

   
  }
}
</script>
<style>
  .body{
    width: 100%;
  }
</style>