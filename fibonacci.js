let num0 = 0
let num1 = 1
let num2
console.log(num0)
console.log(num1)

for (let i = 3; i < 10; i++) {
    num2 = num0 + num1
    console.log(num2)
    num0 = num1
    num1 = num2
}

// the recursive way
function fibonacci(num) {
    if (num <= 1) {
        return 0
    } else if (num == 2) {
        return 1
    } else {
        return fibonacci(num-1)+fibonacci(num-2)
    }
}

fibonacci(10)