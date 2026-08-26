"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class nogodAccount {
    number;
    pin;
    balance;
    constructor(number, pin, balance) {
        this.number = number;
        this.pin = pin;
        this.balance = balance;
    }
    getBalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return "wrong PIN";
    }
}
const habu = new nogodAccount("01705327992", 258, 5000);
habu.number = "017";
// habu.pin=147
console.log(habu.getBalance(258));
//# sourceMappingURL=access_modifier.js.map