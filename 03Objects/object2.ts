 
//  type User = {
//     name : string; 
//     email : string; 
//     isActive : boolean;
//  } 

//  function createUser(user : User): User {
//     return {name : "" , email : "" , isActive: false};
//  } 

//  const data = createUser({name : "" , email : "" , isActive: false}); 

//  console.log(data); 



// conrst  Ram  = {
//     name : "deepesh",
//     rollno : "19384793",
//     year : 3,
//     college : "tit - main",
//     branch : "CSE - AIML"
// } 

// console.log(Ram); 

 
// type User = {
//     readonly _id : string 
//     name : string 
//     email: string 
//     isActive: boolean
// } 

// let myUser : User = {
//     _id : "12345",
//     name : "deepesh", 
//     email : "abda@gmail.com",
//     isActive  : true

// } 

// myUser.email = "deepesh@gmail.com"
// myUSer._id = "87847"   it gives error , becuase it  is readonly 

 




type productDate = {
      productDate : string 
} 
type productPrice ={
    productPrice : string | number
} 

type productDetials = productDate & productPrice &{
    cvv : number
}


 
 