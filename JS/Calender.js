/*
let btn=document.querySelector("#F1");
let infoModal=document.querySelector("#D1");
let close=document.querySelector("#close");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})


<a href="javascript: void(0)" onclick="handler()">
*/


let Account = document.getElementById("account");
Account.innerHTML = localStorage["AC"];

function getFood(date, d, f, t, p, m){
  x_d= document.getElementById(d);
  x_f= document.getElementById(f);
  x_t= document.getElementById(t);
  x_p= document.getElementById(p);
  x_m= document.getElementById(m);

  x_d.innerHTML = (JSON.parse(localStorage.getItem(date))[0]);
  x_f.innerHTML = (JSON.parse(localStorage.getItem(date))[1]);
  x_t.innerHTML = (JSON.parse(localStorage.getItem(date))[2]);
  x_p.innerHTML = ("未付款")
  x_m.innerHTML = "總金額: "+ (JSON.parse(localStorage.getItem(date))[3]);
}

function Clear(d, f, t, p, m){
  localStorage.removeItem("15")
  x_d= document.getElementById(d);
  x_f= document.getElementById(f);
  x_t= document.getElementById(t);
  x_p= document.getElementById(p);
  x_m= document.getElementById(m);

  x_d.innerHTML = "<br>";
  x_f.innerHTML = "<br>";
  x_t.innerHTML = "<br>";
  x_p.innerHTML = "<br>";
  x_m.innerHTML = "總金額: $";
}




let d15=document.querySelector("#D15");
function D15(){
  addEventListener("click", function(){
    if (!d15.open) {
      d15.showModal();
      getFood("15","D15_d","D15_f", "D15_t", "D15_p", "D15_m")}
  })
}
function Close_15(){
  addEventListener("click", function(){
    d15.close();
  })
}


let d16=document.querySelector("#D16");
function D16(){
  addEventListener("click", function(){
    if (!d16.open) {
      d16.showModal();
      getFood("16","D16_d","D16_f", "D16_t", "D16_p", "D16_m")}
  })
}
function Close_16(){
  addEventListener("click", function(){
    d16.close();
  })
}


let d19=document.querySelector("#D15");
function D19(){
  addEventListener("click", function(){
    if (!d19.open) {
      d19.showModal();
      getFood("19","D19_d","D19_f", "D19_t", "D19_p", "D19_m")}
  })
}
function Close_19(){
  addEventListener("click", function(){
    d19.close();
  })
}

let d20=document.querySelector("#D20");
function D20(){
  addEventListener("click", function(){
    if (!d20.open) {
      d20.showModal();
      getFood("20","D20_d","D20_f", "D20_t", "D20_p", "D20_m")}
  })
}
function Close_20(){
  addEventListener("click", function(){
    d20.close();
  })
}


let d21=document.querySelector("#D21");
function D21(){
  addEventListener("click", function(){
    if (!d21.open) {
      d21.showModal();
      getFood("21","D21_d","D21_f", "D21_t", "D21_p", "D21_m")}
  })
}
function Close_21(){
  addEventListener("click", function(){
    d21.close();
  })
}

let d22=document.querySelector("#D22");
function D22(){
  addEventListener("click", function(){
    if (!d22.open) {
      d22.showModal();
      getFood("22","D22_d","D22_f", "D22_t", "D22_p", "D22_m")}
  })
}
function Close_22(){
  addEventListener("click", function(){
    d22.close();
  })
}

let d23=document.querySelector("#D23");
function D23(){
  addEventListener("click", function(){
    if (!d23.open) {
      d23.showModal();
      getFood("23","D23_d","D23_f", "D23_t", "D23_p", "D23_m")}
  })
}
function Close_23(){
  addEventListener("click", function(){
    d23.close();
  })
}






