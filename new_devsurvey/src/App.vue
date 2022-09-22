<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <BannerComponent></BannerComponent>
    <AboutComponent></AboutComponent>
    <LiveComponent></LiveComponent>
    <LanguageComponent></LanguageComponent>
    <CompanyComponent></CompanyComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./components/BannerComponent";
import AboutComponent from "./components/AboutComponent.vue";
import LiveComponent from "./components/LiveComponent.vue";
import LanguageComponent from "./components/LanguageComponent.vue";
import CompanyComponent from "./components/CompanyComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
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
