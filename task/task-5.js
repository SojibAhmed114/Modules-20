// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(number) {
    if (number % 2 !== 1) {
        number = "" + number;
        return number;
    }
    
    return number;
}

console.log(odd_even(4)); 

