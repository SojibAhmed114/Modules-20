//page number 4: return
// কোনো এক function এর মধ্যে console.log ব্যবহার করা মোটেও ভাল প্রাকটিস বা কাজ না। সেই জন্য return ব্যবহার করে variable/object/array রিটার্ন করে তাদের কে আলাদা variable এর মধ্যে console.log করতে পারি।


function fiels(data) {
    const dataPrice = data * 5;
    return dataPrice;
}

//fiels(10); atar output show korbe na
const outputs = fiels(10);
console.log(outputs); 



// title: short system return
function adds  (Number1, Number2){
    return Number1 + Number2;
}
console.log('Shorts system:', adds(20, 20)); 
// output: Shorts system: 40


// not for notes
function allmath(data1, data2) {
    const sum = data1 + data1;
    let sub = sum - data2;
    let multi = sub * sum;
    return multi;
}

console.log(allmath(205,54)); 