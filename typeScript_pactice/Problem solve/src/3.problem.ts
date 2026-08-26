interface Player{
    username: string
    level: number
    region: string
}
const formatPlayerCard =(player:Player)=>{
    return `${player.username} is a Level ${player.level} player from ${player.region}.`
}

const playerDtails = formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
});
console.log(playerDtails);
