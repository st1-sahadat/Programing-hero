// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promise resolve");
//     }, 5000);
// });
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Promise reject");
//     }, 2000);
// });
// p1.then((result)=>{
//     console.log(result);    
// }).catch((error)=>{
//     console.log(error);    
// })
// p2.then((result)=>{
//     console.log(result);    
// }).catch((error)=>{
//     console.log(error);    
// })

// function orderFood(item){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let delivered = Math.random()>0.5;
//             if(delivered){
//                 resolve (`${item} delivered.`)
//             }else{
//                 reject (new Error(`${item} not delivered.`))
//             }
//         },2000);
//     });
// }
// orderFood("Burger")
// .then((r)=>{console.log(r)})
// .catch((e)=>{console.log(e.message)})
// .finally(()=>{console.log("Delivary done.")})


// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promise 1 resolve");
//     }, 3000);
// });
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promise 2 resolve");
//     }, 2000);
// });
// Promise.all([p1, p2])
// .then((r)=>{
//     console.log(r[0])    
// })
// .catch((e)=>{
//     console.log(e)    
// })
// });
// Promise.race([p1, p2])
// .then((r)=>{
//     console.log(r[0])    
// })
// .catch((e)=>{
//     console.log(e)    
// })

// async function myPro(){
//     return "My promise rej";   
// }
// myPro().then(r=>{console.log(r)}).catch(e=>{console.log(e);
// })



// function orderTime(b){
//     return new Promise((res, rej)=>{
//         res(`Buy : ${b}`);
//     })
// }
// orderTime("Computer")
// .then((r)=>{console.log(r)})
// .catch((e)=>{console.log(e)})

let promise = new Promise((res,rej)=>{
    res(`Demo promise`);
})
promise.then(r=>{console.log(r)}).catch(e=>{console.log(e)})

async function orderTime(b){
    return  `Buy : ${b}`
}
orderTime("Computer")
.then((r)=>{console.log(r)})
.catch((e)=>{console.log(e)})


 
