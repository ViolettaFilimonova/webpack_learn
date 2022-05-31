import {printError} from './printResult.js'

const form = document.getElementById('datecalc')
form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    console.log(firstDate, secondDate);

    if(!firstDate || !secondDate ){
        printError('Для рассчета промежутка необходимо заполнить оба поля')
    }
}
