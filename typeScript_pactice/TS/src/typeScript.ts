




// Premetive Value
// let age:number = 27;
// const isAvailable:boolean = true;
// let nameValue :string = "Sahadat";


// console.log(age);
// console.log(isAvailable);
// console.log(nameValue);

// // Non Premetive Value
// let numberArray:number[] = [4,5,6,8,2,3,1,9];
// numberArray.push(7);
// let objectArray:{name:string,age:number,ssc:boolean}={
//     name:"sahadat", 
//     age:27, 
//     ssc:true,
// }
// objectArray.age=25;
// let manyTypeArray: [string, number, boolean, {name:string}] = ["Sahadat", 27, true, { name:"sahadat"}];
// console.log(numberArray);
// console.log(objectArray);
// console.log(manyTypeArray);
// const myFunction =(a:number,b:number,c?:string):boolean=>{
//     return a+b===13;
// }
// console.log(myFunction(6,7,"6"));
// const printUser = (name:string, age:number):string=>`${name} is ${age} years old`
// const userDetails = printUser("Amina", 22);
// console.log (userDetails);

type Gender = "Male"|"Famale"|"Private";
type Student = {
	name:string;
	rol:number;
	subject:string;
	gpa:number;
	gender?:Gender
}

const robin:Student = {
	name:"Robin",
	rol:7,
	subject:"CSE",
	gpa:3.77
}
const jobin = {
	name:"Robin",
	rol:7,
	subject:"CSE",
	gpa:3.77
}
const pobin = {
	name:"Robin",
	rol:7,
	subject:"CSE",
	gpa:3.77
}
const hobin = {
	name:"Robin",
	rol:7,
	subject:"CSE",
	gpa:3.77
}
console.log(robin,jobin,pobin,hobin)