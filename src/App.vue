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
               <h3 class="font-[600] text-[1.5rem] me-3 text-[#D0D0D0]">
                  And I'm
               </h3>

               <h3  class="font-[600] text-[1.5rem]">
                  <span class="word">Frontend developer</span>
                  <span class="word">Web designer</span>
               </h3>
            </div>

               <p class=" leading-6 text-[18px] text-[yellow]">
                  Frontend developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa corrupti quasi praesentium ipsam, sunt quo cumque vero voluptatem mollitia!
               </p>
           
               <div class="info-box my-3">
                  <h5>Email:</h5>
                  <span class="font-bold tracking-wider">peterjeche442@gmail.com</span>
               </div>

               <div class="btn-box flex justify-between mt-[1.5rem] w-[320px] h-[46px]">
                  <a href="#" class="btn">Download CV</a>
                  <a href="#" class="btn">Hire Me</a>
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
   
 .btn-box{
   display: flex; 
   justify-content: center;
   align-items: center;
   column-gap: 2rem;
   /* width: 400px; */
   height: 46px;
 }
 .btn-box a.btn{
    width: 150px; 
    background-color: #01011a;
    border: 1px solid #d0d0d0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--bg-color2);
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
    transition: .6s;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    z-index: 1;
    color: yellow;
 }

 .btn-box a.btn:hover{
   box-shadow: 0 0 2px 2px yellow;
   color: #01011a;
   border: 1px solid transparent;
 }

 a.btn::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
   background-color: yellow;
   z-index: -1;
   transition: .4s;
 }

 a.btn:hover::before{
   width: 100%;
 }
</style>
