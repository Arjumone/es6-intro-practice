// normal function:1
function add(a,b){
    const result = a+b;
    return result;
}
// const sum = add(3,5);
// console.log(sum);

// normal function:2
function add2(a,b){
    return a+b;
}
const sum2 = add2(3,5);
// console.log(sum2);

// function expression
const add3 = function(a,b){
    return a + b;
}
// const sum2 = add3(3,5);
// console.log(sum2);

// arrow function
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular function.
const add4 = (a,b)=> a + b;
const sum3 = add4(2,4);
console.log(sum3);