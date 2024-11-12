const myNum= [1,2,3]

const myTotal=myNum.reduce(function (key,value){
    console.log(`key: ${key} and value :${myNum}`);
    
    return key+value
},0)

console.log(myTotal);

