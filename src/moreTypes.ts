let response : any ="42";

let numericLength : number  = (response as string).length

type Book={
    name :string

}

let bookString ='{"name":"the chai DIARy"}';
let bookObject= JSON.parse(bookString) as Book

console.log(bookObject.name)



const inputElement=document.getElementById("username") as HTMLInputElement  


let value : any
value="chai"
value=[1,2,3]
value=2.5
value.toUpperCase() 

// this will not throw error because value is of type any but it will throw error at runtime because value is number and number does not have toUpperCase method
//  no error at compile time  but at runtime TypeError: value.toUpperCase is not a function

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// newValue.toUpperCase(); 
// this will throw error because newValue is of type unknown and unknown type does not have toUpperCase method

if (typeof newValue === "string") {
    newValue.toUpperCase();
}


try{

}catch(error ){
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("error",error)
  
    

}


const data:unknown ="chai aur code"

const strData: string =data as string

type  Role = "admin" | "user" | "guest"
function redirectBasedOnRole(role :Role) : void{
    if(role === "admin"){
        console.log("redirecting to admin dashboard")
        return 
    }
    if(role === "user"){
        console.log("redirecting to user dashboard")
        return 
    }
    role;
    //  got never data type because we have already handled all the possible values of role and there is no other possible value left for role so it will be of type never
    // useful while handling error


}
function neverReturn () : never{
    while(true){}

}