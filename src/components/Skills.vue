<script setup>
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
  import { ref } from 'vue';

//   const circle = document.querySelector('.circle');
//     circle.forEach(elem=>{
//     let dots = elem.getAttribute('data-dots');
//     let marked = elem.getAttribute('data-percent');
//     let percent = Math.floor(dots*marked/100);
//     let point = '';
//     let rotate = 360 / dots;

//     for(let i = 0; i < dots.length; i++) {
//         point += <div class="points" style='--i:${i}; --rot:${rotate}deg'></div>
//     }
//     elem.innerHTML = point
// })
</script>

<template>
    <div>
        <div id="skills" class="skills mt-40 scroll-scale scroll-smooth" :class="{'text-white' : isDarkMode, ' text-black' : !isDarkMode}">
            <div class="text-center font-[900] tracking-wider">
                <span class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">Technical and Profession</span>
                <h2 class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">
                    My Skills
                </h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 img-container justify-center justify-items-center gap-10 mt-10">
                <div>
                    <img src="@/assets/html-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/css-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/javascript-logo.svg" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/bootstrap-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/tailwind-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/vue-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/postman-logo.svg" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/pinia-logo.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/git-logo-2.png" class="" alt="">
                </div>
                <div>
                    <img src="@/assets/github-logo.svg" class="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .img-container img{
        max-width: 150px;
        width: 100%;
        max-height: 100px;
        object-fit: cover;
   }
   
   @media screen and (max-width: 576px) {
      .skill-main{
        grid-template-columns: 1fr;
        width: 100%;
      }

       .img-container img{
        max-width: 350px;
      }
   }
</style>