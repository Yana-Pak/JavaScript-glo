// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата

// Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться

const btn = document.querySelector('#btn')
const btnColor = document.querySelector('#text')
const elem = document.querySelector('#square')

btn.addEventListener('click',
    () => {
        elem.style.backgroundColor = `${btnColor.value}`
    }
)
// console.dir(btnColor);


// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "
const btnE = document.querySelector('#e_btn')
// btnE.style.display = 'none'
btnE.addEventListener('click',
    () => {
        btnE.style.display = 'none'
    }
)

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) 
const range = document.querySelector('#range')
const rangeValue = document.querySelector('#range-span')
const circle = document.querySelector('#circle')

rangeValue.innerText = range.value

const addValue = function () {
    rangeValue.innerText = range.value
}

range.addEventListener('input',
    () => {
        addValue()
        circle.style.width = `${range.value}% `
        circle.style.height = `${range.value}% `

    }
)
