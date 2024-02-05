// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(binary) {
    let count = 1;
    for (const num of binary) {
        if (num == 0) {
            count = count + 1;
        }
    } 
    return count;
}

console.log(countZero("101010101010")); 