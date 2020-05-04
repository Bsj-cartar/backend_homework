let arr = [];
let min=1;
let max=10;

for(let i=0; i < 10; i++) arr[i] = Math.floor(Math.random() * (max - min + 1) + min);

console.log(arr);
console.log(sum(arr));
function sum(arr) {
    let num = 0;
    for(let i = 0; i<arr.length; i++) {
        num += arr[i];
    }
    return num;
}