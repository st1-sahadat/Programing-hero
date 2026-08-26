


const cartFun =cartCal=>{
    const { price, quantity}=cartCal;
    console.log(price);
    
    if(!Array.isArray(cartCal)||cartCal.length===0){
        return "Invalid"
    }else{
        return "Code Ok"
    }
    
}














const cart = [
  { name: "Laptop", price: 1000, quantity: 1, discountPercent: 10 },
  { name: "Mouse", price: 20, quantity: 2 } // discountPercent নেই
];
const cartString = "String";
const cartObj = {};
const cartEmpty = [];

console.log(cartFun(cart));
console.log(cartFun(cartObj));
console.log(cartFun(cartString));
console.log(cartFun(cartEmpty));
