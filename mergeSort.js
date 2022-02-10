"use strict"
function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    const mid = Math.floor(array.length/2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
         result.push(left[leftIndex]);
         leftIndex++;
      } else {
         result.push(right[rightIndex]);
         rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let items = [10, 1, 2, 5, 0, 6, 4, 5]
let sortedArray = mergeSort(items)
console.log(sortedArray)