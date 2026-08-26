function matchWinner(teamAGoals, teamBGoals) {
    const teamAGoalsNum = typeof teamAGoals !== "number";
    const teamBGoalsNum =  typeof teamBGoals !== "number";
    if (teamAGoalsNum || teamBGoalsNum) {
        return "Invalid";
    } else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }}


function isElevatorSafe(weights) {    
    let count = 0 ;
    for (let i = 0; i < weights.length; i++) {
        count += weights[i];
    }
    if (!Array.isArray(weights)) {
        return "Invalid";
    }
    return count <= 400;
}


function calculateAiCost(tokensUsed) {
const freeToken = 500;
if( tokensUsed < 0  || typeof tokensUsed !== "number"){
    return "Invalid"
}else if (tokensUsed <= freeToken){
    return 0;
}else {
    let extraToken = tokensUsed - freeToken;
    extraToken = Math.floor(extraToken / 100) * 5;
    return extraToken;
}}


function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";        
    }else{
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid";
        }else{
            total = total + times[i];
        }
    }
  return total / times.length;
    }
}










function matchWinner(teamAGoals, teamBGoals) {
    const teamAGoalsNum = typeof teamAGoals !== "number";
    const teamBGoalsNum =  typeof teamBGoals !== "number";
    if (teamAGoalsNum || teamBGoalsNum) {
        return "Invalid";
    } else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }}

function isElevatorSafe(weights) { 
    if (!Array.isArray(weights)) {
        return "Invalid";
    }else{
    let count = 0 ;
    for (let i = 0; i < weights.length; i++) {
        count += weights[i];
    }
    return count <= 400;
    } 
}


function calculateAiCost(tokensUsed) {
const freeToken = 500;
if( tokensUsed < 0  || typeof tokensUsed !== "number"){
    return "Invalid"
}else if (tokensUsed <= freeToken){
    return 0;
}else {
    let extraToken = tokensUsed - freeToken;
    extraToken = Math.floor(extraToken / 100) * 5;
    return extraToken;
}}

function topRatedRestaurant(find){
    if(!Array.isArray(find) || find.length === 0){
        return "Invalid"
    }else{
    let topRating = find[0];
    for (let i = 1; i < find.length; i++) {
        if( find[i].rating > topRating.rating){
            topRating = find[i];            
        }
    }
    return topRating.name.toUpperCase();
    }
}


function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";        
    }else{
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid";
        }else{
            total = total + times[i];
        }
    }
  return total / times.length;
    }
}

