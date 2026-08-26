interface Player{
    name:string
    scores:number[]
}
interface FncReturn{ 
    name: string
    average: number
    rank: string 
} 
function getPlayerStats(player: Player):FncReturn {
    const sumPlayerScore=player.scores.reduce((acc,r)=>acc+r,0)
    const average = sumPlayerScore/player.scores.length
    if(average>=80){
        return{
            name: player.name,
            average,
            rank: "MVP" 
        }
    }return {
            name: player.name,
            average,
            rank: "ROOKIE" 
    }
}
 const playerStatus1 = getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
});
const playerStatus2 = getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
});

console.log(playerStatus1, playerStatus2);

