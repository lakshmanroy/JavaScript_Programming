//singleton
//object.create

//object litrals

const mysym=Symbol("key1")

const JsUser= {
    name: "Lakshman",
    "full name":"Lakshman Roy",
    [mysym] : "mykey1",
    email : "Lakshman@gmail.com",
    age: 18,
    location: "Chennai",
    isLogged:false,
    lastLogginDay: ["monday",'stursday']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email= "lakshman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email= "lakshman@microsoft.com"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello world");
}
JsUser.greetingTwo=function(){
    console.log(`Hello user Lakshman,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




