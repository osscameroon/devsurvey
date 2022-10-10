<template>
  <div class="p-8">
    <div class="flex items-center justify-center">
      <img class="w-16 h-auto mr-2" :src="logo" />
      <h1 class="text-[#3583EA] font-[700] text-4xl text-center">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { GLOBAL } from "../assets/constants.js";
export default {
  name: "header-component",
  data() {
    return {
      title: GLOBAL.title,
      logo: require("../assets/images/logo.svg"),
    };
  },
};
</script>
