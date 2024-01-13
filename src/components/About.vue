<template>
   <div>
        <div id="about" class="about bg-[yellow] rounded-xl mt-20 flex justify-center items-center gap-x-32">
            <div class="img-about text-center relative rounded-full p-0 m-0 ">
                <img src="@/assets/eche3-removebg-preview.png" class=" max-w-[500px] w-full h-[758px] object-cover rounded-br-full rounded-bl-full" alt="">
            
                <div class="about-info info-1">
                    <span>5+</span>
                    <p>Years of experience</p>
                </div>

                <div class="about-info info-2">
                    <span>100+</span>
                    <p>projects completed</p>
                </div>
            </div>

            <div class="about-content">
                <span>Let me introduce myself</span>
                <h2>About Me</h2>
                <h3>A good day</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quae amet nesciunt dolore quas eaque. Sunt possimus voluptatem ad saepe.
                </p>
                <div class="btn-box">
                    <a href="#" class="btn">Read more</a>
                </div>

                <div class="social-icon mt-[5rem]">
                  <a href=""><i class='bx bxl-facebook bx-tada'></i></a>
                  <a href="#"><i class='bx bxl-instagram-alt bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-upwork bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-linkedin bx-tada' ></i></a>
                  <a href="#"><i class='bx bxl-twitter bx-tada' ></i></a>
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

  .about-content{
     color: #01011a;
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
    color: #01011a;
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: capitalize;
 }

 .social-icon a{
     display: inline-flex;
     width: 50px;
     height: 100%;
     justify-content: center;
     align-items: center;
     border: 2px solid #01011a;
     padding: 10px 10px;
     box-shadow:  0 0 .3rem #01011a;
     transition: .6s;
     position: relative;
     z-index: 1;
     overflow: hidden;
     border-radius: 50%;
     margin-right: 1rem;
     color: #01011a;
  }

  .social-icon a::before{
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

 .social-icon a:hover::before{
   width: 100%;
 }
 .social-icon a:hover{
   box-shadow: 0 0 2px 2px #01011a;
   color: yellow;
   border: 1px solid transparent;
 }
  .social-icon i{
   font-size: 1.5rem;
  }

  .social-icon a:hover{
     background-color: #01011a;
  }
 /* closed */

 .about-info{
    position: absolute;
    width: 100px;
    height: 100px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 70% 30% 30% 70% / 30% 40% 30% 40%;
    animation: mother 6s linear infinite;
 }

  .info-1{
     position: absolute;
     background-color: #01011a;
     top: 40%;
     right: -15%;
     color: yellow;
  }

  .info-2{
    position: absolute;
    bottom: 5%;
    background-color: #01011a;
    color: yellow;
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

</style>