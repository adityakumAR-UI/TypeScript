const chaiFlavours:string[]=["masala","elaichi"]

const chaiPrice:number []=[15,20,25]
const ratings :Array<number>=[4.5,5.0]
type Chai={
    name:string,
    price:number
}
const menu:Chai[]=[
    {name:"masala",price:15},
    {name:"adrak",price:20}
]
const cities:readonly string[]=["delhi","jaipur"]
// cities.push()
// nochanges possible on cities as its readonly

const table:number[][]=[
    [0,1,2],
    [2,3,4]
]
// Tuples

let chaiType:[string,number];
chaiType=["masala",54]
// chaiType=[54,"masala"]

let userInfo:[string,number,boolean?]=["aditya",98,true]
userInfo=["aditya",100]

const location :readonly [number,number]=[28.66,32.4]

const chaiItems :[name:string,price:number]=["maslaa",7]
// enums
// VALUE OF ENUM MUST BE IN CAPS
enum CupSize{
    small,
    medium,
    large
}
const size=CupSize.large
enum Status{
    pending=100,
    served,//101
    cancelled  //102

}

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"

}
function makeChai(type: ChaiType){
    console.log(`Making ${type}`);
    
}
makeChai(ChaiType.MASALA)

enum Random{
    ID=1,
    NAME="CHAI"
}

const enum Sugars{
    LOW=1,
    MEDIUM=1.5,
    HIGH=2.3
}
const s=Sugars.HIGH
console.log(s);

let t:[string,number]=["chai",10]
t.push("extra")