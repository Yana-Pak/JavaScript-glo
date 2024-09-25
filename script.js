'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?');
    screenPrice = +screenPrice
}

const getAllServicePrices = function () {
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');

            do {
                sum1 += prompt('Сколько это будет стоить?')
            } while (!isNumber(screenPrice))

        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');

            do {
                sum2 += prompt('Сколько это будет стоить?')
            } while (!isNumber(screenPrice))
        }

    }
    sum = +sum1 + +sum2
    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * (rollback / 100));
}

function getTitle() {
    return title[0].toUpperCase() + title.slice(1);
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

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screenPrice);
showTypeOf(allServicePrices);

console.log(`типы экранов - ${screens}`);
console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage());
console.log("fullPrice", fullPrice);
console.log("servicePercentPrice", servicePercentPrice);


// Task
// 1) Переписать получение значения переменной screenPrice циклом do while. Вопрос должен задаваться один раз обязательно, далее уже по условию
// 2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос "Сколько это будет стоить" в функции getAllServicePrices
// 3) Поправить проект так, чтоб расчеты велись верно. Проверить типы получаемых переменных и привести их к нужным.
// 4) Проверить, чтобы все работало и не было ошибок в консоли.