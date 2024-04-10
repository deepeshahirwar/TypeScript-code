// function addTwo(num:number):number{
//     return num+2;  
//  return "hello"
// } 

// const ans = addTwo(5); 

// console.log(ans); 


// second function 


// function getUpper(val : string){
//     return val.toUpperCase();
// }  

// console.log(getUpper("deepesh"));


// third function 
function signUpUser(
    name : string , email: string ,
    isPaid : boolean
){  

    let userData = {name, email, isPaid}; 

    return `Welocome ${name}`; 
    

} 


const response = signUpUser("deepesh", "abc@gmail.com", true);
console.log(response);



 
 
export {}