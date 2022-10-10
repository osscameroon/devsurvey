<template>
  <div class="flex flex-col items-center mt-20">
    <h1
      class="font-[900] text-center text-[28px] md:text-[38px] leading-[48px] text-[#4b4b4b] px-4 md:px-0"
    >
      {{ title }}
    </h1>
    <div class="mt-10" />
    <div>
      <Line
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :width="800"
        :height="height"
      />
    </div>
  </div>
</template>
<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: "CompanyComponent",
  components: { Line },
  props: {
      chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 700
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
  },
  data() {
    return {
      title: "Languages they use at Cameroonian companies ?",
      chartData: {},
      datasets: [],
      labels: [],
    };
  },
  async created() {
    let items = await require("../assets/data/survey.yaml").items;
    let c_num = 0;
    let csharp_num = 0;
    let golang_num = 0;
    let rust_num = 0;
    let python_num = 0;
    let js_num = 0;
    let ts_num = 0;
    let php_num = 0;
    let bash_num = 0;
    for (let item in items) {
      let fav_languages = items[item].fav_languages;
      for (let item2 in fav_languages) {
        if (fav_languages[item2] === "C/C++") {
          c_num += 1;
        }
        if (fav_languages[item2] === "C#") {
          csharp_num += 1;
        }
        if (fav_languages[item2] === "Golang") {
          golang_num += 1;
        }
        if (fav_languages[item2] === "Rust") {
          rust_num += 1;
        }
        if (fav_languages[item2] === "Python") {
          python_num += 1;
        }
        if (fav_languages[item2] === "JavaScript") {
          js_num += 1;
        }
        if (fav_languages[item2] === "TypeScript") {
          ts_num += 1;
        }
        if (fav_languages[item2] === "PHP") {
          php_num += 1;
        }
        if (fav_languages[item2] === "Bash") {
          bash_num += 1;
        }
      }
      this.labels = [
        "C/C++",
        "C#",
        "Golang",
        "Rust",
        "Python",
        "Javascript",
        "TypeScript",
        "PHP",
        "Bash",
      ];
      this.datasets = [
        c_num,
        csharp_num,
        golang_num,
        rust_num,
        python_num,
        js_num,
        ts_num,
        php_num,
        bash_num,
      ];
      this.chartData = {
        labels: this.labels,
        datasets: [{ data: this.datasets }],
      };
    }
  },
};
</script>
