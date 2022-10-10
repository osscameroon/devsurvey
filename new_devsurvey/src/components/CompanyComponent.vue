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
    let lang_count = {
        "C/C++": 0,
        "C#": 0,
        "Golang": 0,
        "Rust": 0,
        "Python": 0,
        "Javascript": 0,
        "TypeScript": 0,
        "PHP": 0,
        "Bash": 0,
    }
    for (let item in items) {
      let fav_languages = items[item].fav_languages;

      for (let item2 in fav_languages) lang_count[fav_languages[item2]] += 1

      this.chartData = {
        labels: Object.keys(lang_count),
        datasets: [{ data: Object.values(lang_count) }],
      };
    }
  },
};
</script>
