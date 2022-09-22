<template>
  <div class="p-10">
    <h1 class="text-[#3583EA] font-[700] text-4xl text-center">{{title}}</h1>
  </div>
</template>

<script>
import {GLOBAL} from "../assets/constants.js";
export default {
  name: "header-component",
  data() {
    return {
      title: GLOBAL.title,
    };
  },
};
</script>
