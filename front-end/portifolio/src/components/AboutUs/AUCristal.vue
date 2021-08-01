<template>
  <div class="flex h-30 flex-wrap m-2">
    <div class="lg:w-1/4 w-full p-2">
      <div class="cristal-div">
        <div class="self-center cristal -rotate-45">
          <div class="cristal -rotate-90">
            <div class="cristal rotate-45">
              <div class="cristal rotate-90">
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
      <div class="cristal-div">
        <div class="self-center cristal -rotate-45">
          <div class="cristal -rotate-90">
            <div class="cristal rotate-45">
              <div class="cristal rotate-90">
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
      <div class="cristal-div">
        <div class="self-center cristal -rotate-45">
          <div class="cristal -rotate-90">
            <div class="cristal rotate-45">
              <div class="cristal rotate-90">
                <div class="cristal-icone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
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
      <div class="cristal-div">
        <div class="self-center cristal -rotate-45">
          <div class="cristal -rotate-90">
            <div class="cristal rotate-45">
              <div class="cristal rotate-90">
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
            w-10
            h-24
            bg-blue-200
            transform
            flex
            place-content-center;
}
.cristal-div {
  @apply flex place-content-center transform hover:scale-125 delay-150 duration-300 ease-in-out;
}
.cristal-icone {
  @apply text-gray-900 self-center;
}
.cristal-titulo {
  @apply mt-2 text-red-400 flex justify-center text-justify;
}
</style>
