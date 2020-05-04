let arr1 = [];
let min=1;
let max=100;

for(let i=0; i < 100; i++) arr1[i] = Math.floor(Math.random() * (max - min + 1) + min);

let sum = arr1.reduce((a,b)=>a%2==0 && b%2==0 ? a+b : 0);

for(let i=0; i<arr1.length; i++){
    if(arr1[i] % 2 == 0) {
        n += arr[i];
    }
    console.log(n);
}
console.log(sum);
