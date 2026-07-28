function login() {
    const password = 
    document.getElementById("pass").value;
    if (password === "irankoodak") {
        window.location.href = "home.html";
    } else {
        alert("رمز عبور صحیح نیست")
    }
}