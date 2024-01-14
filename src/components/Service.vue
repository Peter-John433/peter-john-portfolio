<template>
     <div>
        <div id="service" class="service mt-20 mb-20">
            <div class="main-text text-center text-[2rem] text-[yellow] font-[900] tracking-wider">
                <span class="text-center text-[2.5rem] text-[yellow] font-[900] tracking-wider">What i will do for you</span>
                <h2 class="text-center text-[2.5rem] text-[yellow] font-[900] tracking-wider">
                    Our Service
                </h2>
            </div>

            <div class="section-service flex justify-center items-center mt-10 gap-x-10">
                <div class="service-icon-cont flex flex-col justify-between items-center text-center bg-[yellow] text-[#01011a] p-5 rounded-xl gap-y-1">
                    <i class='bx bx-layer service-icon' ></i>
                    <h3 class="text-[#01011a] text-[1.5rem]">
                        Frontend Developer
                    </h3>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, beatae laboriosam? Dolor vero debitis sequi unde eos, voluptates nesciunt. Perspiciatis.
                    </p>

                    <div class="btn-box">
                       <a href="#" class="btn ">Read more <i class='bx bxs-chevron-right-circle text-[1.5rem] ms-3 bx-flashing'></i></a>
                    </div>
                </div>

                <div class="service-icon-cont flex flex-col justify-between items-center text-center bg-[yellow] text-[#01011a] p-5 rounded-xl gap-y-1">
                    <i class='bx bx-desktop service-icon' ></i>
                    <h3 class="text-[#01011a] text-[1.5rem]">
                        Web designer
                    </h3>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, beatae laboriosam? Dolor vero debitis sequi unde eos, voluptates nesciunt. Perspiciatis.
                    </p>

                    <div class="btn-box">
                        <a href="#" class="btn ">Read more <i class='bx bxs-chevron-right-circle text-[1.5rem] ms-3 bx-flashing'></i></a>
                    </div>
                </div>

                <div class="service-icon-cont flex flex-col justify-between gap-y-1 items-center text-center bg-[yellow] text-[#01011a] p-5 rounded-xl">
                    <i class='bx bx-code-alt service-icon' ></i>
                    <h3 class="text-[01011a] text-[1.5rem]">
                        Frontend Developer
                    </h3>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, beatae laboriosam? Dolor vero debitis sequi unde eos, voluptates nesciunt. Perspiciatis.
                    </p>

                    <div class="btn-box">
                        <a href="#" class="btn ">Read more <i class='bx bxs-chevron-right-circle text-[1.5rem] ms-3 bx-flashing'></i></a>
                    </div>
                </div>
            </div>

        </div>
     </div>
</template>

<style scoped>
  .section-service{
     
  }
  .service-icon{
    font-size: 4rem;
    border: 2px solid #01011a;
    border-radius: 100%;
    padding: 10px;
    box-shadow: 0 0 5px 3px #01011a;
  }
  .service-icon-cont{
     transition: all 500ms ease-in-out;
  }
  .service-icon-cont:hover{
     transform: translateY(-.7rem);
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
    width: 200px; 
    background-color: yellow;
    border: 1px solid #01011a;
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
    color: #01011a;
 }

 .btn-box a.btn:hover{
   box-shadow: 0 0 2px 2px #01011a;
   color: yellow;
   border: 1px solid transparent;
 }

 a.btn::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
   background-color: #01011a;
   z-index: -1;
   transition: .4s;
 }

 a.btn:hover::before{
   width: 100%;
 }

</style>