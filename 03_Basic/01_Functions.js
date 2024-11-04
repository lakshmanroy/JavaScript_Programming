function Hello(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("Hii");
    
}
// Hello()

function addTwoNumber(number1,number2){
    // console.log(number1+number2);
    // let result= number1+number2
    // return result;

    return number1+number2
    
}
 const result = addTwoNumber(4,3)
//  console.log("result:",result);

function logginUser(username = "raju"){
    if(!username){
        console.log("please enter your user name");
        return
        
    }
    return `${username} just logged in`
}
// console.log(logginUser("Lakshman"));
// console.log(logginUser("Lakshman"));

function calculateCartPrice(val1,val2,...nums1){
    return nums1
}
// console.log(calculateCartPrice(200,300,400,500));

const user= {
    username: "Lakshman",
    price: 199
}
function handleObject(anyobject) {
     console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);
     
}
// handleObject(user)

handleObject({
    username: "Rohit",
    prices : 399
})

const myNewArray= [200,400,600,800];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));






 