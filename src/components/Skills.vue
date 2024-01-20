<script setup>
  import { storeToRefs } from 'pinia';
  import { colorMode } from '@/stores/Mode';
  const useModeStore = colorMode();
  const { isDarkMode } = storeToRefs(useModeStore);
  import { ref } from 'vue';

//   const circle = document.querySelector('.circle');
//     circle.forEach(elem=>{
//     let dots = elem.getAttribute('data-dots');
//     let marked = elem.getAttribute('data-percent');
//     let percent = Math.floor(dots*marked/100);
//     let point = '';
//     let rotate = 360 / dots;

//     for(let i = 0; i < dots.length; i++) {
//         point += <div class="points" style='--i:${i}; --rot:${rotate}deg'></div>
//     }
//     elem.innerHTML = point
// })
</script>

<template>
    <div>
        <div id="skills" class="skills scroll-smooth" :class="{'bg-[#D0D0D0] text-[#0e1217]' : isDarkMode, 'bg-[#0e1217] text-[#D0D0D0]' : !isDarkMode}">
            <div class="main-text text-center font-[900] tracking-wider"  :class="{' text-[#0e1217]' : isDarkMode, 'text-[#D0D0D0]' : !isDarkMode}">
                <span class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">Technical and Profession</span>
                <h2 class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">
                    My Skills
                </h2>
            </div>

            <div class="skill-main">
                <div class="skill-left">
                    <h3 class="mt-5 sm:mt-auto">Technical Skills</h3>
                    <div class="skill-bar">
                        <div class="info">
                            <p>HTML</p>
                            <P>95%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="html bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>JAVASCRIPT</p>
                            <P>80%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="javascript bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>VUE JS</p>
                            <P>70%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="vue-js bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>TAILWIND CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="tailwind-css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>BOOTSTRAP CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="bootstrap-css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>FIGMA</p>
                            <P>95%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="figma bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>GIT AND GITHUB</p>
                            <P>97%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="git-github bg-green-500" ></span>
                        </div>
                    </div>
                </div>
                <div class="skill-right">
                    <h3 class="mt-5 sm:mt-auto">Technical Skills</h3>
                    <div class="skill-bar">
                        <div class="info">
                            <p>HTML</p>
                            <P>95%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="html bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>JAVASCRIPT</p>
                            <P>80%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="javascript bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>VUE JS</p>
                            <P>70%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="vue-js bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>TAILWIND CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="tailwind-css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>BOOTSTRAP CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="bootstrap-css bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>FIGMA</p>
                            <P>95%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="figma bg-green-500" ></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>GIT AND GITHUB</p>
                            <P>97%</P>
                        </div>

                        <div class="bar" :class="{'bg-[#0e2117]' : isDarkMode, 'bg-[#d0d0d0]' : !isDarkMode}">
                            <span class="git-github bg-green-500" ></span>
                        </div>
                    </div>
                </div>
                <!-- <div class="skill-right">
                    <h3>Profession</h3>
                    <div class="professional">
                        <div class="box">
                            <div class="circle" data-dots="80" data-percent="90"></div>
                            <div class="box-text">
                                <big>90%</big>
                                <small>Team work</small>
                            </div>
                        </div>
                        <div class="box">
                            <div class="circle" data-dots="80" data-percent="90"></div>
                            <div class="box-text">
                                <big>90%</big>
                                <small>Team work</small>
                            </div>
                        </div>
                        <div class="box">
                            <div class="circle" data-dots="80" data-percent="90"></div>
                            <div class="box-text">
                                <big>90%</big>
                                <small>Team work</small>
                            </div>
                        </div>
                        <div class="box">
                            <div class="circle" data-dots="80" data-percent="90"></div>
                            <div class="box-text">
                                <big>90%</big>
                                <small>Team work</small>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .skills{
        /* box-shadow: 0 0 3px 2px rgba(255, 255, 0, .5); */
        border-radius: 12px;
        padding: 10px;
    }
   .skill-main{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      width: 90%;
      row-gap: 30px;
      column-gap: 5rem;
      margin: auto;
   }

   .skill-left h3, .skill-right h3{
    margin-left: 2rem;
    margin-bottom: 10px;
   }

   .skill-bar{
      margin-bottom: 2rem;
   }

   .skill-left .skill-bar .info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
   }

   .skill-left .skill-bar .bar{
      width: 100%;
      height: 10px;
      /* background-color: #010101; */
      margin-top: 10px;
      border-radius: 25px;
      position: relative;
   }

   .skill-left .skill-bar span{
      width: 50%;
      height: 100%;
      /* background-color: yellow; */
      position: absolute;
      left: 0%;
      border-radius: 25px;
      /* box-shadow: 0 0 2px 2px #010101; */
      animation: momo .6s linear ;
   }

   .skill-left .skill-bar .html{
      width: 95%;
      animation: html .6s linear ;
   }

   .skill-left .skill-bar .css{
      width: 90%;
      animation: css .6s linear ;
   }

   .skill-left .skill-bar .javascript{
      width: 80%;
      animation: javascript .6s linear ;
   }

   .skill-left .skill-bar .vue-js{
      width: 70%;
      animation: vue .6s linear ;
   }

   .skill-left .skill-bar .tailwind-css{
      width: 89%;
      animation: tailwind .6s linear ;
   }

   .skill-left .skill-bar .bootstrap-css{
      width: 89%;
      animation: bootstrap .6s linear ;
   }

   .skill-left .skill-bar .figma{
      width: 95%;
      animation: figma .6s linear ;
   }

   .skill-left .skill-bar .git-github{
      width: 97%;
      animation: git .6s linear ;
   }

   /* skill right */
   .skill-right .skill-bar .info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
   }

   .skill-right .skill-bar .bar{
      width: 100%;
      height: 10px;
      /* background-color: #010101; */
      margin-top: 10px;
      border-radius: 25px;
      position: relative;
   }

   .skill-right .skill-bar span{
      width: 50%;
      height: 100%;
      /* background-color: yellow; */
      position: absolute;
      left: 0%;
      border-radius: 25px;
      /* box-shadow: 0 0 2px 2px #010101; */
      animation: momo .6s linear ;
   }

   .skill-right .skill-bar .html{
      width: 95%;
      animation: html .6s linear ;
   }

   .skill-right .skill-bar .css{
      width: 90%;
      animation: css .6s linear ;
   }

   .skill-right .skill-bar .javascript{
      width: 80%;
      animation: javascript .6s linear ;
   }

   .skill-right .skill-bar .vue-js{
      width: 70%;
      animation: vue .6s linear ;
   }

   .skill-right .skill-bar .tailwind-css{
      width: 89%;
      animation: tailwind .6s linear ;
   }

   .skill-right .skill-bar .bootstrap-css{
      width: 89%;
      animation: bootstrap .6s linear ;
   }

   .skill-right .skill-bar .figma{
      width: 95%;
      animation: figma .6s linear ;
   }

   .skill-right .skill-bar .git-github{
      width: 97%;
      animation: git .6s linear ;
   }

   @keyframes html {
      0% {
         width: 0%;
      }

      100%{
         width: 95%;
      } 
   }

   @keyframes css {
      0% {
         width: 0%;
      }

      100%{
         width: 90%;
      }
   }

   @keyframes javascript {
      0% {
         width: 0%;
      }

      100%{
         width: 80%;
      }
   }

   @keyframes vue {
      0% {
         width: 0%;
      }

      100%{
         width: 70%;
      }
   }

   @keyframes tailwin {
      0% {
         width: 0%;
      }

      100%{
         width: 90%;
      }
   }

   @keyframes bootstrap {
      0% {
         width: 0%;
      }

      100%{
         width: 90%;
      }
   }

   @keyframes figma {
      0% {
         width: 0%;
      }

      100%{
         width: 95%;
      }
   }

   @keyframes git {
      0% {
         width: 0%;
      }

      100%{
         width: 95%;
      }
   }

    /* skill-right */
    /* .professional{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .box{
        margin: 10px 0;
        flex: 1 1 15rem;
        position: relative;
    }

    .circle{
        width: 100%;
        height: 120px;
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .box .box-text{
        text-align: center;
        font-size: 1rem;
        color: green;

    }

    .box .box-text big{
        position: absolute;
        font-weight: 400;
        letter-spacing: 1px;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .box .box-text small{
        font-weight: 600;
        display: block;
    }

    .circle .points{
        background-color: red;
        width: 2px;
        height: 10px;
        border-radius: 3px;
        position: absolute;
        transform: rotate(calc(var(--i)*var(--rot))) translateY(-45px);
        animation: glow .6s linear forwards;
        animation-delay: calc(green * 0.5s);
    }

    @keyframes  glow {
        0%{
            background-color: black;
            box-shadow: 0 0 5px 7px yellow;
        }
    } */

   @media screen and (max-width: 576px) {
      .skill-main{
        grid-template-columns: 1fr;
        width: 100%;
      }
   }
</style>