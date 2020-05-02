'use strict';
var money = prompt("Your budget for the month,'"),
    time = prompt("Enter the date in the format YYY-MM-DD",'');

let appData = {
    budget : money,
    timeData : time,
    expenses : { "Enter a required cost item this month" : "How much will it cost?" },
    optionalExpenses : {},
    income : [],
    savings : false 
};
let a = prompt("Enter a required cost item this month", ""),
	b = prompt("How much will it cost?", ''),
	c = prompt("Enter a required cost item this month", ''),
	d = prompt("How much will it cost?", '');

appData.expenses[a] = b;
appData.expenses[c] = d;

alert(appData.budget / 30);
   