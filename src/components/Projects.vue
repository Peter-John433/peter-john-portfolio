<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/Mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
</script>

<template>
   <div id="portfolio" class="mt-40 scroll-scale">
        <div class="main-text text-center font-[900] tracking-wider"  :class="{'text-white': isDarkMode, 'text-black' : !isDarkMode}">
            <span class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">What i will do for you</span>
                <h2 class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">
                    My Projects
                </h2>
        </div>

        <div class="portfolio-gallery mt-10">
            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img flex justify-center items-center w-[100%] h-[100%]">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div>

            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div>

            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div>

            <div class="port-box rounded-[16px] shadow-md overflow-hidden flex items-center border-2 relative" :class="{'border-white': isDarkMode, 'border-black' : !isDarkMode}">
                <div class="port-img">
                    <img src="@/assets/laptop2.png" alt="">
                </div>
                <div class="port-content">
                    <h3 class="text-[1.5rem] text-white">Graphic Design</h3>
                    <p class="text-[13px] text-white text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni doloremque minus odio alias ipsum accusantium animi temporibus numquam tempore.
                    </p>
                    <a href="#"><i class='bx bx-link-external' ></i></a>
                </div>
            </div> 
        </div>
   </div>
</template>

<style scoped>
   
   .portfolio-gallery{
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       gap: 2rem;
   }

   .port-box{
      /* border-radius: 16px; */
      /* box-shadow: 0 0 4px 5px white; */
      /* overflow: hidden; */
      /* background-color: yellow; */
      /* display: flex; */
      /* align-items: center; */
      /* border: 2px solid red; */
      position: relative;
   }

   /* .port-img{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
   } */
   
   .port-img img{
      width: 100%;
      opacity: .5s;
      height: 100%;
      transition: .5s;
   }
   .port-box:hover .port-content{
      opacity: 1;
   }
    .port-box:hover  .port-img img{
      transform: scale(1.1);
    }
   .port-content{
      position: absolute;
      bottom: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: linear-gradient(rgba(0, 0, 0, .2), black);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .5s;
      flex-direction: column;
      padding: 0 .2rem;
   }

    /* .port-content h3{
        font-size: 1.5rem;
        color: red;
    } */
   /* .port-content p{
      font-size: 13px;
      text-align: center;
   } */

   .port-content a{
      background-color: white;
      color: black;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      border: 1px solid red;
      outline: 1px solid white;
   }
</style>