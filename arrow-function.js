// 1. write an arrow function that will take 3 parameters,will multiply the parameters and will return the result
const multi = (num1,num2,num3) => num1*num2*num3; 
const result = multi(2, 5, 3);
// console.log(result);

// 2. write the following sentence in three lines and print the result:
// I am a web developer. I Love to code. I love to eat rice.
const sentence = `I am a web developer. I Love to code. I love to eat rice.`;
// console.log(sentence);

// 3. write an arrow function that will take 2 parameter: One parameter will come from you and other parameter will be a default parameter. Add these two parameters and return the result.
const sum= (number1,number2=2)=> number1+number2;
const result2 = sum(12);
// console.log(result2);

// 4. write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even,push elements with even length to a new array and return the result
const friends = (frnds) => {
 for(let i = 0;i<frnds.length;i++){
    const even = frnds[i];
    // console.log(even);
    if(even.length%2===0){
        return even
    }
 }
}
const myFriends = ['tinny','shipra','rabu','arju','boby'];
const allFriends = friends(myFriends);
// console.log(allFriends);

// 5. write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements 
// Print the result.
const arrayElement = (arr) =>{
    // console.log(arr);
    let sum = 0;
    for (let i = 0;i<arr.length;i++){
        const element  = arr[i];
        const squareArrayElement = element * element;
        // console.log(squareArrayElement);
        sum += squareArrayElement; 
    }
    const arrayAverage = sum/arr.length;
        return arrayAverage;
}
const array = [5,2,7,3];
const averageOfArray = arrayElement(array);
console.log(averageOfArray);
  
// 6. write an arrow function where it will do the following:
// a) It will take two array inputs
// 2) Combine the two arrays and assign them in a array 
// c) Find the maximum number from the new array and return the result
// Print the result
const arrayTwo = (x1,y1)=>{
    const sum = [...x1,...y1];
    const maxMath = Math.max(...sum)
    // console.log(maxMath);
    return maxMath
}
const x = [23,53,65,23,11];
const y = [95,245,75,23,74];
const result3 = arrayTwo(x,y);
// console.log(result3);


  