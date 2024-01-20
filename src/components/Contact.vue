<script setup>

</script>

<template>
    <div id="contact" class="pt-5 contact scroll-scale">
        <div class="main-text text-center font-[900] tracking-wider"  :class="{' text-[#0e1217]' : isDarkMode, 'text-[#D0D0D0]' : !isDarkMode}">
            <span class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">Ask me question</span>
                <h2 class="text-center text-[1.5rem] sm:text-[2rem] font-[900] tracking-wider">
                    Contact Me!
                </h2>
        </div>

        <div>
            <form action="">
                <input type="text" name="" id="" placeholder="your name">
                <input type="text" name="" id="" placeholder="your email">
                <input type="text" name="" id="" placeholder="your address">
                <input type="text" name="" id="" placeholder="phone number">
                <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
                <div class="my-btn">
                    <button type="submit" class="btn">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
  .contact{
    width: 100%;
  }

  .contact form{
      max-width: 50rem;
      margin: 1rem auto;
      text-align: center;
  }

  .contact form input, .contact form textarea{
    width: 100%;
    background-color: black;
    border: none;
    margin-bottom: .8rem;
    padding: .7rem;
  }

  .contact form textarea{
    resize: none;
  }

  .my-btn{
    background-color: yellow;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px 16px;    
  }

  .my-btn button{
    width: 100%;
  }
</style>