<template>
  <div class="flex flex-col items-center mt-20">
    <h1
      class="font-[900] text-center text-[28px] md:text-[38px] leading-[48px] text-[#4b4b4b] px-4 md:px-0"
    >
      {{ title }}
    </h1>
    <div class="mt-10">
      <img :src="require('../assets/images/language.png')" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "LanguageComponent",
  data() {
    return {
      title: "Thier favourite language ?",
    };
  },
};
</script>
