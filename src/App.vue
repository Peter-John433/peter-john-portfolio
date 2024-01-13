<script setup>
   import Header from './components/Header.vue'
</script>

<template>
   <Header />
   <div class="container">
      <section id="home" class="home">
         <div class="home-content">
            <h1>
                Hi!, I'm PETER JOHN
            </h1>

            <div>
               <h3>
                  And I'm
               </h3>

               <h3>
                  <span>Frontend developer</span>
                  <span>Web designer</span>
               </h3>
            </div>
         </div>
      </section>
   </div>
</template>

<style scoped>
  h3, span{
    color: var(--bg-color2);
    font-weight: 700;
  }
</style>
