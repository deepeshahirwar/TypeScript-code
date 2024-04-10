"use strict";
// function addTwo(num:number){
//     return num+2; 
// } 
Object.defineProperty(exports, "__esModule", { value: true });
// const ans = addTwo(5); 
// console.log(ans); 
// second function 
// function getUpper(val : string){
//     return val.toUpperCase();
// }  
// console.log(getUpper("deepesh"));
// third function 
function signUpUser(name, email, isPaid) {
    var userData = { name: name, email: email, isPaid: isPaid };
    return "Welocome ".concat(name);
}
var response = signUpUser("deepesh", "abc@gmail.com", true);
console.log(response);
