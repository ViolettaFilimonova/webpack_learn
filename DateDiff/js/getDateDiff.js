import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.min.js'
import {printError} from './printResult.js'
const result = document.getElementById('datecalc_result')

const form = document.getElementById('datecalc')
form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    console.log(firstDate, secondDate);

    if(!firstDate || !secondDate ){
        printError(result,'Для рассчета промежутка необходимо заполнить оба поля')
    }
}
