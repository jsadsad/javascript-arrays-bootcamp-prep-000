var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, ele) {
  return [ele, ...array];
}

// function destructivelyAddElementToBeginningOfArray(array, ele) {
//   array.unshift(ele);
//   return array;
// }
//
// function addElementToEndOfArray(array, element) {
//   return [array, ...element];
// }
//
// function destructivelyAddElementToEndOfArray(array, element) {
//   array.push(element);
//   return array;
// }
//
// funtion accessElementInArray(array, index) {
//   return array[index];
// }
