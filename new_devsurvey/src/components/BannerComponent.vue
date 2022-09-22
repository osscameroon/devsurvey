<template>
  <div class="p-10 bg-[#DEE7F0] flex flex-col md:flex-row">
    <div class="flex w-full md:w-1/2">
      <img
        class="w-[auto] h-[450px] md:ml-[200px]"
        :src="require('../assets/images/banner.png')"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center w-full md:items-start md:w-1/2"
    >
      <h1
        class="font-[900] text-center md:text-start text-[30px] md:text-[38px] leading-[40px] md:leading-[48px] text-[#4b4b4b]"
      >
        {{ titleOne }} <br />{{ titleTwo }}
      </h1>
      <p class="leading-[18px] font-[300] text-[12px] text-center my-2">
        {{ body }}
      </p>
      <a
        href="https://github.com/osscameroon/devsurvey/issues/new?assignees=&labels=&template=take-the-survey.yaml&title=DO+NOT+EDIT+-+takes+the+developer+survey"
        target="_blank"
        class="mt-4 flex items-center bg-[#3583ea] px-8 md:px-12 py-2 uppercase font-[900] text-white text-[14px] md:text-[22px]"
        >{{ link }}
        <span class="ml-4"
          ><img :src="require('../assets/images/arrow.png')"
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
