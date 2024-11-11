//if

const result= true;
const age=18;
// if(age===50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");  
// }
// console.log("excute");

//************************* */

// const score=200;
// if(score>100){
//     var power ="fly";
//     console.log(`user score: ${power}`); 
// }
// // console.log(`user power ${power}`);

//*************************** */
// const balance=1000;

// if(balance<500){
//     console.log("less than 500");  
// }
// else if(balance<750){
//     console.log("less than 750");   
// }
// else if(balance<900){
//     console.log("less than 900"); 
// }
// else{
//     console.log("less than 1200");
// }

//****************************** */

const userLoggedIn=true
const debitcard=true
const LoggedFromGoogle=false;
const loggedFromEmail=true;

if(userLoggedIn && debitcard){
    console.log("Allow to buy courses");  
}
if(LoggedFromGoogle || loggedFromEmail){
    console.log("user logged in");
    
}
