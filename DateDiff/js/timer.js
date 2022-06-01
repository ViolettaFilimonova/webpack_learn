import {printError} from './printResult.js'
import {music} from './music.js'
const timerText = document.querySelector('.timer__text')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')

const inputResult = document.querySelector('.timer__value')

let interval = 0



//Music

//


startBtn.addEventListener('click', () => {
    timerText.textContent = ''
    clearInterval(interval)
    interval = setInterval(timer, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    music.overworld.stop()
})


function timer(){
    inputResult.value--
    if (inputResult.value < 10){
        inputResult.value = '0' + inputResult.value
    }else{
        inputResult.value
    }
    if (inputResult.value === '00'){
        clearInterval(interval)
        printError(timerText,'Время истекло')
        music.overworld.play()
    }
}


