// function calculator(a,b,totalSum) {
//     const sum = a+b;
//     totalSum(sum)
// }
// function displayResult(a){
//     console.log(a);
    
// }
// calculator(5,4,displayResult);


function getQuizMark(mark,cb){
    setTimeout(()=>{console.log("Fetched Quiz mark!");
        cb(mark);
    },2000)
}
function getClassTestMark(mark,cb){
    setTimeout(()=>{console.log("Fetched CT mark");
        cb(mark)
    },3500)
}
function getFinalExamMark(mark,cb){
    setTimeout(()=>{console.log("Fetched Final Exam mark");
        cb(mark)
    },4000)
}
function displayTotalMark(quizMark,CTmark,finalMark){
    const sum = quizMark+CTmark+finalMark
    console.log(sum);    
    }
getQuizMark(9,(quizMark)=>{
    getClassTestMark(6,(ctMark)=>{
        getFinalExamMark(65,(finalMark)=>{            
            displayTotalMark(quizMark,ctMark,finalMark)
    })
  })
})