//Timer
const hourItem = document.querySelector('.hour')
const minuteItem = document.querySelector('.minute')
const secondItem = document.querySelector('.second')
const millisecondItem = document.querySelector('.millisecond')

//Buttons
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')

//Variables
let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval

//Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
stopButton.addEventListener('click', () => {
    clearInterval(interval)
})
resetButton.addEventListener('click', () => {
    clearInterval(interval)
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    millisecondItem.textContent = '00'
    minuteItem.textContent = '00'
    hourItem.textContent = '00'
    secondItem.textContent = '00'
})


function startTimer(){
    //Milliseconds
    millisecond++
    if (millisecond < 9){
        millisecondItem.textContent = '0' + millisecond
    }else{
        millisecondItem.textContent =  millisecond
    }
    if (millisecond > 99){
        second++
        secondItem.textContent = '0' + second
        millisecond = 0
        millisecondItem.textContent = '0' + millisecond
    }

    //Seconds
    if (second < 9){
        secondItem.textContent = '0' + second
    }else{
        secondItem.textContent =  second
    }
    if (second > 59){
        minute++
        minuteItem.textContent = '0' + minute
        second = 0
        secondItem.textContent = '0' + second
    }

    //Menutes
    if (minute < 9){
        minuteItem.textContent = '0' + minute
    }else{
        minuteItem.textContent =  minute
    }
    if (minute > 60){
        hour++
        hourItem.textContent = '0' + hour
        minute = 0
        minuteItem.textContent = '0' + minute
    }
}

