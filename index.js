// Code your solution in this file!
//const returnFirstTwoDrivers= function(arr){
//let arif=[];

//arif.push(arr[0],arr[1]);

//console.log(arif);
//};

const returnFirstTwoDrivers = function(array){
  return array.slice(0, 2);
};
const returnLastTwoDrivers= function(arr){
let arif=[];

arif.push(arr[arr.length-2],arr[arr.length-1]);

console.log(arif);
};