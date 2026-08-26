const getSignalStatus=(s:number):string=>{
    if(s>=0&&s<=20){
        return `Weak`
    }else if(s>=21&&s<=50){
        return `Fair`
    }else if(s>=51&&s<=80){
        return `Good`
    }else if(s>=81&&s<=100){
        return `Excellent`
    }return "Invalid"
}
console.log(getSignalStatus(10));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(95));
console.log(getSignalStatus(-1));
console.log(getSignalStatus(110));
console.log(getSignalStatus(80));
console.log(getSignalStatus(81));

