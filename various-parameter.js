//page number 6. different type of parameter.
//এটাতে আসলে parameter না বলে  arguments বলা যায়। heading

//string arguments, check length,

// function isEven(stringType){
//     let size = stringType.length;
//     console.log(stringType, ":", size);
//     if (stringType % 2 === 0) {
//         console.log("this is a even number");
//         return true;
//     }
//     else {
//         console.log("it is a not even number");
//         return false;
//     }
// }

// isEven("Dhaka");
//................................



// boolean type arguments
// true হলে দ্বিগুন হবে আর না হলে (false) তিনগুন হবে।

function isDoubleTriple(num, double) {
    if (double === true) {
        const dot = num * 2;
        return dot;
    }
    else {
        const dot = num * 3;
        return dot;
    }
}

console.log(isDoubleTriple(20,true)); 
console.log(isDoubleTriple(20,false)); 
//..............................................

// array type arguments and check length
function arrays(name) {
    const checks = name.length;
    return checks;
}
console.log(arrays(["sojib", "safi", "sakil"])); 