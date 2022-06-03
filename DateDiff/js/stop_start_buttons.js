import {music} from './music.js'
import {timer} from './timer.js'
export const timerText = document.querySelector('.timer__text')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')



export let interval = 0

startBtn.addEventListener('click', () => {
    timerText.textContent = ''
    clearInterval(interval)
    interval = setInterval(timer, 1000)
    console.log(interval);
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    music.overworld.stop()
    console.log(interval);
})