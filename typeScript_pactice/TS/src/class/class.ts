// class Student {
// //     name: string="Habib";
//     email:string="habib@gmail.com";
//     rol:number=12;
//     regular:boolean=true;
// }
// const habib = new Student();
// console.log(habib);

// class Student {
//     name: string
//     email:string
//     rol:number
//     regular?:boolean

//     constructor(name: string,email:string,rol:number,regular:boolean){
//         this.name = name
//         this.email = email
//         this.rol = rol
//         this.regular = regular
//     }
//     getInfo():string{
//         return `Name: ${this.name}\nEmail: ${this.email}`
//     }
// }
// const habu = new Student("habu", "habu@gmail.com", 12, true);
// const dabu = new Student("dabu", "dabu@gmail.com", 2, false);
// console.log(habu.getInfo())
// console.log(dabu)


// class Myshop {
//     shopName:string
//     sell:any = []
//     constructor(shopName:string){
//         this.shopName = shopName
//     }    
//     buy(name:string, price:number){
//         this.sell.push(name,price)
//     }
// }
// const shopSell = new Myshop("Store")
// shopSell.buy("sugar", 110)
// console.log(shopSell);

// type Product = "Electricity"|"Textile"|"Juyelari";
// class Busniess {
//     name:string
//     type?:string
//     product:Product
//     activity:boolean
//     sell:any = []
//     constructor(name:string, type:string, product:any, activity:boolean){
//         this.name = name
//         this.type = type
//         this.product = product
//         this.activity = activity
//     }
//     sellFun(name:string, price:number){
//         this.sell.push({name, price})
//     }
//     sellItemSum(){
//        const total = this.sell.reduce((acc:number, r:number)=> acc+r.price , 0)
//        return total
//     }
// }
// const myB = new Busniess("OnlineB","online","Electricity", true);
// myB.sellFun("Mobail", 55900)
// myB.sellFun("Fan", 770)
// myB.sellFun("Light", 450)
// console.log(myB.sellItemSum());

// const myB2 = new Busniess("OnlineB","online","Electricity", true);
// const order = myB2.sell("Mobail", 55900)
// const order2 = myB2.sell("Fan", 770)
// console.log(order,order2);

