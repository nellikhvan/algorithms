/**
 * @param {number} x
 * @return {boolean}
 *
 * (1) Get the number to check
 * (2) Keep the number in a temporary variable
 * (3) Reverse the number
 * (4) Compare the temporary number with the inverted number
 * (5) If the two numbers are the same, display “the number is a palindrome”
 * (6) Otherwise, display “the number is not a palindrome”
 *
 * When we write logic of palindrome number our intention is to equalise original number with their reverse. For writing reverse number what we want is the individual digits of the original number .
 * Now , original number %10 is the only logic by which we will get individial digits of a number in base 10.
 * we will try to learn how we get individual digits ,
 * Let number =12321.
 * 1. number %10 = 1 (digit at ones place)
 * 2. number /10 =1232.

 * By repeating these two steps we get until
 * number !=0 we get all digits of any number.
 * When we calulate modulus of a number by any other number it will not give us the individual digits or a result which can't be implemented in our solution .
 * so we use % 10 only in palindrome logic.
 */
function isPalindrome(x) {
    if (x < 0) {
        return false
    }

    const temp = x
    let reversed = 0

    while (x) {
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
    }
    return reversed == temp;

    /* Two pointer method
    take one digit from the start, and another from the last */

    // if (x < 0) {
    //     return false;
    // }

    // if (x < 10) {
    //     return true;
    // }
    //
    // if (x % 10 === 0 && x !== 0) {
    //     return false;
    // }

    // const str = String(x);
    // let i = 0, j = str.length - 1;
    //
    // while (i < j) {
    //     if (str[i] !== str[j]) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
}

let x = 242
console.log(isPalindrome(x))

