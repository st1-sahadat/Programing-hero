interface QuizSummary{
    total:number
    average:number
}
const getQuizSummary = (scores:number[]):QuizSummary => {
    if(scores.length===0){return {total:0,average:0};}
    const totalSum = scores.reduce((sum,value)=>sum+value,0);
    const avarage = totalSum/scores.length ;
    return { total: totalSum, average: avarage };
};
console.log(getQuizSummary([8,9,7,10]));
console.log(getQuizSummary([5,5]));
console.log(getQuizSummary([]));
console.log(getQuizSummary([10]));
console.log(getQuizSummary([0,0]));
