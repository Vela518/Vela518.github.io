//帳號判定

function Cg(x, y) {
    console.log(x);
    console.log(y);
}


function Set_AC() {
    let Account = document.getElementsByName("Account");
    let AC = Account[0].value;
    let Password = document.getElementsByName("Password");
    let PS = Password[0].value;
    let RE = document.getElementById("re");
    check_AC(AC, PS, RE)
    Cg(AC, PS);
}

function check_AC(x, y, z) {
    let AC_list = { 'S11055031': '123', 'S11055011': '111'};
    if (x != "") {
        if (AC_list.hasOwnProperty(x)) {
            if (y == AC_list[x]) {
                localStorage.setItem("AC", x);
                window.location.href = 'Calender.html';;
            }
            else {
                console.log("AC correct")
                z.innerHTML = "密碼錯誤!<br>"
            }
        }
        else {
            z.innerHTML = "帳號不存在<br>"
        }
    }
    else{
        z.innerHTML = "請輸入帳號<br>"
    }
}