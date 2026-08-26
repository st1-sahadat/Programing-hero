












const filterActiveUsers =arrObj=>
 !Array.isArray(arrObj) || arrObj.length===0 || !arrObj.every(a =>  "isActive" in a) 
  ? "Invalid" 
  : arrObj.map(m=>m).filter(f=>f.isActive === true)


console.log(filterActiveUsers([{"name":"A","isActive":true},{"name":"B","isActive":false}]));
console.log(filterActiveUsers([{"name":"Rafi","isActive":true},{"name":"Sadia","isActive":true}]));
console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{"name":"A"}]));
console.log(filterActiveUsers("users"));




