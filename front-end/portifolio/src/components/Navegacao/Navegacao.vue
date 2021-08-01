<template>

  <nav class="h-12 flex bg-blue-500">
   <a href="#" class="lg:ml-12 links">HOME</a>
    <a href="#" class="links">ABOUT US</a>
    <a href="#" class="links">PORTIFOLIO</a>
    <a href="#" class="links">CONTACT</a>
 </nav>
 
</template>

<script>
export default {};
</script>

<style>
.links {
  @apply self-center
        lg:p-3
        p-2
        font-bold
        transition
        duration-500
        ease-in-out
        hover:text-red-700
        transform
        hover:-translate-y-1 hover:scale-110;
}
</style>
