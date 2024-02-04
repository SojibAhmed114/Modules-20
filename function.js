// page Number 1 :  function structure and call

// function এর সুবিধা : function  অনেক ডায়নামিক ভাবে কাজ করে। যেমন : অন্য কোনো ভাবে 4 এর ‍(square) বর্গ যদি আমরা করি, কিন্তু পরে আবার যদি 5 কিংবা 6 এর বর্গ প্রয়োজন হতে  পারে। তখন আবার নতুন করে কোড লিখা লাগবে। এক বার যেন বার বার না করা লাগে সেই জন্য functin ব্যবহার করা হয়।

// function structure and call
// function meanfullFunctionName(parameter/name) {
//     any statement
// }

//function output পাইতে হলে অবশ্যই কল করতে হবে। একবার বার function লিখে অন্য কাজ করার পর সেম function প্রয়োজন হলে শুধু মাত্র function কল করলেই হবে।

//function call system
//meanfullFunctionName(parameter value);


//ex: বিভিন্ন সংখার বর্গ এর উদাহরণ দেওয়া হলো:
function square(numbers) {
    let borgo = numbers * numbers;
    console.log(borgo); 
} 

square(4); //output: 16
square(20); //output: 400
square(45); //output: 2025

//............................................


