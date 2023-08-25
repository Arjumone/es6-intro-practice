// for of use on array or string not in object
// for in use on object


const numbers = [45,23,3,6];
for(const number of numbers){
    // console.log(number);
}

const nobab = 'Siraj ud dola';
for(const character of nobab){
    // console.log(character);
}


// object e for in use hoi
const glass={
    name: 'glasses',
    color: 'golden',
    price: 34,
    isCleaned: true
}
for(const key in glass){
    const value = glass[key]
    // console.log(key,value);
}

const keys = Object.keys(glass);
// console.log(keys);

for(const key of keys){
    const value = glass[key]
    console.log(key,value);
}