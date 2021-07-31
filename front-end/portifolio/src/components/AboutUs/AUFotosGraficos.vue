<template>
  <div class="h-auto m-2">
    <div class="flex">
      <div class="w-2/5 flex flex-wrap place-content-center">
        <div class="w-1/2 bg-red-500">
          <img src="public/bruno.png" @click="bruno" />
        </div>

        <div class="w-1/2 bg-blue-500">
          <img src="public/Wesley.jpg" @click="wesley" />
        </div>

        <div class="w-1/2 bg-green-500 self-center shadow-2xl">
          <img src="public/stockPicture.jpg" @click="matheus"/>
        </div>
      </div>
      <div class="w-3/5 m-3">
        <div class="w-full">
          <h1>Laravel</h1>
          <div
            class="bg-gray-200 rounded h-2"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="bg-green-400 rounded h-2 text-center"
              :style="`width: ${tecs.laravel}%; transition: width 2s;`"
            ></div>

          </div>
        </div>
        <div class="w-full">
          <h1>Vue.js</h1>
          <div
            class="bg-gray-200 rounded h-2"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="bg-green-400 rounded h-2 text-center"
                :style="`width: ${tecs.vuejs}%; transition: width 2s;`"
            ></div>
          </div>
        </div>
        <div class="w-full">
          <h1>Bootstrap</h1>
          <div
            class="bg-gray-200 rounded h-2"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="bg-green-400 rounded h-2 text-center"
                :style="`width: ${tecs.bootstrap}%; transition: width 2s;`"
            ></div>
          </div>
        </div>
        <div class="w-full">
          <h1>Tailwind</h1>
          <div
            class="bg-gray-200 rounded h-2"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="bg-green-400 rounded h-2 text-center"
                :style="`width: ${tecs.tailwind}%; transition: width 2s;`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const tecs = ref({laravel:0,vuejs:0,bootstrap:0,tailwind:0})

        const bruno = () =>{
            tecs.value.laravel = 60
            tecs.value.vuejs = 40
            tecs.value.bootstrap = 90
            tecs.value.tailwind = 10
        }

        const wesley = () =>{
            tecs.value.laravel = 20
            tecs.value.vuejs = 10
            tecs.value.bootstrap = 15
            tecs.value.tailwind = 5
        }

        const matheus = () =>{
            tecs.value.laravel = 100
            tecs.value.vuejs = 95
            tecs.value.bootstrap = 80
            tecs.value.tailwind = 86
        }

        return{
            bruno,
            wesley,
            tecs,
            matheus,
        }
    }
}
</script>
<style>
img {
  @apply rounded-full  transform scale-50 cursor-pointer;
}
</style>
