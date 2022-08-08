<template>
  <div>
    <div>
      <HeaderComponent />
      <div class="chart d-flex justify-content-center">
        <ChartsComponent />
      </div>
      <div>
        <TableComponent />
      </div>
      <div>
        <PaginationComponent />
      </div>
    </div>
    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HeaderComponent from './components/HeaderComponent'
import ChartsComponent from './components/ChartsComponent.vue'
import TableComponent from './components/TableComponent'
import PaginationComponent from './components/PaginationComponent'
import FooterComponent from './components/FooterComponent'



export default {
  name: 'App',
  components: {
    HeaderComponent,
    ChartsComponent,
    TableComponent,
    PaginationComponent,
    FooterComponent
  }
}
</script>