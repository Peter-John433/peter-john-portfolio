<script setup>

</script>

<template>
   <div class="gen-container w-full">
       <header class="flex justify-between items-center container">
           <div class="header-logo text-[26px] font-[700] font-sans text-[#01011a]">
               <span class="j-logo font-[700]">J</span>ohn
           </div>

           
               <ul class="block sm:flex  font-[500] header-list">
                 <a href=""><li>Home</li></a>
                 <a href=""><li>About</li></a>
                 <a href=""><li>Services</li></a>
                 <a href=""><li>Portfolio</li></a>
                 <a href=""><li>Contact</li></a>
                 <a href=""><li>Skills</li></a>
               </ul>
          
           <div class="text-[2rem] mr-[16px] text-[yellow] block sm:hidden">
            <i class='bx bx-menu'></i>
           </div>
       </header>
   </div>
</template>

<style scoped>
  .gen-container{
      /* background-color: var(--bg-color2); */
      background-color: #D0D0D0;
  }

  .j-logo{
    /* color: var(--logo-text-color); */
    color: red;
  }

  .header-list a{
     font-weight: 500;
     padding: 20px 20px;
     transition: all 500ms ease-in-out;
     color: var(--bg-color2);
  }

  .header-list a:hover{
     color: var(--bg-color2);
     background-color: #01011a;
     color: yellow;
     /* text-shadow: 0 0 10px rgba(255, 255, 0),
    0 0 20px rgba(255, 255, 0),
    0 0 30px rgba(255, 255, 0),
    0 0 40px rgba(255, 255, 0),
    0 0 70px rgba(255, 255, 0),
    0 0 100px rgba(255, 255, 0),
    0 0 150px rgba(255, 255, 0); */

  }
</style>
