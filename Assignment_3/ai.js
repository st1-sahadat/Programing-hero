// function calculateCartSummary(cart) {
//   if (!Array.isArray(cart) || cart.length === 0) {
//     return "Invalid";
//   }

//   let subtotal = 0;
//   let itemDiscountTotal = 0;

//   for (const item of cart) {
//     console.log(item);
    
//     if (
//       !item ||typeof item.price !== "number" ||typeof item.quantity !== "number" ||item.price <= 0 ||item.quantity <= 0) {
//       return "Invalid";
//     }

//     const itemTotal = item.price * item.quantity;
//     subtotal += itemTotal;

//     if (item.discountPercent) {
//       if (
//         typeof item.discountPercent !== "number" || item.discountPercent < 0
//       ) {
//         return "Invalid";
//       }
//       itemDiscountTotal += itemTotal * (item.discountPercent / 100);
//     }
//   }

//   const afterItemDiscount = subtotal - itemDiscountTotal;

//   let flatDiscount = 0;
//   if (subtotal > 500) {
//     flatDiscount = afterItemDiscount * 0.1;
//   }

//   const totalDiscount = itemDiscountTotal + flatDiscount;
//   const finalTotal = subtotal - totalDiscount;

//   return {
//     subtotal: Number(subtotal.toFixed(2)),
//     totalDiscount: Number(totalDiscount.toFixed(2)),
//     finalTotal: Number(finalTotal.toFixed(2)),
//   };
// }


const calculateCartSummary =cart=>{
  // console.log(cart);
  const totalSum = cart.reduce((acc, r)=>{return acc+r.price*r.quantity},0); // 1040
  const discount = cart.filter(f=>f.discountPercent)
  .reduce((acc, r)=>{return (acc+r.price*r.quantity)/10},0)  // 100
  const discountPrice = totalSum - discount; //940
  let upDis = 0; //94
  
  if(discountPrice >=500){
     upDis = discountPrice / 10;
  }
  
}


const cart = [
  { name: "Laptop", price: 1000, quantity: 1, discountPercent: 10 },
  { name: "Mouse", price: 20, quantity: 2 },
];

console.log(calculateCartSummary(cart));
// { subtotal: 1040, totalDiscount: 194, finalTotal: 846 }