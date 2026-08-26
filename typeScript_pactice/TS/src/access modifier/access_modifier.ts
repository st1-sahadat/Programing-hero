
class nogodAccount {
    public number:string
    private pin:number
    private balance:number
    constructor(number:string,pin:number,balance:number){
        this.number=number
        this.pin=pin
        this.balance=balance
    }
    getBalance(pin:number){
        if(this.pin===pin){
            return this.balance
        }return "wrong PIN"
    }
}
const habu = new nogodAccount("01705327992", 258, 5000);
habu.number="017"
// habu.pin=147
console.log(habu.getBalance(258));

