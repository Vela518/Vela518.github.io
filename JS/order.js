
let Account = document.getElementById("account");
Account.innerHTML = localStorage["AC"];
if(!localStorage["AC"]){
  window.location.href = 'index.html';;
}
//localStorage.clear();
//localStorage.setItem("AC", Account.innerHTML);


function Recall(date, store, food, price){
  let d = new Date(document.getElementById(date).value);
  var foods = [];
  foods[0] = store;
  foods[1] = food;
  foods[2] = new Date();
  foods[3] = price;
  localStorage.setItem(d.getDate(), JSON.stringify(foods));
  //localStorage.setItem(d.getDate(), [store, food, price]);
}


let Body = document.querySelector("body")


let f1 = document.querySelector("#F1");
let d1 = document.querySelector("#D1");
let close1 = document.querySelector("#F1_Close");
f1.addEventListener("click", function(){
  d1.showModal();
  Body.style.overflow = "hidden";
})
close1.addEventListener("click", function(){
  d1.close();
  Body.style.overflow = "auto";
})


let f2 = document.querySelector("#F2");
let d2 = document.querySelector("#D2");
let close2 = document.querySelector("#F2_Close");
f2.addEventListener("click", function(){
  d2.showModal();
  Body.style.overflow = "hidden";
})
close2.addEventListener("click", function(){
  d2.close();
  Body.style.overflow = "auto";
})

let f3 = document.querySelector("#F3");
let d3 = document.querySelector("#D3");
let close3 = document.querySelector("#F3_Close");
f3.addEventListener("click", function(){
  d3.showModal();
  Body.style.overflow = "hidden";
})
close3.addEventListener("click", function(){
  d3.close();
  Body.style.overflow = "auto";
})

let f4 = document.querySelector("#F4");
let d4 = document.querySelector("#D4");
let close4 = document.querySelector("#F4_Close");
f4.addEventListener("click", function(){
  d4.showModal();
  Body.style.overflow = "hidden";
})
close4.addEventListener("click", function(){
  d4.close();
  Body.style.overflow = "auto";
})

let f5 = document.querySelector("#F5");
let d5 = document.querySelector("#D5");
let close5 = document.querySelector("#F5_Close");
f5.addEventListener("click", function(){
  d5.showModal();
  Body.style.overflow = "hidden";
})
close5.addEventListener("click", function(){
  d5.close();
  Body.style.overflow = "auto";
})


let f6 = document.querySelector("#F6");
let d6 = document.querySelector("#D6");
let close6 = document.querySelector("#F6_Close");
f6.addEventListener("click", function(){
  d6.showModal();
  Body.style.overflow = "hidden";
})
close6.addEventListener("click", function(){
  d6.close();
  Body.style.overflow = "auto";
})


let f7 = document.querySelector("#F7");
let d7 = document.querySelector("#D7");
let close7 = document.querySelector("#F7_Close");
f7.addEventListener("click", function(){
  d7.showModal();
  Body.style.overflow = "hidden";
})
close7.addEventListener("click", function(){
  d7.close();
  Body.style.overflow = "auto";
})


let f8 = document.querySelector("#F8");
let d8 = document.querySelector("#D8");
let close8 = document.querySelector("#F8_Close");
f8.addEventListener("click", function(){
  d8.showModal();
  Body.style.overflow = "hidden";
})
close8.addEventListener("click", function(){
  d8.close();
  Body.style.overflow = "auto";
})

let f9 = document.querySelector("#F9");
let d9 = document.querySelector("#D9");
let close9 = document.querySelector("#F9_Close");
f9.addEventListener("click", function(){
  d9.showModal();
  Body.style.overflow = "hidden";
})
close9.addEventListener("click", function(){
  d9.close();
  Body.style.overflow = "auto";
})




