<template>
  <Home />
  <AboutUs />
  <Portfolio />
  <Contact />
  <Footer />
</template>

<script>
import Home from "./Home/Home.vue";
import AboutUs from "./AboutUs/AboutUs.vue";
import Portfolio from "./Portfolio/Portfolio.vue";
import Contact from "./Contact/Contact.vue";
import Footer from "./Footer/Footer.vue";
export default {
  name: "Layout",
  components: { Home, AboutUs, Portfolio, Contact, Footer },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
