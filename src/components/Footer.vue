<script setup>
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/Mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
</script>

<template>
    <div id="footer" class="footer" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}">
        <footer>
                <p>Copyright &copy; 2024 by PETER JOHN || All right reserved.</p>
                <a href="#"><i class='bx bx-up-arrow-alt' ></i></a>
        </footer>
    </div>
</template>

<style scoped>
   footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
   }

   footer a{
      font-weight: 900;
      font-size: 1.5rem;
   }

   @media screen and (max-width: 576px){
       footer p{
          font-size: 16px;
          text-align: center;
          font-weight: 700;
       }

       footer a{
          background-color: goldenrod;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
       }
   }

</style>