// 1) Задание по проекту, получить каждый элемент в отдельную переменную:


// Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
// Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
// Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во вторую элементы у которых так же присутствует класс number через метод querySelectorAll.
// Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector.
// Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
// Получить все инпуты с классом total-input справа через метод getElementsByClassName. 
// ??? (класс total-input, получить именно элементы, а не коллекции) ??? 
// Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)


// 2) Проверить, чтобы все работало и не было ошибок в консоли
const title = document.getElementsByTagName('h1')[0];
const btn = document.getElementsByClassName('handler_btn')
// const reset = document.getElementsByClassName('handler_btn')
const screenBtn = document.querySelector('.screen-btn')
const itemsPersent = document.querySelectorAll('.other-items + .percent')
const itemsNumber = document.querySelectorAll('.other-items + .number')
const inputRange = document.querySelector('.rollback  input')
const spanRange = document.querySelector('.rollback  span')
const totalInput = document.getElementsByClassName('total-input')
let screenItem = document.querySelectorAll('.screen')

console.log(title)
console.log(btn)
console.log(screenBtn)
console.log(itemsPersent)
console.log(itemsNumber)
console.log(inputRange)
console.log(spanRange)
console.log(totalInput)
console.log(screenItem)



