const chai ={
    name : "Masala Chai",
    price:20,
    ishot:true

}

let tea:{
    name:string,
    price:number,
    ishot:boolean
}
tea={
    name :"Ginger tea",
    price:25,
    ishot:true
}

type Tea={
    name : string;
    price:number;
    ingredients:string []
}
const adrakChai :Tea ={
    name :"adrakChai",
    price: 34,
    ingredients :['ginger','milk','water','tealeaf']
}


type Cup = {
    size:string ;

};

let smallCup : Cup = {size :"200ml"}
let BigCup  = {size :"200ml",material : "steel"}
smallCup=BigCup


type Brew={brewTime:number}
const coffee={brewTime:5, beans:"ArABAIA"}
const chaiBrew:Brew =coffee

type User={
    username:string,
    password:string
}

const u :User ={
    username:"chai aur code",
    "password":"16009"

}

type Item ={
    name:string,
    quantity:number
}
type Address ={
    street:string,
    pin:number
}
type Order ={
    id:string;
    itmes : Item [];
    address: Address
}

type Chai={
    name:string;
    price:number;
    ishot:boolean
}
const UpdateChai=(updates: Partial<Chai>) =>{
    console.log("updating chai with",updates);
    
}
UpdateChai({price:25})
UpdateChai({ishot:true})
UpdateChai({})


type ChaiOrder ={
    name? :string;
    quantity? :number
}
const placeorder=(order : Required <ChaiOrder>) =>{
    console.log(order);
    
}
placeorder({
    name:"masalaChai",
    quantity:9
})

type ChaiPi ={
    name:string;
    price :number;
    ishot:boolean;
    ingredients:string []
}
type BasicChaiInfo = Pick<ChaiPi, "name" |"price">;
const chaiInfo :BasicChaiInfo={
    name:"geii",
    price:98
}

type BasicChaipiyoInfo = Omit<ChaiPi, "ingredients">;
const chaiIo :BasicChaipiyoInfo={
    name:"geii",
    price:98,
    ishot:true
}