"use strict";


// задание 1
let arr = [-1, 10, -9, 5, 6, -10,];
let sum = 0;
let arrSum = [];
for (let i = 0; i < arr.length; i++) {
    sum = sum + (arr[i]);
    arrSum.push(sum);
}
console.log (arrSum);
function getMaxOfArray(arrSum) {
    console.log(Math.max.apply(null, arrSum));
}

getMaxOfArray(arrSum);


