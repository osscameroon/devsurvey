<template>
  <div class="language">
    <h1 class="language__title">
      {{ title }}
    </h1>
    <div class="mt-10" />
    <div>
      <Bar
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :width="800"
        :height="400"
      />
    </div>
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "LanguageComponent",
  components: { Bar },

  data() {
    return {
      title: "Thier favourite language ?",
      chartData: {},
      datasets: [],
      labels: [],
    };
  },
  async created() {
    let items = await require("../../assets/data/survey.yaml").items;
    let lang_count = {
      "c/c++": 0,
      "c#": 0,
      golang: 0,
      go: 0,
      rust: 0,
      python: 0,
      javascript: 0,
      typescript: 0,
      php: 0,
      bash: 0,
      dart: 0,
      kotlin: 0,
      scala: 0,
      ada: 0,
      vba: 0,
      groovy: 0,
      java: 0,
      perl: 0,
    };
    let lang_count_keys = Object.keys(lang_count);
    for (let item in items) {
      let fav_languages = items[item].fav_languages;

      for (let item2 in fav_languages) {
        const lang_item = fav_languages[item2].toLowerCase();

        if (lang_count_keys.includes(lang_item)) lang_count[lang_item] += 1;
      }

      lang_count_keys = Object.keys(lang_count);
      this.chartData = {
        labels: lang_count_keys,
        datasets: [
          {
            label: "Languages",
            backgroundColor: "#f87979",
            data: lang_count_keys.map((ll) => lang_count[ll]),
          },
        ],
      };
    }
  },
};
</script>

<style lang="postcss" scoped>
.language {
  @apply flex flex-col items-center mt-20;
}
.language__title {
  @apply font-[900] text-center text-[28px] md:text-[38px] leading-[48px] text-[#4b4b4b] px-4 md:px-0;
}
</style>
