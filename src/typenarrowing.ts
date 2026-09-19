function getChai(kind : string | number ){
    if(typeof kind === "string"){
        console.log(`Your chai flavour is ${kind}`)
    }
    else{
        console.log(`Your chai order number is ${kind}`)
    }
}

function serveChai (msg ? :string){
    if(msg){
        console.log(`Serving you ${msg} chai`)
    }
    else {
        return `serving default masala chai`

    }
}

function orderChai (size : "small" | "medium" | "large" | number){
    if(size==='small'){
        return `Serving you small chai`

    }
    if(size==='medium'){
        return `Serving you medium chai`

    }
    if(size==='large'){
        return `Serving you large chai`

    }
    return `chai order number is ${size}`
}


class KulhadChai {
    serve(){
        return `serving chai in kulhad`
    }

}
class CuttingChai {
    serve(){
        return `serving chai in Cutting glass`
    }

}
function serve (chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
    else{
        return chai.serve()
    }
}

type chaiOrder= {
    type: string,
    sugar:number
    
}
function isChaiOrder(obj : any ): obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !==null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
        
    )
}
function serveChaiOrder(order : chaiOrder | string){
    if(isChaiOrder(order)){
        console.log(`Serving you ${order.type} chai with ${order.sugar} sugar`)
    }
    else{
        console.log(`Serving you ${order} chai`)
    }
}

type MasalaChai={
    "type" : "masala",
    "spicelevel":number
}
type GingerChai={
    "type"  : "ginger",
    "amount":number
}
type ElaichiChai={
    "type"  : "elaichi",
    "aroma":number
}
type chai = MasalaChai | GingerChai | ElaichiChai
function MakeChai (order: chai ){
    if(order.type==='masala'){
        console.log(`Making masala chai with spice level ${order.spicelevel}`)      
    }
    if(order.type==='ginger'){
        console.log(`Making ginger chai with amount ${order.amount}`)      
    }
    if(order.type==='elaichi'){
        console.log(`Making elaichi chai with aroma ${order.aroma}`)      
    }
}
function brew( order : MasalaChai | GingerChai){
    if("spicelevel" in order){
        console.log(`Brewing masala chai with spice level ${order.spicelevel}`)      
    }
    if("amount" in order){
        console.log(`Brewing ginger chai with amount ${order.amount}`)      
    }
}

// function isStringarray(arr :unknown ) : arr is string []{

// }