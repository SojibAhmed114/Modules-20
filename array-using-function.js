// page 7 array using function


//array addition(+) in function
// function isTotalSum(numbers) {
//     let sums = 0;
//     for (const num of numbers) {
//         sums = sums + num
//     }
//     return sums
// }

// const money = [14, 14, 2, 10, 20];
// let tatal = isTotalSum(money);
// console.log(tatal);






//...........................try for not for notes........

function isTotalSums(arrayNum) {
    let sum = 0;
    for (const sumDetails of arrayNum) {
        sum = sum + sumDetails;
    }

}

const data = [14, 16, 20, 80, 20];

console.log(isTotalSums(data)); 