<template>
    <div class="d-flex justify-content-center">
        <div class="container-fluid">
            <div class="d-flex justify-content-center mt-5 mb-4">
                <h1 class="ms-3" style="font-family: 'Poppins', sans-serif; font-weight: 600; color: 
                #4B4B4B; font-size:64px;">
                    Thier favourite languages ?
                </h1>
            </div>
    
            <div class="d-flex justify-content-center mb-5">
                <div class="line">
                    <div id="fav">
                      <canvas id="favChart"></canvas>
                    </div>
                  </div>
            </div>
           
        </div>
    </div>
   
  </template>
  
  
  <script>
import Chart from 'chart.js/auto'
import myYamlObj from '../assets/survey.yaml';

let myChart
myChart
export default {
  data(){
    return{
      new_labels:[],
      fav_data:[],
      fav_labels:[]
    }
  },

  methods:{
    loadFavData(){
       myYamlObj.items.map((data)=>{
        if(data.fav_languages.length>1){
              data.fav_languages.map((item)=>{
                return this.fav_labels.push(item)
              })
        }
        else{
          return this.fav_labels.push(data.fav_languages[0])
        }
          
        
      })
      // console.log(this.fav_labels)
      const counts = {}
      for (const num of this.fav_labels){
        counts[num]=counts[num]?(counts[num]+1):(1);
      }
      // console.log('count',counts)
      for(let item in counts){
        this.new_labels.push(item)
        this.fav_data.push(counts[item])

      }
      // console.log('here',this.new_labels)
      // console.log('here',this.fav_data)      


    
    }



  },


  mounted() {
    this.loadFavData()
    this.favChart(this.new_labels,this.fav_data)

  },
  setup() {
 
    let favChart = (mainlabels,maindata) => {
      const ctx = document.getElementById('favChart')
      const data = {
           
        labels: mainlabels,
        datasets: [{
          label: 'Favorite languages',
            data:maindata,
          backgroundColor: [
                        '#2F8DD0',
                        '#9943A2',
                        '#00C4A2',
                        '#EDC1B7',
                        '#D04847',
                        '#00C4A2',
                        '#EDC1B7',
                        '#8BBFE4',
                        '#F6F6F6',
                        '#F2D9D4',
                        '#E49797'
          ],

          borderWidth: 1,
         
          
        }]
      }

      const config = {
        type: 'bar',
        data: data, 
        options: {

          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false
              },
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins:{
            tooltip:{
              enabled: false
            },  
      
          }

        }
      }
      myChart = new Chart(ctx, config)

    }
    return {
    favChart
    }
  }

}
</script>

<style scoped>
#fav {
  width: 600px;
  background-color:#F6F6F6;
}
</style>