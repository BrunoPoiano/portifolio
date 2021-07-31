<template>
  <div class="h-auto m-2">
    <div class="flex">
      <div class="w-2/5 flex flex-wrap place-content-center">
        <div class="w-1/2 bg-red-500">
          <img src="public/bruno.png" />
        </div>

        <div class="w-1/2 bg-blue-500">
          <img src="public/bruno.png" />
        </div>

        <div class="w-1/2 bg-green-500 self-center shadow-2xl">
          <img src="public/bruno.png" />
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
              :style="`width: 70%; transition: width 2s;`"
            ></div>
            <!-- Com Variavel 
              <div
                class="bg-gray-200 rounded h-2"
                role="progressbar"
                :aria-valuenow="width"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              <div
                class="bg-green-400 rounded h-2 text-center"
                :style="`width: ${70}%; transition: width 2s;`"
              ></div>
               -->
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
              :style="`width: 50%; transition: width 2s;`"
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
              :style="`width: 90%; transition: width 2s;`"
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
              :style="`width: 10%; transition: width 2s;`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
img {
  @apply rounded-full  transform scale-50;
}
</style>
