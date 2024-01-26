<script setup>
    // import { ref } from 'vue'
    import { colorMode } from '@/stores/Mode'
    import { storeToRefs } from 'pinia'
    const useModeStore = colorMode()
    const { isDarkMode } = storeToRefs(useModeStore);


    const togglePublish = () => {
     let toogle = document.querySelector(`#toggleBtn`);
     let span = document.querySelector(`#toggleBtn`).nextSibling;
    useModeStore.changeMode();
    console.log(isDarkMode)

    if (!isDarkMode.value) {
        //Unpublish
        toogle.lastElementChild.classList.remove('translate-x-[44px]')
    }else{
        //publish
        toogle.lastElementChild.classList.add('translate-x-[44px]')
    }
  }
</script>

<template>
    <div class="gen-container w-full fixed z-10" :class="{'bg-white text-black' : isDarkMode, 'bg-black text-white' : !isDarkMode}">
        <header class="flex justify-between items-center container ">
           <div class="header-logo text-[26px] font-[700] font-sans ">
               <span class="j-logo font-[700]">J</span>ohn
           </div>

           
               <ul class="block sm:flex  font-[500] header-list">
                 <a href="#home" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>Home</li></a>
                 <a href="#about" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>About</li></a>
                 <a href="#service" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>Services</li></a>
                 <a href="#portfolio" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>Portfolio</li></a>
                 <a href="#skills" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>Skills</li></a>
                 <a href="#contact" :class="{'hover:bg-black hover:text-white' : isDarkMode, 'hover:text-black hover:bg-white' : !isDarkMode}"><li>Contact</li></a>
               </ul>
          
           <div id="menu-icon" class="text-[2rem] mr-[16px] text-[yellow] block sm:hidden">
            <i class='bx bx-menu'></i>
           </div>

          <button @click="togglePublish($event)" id="toggleBtn" :class="!isDarkMode ? 'bg-[#3e4145]' : 'bg-white'"  class="relative h-9 w-20 flex items-center rounded-full">
            <div :class="!isDarkMode ? 'translate-x-0 bg-[#3e4145]' : 'translate-x-[44px] bg-[#d9d9d9] '" class="h-9 w-9 flex absolute justify-center items-center rounded-full transition duration-500 transform">
                <img v-if="isDarkMode" src="@/assets/light.svg" class="p-1" alt="">
                <img v-else src="@/assets/moon.svg" class="p-1" alt="">
            </div>
          </button>
       </header>
    </div>
</template>

<style scoped>
  /* .gen-container{ */
      /* background-color: var(--bg-color2); */
      /* background-color: #D0D0D0; */
  /* } */

  .header-list a{
     font-weight: 500;
     padding: 20px 20px;
     transition: all 500ms ease-in-out;
     /* color: var(--bg-color2); */
  }

  /* .header-list a:hover{
     color: var(--bg-color2);
     background-color: #f1f1f1;
     color: black;
     text-shadow: 0 0 10px rgba(255, 255, 0),
    0 0 20px rgba(255, 255, 0),
    0 0 30px rgba(255, 255, 0),
    0 0 40px rgba(255, 255, 0),
    0 0 70px rgba(255, 255, 0),
    0 0 100px rgba(255, 255, 0),
    0 0 150px rgba(255, 255, 0);
  } */

  @media screen and (min-width: 756px) and (max-width: 992)  {
  
}

  @media screen and (max-width: 576px){
    #toggleBtn{
      display: none;
    }
    #menu-icon{
       display: block;
       transition: all 0.4s ease;
       position: absolute;
       right: 0%;
    }
    #menu-icon.bx-x{
      transform: rotate(-180deg);
    }
    header{
       position: relative;
       /* padding: auto 1rem; */
       /* display: block; */
       /* transition: all .4s ease; */
    }
     .header-list{
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: green;
        top: -1000px;
        left: 0%;
        right: 0%;
        text-align: left;
        padding: 0 5%;
        transition: all 0.45s ease;
     } 

     .header-list a{
        display: block;
        font-size: 1rem;
        padding-bottom: 1rem;
     }

    .header-list.open{
       top: 100%;
     }
  }
</style>
