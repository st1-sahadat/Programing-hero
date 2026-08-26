"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abul = {
    name: "Abul",
    id: 121,
    department: "Engineering",
    salary: 7800
};
const kabul = {
    name: "Kabul",
    id: 101,
    department: "Engineering",
    salary: 7500
};
const Labul = {
    name: "Labul",
    id: 98,
    department: "Engineering",
    salary: 7300
};
const team = [kabul, Labul, {
        name: "Alice",
        id: 43,
        department: "ghif"
    }];
const printEmployeeDetails = (employee) => {
    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.department);
};
printEmployeeDetails(abul);
printEmployeeDetails({ name: "Jokarbag", department: "Meta", id: 33 });
//# sourceMappingURL=interfact.js.map