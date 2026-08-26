class MyAcccount{
    private _userName:string
    private _password:number
    private _age:number
    private _active:boolean    
    constructor( userName:string,password:number,age:number,active:true ){
        this._userName=userName
        this._password=password
        this._age=age
        this._active=active
    }    
    get value() : number {
        return this._age
    }    
    set value(v : number) {
        if(v<0||v>100){
            throw new Error("Not a valid number");            
        }
        this._age=v
    }
}
const accountValue = new MyAcccount("st1", 258, 27, true);
// accountValue.password = 147
accountValue.value=28
console.log(accountValue.value);
