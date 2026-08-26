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
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
