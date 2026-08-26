// // loop
// for (let i = 0; i < 5; i++) {
//     if(i === 3){
//         break;
//     }
//   let text = "The number is " + i;
//   console.log(text);  
// }


// let count = 0;
// while(count < 5){    
//   if(count === 3){
//         break;
//     }
//   let text_count = "The number is " + count; 
//     console.log(text_count);
//     count++;
// }


// let countDW = 0;
// do{   
//   if(countDW === 3){
//         break;
//     }
//   let text_countDW = "The number is " + countDW; 
//     console.log(text_countDW);    
//     countDW++
// }
// while(countDW < 5)

// const player = ['amir', 'bmir', 'cmir', 'dmir', 'emir', 'fmir'];
// for (let i = 0; i < player.length; i++) {
//     console.log(player[i]); 
// }
// console.log(player.length);
// for( let i = player.length -1; i >= 0; i--){
//     console.log(player[i]);    
// }
// for(let i in player){
//     console.log(player[i]);    
// }
// player = player.push("gmir");
// player = player.toString();
// console.log(player);
// console.log(typeof player); 



// const myPc = {
//     Name : "Desktop",
//     Motherbord : "MSI",
//     "Motherbord Specification" : {
//         Model: "PRO B760M-P Supported", 
//         CPU: "14th/13th/12th Gen Intel Processors (LGA1700) Supported", 
//         RAM: "4x DDR5, Max 192GB 6800+(OC)",
//         "Graphics Output": "1x HDMI, 1x DisplayPort, 1x VGA",
//         Features: "2x M.2 slot, Realtek RTL8111H Gigabit LAN"
//     },
//     Monitor : "Dahua",
//     'Ram Rom ' : ["16gb", "1 TeraBite",],
//     Prosessor : "core i5 14gen",
//     "Prosessor Fan" : true
// }
// console.log(myPc["Motherbord Specification"].Model);
// delete myPc[ "Motherbord Specification"]
// const value = Object.values(myPc);
// console.log(Object.entries(myPc["Motherbord Specification"]));







// Count code

// const counter = document.querySelector(".counter");
// const increaseBtn = document.querySelector(".increase");
// const decreaseBtn = document.querySelector(".decrease");
// const resetBtn = document.querySelector(".reset");

// let count = 0;

// function updateCounter() {
//     counter.textContent = count;

//     if (count % 2 === 0) {
//         counter.style.color = "green";
//     } else {
//         counter.style.color = "red";
//     }
// }

// increaseBtn.addEventListener("click", function () {
//     count++;
//     updateCounter();
// }); 

// decreaseBtn.addEventListener("click", function () {

//     if (count > 0) {
//         count--;
//     }else{
//         let NoDecrese = "No Decrease";
//         alert(NoDecrese);
//     }

//     updateCounter();
// });

// resetBtn.addEventListener("click", function () {
//     count = 0;
//     updateCounter();
// });
// updateCounter();



// // // Color Change code
// const body = document.body;
// const colorCode = document.querySelector(".color-code");
// const changeBtn = document.querySelector(".change-color");
// const copyBtn = document.querySelector(".copy-color");
// function randomColor(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     return `rgb(${red}, ${green}, ${blue})`;
// }
// changeBtn.addEventListener("click", function(){
//     const color = randomColor();
//     body.style.backgroundColor = color;
//     colorCode.textContent = color;
// });
// copyBtn.addEventListener("click", function(){
//     navigator.clipboard.writeText(colorCode.textContent);
//     alert("Color Copied!");
// });







// Problem 1: Check if a Number is Even or Odd

// let number = 7;
// function Myfunction(number){
// if (number % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }}
// Myfunction(number)

// // With function
// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even number";
//   } else {
//     return "Odd number";
//   }
// }
// console.log(checkEvenOrOdd(25));
// console.log(checkEvenOrOdd(26));
// console.log(checkEvenOrOdd(501));


// Problem 2: Sum of a Range of Numbers (1 to N)
// 7  = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
// let number = 7;
// let sum = 0;
// // Without function
// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log("i=>>", i);
// }
// console.log("sum =>>", sum);
// With function
// function sumRange(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//     console.log("i=>>", i);
//   }
//   return sum;
// }
// console.log(sumRange(7));
// console.log(sumRange(4));


// Problem 3: Factorial of a Number
// let number = 3;
// Without function
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   console.log("i=>", i);
//   result = result * i;
// }
// console.log("result=>", result);
// With function
// function getFactorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     console.log("i=>", i);
//     result = result * i;
//   }
//   return result;
// }
// let factorialOfFour = getFactorial(4);
// let factorialOfThree = getFactorial(3);
// console.log(factorialOfFour);
// console.log(factorialOfThree);




// function NumDivFun(NumDiv){
//   let i = 1;
//   for(; i<=NumDiv; i++){
//     console.log(i);
// if(i % 5 === 0 && i % 3 === 0){
//   console.log("fizz buzz");
// }else if(i % 5 === 0 ){
//   console.log("buzz");
// }else if(i % 3 === 0 ){
//   console.log("fizz");
// }else{
//   console.log("Condition not matching");
// }    
//   }
// }
// NumDivFun(15);

// Problem 4: FizzBuzz (1 to N)
// loop through numbers from 1 to n. 
// If a number is divisible by 3, 
// print "Fizz"; if divisible by 5, print "Buzz";
//  if divisible by both, print "FizzBuzz"; otherwise, 
// print the number itself.

// Without function
// let number = 15;
// for (let i = 1; i <= number; i++) {
//   console.log("i=> ", i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// With function
// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log("i=> ", i);
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(15)
// Problem 5: Reverse a String


// let str = "I love Bangladesh";
// console.log(str.length);
// console.log(str[10]);
// console.log("string length=> ", str[str.length - 3]);
// let reverseWord = "";
// without function
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   console.log("i-> ", i, letter);
//   reverseWord += letter;
// }
// console.log(reverseWord);

// With function

// with function
// function reverseWord(word) {
//   let reverseWord = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     let letter = word[i];
//     console.log("i-> ", i, letter);
//     reverseWord += letter;
//   }
//   return reverseWord;
// }
// console.log(reverseWord("Programming"));
// console.log(reverseWord("Bangladesh"));

// Problem 6: Count Vowels in a String
// Vowels -> a e i o u
// let str = "Programming Hero";
// let vowels = "aeiou";
// console.log(vowels.includes("e"));
// Without function
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i,  -> letter ->>> ", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("Vowel");
//     count++;
//   }
// }
// console.log("count->>", count);
// With function
// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     console.log(i, letter);
//     if (vowels.includes(letter)) {
//       console.log("Vowel");
//       count++;
//     }
//   }
//   return count;
// }
// let phVowelCount = countVowels("Programming Hero") 
// console.log("Programming Hero te vowel ache: ", phVowelCount);
// let bdVowelCount = countVowels("Bangladesh") 
// console.log("Bangladesh e vowel ache: ", bdVowelCount);

// function DividingSting(name) {
// let result = name.split(" ");
// console.log(result);
// }
// DividingSting("My country Bangladesh");
// DividingSting("I love my country");

// Problem 7: Check if a String is a Palindrome

let str = "civic";

// Without function
// let reverseStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverseStr = reverseStr + letter;
// }
// console.log(reverseStr);
// if (str === reverseStr) {
//   console.log("Palindrome");
// } else {
//   console.log("Not palindrome");
// }

// With function

// function isPalindrome(str) {
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];
//     reverseStr = reverseStr + letter;
//   }
//   console.log(reverseStr);
//   if (str === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("deed"));
// console.log(isPalindrome("right"));
// console.log(isPalindrome("madam"));


// let Palindrome = "madam";
//   let PDResult = "";
// for(let i=Palindrome.length-1; i>=0; i--){
//   console.log(Palindrome[i]);
//   PDResult+=Palindrome[i];  
// }
// console.log(PDResult);
// if(Palindrome === PDResult){
//   console.log("right");
  
// }

// Problem 8: Count Words in a Sentence

// Without func
// let str = "Programming Hero code habi jabi";
// let strSplitArr = str.split(" ");
// console.log(strSplitArr.length);
// With function
// function wordCount(str) {
//   let strSplitArr = str.split(" ");
//   return strSplitArr.length;
// }
// console.log(wordCount("Hello Bangladesh"));
// console.log(wordCount("I love Bangladesh"));


// Problem 9: Find the Largest Number in an Array
// let arr = [500, 120, 20, 5010, 1220, 7500];
// without func
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
//   console.log("currentElement", currentElement);
// }
// console.log("largest=> ", largest);
// With function
// function largestNumberFromArray(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if (currentElement > largest) {
//       largest = currentElement;
//     }
    // console.log("currentElement", currentElement);
//   }
//   return largest;
// }
// console.log(largestNumberFromArray([250, 20, 5, 64, 560, 1050]));

// function  MyFunction(minNumber) {
//   console.log(minNumber);
  
// let minInput = minNumber[0];
// for(let i=1; i<minNumber.length; i++){
//   let loopNum = minNumber[i];
//   if(minInput > loopNum){
//     minInput = loopNum;
//   }
// }
//   return minInput;
// }

// console.log(MyFunction([45,92,9486,28,756,765,44,90,9,6]));

// let UpNumber = proIn.innerHTML;
// console.log(UpNumber);

// function totalValue(infffput) {
//   let pushValue = [];
// for (let i = 0; i < input.length; i++) {
//     if (UpNumber<input[i]) {
//       pushValue.push(input[i]);
//     }
// }  
// return pushValue;
// }

// const filterValue =totalValue([20,24,22,34,21,66,88,44,55,11,22,33,12,10,77,89,98,76,56]);
// const filterValue2 =totalValue([20,24,22,34,21,66,88,44,55,11,22,33,12,10,77,89,98,76,56]);

// console.log(filterValue);
// console.log(filterValue2);

// Problem 13: Loop Through an Object's Properties

// let monitor = {
//   color: "Black",
//   brand: "LG",
//   display: "Something",
//   size: "Something",
//   test: "Dummy",
// };

// console.log(monitor["color"]); // bracket notation
// console.log(monitor.brand); // dot notation
// // For in loop
// for (let key in monitor) {
//   console.log(key, ": ", monitor[key]);
// }
// Using keys method
// let objKeys = Object.keys(monitor);
// console.log(objKeys);
// for (let i = 0; i < objKeys.length; i++) {
//   let key = objKeys[i];
//   console.log(key, ": ", monitor[key]);
// }
// for (let key of objKeys) {
//   console.log(key, ": ", monitor[key]);
// }


// Problem 14: You are given an object containing information about a student.
// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE
// Count the total number of properties in the object.
// Check if the object contains a property named "email".
//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };
// -----------------------------
//---- Expected output:
// name age university department
// Utsho 26 DIU CSE
// name: Utsho
// age: 26
// university: DIU
// department: CSE
// Total Properties: 4
// Has Email: false
// const student = {
//   name: "Utsho",
//   age: 26,
//   university: "DIU",
//   department: "CSE",
// };
// function objOperation(obj) {
//   for (let key in obj) {
//     console.log(key);
//   }  
  // for (let key in obj) { 
  //   console.log(obj[key]);
  // }
  // for (let key in obj) {
  //   console.log(key, ": ", obj[key]);
  // }
  // let objKeyCount = Object.keys(obj).length; // ["name", "age", "university", "department"]
  // console.log("Total Properties: ", objKeyCount);
  // const objCount = Object.getOwnPropertyNames(obj).length;
  // console.log(objCount);
      
  // let hasEmailProperty = obj.hasOwnProperty("email");
  // console.log("Has Email: ", hasEmailProperty);
// }
// objOperation(student);


// Problem 15: Return All Even Numbers, Then Their Sum

// let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];
// Without func
// let evenNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     // console.log(arr[i]);
//     evenNumbers.push(arr[i]);
//   }
// }

// let sum = 0;
// for (let key of evenNumbers) {
//   console.log(key);
//   //   sum = sum + key;
//   sum += key;
// }

// console.log(sum);

// With function
// function getEvenNumbers(arr) {
//   let evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       // console.log(arr[i]);
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }

// function getSum(arr) {
//   let sum = 0;
//   for (let key of arr) {
//     console.log(key);
//     //   sum = sum + key;
//     sum += key;
//   }

//   return sum;
// }

// let evenNumbers = getEvenNumbers(arr);
// let sum = getSum(evenNumbers);
// console.log("sum: -> ", sum);
// const text = "JavaScript is awesome";
// const words = text.split(" ");
// console.log(words); 


// const fastWU = ["javaScript", "is", "awesome"];
// const result = fastWU.join(" ").toUpperCase().split(" ");
// console.log(result);
// console.log(result.length);









// ES6
// Default parameter learning

// function nameParameter(name = "Guest") {
//   // name || (name = "Guest");
//   return `Hello, ${name}! Welcome to our website.`;  
// }
// console.log(nameParameter());


// function Mycoffee(coffee = 1) {
//   return `I like ${coffee} chamoch sugar.`;
// }
// console.log(Mycoffee(2));
// console.log(Mycoffee(0));
// console.log(Mycoffee());
// console.log(Mycoffee(undefined));
// console.log(Mycoffee(null));

// Template literal learning

// const motherBord = {
//   name: "MSI",
//   Price: 15500,
//   Features: "2x M.2 slot"
// };
// let output = "";
// for (let key in motherBord) {
//   output += `${key} : ${motherBord[key]}\n`;
// }
// console.log(output);

// function addmission(name, age, department, tk = 5000) {
//   return `Student Name: ${name},
//   Age: ${age},
//   Department: ${department}
//   your $${tk} successfully done
//   and discount 10% for youCloud storage
//   cheack cashback ${tk * 0.1} in your account`;
// }
// console.log(addmission("Utsho", 26, "CSE"));



// 16-4 Spread and Rest Operator — Array Max and Array, Object Copy

// Spread Operator

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const restNumber = (...numbers);
// // console.log(...numbers);
// const numbers2 = [...numbers, 45,55, 66, 77, 88, 99];
// numbers.push(11, 12, 13);
// console.log(numbers);
// console.log(numbers2);

// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);
// console.log(minNumber);
// console.log(maxNumber);

// const personalInfo = {
//   name: "Sahadat",
//   age: 27,
//   country: "Bangladesh",
// };
// const personalInfoCopy = {...personalInfo, profession: "Web Developer" };
// personalInfo.something = "new value";

// console.log(personalInfo);
// console.log(personalInfoCopy);

// Rest Operator
// function sumAll(a, b, c, ...numbers) {
//   const sumOfABC = a + b + c;
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num ;
//   }
//   return sum+sumOfABC;
// }
// console.log(sumAll(1, 2, 3, 4, 5, 9, 10));


// 16-5 Arrow Functions — Syntax, Parameters, Return

// const greet = name => `Hello, ${name}! Welcome to our website.`; //implicit return
// console.log(greet("Utsho"));

// const add = (a, b) => {
//   const sum = a + b;
//   return `sum = ${sum}`;
// };
// console.log(add(5, 10));

//this keyword in arrow function

// const ramInfo = {
//   name: "Viper",
//   capacity: "16GB",
//   getInfo: function () {
//     return `Ram name: ${this.name} and capacity: ${this.capacity}`;
//   },
//   // Arrow function not working
//   getInfoArrow: () => {
//     return `Ram name: ${this.name} and capacity: ${this.capacity}`;
//   }
// };
// console.log(ramInfo.getInfoArrow());
// console.log(ramInfo.getInfo());

// premetive and non-premetive data type
// premetive data type
// let Name = "Utsho";
// let age = 26;
// Name2 = Name;
// age2 = age;
// Name = "Sahadat";
// age = 27;
// console.log(Name, Name2);
// console.log(age, age2);
// non-premetive data type
// let person1 = {
//   name: "Utsho",
//   age: 26
// };
// let person2 = person1;
// person1.name = "Sahadat";
// person1.age = 27;
// console.log(person1.name, person2.name);
// console.log(person1.age, person2.age);

// Closure
// function outerFunction() {
//   let someValue = 10;
//   function innerFunction() {
//     someValue++;
//     return someValue;
//   }
//   return innerFunction;
// }
// const output = outerFunction(); 
// console.log(output());

// function myShop(){
//   let totalBill = 0;
//   function itemSum(price){
//     totalBill += price;
//     // profit mathod
//     // let profit = totalBill * 0.1;
//     // return {
//     //   totalSell: totalBill,
//     //   profit: profit
//     // };
//     return totalBill;
//   }
//   return itemSum;
// }
// const myFatherShopTotalSell = myShop();
// const myFather_in_LowTotalSell = myShop();
// console.log(myFatherShopTotalSell(100));
// console.log(myFather_in_LowTotalSell(50));
// console.log(myFatherShopTotalSell(300));
// console.log(myFather_in_LowTotalSell(150));
// console.log(myFatherShopTotalSell(200));
// console.log(myFather_in_LowTotalSell(250));
// profit result
// myFatherShopTotalSell(100);
// myFatherShopTotalSell(200);
// const fatherFinelSell = myFatherShopTotalSell(300);
// const fatherProfit = fatherFinelSell * 0.1;
// console.log(`Father Total Sell: , ${fatherFinelSell}, Father Profit: ${fatherProfit}`);
// myFather_in_LowTotalSell(50);
// myFather_in_LowTotalSell(150);
// const fatherInLowFinelSell = myFather_in_LowTotalSell(250);
// console.log(`Father in Low Total Sell: ${fatherInLowFinelSell}, Father in Low Profit: ${fatherInLowFinelSell * 0.1}`);

// callBack function

// function addmission(name, age, department, callback) {
//   const message = `Student Name: ${name}, Age: ${age}, Department: ${department}`;
//   return callback(message);
// }
// const admissionResult = addmission("Utsho", 26, "CSE", result);

// function result(message) {  
//   return `${message} - Admission Successful!`;
// }
// console.log(admissionResult);

