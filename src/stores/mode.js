import { ref } from 'vue'
import { defineStore } from 'pinia'

export const colorMode = defineStore('mode', () => {
    const isDarkMode = ref(true)
  
    const changeMode = () => {
      	isDarkMode.value = !isDarkMode.value
    }

    return { isDarkMode, changeMode }
})
