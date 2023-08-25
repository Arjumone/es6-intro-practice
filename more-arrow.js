const difference = (x,y)=>x-y;

const multiply = (first,second,third,four)=> first * second * third * four;


//1. arrow function in object for get object property values
const getAge = (person)=> person.age;

const student = {name:'arju',age:20};
const age  = getAge(student)
// console.log(age);


//2. arrow function in array for get value using index
const getThird = numbers = numbers[2];

const array =[34,66,43,23,86,38];
const thirdArray = getThird(array);
// console.log(thirdArray);

// no parameters
const getPI = () => math.PI;
// console.log(getPI());

// large arrow function. if you want to get anything returned from this function .then you have to use the return keyword.
const doMath = (x,y,z) =>{
    const sum = x+y+z;
    const multi= x*y*z;
    const result = sum + multi;
    return result;
}
const result = doMath(2,45,21);
console.log(result);