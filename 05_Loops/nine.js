const myNum= [1,2,3]

const myTotal=myNum.reduce(function (key,value){
    // console.log(`key: ${key} and value :${myNum}`);
    
    return key+value
},0)

// console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        prices: 2999
    },
    {
        itemName: "py course",
        prices: 999
    },
    {
        itemName: "java course",
        prices: 299
    },
]
const pricesToPay= shoppingCart.reduce((acc,item) => acc+item.prices,0)
console.log(pricesToPay);

