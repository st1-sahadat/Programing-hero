














const bonusScore =(b)=>
    !Array.isArray(b)||b.length===0||!b.every(e=>typeof e === "number")
    ?"Invalid"
    :b.map(m=>m+10).reduce((acc,r)=>{return acc+r},0)
    
//     {
//     if(!Array.isArray(b)||b.length===0||!b.every(e=>typeof e === "number" )){
//         return "Invalid"
//     }else{
//         return b.map(m=>m+10).reduce((acc,r)=>{return acc+r},0)        
//     }
// }

console.log(bonusScore([80,65,90,75]));
console.log(bonusScore([100]));
console.log(bonusScore([0,10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80,"90",70]));




