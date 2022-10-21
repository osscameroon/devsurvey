<template>
  <div class="p-8">
    <div class="header">
      <img class="header__img" :src="logo" />
      <h1 class="header__text">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { GLOBAL } from "../../assets/constants.js";
export default {
  name: "header-component",
  data() {
    return {
      title: GLOBAL.title,
      logo: require("../../assets/images/logo.svg"),
    };
  },
};
</script>

<style lang="postcss" scoped>
.header {
  @apply flex items-center justify-center;
}
.header__img {
  @apply w-16 h-auto mr-2;
}

.header__text {
  @apply text-[#3583EA] font-[700] text-4xl text-center;
}
</style>
