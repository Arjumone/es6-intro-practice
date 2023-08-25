const actor = {
    name: 'arju',
    age: 20,
    phone: '45938465983',
    money: 5346
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {name,age:boyos,phone,money} = actor;
// console.log(name);
// console.log(boyos);


// array destructuring
const numbers = [34,12,54,27];
const [first,second] = numbers;
const [x,y] = [12,32];

function doubleThem(a, b){
    return [a*2 ,b*3]
}

const [num1,num2] = doubleThem(6,9);
console.log(num1,num2);