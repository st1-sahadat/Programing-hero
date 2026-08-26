"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyAcccount {
    _userName;
    _password;
    _age;
    _active;
    constructor(userName, password, age, active) {
        this._userName = userName;
        this._password = password;
        this._age = age;
        this._active = active;
    }
    get value() {
        return this._age;
    }
    set value(v) {
        if (v < 0 || v > 100) {
            throw new Error("Not a valid number");
        }
        this._age = v;
    }
}
const accountValue = new MyAcccount("st1", 258, 27, true);
// accountValue.password = 147
accountValue.value = 28;
console.log(accountValue.value);
//# sourceMappingURL=getter_setter.js.map