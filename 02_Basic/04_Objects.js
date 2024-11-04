// const a= new Object()

const list= {}
list.id= "123abc"
list.name= "Lakshman"
list.isLoggedIn=false

console.log(list);

const regularUser= {
    email : "Lakshman@gamil.com",
    fullname:{
         userFullName:{
              firstName:"Lakshman",
              lastName : "Kumar"
         }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const target= {1: "a",2: "b"}
const sourse= {3: "c",4: "d"}

const result= {target,sourse}
// console.log(result);

const obj= {...target,...sourse}
// console.log(obj);

// console.log(list);

// console.log(Object.keys(list));
// console.log(Object.values(list));
// console.log(Object.entries(list));

// console.log(list.hasOwnProperty('isLoggedIn'));

const course= {
     coursename : "js in hindi",
     price: "9999",
     surname: "Lakshman"
}

const {surname : Instructor}=course

console.log(Instructor);

// {
//      "name": "Lakshman",
//      "course" :"js in hindi",
//      "prices": "hindi"
// }


[

     {},
     {},
     {}
]









