type Tracks = {
    title:string
    minutes:number
}
const calculateTotalListeningTime =(tracks:Tracks[]):number=>tracks.map(m=>m.minutes).reduce((acc,r)=>acc+r,0)
const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
 console.log(calculateTotalListeningTime(tracks)); 
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
 console.log(calculateTotalListeningTime(tracks2));
