







const studentIntroduction = psObj => {
  const {name, age, course} = psObj;
  return typeof psObj !== "object" || psObj === null || Array.isArray(psObj) ?
  "Invalid" 
  : !name || !age || !course ? "Invalid" 
  : `My name is ${psObj.name}. I am ${psObj.age} years old. I am learning ${psObj.course}.`  
};

console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }));
console.log(studentIntroduction({ name: "Sadia", age: 22, course: "React" }));
console.log(studentIntroduction({})); 
console.log(studentIntroduction("student")); 
console.log(studentIntroduction({ name: "Rafi", age: 18 })); 
