let title = 'glo- project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 7;
let rollback = 25;
let fullPrice = 5500000;
let adaptive = true;

let percentRollback;
let service1, servicePrice1, service2, servicePrice2;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки из переменной screens
console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split());

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));




// task3 - весь функционал что был ранее оставляем
// Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
title = prompt('Как называется ваш проект?');
console.log(title);

// Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);

// Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log(screenPrice);

// Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
// adaptive = prompt('Нужен ли адаптив на сайте?');
// if (adaptive == 'yes' || 'да' || 'конечно' || 'true') {
//     adaptive = true;
//     console.log(adaptive);
// } else {
//     adaptive = false;
//     console.log(adaptive);
// }
// or
adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
service2 = prompt('Какой дополнительный тип услуги нужен? --2');
servicePrice2 = +prompt('Сколько это будет стоить? --2');
// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

percentRollback = fullPrice * (rollback / 100);
console.log(percentRollback);
// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
const servicePercentPrice = (fullPrice - percentRollback);
console.log(servicePercentPrice);

// Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
//   - Если fullPrice больше 30000, то “Даем скидку в 10%”
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%”
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена”
//   - Если отрицательное значение то вывести “Что то пошло не так”
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)
if (fullPrice <= 0) {
    console.log("Что то пошло не так");
} else if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
    console.log(`fullPrice = ${fullPrice * 0.9} руб.`);
} else if (30000 > fullPrice && fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
    console.log(`fullPrice = ${fullPrice * 0.95} руб.`);
} else if (15000 > fullPrice && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
    console.log(`fullPrice = ${fullPrice} руб.`);
}