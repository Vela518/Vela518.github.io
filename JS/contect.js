var a = document.getElementById("123")
a.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert("已收到您的回復")
    a.reset();
})

var b = document.getElementById("456")
b.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert("已收到您的回復")
    b.reset();
})


let Account = document.getElementById("account");
Account.innerHTML = localStorage["AC"];
