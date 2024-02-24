<script setup>
   import Header from './components/Header.vue'
   import About from './components/About.vue'
   import Service from './components/Service.vue';
   import Skills from './components/Skills.vue';
   import Projects from '@/components/Projects.vue';
   import Contact from '@/components/Contact.vue';
   import Footer from '@/components/Footer.vue'
   import { colorMode } from './stores/mode';
   import { storeToRefs } from 'pinia';

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
   <div class=" scroll-smooth">
      <div class="px-3" :class="{'bg-black text-[#D0D0D0]' : isDarkMode, 'bg-[white] text-[#0e1217]' : !isDarkMode}">
      <div class="container mx-auto py-20   sm:w-full text-center sm:text-start" >
         <section id="home" class="home">
            <div class="home-content scroll-scale">
               <h1 :class="{' text-white' : isDarkMode, ' text-black' : !isDarkMode}">
                  Hi!, I'm Peter John Frontend developer
               </h1>

               <div class="change-text inline-flex m-0">
                  <h3 class="font-[600] text-[1.5rem] me-3 text-white">
                     
                  </h3>

                  <h3  class="font-[600] text-[1.5rem]" :class="{' text-white' : isDarkMode, 'text-black' : !isDarkMode}">
                     <span class="word">Frontend developer</span>
                     <span class="word">Web designer</span>
                  </h3>
               </div>

                  <p class=" leading-6 text-[18px]" :class="{'text-white' : isDarkMode, ' text-black' : !isDarkMode}">
                     Frontend developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa corrupti quasi praesentium ipsam, sunt quo cumque vero voluptatem mollitia!
                  </p>
            
                  <div class="info-box my-3 flex items-center sm:items-start justify-center sm:justify-start">
                     <h5>Email:</h5>
                     <span class="font-bold tracking-wider">peterjeche442@gmail.com</span>
                  </div>

                  <div class="btn-box flex justify-between mt-[1.5rem] w-[320px] h-[46px] mx-auto sm:mx-0">
                     <a href="#" class="btn" :class="{' text-[#37ac37]  before:bg-[#37ac37] hover:text-white border border-[#37ac37]' : !isDarkMode, 'bg-[white] text-black before:bg-[#37ac37] hover:text-white border border-black' : isDarkMode}">Download CV</a>
                     <a href="#contact" class="btn" :class="{' text-[#37ac37]  before:bg-[#37ac37] hover:text-white border border-[#37ac37]' : !isDarkMode, 'bg-white text-black before:bg-[#37ac37] hover:text-white border border-black' : isDarkMode}">Hire Me</a>
                  </div>

                  <div class="social-icon mt-[2rem] w-[350px] lg:w-auto mx-auto  sm:mx-0">
                     <a href="#" :class="{'bg-[#f1f1f1] shadow-md  before:bg-[blue] hover:text-white text-[blue]' : isDarkMode, 'shadow-md bg-[blue] text-white before:bg-white hover:text-[blue]' : !isDarkMode}"><i class='bx bxl-facebook'></i></a>
                     <a href="#" :class="{'bg-[#f1f1f1] shadow-md text-[red] before:bg-[red] hover:text-white' : isDarkMode, 'shadow-md bg-[red] text-white before:bg-white hover:text-[red]' : !isDarkMode}"><i class='bx bxl-instagram-alt'></i></a>
                     <a href="https://www.upwork.com/freelancers/~01fd87cc919b348c21" :class="{'bg-[#f1f1f1] shadow-md text-[#37ac37] before:bg-[#37ac37] hover:text-white' : isDarkMode, 'shadow-md bg-[#37ac37] text-white before:bg-white hover:text-[#37ac37]' : !isDarkMode}"><i class='bx bxl-upwork'></i></a>
                     <a href="#" :class="{'bg-[#f1f1f1] shadow-md text-blue-700 before:bg-blue-700 hover:text-white' : isDarkMode, 'shadow-md bg-blue-700 text-white before:bg-white hover:text-blue-700' : !isDarkMode}"><i class='bx bxl-linkedin'></i></a>
                     <a href="#" :class="{'bg-[#f1f1f1] shadow-md text-blue-500 before:bg-blue-500 hover:text-white' : isDarkMode, 'shadow-md bg-blue-500 text-white before:bg-white hover:text-blue-500' : !isDarkMode}"><i class='bx bxl-twitter'></i></a>
                  </div>
            </div>

            <div class="home-img relative scroll-scale">
               <div class="img-box">
                  <img src="@/assets/eche3-removebg-preview.png" alt="">
               </div>
            </div>
         </section>

         <About />

         <Service />

         <Skills />

         <Projects />

         <Contact />
      </div>
      </div>
   </div>
   <Footer />
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
   height: 46px;
 }
 .btn-box a.btn{
    width: 200px; 
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
    transition: .6s;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    z-index: 1;
 }

 .btn-box a.btn:hover{
   border: 1px solid transparent;
  }

 a.btn::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
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
     transition: .6s;
     position: relative;
     z-index: 1;
     overflow: hidden;
     border-radius: 50%;
     margin-right: 1rem;
  }

  /* .social-icon .my-social-link-1 */
  .social-icon a::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
   z-index: -1;
   transition: .4s;
 }

 .social-icon a:hover::before{
   width: 100%;
 }
  .social-icon i{
   font-size: 1.5rem;
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

  @media screen and (max-width: 768px ){
 
 }

 
 @media screen and (max-width: 576px) {
     .home{
         display: flex;
         flex-direction: column;
         min-height: 20vh;
         height: 100%;
         width: 100%;
         gap: 0;
     }

     .home-content h1{
        font-size: 1.2rem;
     }

     .img-box{
      max-width: 300px;
      margin-top: 0rem;
  }

     .img-box img{
      border-bottom-right-radius: 40%;
      border-bottom-left-radius: 40%;
      height: 70vh;
  }
 }
</style>
