<template>
  <div class="h-auto m-2">
    <div class="flex flex-wrap lg:flex-nowrap ">
      <!-- Fotos-->
      <div class="lg:w-2/5 flex flex-wrap place-content-center shadow-2xl ">
        <div class="w-1/2 ">
          <img src="public/bruno.png" @click="bruno" @mouseover="bruno" />
        </div>

        <div class="w-1/2 ">
          <img src="public/Wesley.jpg" @click="wesley" @mouseover="wesley" />
        </div>

        <div class="w-1/2  ">
          <img
            src="public/stockPicture.jpg"
            @click="matheus"
            @mouseover="matheus"
          />
        </div>
      </div>
      <!-- BARRAs-->
      <div class="lg:w-3/5 m-3 shadow-2xl">
        <div class="p-2">
          <h3 class="flex justify-center text-3xl">{{ tecs.nome }}</h3>
        </div>

        <!-- BARRA LARAVEL-->
        <div class="w-full flex p-1">
          <div class="lg:w-1/6 w-1/3 self-center">
            <h1 class="barraTitulo">Laravel</h1>
          </div>
          <div class="lg:w-5/6 w-2/3">
            <div
              class="barraFundo"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="barra"
                :style="`width: ${tecs.laravel}%; transition: width 2s;`"
              ></div>
            </div>
          </div>
        </div>

        <!-- BARRA VUE.JS-->
        <div class="w-full flex p-1">
          <div class="lg:w-1/6 w-1/3 self-center">
            <h1 class="barraTitulo">Vue.js</h1>
          </div>
          <div class="lg:w-5/6 w-2/3">
            <div
              class="barraFundo"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="barra"
                :style="`width: ${tecs.vuejs}%; transition: width 2s;`"
              ></div>
            </div>
          </div>
        </div>

        <!-- BARRA BOOTSTRAP-->
        <div class="w-full flex p-1">
          <div class="lg:w-1/6 w-1/3 self-center">
            <h1 class="barraTitulo">Bootstrap</h1>
          </div>
          <div class="lg:w-5/6 w-2/3">
            <div
              class="barraFundo"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="barra"
                :style="`width: ${tecs.bootstrap}%; transition: width 2s;`"
              ></div>
            </div>
          </div>
        </div>

        <!-- BARRA TAILWIND-->
        <div class="w-full flex p-1">
          <div class="lg:w-1/6 w-1/3 self-center">
            <h1 class="barraTitulo">Tailwind</h1>
          </div>
          <div class="lg:w-5/6 w-2/3">
            <div
              class="barraFundo"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="barra"
                :style="`width: ${tecs.tailwind}%; transition: width 2s;`"
              ></div>
            </div>
          </div>
        </div>
        <!--RESUMO-->
        <div class="p-3">
          <h1 class="flex justify-center text-2xl">Who's this Guy?</h1>
          <p>
            {{ tecs.resumo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const tecs = ref({
      nome: "",
      laravel: 0,
      vuejs: 0,
      bootstrap: 0,
      tailwind: 0,
      resumo: "",
    });

    onMounted(() => {
      bruno();
    });
    const bruno = () => {
      tecs.value.nome = "Bruno";
      tecs.value.laravel = 60;
      tecs.value.vuejs = 40;
      tecs.value.bootstrap = 90;
      tecs.value.tailwind = 10;
      tecs.value.resumo =
        "Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno Bruno teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste  ";
    };

    const wesley = () => {
      tecs.value.nome = "Wesley";
      tecs.value.laravel = 20;
      tecs.value.vuejs = 10;
      tecs.value.bootstrap = 15;
      tecs.value.tailwind = 5;
      tecs.value.resumo =
        "wesley wesley wesley wesley wesley wesley wesley wesley wesley wesley wesley wesley wesley teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste ";
    };

    const matheus = () => {
      tecs.value.nome = "Matheus";
      tecs.value.laravel = 100;
      tecs.value.vuejs = 95;
      tecs.value.bootstrap = 80;
      tecs.value.tailwind = 86;
      tecs.value.resumo =
        "matheus matheus matheus matheus matheus matheus matheus matheus matheus matheus teste teste teste teste teste teste teste teste teste teste teste teste ";
    };

    return {
      bruno,
      wesley,
      tecs,
      matheus,
    };
  },
};
</script>
<style>
img {
  @apply shadow-2xl rounded-full self-center transform hover:scale-75 delay-150 duration-300 ease-in-out scale-50 cursor-pointer;
}
.barraFundo {
  @apply bg-gray-200 rounded h-8;
}
.barra {
  @apply bg-blue-400 rounded h-8 place-content-center;
}
.barraTitulo {
  @apply text-lg font-medium;
}
</style>
