//primitive

// 7 types: String,Number,Boolean,null,undefind,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)

const bigNumber=33456789924n

//Reference (Non primitives)

// Arrays,Functions,Object

// const heros= ["saktiman","naagraj","doga"];
// let myObj= {
//     name: "Lakshman",
//     age: 22,
// }

// console.log(typeof bigNumber);
// console.log(typeof id);

// console.log(typeof anotherId);

//**********************stack and heap *************** */

let myYouTub="Dhanalakshmi srinivasan"

let another=myYouTub
another ="College of "
console.log(myYouTub);
console.log(another);

let userOne= {
    email: "lakshman@123",
    upi: "userUpi@ybl"
}

let userTwo= userOne

userTwo.email= "lakshman@gmail.com"

console.log(userOne.email);
console.log(userTwo.upi);





