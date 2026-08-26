"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatPlayerCard = (player) => {
    return `${player.username} is a Level ${player.level} player from ${player.region}.`;
};
const playerDtails = formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
});
console.log(playerDtails);
//# sourceMappingURL=3.problem.js.map