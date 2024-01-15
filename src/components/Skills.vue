<template>
    <div>
        <div id="skills" class="skills bg-[#01011a]">
            <div class="main-text text-center text-[yellow] font-[900] tracking-wider">
                <span class="text-center text-[2rem] text-[yellow] font-[900] tracking-wider">Technical and Profession</span>
                <h2 class="text-center text-[2rem] text-[yellow] font-[900] tracking-wider">
                    My Skills
                </h2>
            </div>

            <div class="skill-main">
                <div class="skill-left">
                    <h3>Technical Skills</h3>
                    <div class="skill-bar">
                        <div class="info">
                            <p>HTML</p>
                            <P>95%</P>
                        </div>

                        <div class="bar">
                            <span class="html"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar">
                            <span class="css"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>JAVASCRIPT</p>
                            <P>80%</P>
                        </div>

                        <div class="bar">
                            <span class="javascript"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>VUE JS</p>
                            <P>70%</P>
                        </div>

                        <div class="bar">
                            <span class="vue-js"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>TAILWIND CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar">
                            <span class="tailwind-css"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>BOOTSTRAP CSS</p>
                            <P>90%</P>
                        </div>

                        <div class="bar">
                            <span class="bootstrap-css"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>FIGMA</p>
                            <P>95%</P>
                        </div>

                        <div class="bar">
                            <span class="figma"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>GIT AND GITHUB</p>
                            <P>97%</P>
                        </div>

                        <div class="bar">
                            <span class="git-github"></span>
                        </div>
                    </div>
                </div>
                <div class="skill-right">
                    <h3>Profession</h3>
                    <div>
                        <h2>
                            90%
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div :class="{'bg-[#0e1217] text-white' : isDarkMode, 'bg-[#f2f2f2] text-[black]' : !isDarkMode}">
        hello
    </div>
</template>

<style scoped>
    .skills{
        box-shadow: 0 0 3px 2px rgba(255, 255, 0, .5);
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
      background-color: #010101;
      margin-top: 10px;
      border-radius: 25px;
      position: relative;
   }

   .skill-left .skill-bar span{
      width: 50%;
      height: 100%;
      background-color: yellow;
      position: absolute;
      left: 0%;
      border-radius: 25px;
      box-shadow: 0 0 2px 2px #010101;
      animation: momo .6s linear ;
   }

   .skill-left .skill-bar .html{
      width: 95%;
   }

   .skill-left .skill-bar .css{
      width: 90%;
   }

   .skill-left .skill-bar .javascript{
      width: 80%;
   }

   .skill-left .skill-bar .vue-js{
      width: 70%;
   }

   .skill-left .skill-bar .tailwind-css{
      width: 89%;
   }

   .skill-left .skill-bar .bootstrap-css{
      width: 89%;
   }

   .skill-left .skill-bar .figma{
      width: 95%;
   }

   .skill-left .skill-bar .git-github{
      width: 97%;
   }


   @keyframes momo {
      0% {
         width: 0%;
      }
     
   }
</style>