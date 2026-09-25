class Chai{
    flavour:string;
    price:number

    constructor(flavour:string,price:number){
        this.flavour=flavour,
        this.price=price
    }
    // constructor(price:number){
    //     this.price=price
    // }
}
// const masalaChai=new Chai()
// gives error it need values
const masalaChai=new Chai("masala",20)
masalaChai.flavour="masala"


class Chaai{
    public flavour:string="Masala"
    private secret_ingredients="cardamon"
    reveal(){
        return this.secret_ingredients;
    }
    protected shopName="Chai Corner"
    constructor(flavour:string){
        this.flavour=flavour
    }
}
class shop{
     protected shopName="Chai Corner"

}
class branch extends  shop{
    getName(){
        return this.shopName
    }
}
// new branch().getName also true
const c=new Chaai("masala");
// c.secret_ingredients no access

class wallet{
    #balance =100
    getBalance(){
        return this.#balance
    }
}
const w=new wallet()

class cup{
    readonly capa:number=100
    constructor(c:number){
        this.capa=c
    }
}

class ModernChai{
    private _sugar=2

    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value>5){
            throw new Error("too sweet")
        }
        this._sugar=value
    }
}
const cp=new ModernChai()
cp.sugar=3

class EkChai{
    static shopName="ChaiCode Cafe"
    constructor(public flavour:string){

    }
}
console.log(EkChai.shopName);
// class ke value access hoote hai

abstract class Drink{
    abstract make():void
}
class mychai extends Drink{
    make(){
        console.log("brewing chai");
        
    }
}

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}
