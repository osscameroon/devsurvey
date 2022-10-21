<template>
  <div class="banner">
    <div class="flex w-full md:w-1/2">
      <img
        class="banner__img"
        :src="require('../../assets/images/banner.png')"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center w-full md:items-start md:w-1/2"
    >
      <h1 class="banner__section">{{ titleOne }} <br />{{ titleTwo }}</h1>
      <p class="banner__section-text">
        {{ body }}
      </p>
      <a
        href="https://github.com/osscameroon/devsurvey/issues/new?assignees=&labels=&template=take-the-survey.yaml&title=DO+NOT+EDIT+-+takes+the+developer+survey"
        target="_blank"
        class="banner__section-link"
        >{{ link }}
        <span class="ml-4"
          ><img :src="require('../../assets/images/arrow.png')"
        /></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-component",
  data() {
    return {
      titleOne: "CAMEROON",
      titleTwo: "DEVELOPERS SURVEY",
      body: "You are a cameroonian developer, please take this 3 minutes survey",
      link: "Take the survey",
    };
  },
};
</script>

<style lang="postcss" scoped>
.banner {
  @apply p-10 bg-[#DEE7F0] flex flex-col md:flex-row;
}
.banner__img {
  @apply w-[auto] h-[450px] md:ml-[200px];
}
.banner__section {
  @apply font-[900] text-center md:text-start text-[30px] md:text-[38px] leading-[40px] md:leading-[48px] text-[#4b4b4b];
}
.banner__section-text {
  @apply leading-[18px] font-[300] text-sm text-center my-2;
}
.banner__section-link {
  @apply mt-4 flex items-center bg-[#3583ea] px-8 md:px-12 py-2 uppercase font-[900] text-white text-[14px] md:text-[22px] rounded-lg;
}
</style>
