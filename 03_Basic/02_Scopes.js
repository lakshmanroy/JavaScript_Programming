var c=300
let a=200
if(true){
    let a=10
    const b=20;
    var c=30
    console.log("INNER:",a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

//**************************************** */

// function one(){
//     const username= "Lakshman"
//     function two(){
//         const website= "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
    
//     two()
// }
// one()

//********************************************** */

if(true){
    const username = "Lakshman"
    if(username==="Lakshman"){
        const website= "youtube"
        console.log(username+website);  
    }
    // console.log(website);
}
// console.log(username);

//********************************************* */


//***********interesting*****************8 */

function addone(nums){
     return nums+1
}
console.log(addone(5));


const addTwo= function(nums){
    return nums+2
}
console.log(addTwo(5));

