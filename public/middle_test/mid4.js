let arr1 = [];
let min=0;
let max=10;

for(let i=0; i < 5; i++) arr1[i] = Math.floor(Math.random() * (max - min + 1) + min);

console.log(sum(arr1));
for(let i=0; i<5; i++) {
    test_sum((arr3) => arr3.reduce((a,b) => a+b));
}
test_sum((arr3) => arr3.reduce((a,b) => a+b));

function sum(arr) {
    let num = 0;
    for(let i = 0; i<arr.length; i++) {
        num += arr[i];
    }
    return num;
}

function test_sum(callback) {
    let arr2 = [];
    for(let i=0; i < 5; i++) {
        arr2[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(arr2);
    console.log(callback(arr2));
}

