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
      /* background-color: #d0d0d0; */
      
   }

   footer a{
      /* color: black; */
      font-weight: 900;
      font-size: 1.5rem;
   }

</style>