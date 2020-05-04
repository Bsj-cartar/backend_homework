let arr=[];
let min=1;
let max=100;

for(let i=0; i < 100; i++) arr[i] = Math.floor(Math.random() * (max - min + 1) + min);

let average= (arr.reduce((a, b) => a+b)) / arr.length;

console.log(average.toFixed(1));