// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isOddEven(num1, multiDivide) {
    if (multiDivide) {
        const multi = num1 * 2;
        return multi;
    }
    else {
        const multi = num1 / 2;
        return multi;
    }
}

console.log(isOddEven(50,true)); 
console.log(isOddEven(50,false)); 