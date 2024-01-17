<script setup>
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/Mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
</script>

<template>
   <div>
        <div id="about" class="about overflow-hidden sm:rounded-xl mt-20 pb-10 flex flex-col sm:flex-row justify-center items-center sm:gap-x-20" :class="{'bg-[#D0D0D0] text-[#0e1217]' : isDarkMode, 'bg-[#0e1217] text-[#D0D0D0]' : !isDarkMode}">
            <div class="img-about text-center relative rounded-full p-0 m-0 ">
                <img src="@/assets/eche3-removebg-preview.png" class=" max-w-[300px] sm:w-full  object-cover rounded-br-full rounded-bl-full border-x-1" :class="{'bg-[#0e1217] border-[#0e1217]' : isDarkMode, 'bg-[#d0d0d0] border-[#d0d0d0]' : !isDarkMode}" alt="">
            
                <div class="about-info info-1"  :class="{' border border-[#d0d0d0] bg-[#0e1217] text-[#d0d0d0]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217] border border-[#0e1217]' : !isDarkMode}">
                    <span class="plus">5+</span>
                    <p class="mt-0">Years of experience</p>
                </div>

                <div class="about-info info-2"  :class="{' border border-[#d0d0d0] bg-[#0e1217] text-[#d0d0d0]' : isDarkMode, 'bg-[#D0D0D0] text-[#0e1217] border border-[#0e1217]' : !isDarkMode}">
                    <span class="plus">100+</span>
                    <p>projects completed</p>
                </div>
            </div>

            <div class="about-content">
                <span>Let me introduce myself</span>
                <h2 class="mx-auto sm:mx-0">About Me</h2>
                <h3 class="mx-auto sm:mx-0">A good day</h3>
                <p class="leading-6 text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quae amet nesciunt dolore quas eaque. Sunt possimus voluptatem ad saepe.
                </p>
                <div class="btn-box mx-auto sm:mx-0">
                     <a href="#" class="btn"  :class="{'  before:bg-[#D0D0D0] hover:text-[#0e1217] border border-[#d0d0d0]' : !isDarkMode, 'bg-[#D0D0D0] text-[#0e1217] before:bg-[#0e1217] hover:text-[#d0d0d0] border border-[#0e1217]' : isDarkMode}">Read more <i class='bx bxs-chevron-right-circle text-[1.5rem] ms-3 bx-flashing'></i></a>
                </div>

                <!-- just like in the app.vue social-icon-box verse-versa -->
                <div class="social-icon mt-[1rem] mx-auto sm:mx-0">
                  <a href="#" :class="{'bg-[#d0d0d0] before:bg-[blue] hover:text-[#d0d0d0] text-[blue]' : !isDarkMode, ' bg-[blue] text-[#d0d0d0] before:bg-[#d0d0d0] hover:text-[blue]' : isDarkMode}"><i class='bx bxl-facebook bx-tada '></i></a>
                  <a href="#" :class="{'bg-[#d0d0d0] text-[red] before:bg-[red] hover:text-[#d0d0d0]' : !isDarkMode, ' bg-[red] text-[#d0d0d0] before:bg-[#d0d0d0] hover:text-[red]' : isDarkMode}"><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                  <a href="#" :class="{'bg-[#d0d0d0] text-[#37ac37] before:bg-[#37ac37] hover:text-[#d0d0d0]' : !isDarkMode, ' bg-[#37ac37] text-[#d0d0d0] before:bg-[#d0d0d0] hover:text-[#37ac37]' : isDarkMode}"><i class='bx bxl-upwork bx-tada' ></i></a>
                  <a href="#" :class="{'bg-[#d0d0d0] text-blue-700 before:bg-blue-700 hover:text-[#d0d0d0]' : !isDarkMode, ' bg-blue-700 text-[#d0d0d0] before:bg-[#d0d0d0] hover:text-blue-700' : isDarkMode}"><i class='bx bxl-linkedin bx-tada' ></i></a>
                  <a href="#" :class="{'bg-[#d0d0d0] text-blue-500 before:bg-blue-500 hover:text-[#d0d0d0]' : !isDarkMode, ' bg-blue-500 text-[#d0d0d0] before:bg-[#d0d0d0] hover:text-blue-500' : isDarkMode}"><i class='bx bxl-twitter bx-tada' ></i></a>
               </div>
            </div>
        </div>
   </div>
</template>

<style scoped>

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

  .about-content{
     font-size: 1.5rem;
     width: 600px;
     font-weight: 700;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
     row-gap: 20px;
  }

 .about-content span{
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: capitalize;
  }

  /* social-box  */
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

 .about-info{
    position: absolute;
    width: 90px;
    height: 90px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 70% 30% 30% 70% / 30% 40% 30% 40%;
    animation: mother 6s linear infinite;
    font-size: 10px;
 }

  .info-1{
     position: absolute;
     top: 40%;
     right: -15%;
  }

  .info-2{
    position: absolute;
    bottom: 5%;
  }

  .plus{
     font-size: 1.5rem;
     font-weight: 700;
  }

 @keyframes mother {
    0%, 100%{
        border-radius: 40% 70% 30% 50% / 40% 40% 60% 30%;
    }
    30%{
        border-radius: 30% 30% 100% 100% / 70% 40% 60% 30%;
    }
    60%{
        border-radius: 50% 50% 30% 30% / 100% 100% 50% 50%;
    }
    80%{
        border-radius: 40% 70% 30% 50% / 40% 40% 60% 30%;
    }

 }
 
 @media  screen and ( max-width: 576px ) {
  .about-content{
     font-size: 16px;
     width: 100%;
     margin: auto;
  }

  .about-content span{
    font-size: 1.5rem;
    text-align: center;
    margin: auto;
  }

  .info-1{
     right: -10%;
  }
  
 }

</style>