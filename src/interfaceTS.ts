type chaiOrder={
    type:string , 
    sugar:number , 
    strong:boolean

}
function makeChai(order : chaiOrder){
    console.log(order)
}
function serveChai(order : chaiOrder){
    console.log(order)
}


type TeaRecipe={
    water:number,
    milk:number,


}

class MasalaChai implements TeaRecipe{
    water =100;
    milk =50;
}
// type CupSize="small" | "medium" | "large" 
// class Chai implements CupSize{

// }
//  100  percent interface used here not type worked here

interface Cupsize {
    size: "small" | "medium" | "large"
}
class chai implements Cupsize{
    size: "small" | "medium" | "large" = "small"
}

type Response = { ok :true } | {ok :false}
// class r implements Response{
//     ok:boolean =true;
// }
// fails here


type TeaType = "masala" | "lemon"
function orderchai( t : TeaType){
    console.log(t)
}

type BaseChai = {teaLeaf :number }
type Extra ={masala : number}
type masalaChai=BaseChai & Extra

const cup : masalaChai ={
    teaLeaf : 2,
    masala : 1
}


type User ={
    username:String ,
    bio ? : string
}
const u1 : User={username :"HItest"}
const u2 : User={username :"HItest" , bio :"jai hind dosto"}


type config = {
    readonly appName:string
    version : number
}

const cfg :config ={
    appName : "MasterJi",
    version:1 
}
// cfg.appName="chaiaode"
// gots error 