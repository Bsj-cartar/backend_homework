let arr1 = [];
let min=1;
let max=100;

for(let i=0; i < 5; i++) arr1[i] = Math.floor(Math.random() * (max - min + 1) + min);

let arr2 = arr1.filter((e) => e % 2 == 0);
let sum = arr2.reduce((a,b) => a+b);

console.log(sum);
