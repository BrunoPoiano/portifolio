<template>
  <div class="flex h-30 flex-wrap m-2">
    <div class="lg:w-1/4 w-full p-2">
      <div class="flex place-content-center">
        <div class="self-center bg-blue-200 cristal -rotate-45">
          <div class="bg-blue-200 cristal -rotate-90">
            <div class="bg-blue-200 cristal rotate-45">
              <div class="bg-red-200 cristal rotate-90">
                <p class="cristal-icone">Icone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="cristal-titulo">Fast</p>
      <p class="flex justify-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        delectus?
      </p>
    </div>

    <div class="lg:w-1/4 w-full p-2">
      <div class="flex place-content-center">
        <div class="self-center bg-blue-200 cristal -rotate-45">
          <div class="bg-blue-200 cristal -rotate-90">
            <div class="bg-blue-200 cristal rotate-45">
              <div class="bg-red-200 cristal rotate-90">
                <p class="cristal-icone">Icone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="cristal-titulo">Responsive</p>
      <p class="flex justify-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        delectus?
      </p>
    </div>

    <div class="lg:w-1/4 w-full p-2">
      <div class="flex place-content-center">
        <div class="self-center bg-blue-200 cristal -rotate-45">
          <div class="bg-blue-200 cristal -rotate-90">
            <div class="bg-blue-200 cristal rotate-45">
              <div class="bg-red-200 cristal rotate-90">
                <p class="cristal-icone">Icone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="cristal-titulo">Intuitive</p>
      <p class="flex justify-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        delectus?
      </p>
    </div>

    <div class="lg:w-1/4 w-full p-2">
      <div class="flex place-content-center">
        <div class="self-center  cristal -rotate-45">
          <div class=" cristal -rotate-90">
            <div class=" cristal rotate-45">
              <div class=" cristal rotate-90">
                <p class="cristal-icone">icone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="cristal-titulo">Dinamic</p>
      <p class="flex justify-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        delectus?
      </p>
    </div>
  </div>
</template>

<style>
.cristal {
  @apply bg-blue-200
            w-16
            h-40
            transform;
}
.cristal-icone {
  @apply pt-16 text-gray-900 flex justify-center;
}
.cristal-titulo{
  @apply text-red-400 flex justify-center text-justify;
}
</style>
