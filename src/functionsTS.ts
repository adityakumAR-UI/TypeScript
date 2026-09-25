function makeChai (type :string,cups:number){
    console.log(`Making ${cups}  of type ${type}`);
    
}
makeChai("masala",2)


function getChaiPrice():number{
    return 25
}

function makeOrder(order :string):string | null{
    if(!order) return null;
    return order
}

function logChai() :void {
    console.log("CHAI IS READY");
    
}

function orderChai (type ?:string){

}
function orderChaai (type:string ="Masala"){

}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small" |"medium" | "large"
}) : number{
    return 4;

}