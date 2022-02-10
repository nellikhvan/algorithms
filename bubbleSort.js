/* 
Сортироку пузырьком можно решить несколькими способами, два из которых представлены ниже.
Это самый простой алгоритм сортировки
*/

// function bubbleSort(items) 
// {
//     let swapped = true
//     do {
//         swapped = false
//         for (let i = 0; i < items.length; i++) {
// 			if (items[i] > items[i + 1]) {
// 				let temp = items[i];
// 				items[i] = items[i + 1];
// 				items[i + 1] = temp;
// 				swapped = true;
// 			}
// 		}
//     } while (swapped)
//     return items
// }

// var items =[2,0,2,1,1,0]
// var sortedArray = bubbleSort(items)
// console.log(sortedArray)

function bubbleSort1(nums) {
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums
}
let items =[2,0,2,1,1,0]
let sortedArray = bubbleSort1(items)
console.log(sortedArray)