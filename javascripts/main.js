console.log("main.js loaded");

// Difference between let and var.  Let gets scoped to just the current block. (It also can only be instantiated once, where var can be instantiated again) So this throws an error:
// function func1(){
    // if (true){
    //     let tmp = 123;
    // }
    // console.log("funct1 tmp", tmp);
// }

// func1();



// This one, however (using var) works because var is scoped to the entire function block.

// function func2(){
//     if (true){
//         var tmp2 = 123;
//     }
//     console.log("funct2 tmp", tmp2);
// }

// func2();

// function func3(){
//     var foo = 5;
//     if(true){
//         var foo = 10;
//     }
//     console.log("func3 with var", foo);
// }
// func3();

// Showing foo being limited to if statment block with let.
// function func4(){
//     var foo = 5;
//     if(true){
//         let foo = 10;
//         console.log("foo inside", foo)
//     }
//     console.log("foo outside:", foo);
// }
// func4();


// Be carefull when expecting a value outside of code block
// fuction func5(){
//     for (var i = 0; i < 10; i++){
//         // do some stuff
//     }
//     // wan tod something based on i
//     console.log("the total number of products", i);
// };

// func5();

// block-scoped and cannot change/be reassigned
const MY_FAVORITE_NUMBER = 3;
// MY_FAVORITE_NUMBER = 12 // SyntaxError


// -------------------------------


// var reflect = function(value){
//     return value;
// }

// This says same thing:
let reflect = (value) => value + 1;

let mywords = reflect("this is a beautiful day");
console.log("mywords:", mywords);





























