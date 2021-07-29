<template>
  <div class="flex flex-col h-screen place-content-center
    bg-gradient-to-r from-blue-200 to-blue-500
  ">
    <div class="flex self-center">
      <p class="lg:text-7xl text-3xl">Hello, We're</p>
      <p class="lg:text-7xl text-3xl text-red-600 p-0.5">BMWeb</p>
    </div>
    <div class="self-center">
      <p class="lg:text-7xl text-3xl">Web Developers</p>
    </div>
    <div class="self-center p-3">
      <button
        type="button"
        class=" 
          p-2
          rounded-lg
          cursor-pointer
          
          border-4 border-light-red-500 border-opacity-50
          bg-blue-500
          transition
          duration-500
          ease-in-out
          hover:bg-red-700
          transform
          hover:-translate-y-1 hover:scale-110
        "
      >
        View Our Work
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
