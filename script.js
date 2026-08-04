

const button = 
document.getElementById("ok");


button.onclick = function () {

    let username = 
    document.getElementById("username").value 

    let password = 
    document.getElementById("password").value

    if (password === "12345"){

        localStorage.setItem("user",username);

        window.location.href = "home.html";

    }else{
        alert("رمز عبور اشتباه است داداش!!")
    }
}
