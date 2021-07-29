<template>
<div>
  <home />
  <navegacao />
  <about-us />
  <portifolio />
  <contact/>
  <rodape />

</div>
</template>

<script>
import AboutUs from './components/AboutUs/AboutUs.vue'
import Contact from './components/Contact/Contact.vue'
import Home from './components/Home/Home.vue'
import Navegacao from './components/Navegacao/Navegacao.vue'
import Portifolio from './components/Portifolio/Portifolio.vue'
import Rodape from './components/Rodape/Rodape.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navegacao,
    Contact,
    AboutUs,
    Portifolio,
    Rodape,
  }
}

