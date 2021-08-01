<template>
  <div class="flex flex-col h-auto place-content-center">

    <AUTitulo />

    <AUCristal />

    <AUFotosGraficos />
  </div>
</template>

<script>
import AUTitulo from './AUTitulo.vue';
import AUCristal from './AUCristal.vue'
import AUFotosGraficos from './AUFotosGraficos.vue'
export default {
  components: { AUTitulo,AUCristal,AUFotosGraficos },
  };
</script>

<style>


</style>
