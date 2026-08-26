const calculateWeeklyTotal = (expenses:number[]):number => {    
    return expenses.reduce((sum,value)=>sum+value,0)
};
console.log(calculateWeeklyTotal([200,450,100]));
console.log(calculateWeeklyTotal([1000,250]));
console.log(calculateWeeklyTotal([]));
console.log(calculateWeeklyTotal([0,0,0]));
console.log(calculateWeeklyTotal([99]));
