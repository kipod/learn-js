let startBtn = document.getElementById('start');

// console.log(startBtn);

let budgetValue = document.getElementById('budget-value'),
    daybudgetValue = document.getElementById('daybudget-value'),
    levelValue = document.getElementById('level-value'),
    expensesValue = document.getElementById('expenses-value'),
    optionalExpensesValue = document.getElementById('optionalexpenses-value'),
    incomeValue = document.getElementById('income-value'),
    monthSavingsValue = document.getElementById('monthsavings-value'),
    yearSavingsValue = document.getElementById('yearsavings-value');

let inputField = document.getElementsByClassName('expenses-item');

// console.log(inputField);
let expensesItemBtn = document.getElementsByClassName('expenses-item-btn'),
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn'),
    countBudgetBtn = document.getElementsByClassName('count-budget-btn');

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

// console.log(optionalExpensesItem);

let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
// console.log(checkSavings);
let chooseSum = document.querySelector('#sum');
// console.log(chooseSum);
let percent = document.querySelector('#percent');
let year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let title = document.querySelector('.title');
title.style.fontSize = '64px';
title.style.color = 'gray';