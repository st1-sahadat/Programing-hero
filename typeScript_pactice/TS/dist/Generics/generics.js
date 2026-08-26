"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: 434,
    status: "Sahadat",
};
const info = {
    data: "Sahadat",
    status: "ajibaji"
};
const activeInfo = {
    data: true,
    status: "ajibaji"
};
const useState = initialValue => {
    let value = initialValue;
    const setValue = newValue => {
        value = newValue + value;
    };
    return setValue();
};
const [counter, setCounter] = useState(1);
console.log(counter);
console.log(counter);
console.log(counter);
//# sourceMappingURL=generics.js.map