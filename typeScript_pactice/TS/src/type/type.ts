type Gender = "male" | "famale" | "other";
interface Customar {
    name:string;
    state:string;
    buy:number;
    gender:Gender;
    condition?:boolean;
}

const customar : Customar = {
    name:"sojib",
    state:"Rajshahi",
    buy:3335,
    gender:"male"
}
const customar2 : Customar = {
    name:"sojib",
    state:"Rajshahi",
    buy:3335,
    gender:"male",
    condition:true
}
console.log(customar, customar2);
