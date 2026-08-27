
// const info = {
//     name:"Hablu",
//     class:10,
//     mark:[50,60,80,70],
//     bangla:90,
//     math:85,
//     computer:80,
//     calculateAvg: function () {
//         const avg = (this.bangla+this.math+this.computer)/3
//         return avg
// }
// };
// console.log(info.calculateAvg())


// function calculateAvg(chemistry, physics) {
//     const avg = (this.bangla+this.math+this.computer+chemistry+physics)/3
//     return avg
// }
// const info = {
//     name:"Hablu",
//     class:10,
//     mark:[50,60,80,70],
//     bangla:90,
//     math:85,
//     computer:80
// };
// // console.log(calculateAvg.call(info,75,70))
// // console.log(calculateAvg.apply(info,[75,70]))
// const calcMarkAvgBind = calculateAvg.bind(info);
// console.log(calcMarkAvgBind(75,70))


    const employ = {
        name:"habu",
        salary:15000,
        trust:true,
        output: function(){
            // const thisObj = this //Mathod 1
            // setTimeout(function (){
            //     console.log(thisObj);                
            // },2000)      
            // setTimeout(function (){ //Mathod 2
            //      console.log(this);                
            //  }.bind(this),2000)       
            setTimeout( ()=>{
                 console.log(this);                
             },2000)      
        }        
    }
employ.output();

