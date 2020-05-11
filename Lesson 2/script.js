'use strict';
var money = +prompt("Your budget for the month,'"),
    time = prompt("Enter the date in the format YYY-MM-DD",'');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false 
};




for (let i = 0; i < 2; i++) {
    let a = prompt("Enter a required cost item this month", ""),
        b = prompt("How much will it cost?", '');
      if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
      && a != '' && b != '' && a.length < 50) { 
        console.log("done");
        appData.expenses[a] = b;
       } else {
        console.log("Verno");
      }        
};

//var i = 0;
// while (i < 2) {
//         let a = prompt("Enter a required cost item this month", ""),
//             b = prompt("How much will it cost?", ''); 
//     console.log(i);
//     i++;
// }

// do {
//     let a = prompt("Enter a required cost item this month", ""),
//         b = prompt("How much will it cost?", '');
//    console.log(i);
//     i++;
// }
// while (i < 2); 

appData.moneyPerDay = appData.budget / 30;

alert("Ezednevnui budget: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Min level weath");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middl level weath");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level weath");
} else {
    console.log("An error has happened")
}
   