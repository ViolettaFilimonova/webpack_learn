import {printError} from './printResult.js'
import {music} from './music.js'
import {interval} from './stop_start_buttons.js'
import {timerText} from './stop_start_buttons.js'


const inputResult = document.querySelector('.timer__value')


export function timer(){
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



