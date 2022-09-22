<template>
  <div class="font-[300] text-[13px] text-center my-2 flex flex-row items-center mt-20 mb-10 justify-center">
    <a
      href="https://github.com/osscameroon/devsurvey/"
      target="_blank"
      class="text-muted"
    >
      <img class="mr-4 w-7 h-7" :src="require('../assets/images/github.png')" />
    </a>
    <p>
      &copy; {{ new Date().getFullYear() }} OSS Cameroon, All rights reserved
    </p>
  </div>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
