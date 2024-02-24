<script setup>
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
</script>

<template>
    <div id="contact" class="mt-40 contact scroll-scale">
        <div class="main-text text-center font-[900] tracking-wider"  :class="{'text-white': isDarkMode, 'text-black' : !isDarkMode}">
            <span class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">Ask me question</span>
                <h2 class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">
                    Contact Me!
                </h2>
        </div>

        <div class="mt-10">
            <form action="" >
                <input type="text" name="" id="" placeholder="your name" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}">
                <input type="text" name="" id="" placeholder="your email" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}">
                <input type="text" name="" id="" placeholder="your address" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}">
                <input type="text" name="" id="" placeholder="phone number" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}">
                <textarea name="" id="" cols="30" rows="10" placeholder="your message" :class="{'text-black bg-white': isDarkMode, 'text-white bg-black' : !isDarkMode}"></textarea>
                <div class="my-btn" :class="{'text-black bg-[yellow]': isDarkMode, 'text-white bg-[green]' : !isDarkMode}">
                    <button type="submit" class="btn">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
  .contact{
    width: 100%;
  }

  .contact form{
      max-width: 50rem;
      margin: 1rem auto;
      text-align: center;
  }

  .contact form input, .contact form textarea{
    width: 100%;
    border: none;
    outline: none;
    margin-bottom: .8rem;
    padding: .7rem;
  }

  .contact form textarea{
    resize: none;
  }

  .my-btn{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px 16px;    
  }

  .my-btn button{
    width: 100%;
  }
</style>