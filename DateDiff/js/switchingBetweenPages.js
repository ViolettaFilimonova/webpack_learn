let switchingTimer = document.querySelector('.button__timer')
let switchingCalendar = document.querySelector('.button__calendar')
let switchingButtons = document.querySelector('.button__buttons')


switchingTimer.addEventListener('click', () => {
    document.querySelector('.calc').classList.add('hide')
    document.querySelector('.timer').classList.remove('hide')
})
switchingCalendar.addEventListener('click', () => {
    document.querySelector('.timer').classList.add('hide')
    document.querySelector('.calc').classList.remove('hide')
})