const { keys } = require("localforage");

const glass={
    name: 'glasses',
    color: 'golden',
    price: 34,
    isCleaned: true
}
// console.log(glass);


// const keys = Object.keys(glass)
// console.log(keys);
// output dibe all property name

const values = Object.values(glass);
// console.log(values);
// output dibe all property values

const entries = Object.entries(glass);
// console.log(entries);
// ata array of array return korbe ba atak ble two dimensional array

// object to remove property
// 1
delete glass.isCleaned;
// console.log(glass);

// object to remove property
// 2
const{isCleaned,...rest} = glass;
// console.log(rest);

// object to remove property
// 3
// Object.freeze(glass);ata off comment kore raklei source property ta add hobe abr delete kora jabe r jodi freeze on take tahole add ba remove konotai hobena
glass.source = 'Bangladesh';
// console.log(glass);

Object.seal(glass);
glass.price= 56;
// seal takle modify o  kora jai