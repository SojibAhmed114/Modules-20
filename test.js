//page number 8:
// এরে থেকে জোড় সংখ্যা বের করে আবার এরে করে আউটপুট দেখানো নিয়ম।
function isEvenSum(numbers) {
    let doArray = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            doArray.push(number)
        }
    }
    return doArray;
}


const arrayData = [1, 5, 4, 10, 20, 5, 10, 3, 2];
const  checkout = isEvenSum(arrayData);
console.log(checkout);

//.,,,,,,,,,,,,,,,,
// এরে এর জোড় সংখ্যার সমষ্টি

function evenAddition(numValues) {
    let sum = 0;
    for (const numbe of numValues) {
        if (numbe % 2 === 0) {
            sum = sum + numbe;
        }
    }
    return sum
}

const dataHere = [14, 54, 12, 4, 1, 42, 3, 25, 35, 25, 14, 82, 10, 83, 77, 90];
const tionName = evenAddition(dataHere);
console.log(tionName);  












//............try  file.........
// function isEven(obaba) {
//     let pushd = [];
//     for (const baba of obaba) {
//         if (baba % 2 !== 1) {
//             pushd.push(baba);
//         }
//     }
//     return pushd;
// }

// const numData = [54, 50, 6, 1,13,19];
// const functinName = isEven(numData);
// console.log(functinName); 





