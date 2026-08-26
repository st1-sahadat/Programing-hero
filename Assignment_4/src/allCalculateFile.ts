//Problem-01: Battery Level Status
const getBatteryStatus = (percentage:number):string => {
    if(percentage>0&&percentage<=20){
        return "Low"
    }else if (percentage <= 50) {
        return "Medium"
    }else if (percentage <= 90) {
        return "High"
    }else if (percentage <= 100) {
        return "Full"
    }
    return "Invalid percentage"
};

//Problem-02: Table Booking Confirmation
interface Booking{
    name: string
    guests: number
    time: string
}

const formatBookingConfirmation = (booking:Booking):string => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses:number[]):number => {    
    return expenses.reduce((sum,value)=>sum+value,0)
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";
const getTrafficAction = (light:Light):string => {
    switch(light){
        case "red":
            return "Stop";
            break;
        case "yellow":
            return "Slow Down"
            break;
        default:
            return "Go"
    }
};

//Problem-05: Quiz Score Summary
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
