const user= {
    username: "Lakshman",
    price:999,

    welcomeMessage:function(){
          console.log(`${this.username},welcome to website`);
          console.log(this);    
    }
}
user.welcomeMessage()
user.username= "sam"
user.welcomeMessage()

// console.log(this);

//***********************************not working****** */

// function chai(){
//     let username = "Lakshman"
//     console.log(this.username);
// }
// chai()

//************************************8 */