<script setup>
   import Header from './components/Header.vue'
   import About from './components/About.vue'
   import Service from './components/Service.vue';
   import Skills from './components/Skills.vue';
   import { colorMode } from './stores/Mode';
   import { storeToRefs } from 'pinia';
   import { ref } from 'vue'

   const useModeStore = colorMode();
   const { isDarkMode } = storeToRefs(useModeStore)

   let myWord = document.querySelectorAll('.word');
   myWord.forEach = ((myWord) => {
      let letters = myWord.textContent.split('');
      myWord.textContent=''
   })
</script>

<template>
   <Header />
   <div :class="{'bg-[#0e1217] text-[#D0D0D0]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217]' : !isDarkMode}">
   <div class="container pt-20 w-full" >
      <section id="home" class="home ">
         <div class="home-content">
            <h1 :class="{' text-[#D0D0D0]' : isDarkMode, ' text-[#0e1217]' : !isDarkMode}">
                Hi!, I'm Peter John
            </h1>

            <div class="change-text inline-flex m-0">
               <h3 class="font-[600] text-[1.5rem] me-3 text-[#D0D0D0]">
                  
               </h3>

               <h3  class="font-[600] text-[1.5rem]">
                  <span class="word">Frontend developer</span>
                  <span class="word">Web designer</span>
               </h3>
            </div>

               <p class=" leading-6 text-[18px]" :class="{' text-[yellow]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217]' : !isDarkMode}">
                  Frontend developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa corrupti quasi praesentium ipsam, sunt quo cumque vero voluptatem mollitia!
               </p>
           
               <div class="info-box my-3">
                  <h5>Email:</h5>
                  <span class="font-bold tracking-wider">peterjeche442@gmail.com</span>
               </div>

               <div class="btn-box flex justify-between mt-[1.5rem] w-[320px] h-[46px]">
                  <a href="#" class="btn" :class="{' text-[yellow]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217]' : !isDarkMode}">Download CV</a>
                  <a href="#" class="btn" :class="{' text-[yellow]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217]' : !isDarkMode}">Hire Me</a>
               </div>

               <div class="social-icon mt-[8rem]">
                  <a href="#" class="my-social-link-1" :class="{'bg-[#d0d0d0] text-[blue]' : isDarkMode, ' bg-[blue] text-[#d0d0d0]' : !isDarkMode}"><i class='bx bxl-facebook bx-tada '></i></a>
                  <a href="#" class="my-social-link-2" :class="{'bg-[#d0d0d0] text-[red]' : isDarkMode, ' bg-[red] text-[#d0d0d0]' : !isDarkMode}"><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                  <a href="#" class="my-social-link-3" :class="{'bg-[#d0d0d0] text-[#37ac37]' : isDarkMode, ' bg-[#37ac37] text-[#d0d0d0]' : !isDarkMode}"><i class='bx bxl-upwork bx-tada' ></i></a>
                  <a href="#" class="my-social-link-4" :class="{'bg-[#d0d0d0] text-blue-700' : isDarkMode, ' bg-blue-700 text-[#d0d0d0]' : !isDarkMode}"><i class='bx bxl-linkedin bx-tada' ></i></a>
                  <a href="#" class="my-social-link-5" :class="{'bg-[#d0d0d0] text-blue-500' : isDarkMode, ' bg-blue-500 text-[#d0d0d0]' : !isDarkMode}"><i class='bx bxl-twitter bx-tada' ></i></a>
               </div>
         </div>

         <div class="home-img relative">
            <div class="img-box">
               <img src="@/assets/eche3-removebg-preview.png" alt="">
            </div>

            <div class="liquid-shape absolute top-[0%] left-[-5%] z-[-1]" >
               <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
               <path fill="#D0D0D0">
                  <animate attributeName="d" 
                     dur="10000ms"
                     repeatCount="indefinite"
                     transform="translate(100 100)"
                     values="
                     M465,312Q442,374,396.5,423Q351,472,284,477Q217,482,155,456.5Q93,431,57.5,374Q22,317,21.5,250Q21,183,59,128Q97,73,157,46.5Q217,20,280.5,31.5Q344,43,392.5,85Q441,127,464.5,188.5Q488,250,465,312Z"></animate>
               </path>
               </svg>
            </div>

            <div class="liquid-shape-2 absolute top-[1%] z-[-1] left-[-5%]">
               <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
               <defs>
                  <pattern id="pattern" x="0" y="0" width="28" height="49" patternUnits="userSpaceOnUse" fill="#D0D0D0">
                     <path >
                        <animate attributeName="d"
                        repeatDur="10000ms"
                        repeatCount="indefinite"
                        values="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z
                      "></animate>
                     </path>
                  </pattern>
               </defs>
               <path id="blob" fill="url(#pattern)">
                  <animate
                  attributeName="d"
                  repeatDur="10000ms"
                  repeatCount="indefinite"
                  values="M459.5,318Q437,386,379,427.5Q321,469,250,468Q179,467,123,425Q67,383,39.5,316.5Q12,250,33,179Q54,108,114.5,64Q175,20,249.5,21.5Q324,23,383.5,66.5Q443,110,462.5,180Q482,250,459.5,318Z

                  M459.5,318Q437,386,379,427.5Q321,469,250,468Q179,467,123,425Q67,383,39.5,316.5Q12,250,33,179Q54,108,114.5,64Q175,20,249.5,21.5Q324,23,383.5,66.5Q443,110,462.5,180Q482,250,459.5,318Z">

                  </animate>
               </path>
               </svg>
            </div>
         </div>
      </section>

      <About />

      <Service />

      <Skills />
   </div>
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
    /* background-color: #01011a; */
    border: 1px solid #d0d0d0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* color: var(--bg-color2); */
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
    transition: .6s;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    z-index: 1;
    /* color: yellow; */
 }

 .btn-box a.btn:hover{
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
     border: 1px solid transparent;
     padding: 10px 10px;
     /* box-shadow:  0 0 .3rem yellow; */
     transition: .6s;
     position: relative;
     z-index: 1;
     overflow: hidden;
     border-radius: 50%;
     margin-right: 1rem;
  }

  /* .social-icon .my-social-link-1 */
  .social-icon .my-social-link-1::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
   background-color: #f1f1f1;
   z-index: -1;
   transition: .4s;
 }

 .social-icon .my-social-link-1:hover{
   color: blue;
   border: 1px solid transparent;
 }

 /* social-icon my-social-link-2 */
   .social-icon .my-social-link-2::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: red;
      z-index: -1;
      transition: .4s;
   }

   .social-icon .my-social-link-2:hover{
      color: white;
      border: 1px solid transparent;
   }
 /* closed */

 /* social-icon my-social-link-3 */
   .social-icon .my-social-link-3::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgb(17, 177, 17);
      z-index: -1;
      transition: .4s;
   }

   .social-icon .my-social-link-3:hover{
      color: #d0d0d0;
      border: 1px solid transparent;
   }
 /* closed */

 
 /* social-icon my-social-link-4 */
 .social-icon .my-social-link-4::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #f1f1f1;
      z-index: -1;
      transition: .4s;
   }

   .social-icon .my-social-link-4:hover{
      color: blue;
      border: 1px solid transparent;
   }
 /* closed */

 /* social-icon my-social-link-4 */
 .social-icon .my-social-link-5::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #d0d0d0;
      z-index: -1;
      transition: .4s;
   }

   .social-icon .my-social-link-5:hover{
      color: #3b82f6;
      border: 1px solid transparent;
   }
 /* closed */

 .social-icon a:hover::before{
   width: 100%;
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
   max-width: 400px;
   height: auto;
   margin-top: 5rem;
   display: block;
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

 .liquid-shape-2{
   width: 80%;
 }
</style>
