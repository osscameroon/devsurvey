<template>
  <div class="live">
    <h1 class="live__title">
      {{ title }}
    </h1>
    <div class="mt-10" />
    <div>
      <Pie
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :width="450"
        :height="500"
      />
    </div>
  </div>
</template>
<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "LiveComponent",
  components: { Pie },
  data() {
    return {
      title: "Where they live",
      chartData: {},
      datasets: [],
      labels: [],
    };
  },
  async created() {
    let items = await require("../../assets/data/survey.yaml").items;
    let cities = {
      douala: 0,
      yaoundé: 0,
      bafoussam: 0,
      maroua: 0,
      mokolo: 0,
      fundong: 0,
    };
    let city_count_keys = Object.keys(cities);
    for (let item in items) {
      let my_city = items[item].city.toLowerCase();
      if (city_count_keys.includes(my_city)) cities[my_city] += 1;

      city_count_keys = Object.keys(cities);
      this.chartData = {
        labels: city_count_keys,
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: city_count_keys.map((ll) => cities[ll]),
          },
        ],
      };
    }
  },
};
</script>

<style lang="postcss" scoped>
.live {
  @apply flex flex-col items-center mt-20;
}
.live__title {
  @apply font-[900] text-center text-[28px] md:text-[38px] leading-[48px] text-[#4b4b4b] px-4 md:px-0;
}
</style>
