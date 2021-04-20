// Стартовый массив
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Реализация функции forEach()
function callbackForEach(value) {
 console.log("Value: " + value);
 value += 10;
 console.log("currentValue: " + value);
}
function forEach(arr, callback) {
 for(let item of arr) {
  callback(item);
 }
}
forEach(someArray, callbackForEach);

// Реализация функции map()
function callbackMap(value) {
 value *= value;
 return value;
}
function map(arr, callback) {
 let resultArr = [];
 for(let item of arr) {
  let newItem = callback(item);
  resultArr.push(newItem);
 }
 return resultArr;
}
const resultMapFunction = map(someArray, callbackMap);

// Реализация функции filter()
function callbackFilter(value) {
 if (value % 2 !== 0) {
  return value;
 }
}
function filter(arr, callback) {
 let resultArr = [];
 for(let item of arr) {
  let newItem = callback(item);
  if (Boolean(newItem) === true) {
   resultArr.push(newItem);
  }
 }
 return resultArr;
}
const resultFilterFunction = filter(someArray, callbackFilter);

// Реализация функции some()
function callbackSome(value) {
 if (value > 5) {
  return true;
 } else {
  return false;
 }
}
function some(arr, callback) {
 for(let item of arr) {
  let isCondition = callback(item);
  if (isCondition === true) {
   return true;
  }
 } 
 return false;
}
const resultSomeFunction = some(someArray, callbackSome);

// Реализация функции every()
function callbackEvery(value) {
 if (value > 0) {
  return true;
 } else {
  return false;
 }
}
function every(arr, callback) {
 for(let item of arr) {
  let isCondition = callback(item);
  if(isCondition === false) {
   return false;
  }
 }
 return true;
}
const resultEveryFunction = every(someArray, callbackEvery);
