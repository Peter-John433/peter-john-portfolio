<script setup>

</script>

<template>
   <div class="gen-container w-full">
       <header class="flex justify-between items-center container">
           <div class="header-logo text-[26px] font-[700] font-sans">
               <span class="j-logo font-[700]">J</span>ohn
           </div>

           
               <ul class="flex font-[500] header-list">
                 <a href=""><li>Home</li></a>
                 <a href=""><li>About</li></a>
                 <a href=""><li>Services</li></a>
                 <a href=""><li>Portfolio</li></a>
                 <a href=""><li>Contact</li></a>
                 <a href=""><li>Skills</li></a>
               </ul>
          
           <div>
            <i class='bx bx-menu '></i>
           </div>
       </header>
   </div>
</template>

<style scoped>
  .gen-container{
      background-color: var(--bg-color2);
  }

  .j-logo{
    color: var(--logo-text-color);
  }

  .header-list a{
     font-weight: 500;
     padding: 20px 20px;
     transition: all 500ms ease-in-out;
  }

  .header-list a:hover{
     color: var(--bg-color2);
     background-color: #D0D0D0;

  }
</style>
