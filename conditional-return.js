//page number 5 : conditional return of odd even

//conditional return even
function isEven(data3) {
    if (data3 % 2 !== 1) {
        return true;
    }
    else {
        return false;
    }
}
//console.log(isEven(5)); //output: false
//console.log(isEven(50)); //output: true

//conditional return even
function isOdd(dataValue) {
    if (dataValue % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(10)); //output: false
console.log(isOdd(11)); // output: true