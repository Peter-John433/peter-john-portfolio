import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// menuli



//togglemenu
let toggleMenu = document.querySelector('.bx-menu');
let headerList = document.querySelector('.header-list');

  toggleMenu.addEventListener('click', myToggle);

  function myToggle () {
     toggleMenu.classList.toggle('bx-x');
     headerList.classList.toggle('open');
  }

  window.onscroll = () =>{
    toggleMenu.classList.remove('bx-x');
    headerList.classList.remove('open');
  }


//   observer

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry=> {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
  })

  const scrollScale = document.querySelectorAll('.scroll-scale');
    scrollScale.forEach((el)=>observer.observe(el))

    const scrollBotton = document.querySelectorAll('.scroll-botton');
    scrollBotton.forEach((el)=>observer.observe(el));

    const scrollTop = document.querySelectorAll('.scroll-top');
    scrollTop.forEach((el)=>observer.observe(el));