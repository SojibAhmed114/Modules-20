// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(avg) {
    const len = avg.length;
    let sum = 0;
    for (const number of avg) {
        sum = sum + number;
    }
    const averages = sum / len;
    return averages;
}

const avgData = [25, 65, 47, 95, 34, 39, 7, 3, 29, 41];
console.log(makeAvg(avgData)); 

// output: 38.5