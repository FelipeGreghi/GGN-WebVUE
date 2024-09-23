<template>
  <div id="app">
    <NavBar />
    <HomeSection id="home" />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <router-view />
  </div>
</template>

<script>
import AboutSection from "./components/AboutSection.vue";
import HomeSection from "./components/HomeSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import NavBar from "./components/NavBar.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  components: {
    NavBar,
    HomeSection,
    AboutSection,
    ServicesSection,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos globais */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
  background-color: #121212;
  line-height: 1.6;
  width: 100%;
}
.content {
  padding-top: 108px;
}
</style>
