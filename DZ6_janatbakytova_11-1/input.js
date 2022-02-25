// Сделать приветствие с помощью HTML, CSS, 
// JS то есть будет input в который я введу свое имя и выйдет текст снизу инпута типа “Hello Jack”

const inputik = document.getElementById('input')
const block = document.getElementById('block')
const years = document.querySelector('.years')

inputik.addEventListener('change', e => {
    const b = document.createElement('p')
    b.innerHTML = `Великая ${e.target.value}!`
    block.append(b)
    inputik.value = ''
})

const question = document.getElementById('years')
const yearsik = document.getElementById('yearsik')

question.addEventListener('change', e => {
    const c = document.createElement('p')
    years.append(c)
    question.value = ''
    if (c === 22) {
        c.innerHTML = "Умница!"
    }
    else {
        c.innerHTML = "Угу, неверно!"
    }
})

const Fab = 'Fab'
const q1 = document.querySelector('.q1')
const button = document.getElementById('Continue')
button.addEventListener('click', e => {
    if (q1 === "Февраль") {
        alert("Верно, ты молодец!")
    }
    else if (q1 !== Fab) {
        alert("Увы, неправильный ответ!")
    }
})

const answer = document.getElementById('Answer')
answer.addEventListener('click', e => {
    alert = ('Самый короткий месяц. Одно слово с заглавной буквы')
})






