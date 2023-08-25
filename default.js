// default----> if value is not provided,take this as a default.
// Default Parameter----> default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
// if we use the default parameters,the parameters will be the default values if the caller does not provide the required values

function add(num1,num2=3){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
// const sum = add(43,2);
// const sum2 = add(43);
// const sum3 = add();
const sum4 = add(5);
// console.log(sum,sum1,sum2,sum3,sum4);

function fullName(first,last= ''){
    const full = first+ ' '+last;
    return full;
}

function friend(numbs = []){

}

function person(human = {}){

}


