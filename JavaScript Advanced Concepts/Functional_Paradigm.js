// pure Function
// 1. It return the same result if given the same arguments.
// 2. It does not cause any observable side effect.

// function sqrt(a) {
//     return a*a;
// }
// function sum(a,b) {
//     return a+b;
// }
// console.log(sqrt(6));
// console.log(sum(6,3));
// console.log(sum(2,6));

// // Impure function
// let s = 1;
// const myFun=()=>{
//     s+=2;
//     return s
// }
// console.log(myFun());
// console.log(myFun());
// console.log(myFun());
// console.log(myFun());
// console.log(myFun());


// First class function
// function multiply(a, b) {
//     return a*b
// }
// 1.Function can be stored in a variable
// let myMultiplyFun = multiply;
// console.log(myMultiplyFun(2,3));

// 2.Function can be stored in a array
// let myArray = [];
// myArray.push(multiply)
// console.log(myArray[0](4,4));

// 3.Function can be stored in a array
// const myObj = {multiply:multiply};
// console.log(myObj.multiply(3,2));

// 4. We can create function as we need
// function myFun(){
//     function myFun2(){
//         console.log("My function");        
//     }
//     myFun2()
// }
// myFun()

// // Higher order function
// 5. We can pass function as an arguments
// 6. We can return function from another function

function sum (a,b){
    return a+b
}
function myFun(a,b,fun){
    return function(){
    let sum = fun(a,b);
    return sum+a+b
    };
}
console.log(myFun(2, 3, sum)());
 