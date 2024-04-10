// Objects in ts 

const User = {
    name : "deepesh",
    email : "deepesh@gmail.com",
    isActive : true
} 

function createUser({
    name : string , isPaid : boolean
}){} 
 let newUser = {name:"hitesh", isPaid:false}
createUser(newUser); 
  
// returning object 
function creatCourse():{name: string , price: number}{
    return {name : "alpha2.0" , price : 999};
} 

console.log(creatCourse());



export {}