let sub : number | string =10

let apiRequestStatus: "success" | "failure" | "pending" | "error" = "success"
// apiRequestStatus = "done"
//  error 

let airLineSeat : "aisle" | "window" | "middle"= "middle"


const orders  =['12','20','28','45']

let currentOrder : string | undefined

for(let order of orders){
    if(order ==='20'){
        currentOrder = order
        break;
    }
}
// currentOrder =42 
//  if defined explicitely then it will throw error but if we define it as any then it will not throw error
// thats the main issue here  above data type is any 
//  avooid any data type as much as possible because it will not give you any error and it will be very difficult to debug the code in future
console.log(currentOrder)