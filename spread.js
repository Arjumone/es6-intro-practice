//The JavaScript spread operator(...) allows us to quickly copy all or part of an existing array or object into another array or object. 
// And Math.max () method returns the number with the highest value
const max = Math.max(34,23,21,45,56,74,34,25);
// console.log(max);

const numbers = [23,34,23,21,45,56,74,36];
const arrayMax  =Math.max(...numbers);
// console.log(arrayMax);
// (ortath kono akta array teke sonkagolo niye jodi mathmax mathmin etc korte cai tahole oi array er age ... dite hobe)

// use spread operator to copy:
const nums1 = [2,34,5,56];
const nums2 = nums1;
nums2.push(12);
console.log(nums1.nums2);
// (akane push nums2 te kora holeo nums1 e o aki man push hobe karon non premitive golo aki jaiga dore rake,atar somadan pete caile nicher niome spread operator use korte hobe)
const num1  = [2,5,32,76,34];
const num2 = num1;
const num3 = [...num1];
// console.log(num3);
num1.push(10,23);
// console.log(num3);
// console.log(num1);
// advanced
const num4 = [...num1,34,23];
// console.log(num4);

