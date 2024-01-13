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

               <div class="social-icon mt-[8rem]">
                  <a href=""><i class='bx bxl-facebook bx-tada'></i></a>
                  <a href="#"><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-upwork bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-linkedin bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-twitter bx-tada' ></i></a>
               </div>
         </div>

         <div class="home-img relative">
            <div class="img-box">
               <img src="@/assets/eche3-removebg-preview.png" alt="">
            </div>

            <div class="liquid-shape absolute top-[0%] left-[-5%] z-[-1]">
               <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
               <path fill="yellow">
                  <animate attributeName="d" 
                     dur="10000ms"
                     repeatCount="indefinite"
                     transform="translate(100 100)"
                     
                     values="

                     
                     M465,312Q442,374,396.5,423Q351,472,284,477Q217,482,155,456.5Q93,431,57.5,374Q22,317,21.5,250Q21,183,59,128Q97,73,157,46.5Q217,20,280.5,31.5Q344,43,392.5,85Q441,127,464.5,188.5Q488,250,465,312Z"
                  ></animate>
               </path>
               </svg>
            </div>
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
   
 /* btn-box */
 .btn-box{
   display: flex; 
   justify-content: center;
   align-items: center;
   column-gap: 2rem;
   /* width: 400px; */
   height: 46px;
 }
 .btn-box a.btn{
    width: 200px; 
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
 /* closed */

 /* social-box */
  .social-icon a{
     display: inline-flex;
     width: 50px;
     height: 100%;
     justify-content: center;
     align-items: center;
     border: 2px solid #d0d0d0;
     padding: 10px 10px;
     box-shadow:  0 0 .3rem yellow;
     transition: .6s;
     position: relative;
     z-index: 1;
     overflow: hidden;
     border-radius: 50%;
     margin-right: 1rem;
     color: yellow;
  }

  .social-icon a::before{
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

 .social-icon a:hover::before{
   width: 100%;
 }
 .social-icon a:hover{
   box-shadow: 0 0 2px 2px yellow;
   color: #01011a;
   border: 1px solid transparent;
 }
  .social-icon i{
   font-size: 1.5rem;
  }

  .social-icon a:hover{
     background-color: #01011a;
  }
 /* closed */

 .home-img{
   position: relative;
 }

 .img-box{
   text-align: center;
   width: 500px;
   height: auto;
   margin-top: 5rem;
 }

 .img-box img{
   max-width: 500px;
   border-bottom-right-radius: 100%;
   border-bottom-left-radius: 100%;
   height: 78vh;
   width: 100%;
   object-fit: cover;
   object-position: center;
 }

 .liquid-shape{
    width: 80%;
 }
</style>
