'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service: '',

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
            do {
                price = prompt("Сколько это будет стоить? ")
            } while (!appData.isNumber(price))
            sum += +price
        }
        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getTitle: function () {
        return appData.title[0].toUpperCase() + appData.title.slice(1);
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return `Даем скидку в 10%  - fullPrice = ${appData.fullPrice * 0.9} руб.`;
        } else if (price >= 15000 && price < 30000) {
            return `Даем скидку в 5%  - fullPrice = ${appData.fullPrice * 0.95} руб.`;
        } else if (price > 0 && price < 15000) {
            return `Скидка не предусмотрена fullPrice = ${appData.fullPrice} руб.`;
        } else {
            return "Что то пошло не так";
        }
    },
    logger: function () {

        console.log(appData.title);
        console.log(`screenPrice - ${appData.screenPrice}`);
        console.log(`allServicePrices - ${appData.allServicePrices}`);
        console.log(`fullPrice - ${appData.fullPrice}`);
        console.log(`servicePercentPrice - ${appData.servicePercentPrice}`);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
    },


    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger()
    },
}


appData.start()