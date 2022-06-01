
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')

const inputResult = document.querySelector('.timer__text')

let start = 0, stop = 0, interval = 0, seconds = 0



//Music
let music = {
    overworld: new Howl({
        src: [
            "https://assets.codepen.io/21542/howler-demo-bg-music.mp3"
        ]
    })
}
//


startBtn.addEventListener('click', () => {
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
        music.overworld.play()
    }
}

