<template>
  <div class="line">
    <div id="chartContainer">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>


<script>
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import myYamlObj from '../assets/survey.yaml';
let myChart
myChart
export default {
  data() {
    return {
      labels: [],
      data: [],
      new_labels: []
    }
  },
  methods: {
    //loading yaml data
    loadData() {
      myYamlObj.items.map((data) => {
        return this.labels.push(data.city)


      })
      // using js tenary operators to avoid duplicate data
      const counts = {}
      console.log('count', counts)
      for (const num of this.labels) {
        counts[num] = counts[num] ? (counts[num] + 1) : (1);
      }
      for (let item in counts) {
        this.new_labels.push(item)
        this.data.push(counts[item])

      }
      // console.log('here',this.new_labels)
      // console.log('here',this.data)      



    }



  },

  mounted() {
    this.loadData()
    this.newChart(this.new_labels, this.data)


  },
  //charts setup
  setup() {
    Chart.register(ChartDataLabels);
    let newChart = (firstlabels, firstdata) => {
      const ctx = document.getElementById('myChart')
      //const labels = ['Douala', 'Yaounde', 'Bafoussam', 'Maroua', 'Fundong', 'Molyko']
      const data = {
        labels: firstlabels,
        datasets: [{
          label: 'Towns where developers live',
          data: firstdata,

          backgroundColor: [
            '#3583EA',
            'rgba(53, 131, 234, 0.3)',
            '#3583EA',
            'rgba(53, 131, 234, 0.3)',
            'rgba(53, 131, 234, 0.8)',
            'rgba(53, 131, 234, 0.8)',
            '#3583EA',
            'rgba(53, 131, 234, 0.9)',
            '#3583EA',
            'rgba(53, 131, 234, 0.3)',
          ],

          borderWidth: 1,
          barPercentage: 0.5,
          datalabels: {
            anchor: 'center',
            align: 'top',
            

          }
        }]
      }

      const config = {
        type: 'bar',
        data: data,
        plugins: [ChartDataLabels],
        options: {
          indexAxis: 'y',
         
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
          plugins: {
            tooltip: {
              enabled: false
            },
            labels: {
              render: 'percentage'
            },
            datalabels: {
              formatter: (value, ctx) => {
                let datasets = ctx.chart.data.datasets;
                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                  let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                  let percentage = Math.round((value / sum) * 100) + '%';
                  return percentage;
                }
              },

            }
          }

        }
      }
      myChart = new Chart(ctx, config)

    }
    return {
      newChart
    }
  }

}
</script>

<style scoped>
#chartContainer {
  width: 600px;
}
</style>