interface Employee {
    name:string;
    id:number;
    department:string;
    salary?:number
}

const abul:Employee ={
    name:"Abul",
    id:121,
    department:"Engineering",
    salary:7800
}
const kabul:Employee ={
    name:"Kabul",
    id:101,
    department:"Engineering",
    salary:7500
}

const Labul:Employee ={
    name:"Labul",
    id:98,
    department:"Engineering",
    salary:7300
}
const team: Employee[]=[kabul, Labul,{
    name:"Alice",
    id:43,
    department:"ghif"
}]

const printEmployeeDetails=(employee:Employee):void=>{
    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.department);
    
}
printEmployeeDetails(abul);
printEmployeeDetails({name:"Jokarbag",department:"Meta",id:33})