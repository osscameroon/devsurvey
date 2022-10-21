<template>
  <div>
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <LiveComponent />
    <LanguageComponent />
    <CompanyComponent />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "./components/header/index.vue";
import BannerComponent from "./components/banner/index.vue";
import AboutComponent from "./components/about/index.vue";
import LiveComponent from "./components/live/index.vue";
import LanguageComponent from "./components/language/index.vue";
import CompanyComponent from "./components/company/index.vue";
import FooterComponent from "./components/footer/index.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    LiveComponent,
    LanguageComponent,
    CompanyComponent,
    FooterComponent,
  },
};
</script>
<style>
html,
body {
  font-family: "Poppins", sans-serif;
}
</style>
