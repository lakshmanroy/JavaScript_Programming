# Project related to Dom

##project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

//solution code

# project 1

```javaScript
console.log("Lakshman")

const bottons = document.querySelectorAll('.button');
const body = document.querySelector('body');

bottons.forEach(function (botton) {
  console.log(botton);
  botton.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });

  
});

  ## project 3 solution code

 ```javaScript
 const clock=document.getElementById('clock')
// const clock=document.querySelector('clock')

let date=new Date();
console.log(date.toLocaleDateString());

setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML=date.toLocaleDateString();
},1000)

  


