<template>
    <div class="d-flex justify-content-center">
        <div class="container-fluid">
            <div class="d-flex justify-content-center mt-5 mb-4">
                <h1 class="ms-3"
                    style="font-family: 'Poppins', sans-serif; font-weight: 900; color: #4B4B4B; font-size:64px;">
                    Languages they use at <br> Cameroonian <br> companies ?
                </h1>
            </div>

            <div class="d-flex justify-content-center mb-5">
                <div class="line">
                    <div id="lang">
                        <canvas id="langChart"></canvas>
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-center" style="margin-top:100px;">
                <a href="https://github.com/osscameroon/devsurvey" target="_blank" style="color: #0c344b"><i
                        class="fa fa-github" style="font-size: 3rem"></i></a>
            </div>

            <div class="container d-flex justify-content-center mt-3">
                <p style="text-align: center">© {{currentYear}} OSS Cameroon, All rights reserved.</p>
            </div>

        </div>
    </div>

</template>
  
  
<script>
import myYamlObj from '../assets/survey.yaml';
import Chart from 'chart.js/auto'
let myChart
myChart
export default {
    data() {
        return {
            new_labels1: [],
            cam_data: [],
            cam_labels: []
        }
    },
    methods: {
        loadCamData() {
            myYamlObj.items.map((data) => {
                if (data.pro_cam_languages.length > 1) {
                    data.pro_cam_languages.map((item) => {
                        return this.cam_labels.push(item)
                    })
                }
                else {
                    return this.cam_labels.push(data.pro_cam_languages[0])
                }


            })
            // console.log(this.cam_labels)
            const counts = {}
            for (const num of this.cam_labels) {
                counts[num] = counts[num] ? (counts[num] + 1) : (1);
            }
            console.log('count', counts)
            for (let item in counts) {
                this.new_labels1.push(item)
                this.cam_data.push(counts[item])

            }
            //   console.log('here',this.new_labels1)
            //   console.log('here',this.cam_data)      



        }



    },

    mounted() {
        this.loadCamData()
        this.langChart(this.new_labels1, this.cam_data)

    },
    setup() {
        let langChart = (camlabels, camdata) => {
            const ctx = document.getElementById('langChart')
            const data = {
                labels: camlabels,
                datasets: [{
                    label: 'Languages used in Cameroon',
                    data: camdata,
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
                        },
                       
                       
                       
                    },


                }
            }
            myChart = new Chart(ctx, config)

        }
        return {
            langChart
        }
    }

}
</script>

<style scoped>
#lang {
    width: 600px;
    background-color: #F6F6F6;
}
</style>