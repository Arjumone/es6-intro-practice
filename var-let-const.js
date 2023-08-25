// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 25;
const rich = money + 25;
// console.log(rich);

let count = 0;
count = count + 10;
// console.log(count);

const number = [2334,23,9,76,34,56];
// number = [2,42,12,64];    avabe use kora jabe na
number[1]= 55;
number.push(65,33,89);
// console.log(number);

// object
const student = {
    name: 'moyna',
    class: 12
}
// student = {name:'kokila'}  ata kaj korbena,jodi let diye declare kori tahole kaj korbe
student.name='dalia';
// console.log(student);  avabe dile kaj korbe

// loop
let sum = 0;
for(let i=0;i<10;i++){
    const num = i;
    sum = sum+num; 
}
// console.log(sum);