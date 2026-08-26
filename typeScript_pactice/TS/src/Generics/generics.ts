// interface Response<T>{
//     data:T;
//     status:string;
// }
// const transactionResponse:Response<number>={
//     data:434,
//     status:"Sahadat",
//     }
// const info:Response<string>={
//     data:"Sahadat",
//     status:"ajibaji"
// }
// const activeInfo:Response<boolean>={
//     data:true,
//     status:"ajibaji"
// }


const useState = <T,>(initialValue: T): [T, (newValue: T) => void] => {
    let value = initialValue;
    function setValue(newValue: T){
        value = newValue;
    }
    return [value, setValue]
}
useState<number>(7);
useState<string>("Sahadat");
useState<boolean>(true)


// interface User {
//     name:string,
//     rol:number,
//     isLogged:boolean
// }
// useState<User|null>({name:"ssdf", rol:88, isLogged:true})

