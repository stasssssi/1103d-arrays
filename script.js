// задача №1
const fill = (arraySize, value) => {
  const newArray = [];
  for (i = 0; i < arraySize; i += 1) {
    newArray.push(value);
  }
  return newArray;
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill))

// задача №2
const reverse = (array) => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  return newArray;
 }

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  const result = [];
  for (const item of array) {
    if (item !== null && item !== false && item !== 0 && item !== undefined && item !== '') {
    result.push(item);
    }
  }
  return result;
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
