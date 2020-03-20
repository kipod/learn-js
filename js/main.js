let startBtn = document.getElementById('start');

// console.log(startBtn);

let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.getElementsByClassName('expenses-item');

// console.log(inputField);
let expensesItemBtn = document.getElementsByClassName('expenses-item-btn')[0],
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    countBtn = document.querySelector('.count-budget-btn');

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

// console.log(optionalExpensesItem);

let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
// console.log(checkSavings);
let sumValue = document.querySelector('#sum');
// console.log(chooseSum);
let percentValue = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let title = document.querySelector('.title');
title.style.fontSize = '32px';
title.style.color = 'gray';

let money, time;

startBtn.addEventListener('click', function (event) {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == '' || money === null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate();
});

expensesItemBtn.addEventListener('click', function (event) {
    let sum = 0;
    // two questions
    for (let i = 0; i < expensesItem.length; i++) {
        var expenceName = expensesItem[i].value;
        var expenceValue = expensesItem[++i].value;
        if ((typeof (expenceName) == 'string') && (typeof (expenceValue) == 'string') &&
            (expenceName.length > 0) && (expenceValue > 0)) {
            appData.expenses[expenceName] = +expenceValue;
            sum += +expenceValue;
        } else {
            console.warn('retry');
            i--;
        }
    }

    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'произвошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'произошла ошибка';
    }
});

chooseIncome.addEventListener('input', event => {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', event => {
    appData.savings = checkSavings.checked;
});

sumValue.addEventListener('input', event => {
    if(appData.savings) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', event => {
    if(appData.savings) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: true
};