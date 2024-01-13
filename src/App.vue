<script setup>
   import Header from './components/Header.vue'
   import { ref } from 'vue'

   let myWord = document.querySelectorAll('.word');
   myWord.forEach = ((myWord) => {
      let letters = myWord.textContent.split('');
      myWord.textContent=''
   })
</script>

<template>
   <Header />
   <div class="container">
      <section id="home" class="home ">
         <div class="home-content">
            <h1>
                Hi!, I'm Peter John
            </h1>

            <div class="change-text inline-flex m-0">
               <h3 class="font-[600] text-[1.5rem] me-3">
                  And I'm
               </h3>

               <h3  class="font-[600] text-[1.5rem]">
                  <span class="word">Frontend developer</span>
                  <span class="word">Web designer</span>
               </h3>
            </div>

               <p class=" leading-6 text-[18px] text-[red]">
                  Frontend developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa corrupti quasi praesentium ipsam, sunt quo cumque vero voluptatem mollitia!
               </p>
           
               <div class="info-box">
                  <h5>Email:</h5>
                  <span>peterjeche442@gmail.com</span>
               </div>

               <div class="btn-box">
                  <a href="">Download CV</a>
                  <a href="">Hire Me</a>
               </div>

               <div class="social-icon">
                  <a href=""><i class='bx bxl-facebook'></i></a>
                  <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                  <a href="#"><i class='bx bxl-upwork' ></i></a>
                  <a href="#"><i class='bx bxl-linkedin' ></i></a>
                  <a href="#"><i class='bx bxl-twitter' ></i></a>
               </div>
         </div>

         <div class="home-img">
            <img src="@/assets/eche3-removebg-preview.png" alt="">
         </div>
      </section>
   </div>
</template>

<style scoped>
  h3, span{
    color: var(--bg-color2);
    font-weight: 700;
  }

  .home{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   min-height: 90vh;
   height: 100%;
   width: 100%;
   gap: 4em;
   align-items: center;;
  }

  .home-content{
    max-width: 600px;
  }

  .home-content h1{
   font-size: var(--font-1);
   font-weight: 700;
  }
 
 .change-text{
    vertical-align: top;
 }

 .change-text h3 .word{
   position: absolute;
   display: flex;
   opacity: 0;
 }
</style>
