<template>
  <div class="flex flex-col items-center mt-20">
    <h1
      class="font-[900] text-center text-[28px] md:text-[38px] leading-[48px] text-[#4b4b4b] px-4 md:px-0"
    >
      {{ title }}
    </h1>
    <p class="leading-[25px] font-[300] text-sm px-2 md:px-0 m-2 w-full md:w-1/2 text-center">{{ body }}</p>
  </div>
</template>
<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      title: "About the survey",
      body: "Cameroon developers survey is an initiative of OSS. explores the current landscape of developers and the evolving lifestyle of the ecosystem.",
    };
  },
};
</script>
