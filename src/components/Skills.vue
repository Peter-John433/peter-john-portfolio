<template>
    <div>
        <div id="skills" class="skills bg-[yellow]">
            <div class="main-text text-center text-[2rem] text-[#01011a] font-[900] tracking-wider">
                <span class="text-center text-[2.5rem] text-[#01011a] font-[900] tracking-wider">Technical and Profession</span>
                <h2 class="text-center text-[2.5rem] text-[#01011a] font-[900] tracking-wider">
                    My Skills
                </h2>
            </div>

            <div class="skill-main">
                <div class="skill-left">
                    <h3>Technical Skills</h3>
                    <div class="skill-bar">
                        <div class="info">
                            <p>HTML</p>
                            <P>80%</P>
                        </div>

                        <div class="bar">
                            <span class="html"></span>
                        </div>
                    </div>

                    <div class="skill-bar">
                        <div class="info">
                            <p>CSS</p>
                            <P>60%</P>
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
                </div>
                <div class="skill-right">
                    <h3>Profession</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
      background-color: white;
      position: absolute;
      left: 0%;
      border-radius: 25px;
      box-shadow: 0 0 2px 2px white;
   }

   .skill-left .skill-bar .html{
      width: 70%;
   }
</style>