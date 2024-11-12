//for

const arr= [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);  
}


const greating= "Lakshman kumar"
for (const greet of greating) {
    // console.log(`Each char is ${greet}`);
}

//map

const map=new Map()
map.set('IN',"India");
map.set('USA',"united state of America")
map.set('Fr',"france")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',value);
    
}


