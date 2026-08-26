class student {
    name:string
    rol:number
    id:number
    group:string

    constructor(name:string,rol:number,id:number,group:string){
        this.name=name
        this.rol=rol
        this.id=id
        this.group=group
    }

}
const stdntOutput = new student("habu",2,2354,"Scince");
stdntOutput.id= 6565
console.log(stdntOutput);

class user extends student{

}
console.log(new user("dabu",5,2343,"Humanities"));



