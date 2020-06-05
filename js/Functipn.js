"use script";
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage("Hello world");
console.log(num);

// console.log(calc(4,3));
// console.log(calc(12,7));
// console.log(calc(9,3));

// function calc(a,b) {
//     return (a*b);
// }

const logger = function() {
    console.log('The best');
};
logger(); 

const calc = (a,b) => {
    console.log('1');
    return a + b;    
};
//console.log(calc(5,6));