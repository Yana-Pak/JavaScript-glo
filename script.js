let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 25;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен? --2');
let servicePrice2 = +prompt('Сколько это будет стоить? --2');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percentRollback = fullPrice * (rollback / 100);
let allServicePrices;
let servicePercentPrice = (fullPrice - percentRollback);

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return `Даем скидку в 10%  - fullPrice = ${fullPrice * 0.9} руб.`;
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return `Даем скидку в 5%  - fullPrice = ${fullPrice * 0.95} руб.`;
    } else if (fullPrice > 0 && fullPrice < 15000) {
        return `Скидка не предусмотрена fullPrice = ${fullPrice} руб.`;
    } else {
        return "Что то пошло не так";
    }
}

// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function (num1, num2) {
    return num1 + num2;
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration
function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice()

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
function getTitle() {
    console.log(title[0].toUpperCase() + title.slice(1))
    // let result = title.split('').map((char, index) =>
    //     index === 0 ? char.toUpperCase() : char).join('');
    // console.log(result);
}

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
function getServicePercentPrices() {
    return fullPrice - percentRollback;
}
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getTitle()
console.log(`типы экранов - ${screens}`);

getRollbackMessage()
console.log(fullPrice);
console.log(servicePercentPrice);